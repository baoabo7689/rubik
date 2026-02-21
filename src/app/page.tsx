'use client';

import { useEffect, useState } from 'react';
import RubikModel from '@/models/RubikModel';
import ColorPickerComponent from '@/components/ColorPickerComponent';
import Rubik3DComponent from '@/components/Rubik3DComponent';
import FlattenRubikComponent from '@/components/FlattenRubikComponent';
import ImportComponent from '@/components/ImportComponent';
import RotateComponent from '@/components/RotateComponent';
import type { RubikFaceName } from '@/constants/rubikFaces';
import { useLanguage } from '@/context/LanguageContext';
import { fromFlattenStyleString, toFlattenStyleString } from '@/utilities/ioUtilities';
import { rotateRubik } from '@/utilities/rotateUtilities';
import { createSolveActions } from '@/utilities/solveUtilities';
import { FaceGrid } from '@/utilities/renderUtilities';
import { formatRubikValidationErrors, validateRubik } from '@/utilities/validateUtilities';
import { createShuffleActions } from '@/utilities/shuffleUtilities';
import { RotationAction } from '@/constants/rotationActions';

const ROTATION_ANIMATION_MS = 220;

function toRubikColor(name: string): string {
  const normalized = name.toLowerCase();
  if (normalized === 'brown') return 'orange';
  return normalized;
}

export default function HomePage() {
  const { translations } = useLanguage();
  const [message, setMessage] = useState('');
  const [importError, setImportError] = useState('');
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [isManualMode, setIsManualMode] = useState(false);
  const [selectedRubikColor, setSelectedRubikColor] = useState('white');
  const [rubik, setRubik] = useState(() => RubikModel.createDefault());
  const [rotationQueue, setRotationQueue] = useState<RotationAction[]>([]);
  const [animatedAction, setAnimatedAction] = useState<RotationAction | null>(null);
  const [isRotateAnimating, setIsRotateAnimating] = useState(false);
  const [actionHistory, setActionHistory] = useState<RotationAction[]>([]);
  const [isAutoSolving, setIsAutoSolving] = useState(false);

  const initActions = ['default', 'import', 'manual'] as const;
  const functionalActions = ['shuffle', 'export', 'validate', 'solution', 'autoSolve'] as const;

  function resetRotationAnimationState() {
    setRotationQueue([]);
    setAnimatedAction(null);
    setIsRotateAnimating(false);
    setIsAutoSolving(false);
  }

  useEffect(() => {
    if (isRotateAnimating || animatedAction || rotationQueue.length === 0) {
      return;
    }

    setAnimatedAction(rotationQueue[0]);
    setIsRotateAnimating(true);
  }, [isRotateAnimating, animatedAction, rotationQueue]);

  useEffect(() => {
    if (!isRotateAnimating || !animatedAction) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setRubik((previousRubik) => {
        const nextRubik = rotateRubik(previousRubik, animatedAction);
        setMessage(toFlattenStyleString(nextRubik));
        return nextRubik;
      });

      setActionHistory((previousHistory) => {
        if (isAutoSolving) {
          return previousHistory.slice(0, -1);
        }

        return [...previousHistory, animatedAction];
      });

      setRotationQueue((previousQueue) => previousQueue.slice(1));
      setAnimatedAction(null);
      setIsRotateAnimating(false);
    }, ROTATION_ANIMATION_MS);

    return () => clearTimeout(timeoutId);
  }, [isRotateAnimating, animatedAction, isAutoSolving]);

  useEffect(() => {
    if (!isAutoSolving || isRotateAnimating || animatedAction || rotationQueue.length > 0) {
      return;
    }

    setIsAutoSolving(false);
  }, [isAutoSolving, isRotateAnimating, animatedAction, rotationQueue]);

  function handleImport(input: string) {
    try {
      const importedRubik = fromFlattenStyleString(input);
      resetRotationAnimationState();
      setRubik(importedRubik);
      setImportError('');
      setIsImportModalOpen(false);
      setMessage('');
      setActionHistory([]);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : translations.home.importFailed;
      setImportError(errorMessage);
    }
  }

  function handleFunctionalAction(action: (typeof functionalActions)[number]) {
    if (action === 'shuffle') {
      resetRotationAnimationState();
      const actions = createShuffleActions();
      setRotationQueue(actions);
      setMessage(actions.join(' '));
      setImportError('');
      return;
    }

    if (action === 'solution') {
      const { actions } = createSolveActions(rubik);
      setMessage(actions.map((action) => (action === 'Separate' ? '|' : action)).join(' '));
      setImportError('');
      return;
    }

    if (action === 'autoSolve') {
      resetRotationAnimationState();
      const { actions, afterRubik } = createSolveActions(rubik);
      setIsAutoSolving(true);
      setRotationQueue(actions);
      setMessage(actions.map((action) => (action === 'Separate' ? '|' : action)).join(' '));
      setImportError('');
      return;
    }

    if (action === 'export') {
      setMessage(toFlattenStyleString(rubik));
      setImportError('');
      return;
    }

    if (action === 'validate') {
      const validationResult = validateRubik(rubik);
      setMessage(formatRubikValidationErrors(validationResult, translations));
      setImportError('');
    }
  }

  function handleManualCellClick(faceName: RubikFaceName, rowIndex: number, cellIndex: number) {
    if (!isManualMode) return;

    resetRotationAnimationState();
    setActionHistory([]);

    setRubik((previousRubik) => {
      const targetFace = previousRubik.getFace(faceName);
      const updatedFace = {
        ...targetFace,
        cells: targetFace.cells.map((row, currentRowIndex) =>
          row.map((cell, currentCellIndex) => {
            if (currentRowIndex !== rowIndex || currentCellIndex !== cellIndex) {
              return cell;
            }

            return {
              ...cell,
              color: selectedRubikColor,
            };
          })
        ) as typeof targetFace.cells,
      };

      return new RubikModel({
        U: faceName === 'U' ? updatedFace : previousRubik.U,
        D: faceName === 'D' ? updatedFace : previousRubik.D,
        R: faceName === 'R' ? updatedFace : previousRubik.R,
        L: faceName === 'L' ? updatedFace : previousRubik.L,
        F: faceName === 'F' ? updatedFace : previousRubik.F,
        B: faceName === 'B' ? updatedFace : previousRubik.B,
      });
    });
  }

  function handleRotateAction(action: RotationAction) {
    setIsAutoSolving(false);
    setRotationQueue((previousQueue) => [...previousQueue, action]);
  }

  return (
    <main className="flex-1 bg-gradient-to-br from-blue-100 via-white to-pink-100">
      <section className="h-full w-full border border-gray-200 bg-white pl-6 shadow-xl">
        <div className="mx-auto flex w-full flex-col gap-3">
          <ColorPickerComponent
            onColorChange={(color) => {
              setSelectedRubikColor(toRubikColor(color.name));
              setIsManualMode(true);
            }}
          />

          <div className="flex w-full flex-col gap-3">
            <section className="w-full bg-white">
              <div className="flex items-center gap-4">
                <h2 className="section-label">{translations.home.init}</h2>
                <div className="flex gap-2">
                  {initActions.map((action) => (
                    <button
                      key={action}
                      type="button"
                      className={`btn-blue ${
                        action === 'manual' && isManualMode
                          ? 'border-green-600 bg-green-600 hover:bg-green-700'
                          : ''
                      }`}
                      onClick={() => {
                        if (action === 'default') {
                          resetRotationAnimationState();
                          setRubik(RubikModel.createDefault());
                          setMessage('');
                          setImportError('');
                          setActionHistory([]);
                          return;
                        }

                        if (action === 'import') {
                          setImportError('');
                          setIsImportModalOpen(true);
                          return;
                        }

                        if (action === 'manual') {
                          setIsManualMode((previousValue) => !previousValue);
                        }
                      }}
                    >
                      {translations.home.actions[action]}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className="w-full bg-white">
              <div className="flex items-center gap-4">
                <h2 className="section-label">{translations.home.functional}</h2>
                <div className="flex gap-2">
                  {functionalActions.map((action) => (
                    <button
                      key={action}
                      type="button"
                      className="btn-blue"
                      onClick={() => handleFunctionalAction(action)}
                    >
                      {translations.home.actions[action]}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <RotateComponent translations={translations} onRotateAction={handleRotateAction} />

            <section className="w-full bg-white">
              <div className="flex flex-col gap-6">
                <div className="flex flex-nowrap items-start gap-10 overflow-x-auto pb-2">
                  <Rubik3DComponent
                    front={rubik.F}
                    right={rubik.R}
                    up={rubik.U}
                    left={rubik.L}
                    back={rubik.B}
                    down={rubik.D}
                    animatedAction={animatedAction}
                    isAnimating={isRotateAnimating}
                  />

                  <FlattenRubikComponent
                    FaceGrid={FaceGrid}
                    up={rubik.U}
                    back={rubik.B}
                    left={rubik.L}
                    front={rubik.F}
                    right={rubik.R}
                    down={rubik.D}
                    isManualMode={isManualMode}
                    onCellClick={handleManualCellClick}
                  />

                  <div className="w-[32rem] flex-shrink-0">
                    <label
                      htmlFor="rubik-message-preview"
                      className="mb-2 block text-sm font-semibold text-gray-800"
                    >
                      {translations.home.message}
                    </label>
                    <textarea
                      id="rubik-message-preview"
                      rows={6}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      className="h-[20.5rem] w-full resize-none rounded-md border border-gray-300 px-3 py-2 font-mono text-sm text-gray-900 outline-none ring-blue-500 focus:ring-2"
                      placeholder={translations.home.messagePlaceholder}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      <ImportComponent
        isOpen={isImportModalOpen}
        value={message}
        onImport={handleImport}
        onClose={() => setIsImportModalOpen(false)}
        errorMessage={importError}
      />
    </main>
  );
}

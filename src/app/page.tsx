'use client';

import { useState } from 'react';
import RubikModel from '@/models/RubikModel';
import ColorPickerComponent from '@/components/ColorPickerComponent';
import Rubik3DComponent from '@/components/Rubik3DComponent';
import FlattenRubikComponent from '@/components/FlattenRubikComponent';
import ImportComponent from '@/components/ImportComponent';
import { rotationActions, rotationActionDescriptionKeys } from '@/constants/rotationActions';
import type { RubikFaceName } from '@/constants/rubikFaces';
import { useLanguage } from '@/context/LanguageContext';
import { fromFlattenStyleString, toFlattenStyleString } from '@/utilities/ioUtilities';
import { rotateRubik, type RotationAction } from '@/utilities/rotateUtilities';
import { FaceGrid } from '@/utilities/renderUtilities';

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

  const initActions = ['default', 'import', 'manual'] as const;
  const functionalActions = ['shuffle', 'export', 'validate', 'autoSolve', 'solveNext'] as const;

  function handleImport(input: string) {
    try {
      const importedRubik = fromFlattenStyleString(input);
      setRubik(importedRubik);
      setImportError('');
      setIsImportModalOpen(false);
      setMessage('');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Import failed.';
      setImportError(errorMessage);
    }
  }

  function handleFunctionalAction(action: (typeof functionalActions)[number]) {
    if (action === 'export') {
      setMessage(toFlattenStyleString(rubik));
      setImportError('');
    }
  }

  function handleManualCellClick(faceName: RubikFaceName, rowIndex: number, cellIndex: number) {
    if (!isManualMode) return;

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
    setRubik((previousRubik) => {
      const nextRubik = rotateRubik(previousRubik, action);
      setMessage(toFlattenStyleString(nextRubik));
      return nextRubik;
    });
  }

  return (
    <main className="flex-1 bg-gradient-to-br from-blue-100 via-white to-pink-100">
      <section className="h-full w-full border border-gray-200 bg-white pl-6 shadow-xl">
        <div className="mx-auto flex w-full flex-col gap-4">
          <ColorPickerComponent
            onColorChange={(color) => {
              setSelectedRubikColor(toRubikColor(color.name));
              setIsManualMode(true);
            }}
          />

          <div className="flex w-full flex-col gap-4">
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
                          setRubik(RubikModel.createDefault());
                          setMessage('');
                          setImportError('');
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

            <section className="w-full bg-white">
              <div className="flex items-center gap-4">
                <h2 className="section-label">{translations.home.actions.rotate}</h2>
                <div className="flex gap-2">
                  {rotationActions.map((action, index) => {
                    const descriptionKey = rotationActionDescriptionKeys[action];
                    const description =
                      translations.home.rotationDescriptions[descriptionKey] || action;

                    return (
                      <button
                        key={`${action}-${index}`}
                        type="button"
                        className="btn-blue-small"
                        title={description}
                        aria-label={`${action}: ${description}`}
                        onClick={() => handleRotateAction(action)}
                      >
                        {action}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>

            <section className="w-full bg-white pt-2">
              <div className="flex flex-col gap-6">
                <div className="flex flex-nowrap items-start gap-10 overflow-x-auto pb-2">
                  <Rubik3DComponent
                    FaceGrid={FaceGrid}
                    front={rubik.F}
                    right={rubik.R}
                    up={rubik.U}
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
                      Message
                    </label>
                    <textarea
                      id="rubik-message-preview"
                      rows={6}
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      className="h-[20.5rem] w-full resize-none rounded-md border border-gray-300 px-3 py-2 font-mono text-sm text-gray-900 outline-none ring-blue-500 focus:ring-2"
                      placeholder="Message will appear here..."
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

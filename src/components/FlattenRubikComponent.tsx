'use client';

import type { RubikFaceModel } from '@/models/RubikFaceModel';
import { useLanguage } from '@/context/LanguageContext';

interface FlattenRubikComponentProps {
  FaceGrid: ({
    face,
    showLabel,
    isEditable,
    onCellClick,
  }: {
    face: RubikFaceModel;
    showLabel?: boolean;
    isEditable?: boolean;
    onCellClick?: (faceName: RubikFaceModel['name'], rowIndex: number, cellIndex: number) => void;
  }) => JSX.Element;
  up: RubikFaceModel;
  back: RubikFaceModel;
  left: RubikFaceModel;
  front: RubikFaceModel;
  right: RubikFaceModel;
  down: RubikFaceModel;
  isManualMode?: boolean;
  onCellClick?: (faceName: RubikFaceModel['name'], rowIndex: number, cellIndex: number) => void;
}

export default function FlattenRubikComponent({
  FaceGrid,
  up,
  back,
  left,
  front,
  right,
  down,
  isManualMode = false,
  onCellClick,
}: FlattenRubikComponentProps) {
  const { translations } = useLanguage();

  return (
    <div className="flex flex-shrink-0 flex-col gap-3">
      <h3 className="text-sm font-semibold text-gray-800">{translations.home.flattenLabel}</h3>
      <div className="grid h-[20.5rem] grid-cols-4 gap-2 rounded-md border border-gray-200 bg-gray-50 p-3">
        <div />
        <div />
        <FaceGrid face={up} showLabel={false} isEditable={isManualMode} onCellClick={onCellClick} />
        <div />

        <FaceGrid
          face={back}
          showLabel={false}
          isEditable={isManualMode}
          onCellClick={onCellClick}
        />
        <FaceGrid
          face={left}
          showLabel={false}
          isEditable={isManualMode}
          onCellClick={onCellClick}
        />
        <FaceGrid
          face={front}
          showLabel={false}
          isEditable={isManualMode}
          onCellClick={onCellClick}
        />
        <FaceGrid
          face={right}
          showLabel={false}
          isEditable={isManualMode}
          onCellClick={onCellClick}
        />

        <div />
        <div />
        <FaceGrid
          face={down}
          showLabel={false}
          isEditable={isManualMode}
          onCellClick={onCellClick}
        />
        <div />
      </div>
    </div>
  );
}

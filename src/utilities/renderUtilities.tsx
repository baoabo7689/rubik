import type { RubikCellModel } from '@/models/RubikCellModel';
import type { RubikFaceModel } from '@/models/RubikFaceModel';

type FaceCellClickHandler = (
  faceName: RubikFaceModel['name'],
  rowIndex: number,
  cellIndex: number
) => void;

export const colorClassMap: Record<string, string> = {
  white: 'bg-white',
  yellow: 'bg-yellow-300',
  red: 'bg-red-500',
  orange: 'bg-orange-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
};

export function getCellColorClass(cell: RubikCellModel): string {
  if (!cell.color) return 'bg-gray-200';
  return colorClassMap[cell.color] ?? 'bg-gray-200';
}

export function renderFaceCells(
  face: RubikFaceModel,
  isEditable = false,
  onCellClick?: FaceCellClickHandler
) {
  const rows = face.cells;

  return rows.flatMap((row, rowIndex) => {
    const cells = row;

    return cells.map((cell, cellIndex) => (
      <button
        key={`${face.name}-${rowIndex}-${cellIndex}`}
        type="button"
        onClick={() => {
          if (!isEditable || !onCellClick) return;

          onCellClick(face.name, rowIndex, cellIndex);
        }}
        className={`h-8 w-8 flex-none border border-gray-800 ${getCellColorClass(cell)} ${isEditable ? 'cursor-pointer' : 'cursor-default'}`}
        aria-label={`${face.name}-${rowIndex}-${cellIndex}`}
      />
    ));
  });
}

export function FaceGrid({
  face,
  showLabel = true,
  isEditable = false,
  onCellClick,
}: {
  face: RubikFaceModel;
  showLabel?: boolean;
  isEditable?: boolean;
  onCellClick?: FaceCellClickHandler;
}) {
  return (
    <div className="inline-flex w-max shrink-0 flex-col items-center gap-1">
      <div className="grid grid-cols-3 border border-gray-800 bg-gray-50">
        {renderFaceCells(face, isEditable, onCellClick)}
      </div>
      {showLabel && <span className="text-xs font-semibold text-gray-700">{face.name}</span>}
    </div>
  );
}

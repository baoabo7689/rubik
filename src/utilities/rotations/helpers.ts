import type { RubikCellModel } from '@/models/RubikCellModel';
import type { RubikFaceModel } from '@/models/RubikFaceModel';

export function cloneCell(cell: RubikCellModel): RubikCellModel {
  return { color: cell.color };
}

export function rotateFaceClockwise(face: RubikFaceModel): RubikFaceModel {
  const source = face.cells;

  return {
    name: face.name,
    cells: [
      [cloneCell(source[2][0]), cloneCell(source[1][0]), cloneCell(source[0][0])],
      [cloneCell(source[2][1]), cloneCell(source[1][1]), cloneCell(source[0][1])],
      [cloneCell(source[2][2]), cloneCell(source[1][2]), cloneCell(source[0][2])],
    ],
  };
}

export function getRow(face: RubikFaceModel, rowIndex: number): RubikCellModel[] {
  return face.cells[rowIndex].map((cell) => cloneCell(cell));
}

export function setRow(face: RubikFaceModel, rowIndex: number, values: RubikCellModel[]) {
  face.cells[rowIndex][0] = cloneCell(values[0]);
  face.cells[rowIndex][1] = cloneCell(values[1]);
  face.cells[rowIndex][2] = cloneCell(values[2]);
}

export function getCol(face: RubikFaceModel, colIndex: number): RubikCellModel[] {
  return [
    cloneCell(face.cells[0][colIndex]),
    cloneCell(face.cells[1][colIndex]),
    cloneCell(face.cells[2][colIndex]),
  ];
}

export function setCol(face: RubikFaceModel, colIndex: number, values: RubikCellModel[]) {
  face.cells[0][colIndex] = cloneCell(values[0]);
  face.cells[1][colIndex] = cloneCell(values[1]);
  face.cells[2][colIndex] = cloneCell(values[2]);
}

export function reversed(values: RubikCellModel[]): RubikCellModel[] {
  return [...values].reverse().map((cell) => cloneCell(cell));
}

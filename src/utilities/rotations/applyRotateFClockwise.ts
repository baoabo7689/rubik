import {
  getCol,
  getRow,
  reversed,
  rotateFaceClockwise,
  setCol,
  setRow,
} from '@/utilities/rotations/helpers';
import type { RubikFaces } from '@/utilities/rotations/types';

export function applyRotateFClockwise(faces: RubikFaces) {
  // F: U -> R -> D -> L -> U
  faces.F = rotateFaceClockwise(faces.F);
  const up = getRow(faces.U, 2);
  const right = getCol(faces.R, 0);
  const down = getRow(faces.D, 0);
  const left = getCol(faces.L, 2);

  setRow(faces.U, 2, reversed(left));
  setCol(faces.R, 0, up);
  setRow(faces.D, 0, reversed(right));
  setCol(faces.L, 2, down);
}

export function applyRotateFCounterClockwise(faces: RubikFaces) {
  // rF: U -> L -> D -> R -> U
  applyRotateFClockwise(faces);
  applyRotateFClockwise(faces);
  applyRotateFClockwise(faces);
}

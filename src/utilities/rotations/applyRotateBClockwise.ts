import {
  getCol,
  getRow,
  reversed,
  rotateFaceClockwise,
  setCol,
  setRow,
} from '@/utilities/rotations/helpers';
import type { RubikFaces } from '@/utilities/rotations/types';

export function applyRotateBClockwise(faces: RubikFaces) {
  // B: U -> L -> D -> R -> U
  faces.B = rotateFaceClockwise(faces.B);
  const up = getRow(faces.U, 0);
  const right = getCol(faces.R, 2);
  const down = getRow(faces.D, 2);
  const left = getCol(faces.L, 0);

  setRow(faces.U, 0, right);
  setCol(faces.R, 2, reversed(down));
  setRow(faces.D, 2, left);
  setCol(faces.L, 0, reversed(up));
}

export function applyRotateBCounterClockwise(faces: RubikFaces) {
  // rB: U -> R -> D -> L -> U
  applyRotateBClockwise(faces);
  applyRotateBClockwise(faces);
  applyRotateBClockwise(faces);
}

import { getRow, rotateFaceClockwise, setRow } from '@/utilities/rotations/helpers';
import type { RubikFaces } from '@/utilities/rotations/types';

export function applyRotateUClockwise(faces: RubikFaces) {
  // U: R -> F -> L -> B -> R
  faces.U = rotateFaceClockwise(faces.U);
  const front = getRow(faces.F, 0);
  const right = getRow(faces.R, 0);
  const back = getRow(faces.B, 0);
  const left = getRow(faces.L, 0);

  setRow(faces.F, 0, right);
  setRow(faces.R, 0, back);
  setRow(faces.B, 0, left);
  setRow(faces.L, 0, front);
}

export function applyRotateUCounterClockwise(faces: RubikFaces) {
  // rU: R -> B -> L -> F -> R
  applyRotateUClockwise(faces);
  applyRotateUClockwise(faces);
  applyRotateUClockwise(faces);
}

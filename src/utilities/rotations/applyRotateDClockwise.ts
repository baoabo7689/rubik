import { getRow, rotateFaceClockwise, setRow } from '@/utilities/rotations/helpers';
import type { RubikFaces } from '@/utilities/rotations/types';

export function applyRotateDClockwise(faces: RubikFaces) {
  // D: L -> F -> R -> B -> L
  faces.D = rotateFaceClockwise(faces.D);
  const front = getRow(faces.F, 2);
  const right = getRow(faces.R, 2);
  const back = getRow(faces.B, 2);
  const left = getRow(faces.L, 2);

  setRow(faces.F, 2, left);
  setRow(faces.R, 2, front);
  setRow(faces.B, 2, right);
  setRow(faces.L, 2, back);
}

export function applyRotateDCounterClockwise(faces: RubikFaces) {
  // rD: L -> B -> R -> F -> L
  applyRotateDClockwise(faces);
  applyRotateDClockwise(faces);
  applyRotateDClockwise(faces);
}

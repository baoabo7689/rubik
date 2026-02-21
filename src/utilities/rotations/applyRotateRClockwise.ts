import { getCol, reversed, rotateFaceClockwise, setCol } from '@/utilities/rotations/helpers';
import type { RubikFaces } from '@/utilities/rotations/types';

export function applyRotateRClockwise(faces: RubikFaces) {
  // R: U -> B -> D -> F -> U
  faces.R = rotateFaceClockwise(faces.R);
  const up = getCol(faces.U, 2);
  const front = getCol(faces.F, 2);
  const down = getCol(faces.D, 2);
  const back = getCol(faces.B, 0);

  setCol(faces.U, 2, front);
  setCol(faces.B, 0, reversed(up));
  setCol(faces.D, 2, reversed(back));
  setCol(faces.F, 2, down);
}

export function applyRotateRCounterClockwise(faces: RubikFaces) {
  // rR: U -> F -> D -> B -> U
  applyRotateRClockwise(faces);
  applyRotateRClockwise(faces);
  applyRotateRClockwise(faces);
}

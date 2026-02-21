import { getCol, reversed, rotateFaceClockwise, setCol } from '@/utilities/rotations/helpers';
import type { RubikFaces } from '@/utilities/rotations/types';

export function applyRotateLClockwise(faces: RubikFaces) {
  // L: U -> F -> D -> B -> U
  faces.L = rotateFaceClockwise(faces.L);
  const up = getCol(faces.U, 0);
  const front = getCol(faces.F, 0);
  const down = getCol(faces.D, 0);
  const back = getCol(faces.B, 2);

  setCol(faces.U, 0, reversed(back));
  setCol(faces.F, 0, up);
  setCol(faces.D, 0, front);
  setCol(faces.B, 2, reversed(down));
}

export function applyRotateLCounterClockwise(faces: RubikFaces) {
  // rL: U -> B -> D -> F -> U
  applyRotateLClockwise(faces);
  applyRotateLClockwise(faces);
  applyRotateLClockwise(faces);
}

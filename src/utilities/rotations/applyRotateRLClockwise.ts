import { getCol, reversed, setCol } from '@/utilities/rotations/helpers';
import { applyRotateLCounterClockwise } from '@/utilities/rotations/applyRotateLClockwise';
import { applyRotateRClockwise } from '@/utilities/rotations/applyRotateRClockwise';
import type { RubikFaces } from '@/utilities/rotations/types';

export function applyRotateRLClockwise(faces: RubikFaces) {
  applyRotateRClockwise(faces);
  applyRotateLCounterClockwise(faces);

  const upMiddle = getCol(faces.U, 1);
  const frontMiddle = getCol(faces.F, 1);
  const downMiddle = getCol(faces.D, 1);
  const backMiddle = getCol(faces.B, 1);

  setCol(faces.U, 1, frontMiddle);
  setCol(faces.B, 1, reversed(upMiddle));
  setCol(faces.D, 1, reversed(backMiddle));
  setCol(faces.F, 1, downMiddle);
}

export function applyRotateRLCounterClockwise(faces: RubikFaces) {
  applyRotateRLClockwise(faces);
  applyRotateRLClockwise(faces);
  applyRotateRLClockwise(faces);
}

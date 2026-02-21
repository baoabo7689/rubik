import { getCol, getRow, reversed, setCol, setRow } from '@/utilities/rotations/helpers';
import { applyRotateBCounterClockwise } from '@/utilities/rotations/applyRotateBClockwise';
import { applyRotateFClockwise } from '@/utilities/rotations/applyRotateFClockwise';
import type { RubikFaces } from '@/utilities/rotations/types';

export function applyRotateFBClockwise(faces: RubikFaces) {
  applyRotateFClockwise(faces);
  applyRotateBCounterClockwise(faces);

  const upMiddle = getRow(faces.U, 1);
  const rightMiddle = getCol(faces.R, 1);
  const downMiddle = getRow(faces.D, 1);
  const leftMiddle = getCol(faces.L, 1);

  setRow(faces.U, 1, reversed(leftMiddle));
  setCol(faces.R, 1, upMiddle);
  setRow(faces.D, 1, reversed(rightMiddle));
  setCol(faces.L, 1, downMiddle);
}

export function applyRotateFBCounterClockwise(faces: RubikFaces) {
  applyRotateFBClockwise(faces);
  applyRotateFBClockwise(faces);
  applyRotateFBClockwise(faces);
}

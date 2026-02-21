import { getRow, setRow } from '@/utilities/rotations/helpers';
import { applyRotateDCounterClockwise } from '@/utilities/rotations/applyRotateDClockwise';
import { applyRotateUClockwise } from '@/utilities/rotations/applyRotateUClockwise';
import type { RubikFaces } from '@/utilities/rotations/types';

export function applyRotateUDClockwise(faces: RubikFaces) {
  applyRotateUClockwise(faces);
  applyRotateDCounterClockwise(faces);

  const frontMiddle = getRow(faces.F, 1);
  const rightMiddle = getRow(faces.R, 1);
  const backMiddle = getRow(faces.B, 1);
  const leftMiddle = getRow(faces.L, 1);

  setRow(faces.F, 1, rightMiddle);
  setRow(faces.R, 1, backMiddle);
  setRow(faces.B, 1, leftMiddle);
  setRow(faces.L, 1, frontMiddle);
}

export function applyRotateUDCounterClockwise(faces: RubikFaces) {
  applyRotateUDClockwise(faces);
  applyRotateUDClockwise(faces);
  applyRotateUDClockwise(faces);
}

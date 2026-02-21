import { RotationAction } from '@/constants/rotationActions';
import RubikModel from '@/models/RubikModel';
import { rotateRubikByActions } from '../rotateUtilities';
import { toFlattenStyleString } from '../ioUtilities';
import { solveUFR } from './step7_1_UFR';
import { solveURB } from './step7_2_URB';
import { solveUBL } from './step7_3_UBL';
import { solveULF } from './step7_4_ULF';

/**
 * Solve the last layer orientation corners (seventh step of CFOP method)
 * @param rubik - The current Rubik's cube state
 * @returns Array of rotation actions to complete the last layer orientation corners
 */
export function solveLastLayerOrientCorners(rubik: RubikModel): {
  actions: RotationAction[];
  afterRubik: RubikModel;
} {
  console.log('Before Step 7:' + toFlattenStyleString(rubik));

  const actions: RotationAction[] = [];
  let afterRubik = rubik;

  const ufrActions = [...solveUFR(afterRubik), 'U'] as RotationAction[];
  const afterUFR = rotateRubikByActions(afterRubik, ufrActions);
  actions.push(...ufrActions);

  const urbActions = [...solveURB(afterUFR), 'U'] as RotationAction[];
  const afterURB = rotateRubikByActions(afterUFR, urbActions);
  actions.push(...urbActions);

  const ublActions = [...solveUBL(afterURB), 'U'] as RotationAction[];
  const afterUBL = rotateRubikByActions(afterURB, ublActions);
  actions.push(...ublActions);

  const ulfActions = [...solveULF(afterUBL), 'U'] as RotationAction[];
  const afterULF = rotateRubikByActions(afterUBL, ulfActions);
  actions.push(...ulfActions);

  return {
    actions: actions,
    afterRubik: afterULF,
  };
}

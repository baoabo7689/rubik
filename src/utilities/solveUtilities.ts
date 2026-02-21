import type RubikModel from '@/models/RubikModel';
import { RotationAction } from '@/constants/rotationActions';
import { solveUpCross } from './solutions/step1_upCross';
import { solveUpCorners } from './solutions/step2_upConners';
import { solveMiddleLayer } from './solutions/step3_middleLayer';
import { solveLastLayerCross } from './solutions/step4_upCross';
import { solveLastLayerEdges } from './solutions/step5_upEdges';
import { solveLastLayerPositionCorners } from './solutions/step6_positionCorners';
import { solveLastLayerOrientCorners } from './solutions/step7_orientCorners';

export function createSolveActions(rubik: RubikModel): {
  actions: RotationAction[];
  afterRubik: RubikModel;
} {
  const actions: RotationAction[] = [];

  // Step 1: Solve the up cross
  const { actions: upCrossActions, afterRubik: afterUpCross } = solveUpCross(rubik);
  actions.push(...upCrossActions);

  // Step 2: Solve the up corners
  const { actions: upCornersActions, afterRubik: afterUpCorners } = solveUpCorners(afterUpCross);
  actions.push(...upCornersActions);

  // Step 3: Solve the middle layer
  const { actions: middleLayerActions, afterRubik: afterMiddleLayer } =
    solveMiddleLayer(afterUpCorners);
  actions.push(...middleLayerActions);

  // Step 4: Solve the last layer cross
  const { actions: lastLayerCrossActions, afterRubik: afterLastLayerCross } =
    solveLastLayerCross(afterMiddleLayer);
  actions.push(...lastLayerCrossActions);

  // Step 5: Solve the last layer edges
  const { actions: lastLayerEdgesActions, afterRubik: afterLastLayerEdges } =
    solveLastLayerEdges(afterLastLayerCross);
  actions.push(...lastLayerEdgesActions);

  // Step 6: Solve the last layer position corners
  const { actions: lastLayerPositionCornersActions, afterRubik: afterLastLayerPositionCorners } =
    solveLastLayerPositionCorners(afterLastLayerEdges);
  actions.push(...lastLayerPositionCornersActions);

  // Step 7: Solve the last layer orientation corners
  const { actions: lastLayerOrientCornersActions, afterRubik: afterLastLayerOrientCorners } =
    solveLastLayerOrientCorners(afterLastLayerPositionCorners);
  actions.push(...lastLayerOrientCornersActions);

  return { actions, afterRubik: afterLastLayerOrientCorners };
}

import type RubikModel from '@/models/RubikModel';
import { RotationAction, rotationActions } from '@/constants/rotationActions';
import { rotateRubikByActions } from '@/utilities/rotateUtilities';

const excludedShuffleActions: RotationAction[] = ['UD', 'RL', 'FB', 'rUD', 'rRL', 'rFB'];
const shuffleRotationActions = rotationActions.filter(
  (action) => !excludedShuffleActions.includes(action)
);

export interface ShuffleOptions {
  moveCount?: number;
  avoidSameFaceConsecutive?: boolean;
  avoidImmediateInverse?: boolean;
  random?: () => number;
}

export interface ShuffleResult {
  rubik: RubikModel;
  actions: RotationAction[];
}

function faceOf(action: RotationAction): string {
  if (action.startsWith('r')) {
    return action.slice(1);
  }

  return action;
}

function isInversePair(previousAction: RotationAction, nextAction: RotationAction): boolean {
  const previousFace = faceOf(previousAction);
  const nextFace = faceOf(nextAction);

  if (previousFace !== nextFace) {
    return false;
  }

  return previousAction.startsWith('r') !== nextAction.startsWith('r');
}

function pickRandomAction(random: () => number): RotationAction {
  const actionIndex = Math.floor(random() * shuffleRotationActions.length);
  return shuffleRotationActions[actionIndex];
}

export function createShuffleActions(options: ShuffleOptions = {}): RotationAction[] {
  const {
    moveCount = 20,
    avoidSameFaceConsecutive = true,
    avoidImmediateInverse = true,
    random = Math.random,
  } = options;

  if (moveCount <= 0) {
    return [];
  }

  const actions: RotationAction[] = [];

  while (actions.length < moveCount) {
    const candidateAction = pickRandomAction(random);
    const previousAction = actions[actions.length - 1];

    if (!previousAction) {
      actions.push(candidateAction);
      continue;
    }

    if (avoidSameFaceConsecutive && faceOf(previousAction) === faceOf(candidateAction)) {
      continue;
    }

    if (avoidImmediateInverse && isInversePair(previousAction, candidateAction)) {
      continue;
    }

    actions.push(candidateAction);
  }

  return actions;
}

export function shuffleRubik(rubik: RubikModel, options: ShuffleOptions = {}): ShuffleResult {
  const actions = createShuffleActions(options);
  const shuffledRubik = rotateRubikByActions(rubik, actions);

  return {
    rubik: shuffledRubik,
    actions,
  };
}

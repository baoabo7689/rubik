import { createDefault } from './RubikFaceModel';
import type { RubikFaceModel } from './RubikFaceModel';
import type { RubikFaceName } from '../constants/rubikFaces';

type RubikFaces = Record<RubikFaceName, RubikFaceModel>;

function createDefaultFaces(): RubikFaces {
  return {
    U: createDefault('U', 'white'),
    D: createDefault('D', 'yellow'),
    R: createDefault('R', 'red'),
    L: createDefault('L', 'orange'),
    F: createDefault('F', 'green'),
    B: createDefault('B', 'blue'),
  };
}

export default class RubikModel {
  public readonly U: RubikFaceModel;
  public readonly D: RubikFaceModel;
  public readonly R: RubikFaceModel;
  public readonly L: RubikFaceModel;
  public readonly F: RubikFaceModel;
  public readonly B: RubikFaceModel;

  constructor(faces: Partial<RubikFaces> = {}) {
    const defaults = createDefaultFaces();

    this.U = faces.U ?? defaults.U;
    this.D = faces.D ?? defaults.D;
    this.R = faces.R ?? defaults.R;
    this.L = faces.L ?? defaults.L;
    this.F = faces.F ?? defaults.F;
    this.B = faces.B ?? defaults.B;
  }

  public getFace(face: RubikFaceName): RubikFaceModel {
    return this[face];
  }

  public static createDefault(): RubikModel {
    return new RubikModel();
  }
}

import type { RubikCellModel } from './RubikCellModel';
import * as RubikCellModelFactory from './RubikCellModel';
import type { RubikFaceName } from '../constants/rubikFaces';

export type RubikFaceRows = [
  [RubikCellModel, RubikCellModel, RubikCellModel],
  [RubikCellModel, RubikCellModel, RubikCellModel],
  [RubikCellModel, RubikCellModel, RubikCellModel],
];

export interface RubikFaceModel {
  name: RubikFaceName;
  cells: RubikFaceRows;
}

export function createDefault(name: RubikFaceName, color: string): RubikFaceModel {
  return {
    name,
    cells: [
      [
        RubikCellModelFactory.createDefault(color),
        RubikCellModelFactory.createDefault(color),
        RubikCellModelFactory.createDefault(color),
      ],
      [
        RubikCellModelFactory.createDefault(color),
        RubikCellModelFactory.createDefault(color),
        RubikCellModelFactory.createDefault(color),
      ],
      [
        RubikCellModelFactory.createDefault(color),
        RubikCellModelFactory.createDefault(color),
        RubikCellModelFactory.createDefault(color),
      ],
    ],
  };
}

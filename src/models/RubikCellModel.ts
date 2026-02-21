export interface RubikCellModel {
  color: string | null;
}

export function createDefault(color: string | null = null): RubikCellModel {
  return { color };
}

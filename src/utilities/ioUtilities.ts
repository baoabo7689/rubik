import type RubikModel from '@/models/RubikModel';
import type { RubikFaceModel } from '@/models/RubikFaceModel';
import RubikModelClass from '@/models/RubikModel';
import type { RubikCellModel } from '@/models/RubikCellModel';

function normalizeBlock(value: string): string {
  return value.toUpperCase().padEnd(3, '_').slice(0, 3);
}

function faceToLines(face: RubikFaceModel): string[] {
  const rows = face.cells;

  return rows.map((row) => {
    const cells = row;

    return cells
      .map((cell) => {
        if (!cell.color) return '_';

        return cell.color[0].toUpperCase();
      })
      .join('')
      .padEnd(3, '_')
      .slice(0, 3);
  });
}

const colorByCode: Record<string, string | null> = {
  _: null,
  W: 'white',
  Y: 'yellow',
  R: 'red',
  O: 'orange',
  G: 'green',
  B: 'blue',
};

function toCell(code: string): RubikCellModel {
  const normalized = code.toUpperCase();
  if (!(normalized in colorByCode)) {
    throw new Error(`Unsupported color code: ${code}`);
  }

  return { color: colorByCode[normalized] };
}

function blockToCells(block: string): [RubikCellModel, RubikCellModel, RubikCellModel] {
  const normalized = normalizeBlock(block);

  return [toCell(normalized[0]), toCell(normalized[1]), toCell(normalized[2])];
}

function blocksToFace(
  name: RubikFaceModel['name'],
  blocks: [string, string, string]
): RubikFaceModel {
  const rows = blocks.map((block) => blockToCells(block)) as RubikFaceModel['cells'];

  return { name, cells: rows };
}

export function toFlattenStyleString(rubik: RubikModel): string {
  const up = faceToLines(rubik.U);
  const back = faceToLines(rubik.B);
  const left = faceToLines(rubik.L);
  const front = faceToLines(rubik.F);
  const right = faceToLines(rubik.R);
  const down = faceToLines(rubik.D);
  const empty = normalizeBlock('___');

  const lines = [
    [empty, empty, normalizeBlock(up[0]), empty],
    [empty, empty, normalizeBlock(up[1]), empty],
    [empty, empty, normalizeBlock(up[2]), empty],
    [
      normalizeBlock(back[0]),
      normalizeBlock(left[0]),
      normalizeBlock(front[0]),
      normalizeBlock(right[0]),
    ],
    [
      normalizeBlock(back[1]),
      normalizeBlock(left[1]),
      normalizeBlock(front[1]),
      normalizeBlock(right[1]),
    ],
    [
      normalizeBlock(back[2]),
      normalizeBlock(left[2]),
      normalizeBlock(front[2]),
      normalizeBlock(right[2]),
    ],
    [empty, empty, normalizeBlock(down[0]), empty],
    [empty, empty, normalizeBlock(down[1]), empty],
    [empty, empty, normalizeBlock(down[2]), empty],
  ].map((row) => row.join(' '));

  return lines.join('\n');
}

export function fromFlattenStyleString(value: string): RubikModel {
  const lines = value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length !== 9) {
    throw new Error('Expected 9 non-empty lines in flatten format.');
  }

  const blocksByLine = lines.map((line) => line.split(/\s+/).map(normalizeBlock));
  const hasInvalidLine = blocksByLine.some((blocks) => blocks.length !== 4);
  if (hasInvalidLine) {
    throw new Error('Each line must contain exactly 4 blocks.');
  }

  const up = blocksToFace('U', [blocksByLine[0][2], blocksByLine[1][2], blocksByLine[2][2]]);
  const back = blocksToFace('B', [blocksByLine[3][0], blocksByLine[4][0], blocksByLine[5][0]]);
  const left = blocksToFace('L', [blocksByLine[3][1], blocksByLine[4][1], blocksByLine[5][1]]);
  const front = blocksToFace('F', [blocksByLine[3][2], blocksByLine[4][2], blocksByLine[5][2]]);
  const right = blocksToFace('R', [blocksByLine[3][3], blocksByLine[4][3], blocksByLine[5][3]]);
  const down = blocksToFace('D', [blocksByLine[6][2], blocksByLine[7][2], blocksByLine[8][2]]);

  return new RubikModelClass({ U: up, B: back, L: left, F: front, R: right, D: down });
}

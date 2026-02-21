import type RubikModel from '@/models/RubikModel';
import { rubikFaceNames } from '@/constants/rubikFaces';

const allowedRubikColors = ['white', 'yellow', 'red', 'orange', 'green', 'blue'] as const;

type RubikColor = (typeof allowedRubikColors)[number];

type ValidationCode =
  | 'INVALID_FACE_ROWS'
  | 'INVALID_FACE_COLUMNS'
  | 'EMPTY_CELL'
  | 'UNKNOWN_COLOR'
  | 'INVALID_COLOR_COUNT'
  | 'INVALID_CENTER_COLOR'
  | 'DUPLICATE_CENTER_COLOR';

export interface RubikValidationIssue {
  code: ValidationCode;
  faceName?: string;
  rowIndex?: number;
  cellIndex?: number;
  color?: string;
  count?: number;
}

export interface RubikValidationResult {
  isValid: boolean;
  errors: RubikValidationIssue[];
  colorCounts: Record<RubikColor, number>;
}

export interface RubikValidationOptions {
  allowEmptyCells?: boolean;
  requireUniqueCenters?: boolean;
}

const allowedColorSet = new Set<string>(allowedRubikColors);

interface ValidationTranslations {
  valid: string;
  invalidFaceRows: string;
  invalidFaceColumns: string;
  emptyCell: string;
  unknownColor: string;
  invalidColorCount: string;
  invalidCenterColorEmpty: string;
  invalidCenterColorUnsupported: string;
  duplicateCenterColor: string;
}

const defaultValidationTranslations: ValidationTranslations = {
  valid: 'Rubik is valid.',
  invalidFaceRows: 'Face {faceName} must have exactly 3 rows.',
  invalidFaceColumns: 'Face {faceName}, row {row} must have exactly 3 cells.',
  emptyCell: 'Face {faceName} has an empty cell at row {row}, column {column}.',
  unknownColor: 'Face {faceName} has unsupported color "{color}" at row {row}, column {column}.',
  invalidColorCount: 'Color "{color}" must appear exactly 9 times (found {count}).',
  invalidCenterColorEmpty: 'Face {faceName} center cell must not be empty.',
  invalidCenterColorUnsupported: 'Face {faceName} center color "{color}" is not supported.',
  duplicateCenterColor: 'Each face center color must be unique.',
};

function formatTemplate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(values[key] ?? `{${key}}`));
}

function resolveValidationTranslations(translations?: any): ValidationTranslations {
  return {
    valid: translations?.home?.validation?.valid || defaultValidationTranslations.valid,
    invalidFaceRows:
      translations?.home?.validation?.invalidFaceRows ||
      defaultValidationTranslations.invalidFaceRows,
    invalidFaceColumns:
      translations?.home?.validation?.invalidFaceColumns ||
      defaultValidationTranslations.invalidFaceColumns,
    emptyCell: translations?.home?.validation?.emptyCell || defaultValidationTranslations.emptyCell,
    unknownColor:
      translations?.home?.validation?.unknownColor || defaultValidationTranslations.unknownColor,
    invalidColorCount:
      translations?.home?.validation?.invalidColorCount ||
      defaultValidationTranslations.invalidColorCount,
    invalidCenterColorEmpty:
      translations?.home?.validation?.invalidCenterColorEmpty ||
      defaultValidationTranslations.invalidCenterColorEmpty,
    invalidCenterColorUnsupported:
      translations?.home?.validation?.invalidCenterColorUnsupported ||
      defaultValidationTranslations.invalidCenterColorUnsupported,
    duplicateCenterColor:
      translations?.home?.validation?.duplicateCenterColor ||
      defaultValidationTranslations.duplicateCenterColor,
  };
}

function buildValidationMessage(
  issue: RubikValidationIssue,
  validationTranslations: ValidationTranslations
): string {
  const row = issue.rowIndex !== undefined ? issue.rowIndex + 1 : undefined;
  const column = issue.cellIndex !== undefined ? issue.cellIndex + 1 : undefined;

  switch (issue.code) {
    case 'INVALID_FACE_ROWS':
      return formatTemplate(validationTranslations.invalidFaceRows, {
        faceName: issue.faceName || '',
      });
    case 'INVALID_FACE_COLUMNS':
      return formatTemplate(validationTranslations.invalidFaceColumns, {
        faceName: issue.faceName || '',
        row: row || '',
      });
    case 'EMPTY_CELL':
      return formatTemplate(validationTranslations.emptyCell, {
        faceName: issue.faceName || '',
        row: row || '',
        column: column || '',
      });
    case 'UNKNOWN_COLOR':
      return formatTemplate(validationTranslations.unknownColor, {
        faceName: issue.faceName || '',
        color: issue.color || '',
        row: row || '',
        column: column || '',
      });
    case 'INVALID_COLOR_COUNT':
      return formatTemplate(validationTranslations.invalidColorCount, {
        color: issue.color || '',
        count: issue.count || 0,
      });
    case 'INVALID_CENTER_COLOR':
      if (issue.color !== undefined) {
        return formatTemplate(validationTranslations.invalidCenterColorUnsupported, {
          faceName: issue.faceName || '',
          color: issue.color,
        });
      }

      return formatTemplate(validationTranslations.invalidCenterColorEmpty, {
        faceName: issue.faceName || '',
      });
    case 'DUPLICATE_CENTER_COLOR':
      return validationTranslations.duplicateCenterColor;
    default:
      return issue.code;
  }
}

function createEmptyColorCounts(): Record<RubikColor, number> {
  return {
    white: 0,
    yellow: 0,
    red: 0,
    orange: 0,
    green: 0,
    blue: 0,
  };
}

export function validateRubik(
  rubik: RubikModel,
  options: RubikValidationOptions = {}
): RubikValidationResult {
  const { allowEmptyCells = false, requireUniqueCenters = true } = options;

  const errors: RubikValidationIssue[] = [];
  const colorCounts = createEmptyColorCounts();
  const centerColors: string[] = [];

  for (const faceName of rubikFaceNames) {
    const face = rubik.getFace(faceName);

    if (face.cells.length !== 3) {
      errors.push({
        code: 'INVALID_FACE_ROWS',
        faceName,
      });
      continue;
    }

    for (let rowIndex = 0; rowIndex < face.cells.length; rowIndex += 1) {
      const row = face.cells[rowIndex];

      if (row.length !== 3) {
        errors.push({
          code: 'INVALID_FACE_COLUMNS',
          faceName,
          rowIndex,
        });
        continue;
      }

      for (let cellIndex = 0; cellIndex < row.length; cellIndex += 1) {
        const cell = row[cellIndex];
        const color = cell.color;

        if (color === null) {
          if (!allowEmptyCells) {
            errors.push({
              code: 'EMPTY_CELL',
              faceName,
              rowIndex,
              cellIndex,
            });
          }
          continue;
        }

        if (!allowedColorSet.has(color)) {
          errors.push({
            code: 'UNKNOWN_COLOR',
            faceName,
            rowIndex,
            cellIndex,
            color,
          });
          continue;
        }

        colorCounts[color as RubikColor] += 1;
      }
    }

    const centerColor = face.cells[1]?.[1]?.color;

    if (centerColor === null || centerColor === undefined) {
      errors.push({
        code: 'INVALID_CENTER_COLOR',
        faceName,
      });
      continue;
    }

    if (!allowedColorSet.has(centerColor)) {
      errors.push({
        code: 'INVALID_CENTER_COLOR',
        faceName,
        color: centerColor,
      });
      continue;
    }

    centerColors.push(centerColor);
  }

  if (!allowEmptyCells) {
    for (const color of allowedRubikColors) {
      if (colorCounts[color] !== 9) {
        errors.push({
          code: 'INVALID_COLOR_COUNT',
          color,
          count: colorCounts[color],
        });
      }
    }
  }

  if (requireUniqueCenters) {
    const uniqueCenterCount = new Set(centerColors).size;
    if (uniqueCenterCount !== centerColors.length) {
      errors.push({
        code: 'DUPLICATE_CENTER_COLOR',
      });
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    colorCounts,
  };
}

export function isRubikValid(rubik: RubikModel, options?: RubikValidationOptions): boolean {
  return validateRubik(rubik, options).isValid;
}

export function formatRubikValidationErrors(
  result: RubikValidationResult,
  translations?: any
): string {
  const validationTranslations = resolveValidationTranslations(translations);

  if (result.errors.length === 0) {
    return validationTranslations.valid;
  }

  return result.errors
    .map((issue, index) => `${index + 1}. ${buildValidationMessage(issue, validationTranslations)}`)
    .join('\n');
}

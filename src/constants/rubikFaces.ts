export const rubikFaceNames = ['U', 'D', 'R', 'L', 'F', 'B'] as const;

export type RubikFaceName = (typeof rubikFaceNames)[number];

import { useState } from 'react';
import type { RubikFaceModel } from '@/models/RubikFaceModel';
import { useLanguage } from '@/context/LanguageContext';
import { RotationAction } from '@/constants/rotationActions';

interface Rubik3DComponentProps {
  front: RubikFaceModel;
  right: RubikFaceModel;
  up: RubikFaceModel;
  left: RubikFaceModel;
  back: RubikFaceModel;
  down: RubikFaceModel;
  animatedAction: RotationAction | null;
  isAnimating: boolean;
}

const BASE_TRANSFORM = 'translate(-50%, -42%) rotateX(-30deg) rotateY(-40deg)';
const CUBIE_STEP = 32;
const CUBIE_SIZE = 30;
const STICKER_SIZE = 24;
const ROTATION_ANIMATION_MS = 220;

type Axis = 'x' | 'y' | 'z';

type FaceName = 'F' | 'B' | 'R' | 'L' | 'U' | 'D';

interface CubieItem {
  key: string;
  x: number;
  y: number;
  z: number;
}

function toStickerColor(color: string | null): string {
  return color ?? 'transparent';
}

function buildCubies(): CubieItem[] {
  const cubies: CubieItem[] = [];

  for (let x = -1; x <= 1; x += 1) {
    for (let y = -1; y <= 1; y += 1) {
      for (let z = -1; z <= 1; z += 1) {
        if (Math.abs(x) + Math.abs(y) + Math.abs(z) === 0) {
          continue;
        }

        cubies.push({ key: `${x}:${y}:${z}`, x, y, z });
      }
    }
  }

  return cubies;
}

function getFaceColor(
  face: FaceName,
  position: Pick<CubieItem, 'x' | 'y' | 'z'>,
  faces: {
    front: RubikFaceModel;
    right: RubikFaceModel;
    up: RubikFaceModel;
    left: RubikFaceModel;
    back: RubikFaceModel;
    down: RubikFaceModel;
  }
): string {
  const { x, y, z } = position;

  if (face === 'F') return toStickerColor(faces.front.cells[1 - y][x + 1].color);
  if (face === 'B') return toStickerColor(faces.back.cells[1 - y][1 - x].color);
  if (face === 'R') return toStickerColor(faces.right.cells[1 - y][1 - z].color);
  if (face === 'L') return toStickerColor(faces.left.cells[1 - y][z + 1].color);
  if (face === 'U') return toStickerColor(faces.up.cells[z + 1][x + 1].color);
  return toStickerColor(faces.down.cells[1 - z][x + 1].color);
}

function getActionSpec(
  action: RotationAction | null
): { axis: Axis; layers: number[]; degrees: number } | null {
  if (!action || action === 'Separate') return null;

  if (action === 'U') return { axis: 'y', layers: [1], degrees: -90 };
  if (action === 'rU') return { axis: 'y', layers: [1], degrees: 90 };
  if (action === 'D') return { axis: 'y', layers: [-1], degrees: 90 };
  if (action === 'rD') return { axis: 'y', layers: [-1], degrees: -90 };
  if (action === 'UD') return { axis: 'y', layers: [-1, 0, 1], degrees: -90 };
  if (action === 'rUD') return { axis: 'y', layers: [-1, 0, 1], degrees: 90 };

  if (action === 'R') return { axis: 'x', layers: [1], degrees: 90 };
  if (action === 'rR') return { axis: 'x', layers: [1], degrees: -90 };
  if (action === 'L') return { axis: 'x', layers: [-1], degrees: -90 };
  if (action === 'rL') return { axis: 'x', layers: [-1], degrees: 90 };
  if (action === 'RL') return { axis: 'x', layers: [-1, 0, 1], degrees: 90 };
  if (action === 'rRL') return { axis: 'x', layers: [-1, 0, 1], degrees: -90 };

  if (action === 'F') return { axis: 'z', layers: [1], degrees: 90 };
  if (action === 'rF') return { axis: 'z', layers: [1], degrees: -90 };
  if (action === 'B') return { axis: 'z', layers: [-1], degrees: -90 };
  if (action === 'rB') return { axis: 'z', layers: [-1], degrees: 90 };
  if (action === 'FB') return { axis: 'z', layers: [-1, 0, 1], degrees: 90 };
  if (action === 'rFB') return { axis: 'z', layers: [-1, 0, 1], degrees: -90 };

  return null;
}

function matchesLayer(cubie: CubieItem, axis: Axis, layers: number[]): boolean {
  if (axis === 'x') return layers.includes(cubie.x);
  if (axis === 'y') return layers.includes(cubie.y);
  return layers.includes(cubie.z);
}

function getLayerTransform(axis: Axis, degrees: number): string {
  if (axis === 'x') return ` rotateX(${degrees}deg)`;
  if (axis === 'y') return ` rotateY(${degrees}deg)`;
  return ` rotateZ(${degrees}deg)`;
}

function getCubieSideTransform(face: FaceName): string {
  const distance = CUBIE_SIZE / 2;

  if (face === 'F') return `translate(-50%, -50%) translateZ(${distance}px)`;
  if (face === 'B') return `translate(-50%, -50%) rotateY(180deg) translateZ(${distance}px)`;
  if (face === 'R') return `translate(-50%, -50%) rotateY(90deg) translateZ(${distance}px)`;
  if (face === 'L') return `translate(-50%, -50%) rotateY(-90deg) translateZ(${distance}px)`;
  if (face === 'U') return `translate(-50%, -50%) rotateX(90deg) translateZ(${distance}px)`;
  return `translate(-50%, -50%) rotateX(-90deg) translateZ(${distance}px)`;
}

function shouldHideFace(face: FaceName, transparentMode: boolean): boolean {
  if (!transparentMode) return false;
  return face === 'F' || face === 'R' || face === 'U';
}

export default function Rubik3DComponent({
  front,
  right,
  up,
  left,
  back,
  down,
  animatedAction,
  isAnimating,
}: Rubik3DComponentProps) {
  const { translations } = useLanguage();
  const [transparentMode, setTransparentMode] = useState(false);
  const actionSpec = isAnimating ? getActionSpec(animatedAction) : null;
  const cubies = buildCubies();
  const faces = { front, right, up, left, back, down };

  return (
    <div className="flex flex-shrink-0 flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">{translations.home.view3dTitle}</h3>
        <label className="flex cursor-pointer items-center gap-2 text-xs text-gray-700">
          <input
            type="checkbox"
            checked={transparentMode}
            onChange={(e) => setTransparentMode(e.target.checked)}
            className="h-3.5 w-3.5 cursor-pointer rounded border-gray-300"
          />
          <span>{translations.home.backView}</span>
        </label>
      </div>
      <div
        className="relative h-[20.5rem] w-80 rounded-md border border-gray-200 bg-gray-50"
        style={{ perspective: '1100px' }}
      >
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            transformStyle: 'preserve-3d',
            transform: BASE_TRANSFORM,
          }}
        >
          <div className="relative h-0 w-0" style={{ transformStyle: 'preserve-3d' }}>
            {cubies.map((cubie) => {
              const isAffected =
                !!actionSpec && matchesLayer(cubie, actionSpec.axis, actionSpec.layers);
              const layerTransform =
                isAnimating && isAffected && actionSpec
                  ? getLayerTransform(actionSpec.axis, actionSpec.degrees)
                  : '';
              const baseTranslate = `translate3d(${cubie.x * CUBIE_STEP}px, ${-cubie.y * CUBIE_STEP}px, ${cubie.z * CUBIE_STEP}px)`;

              return (
                <div
                  key={cubie.key}
                  className="absolute left-1/2 top-1/2"
                  style={{
                    width: CUBIE_SIZE,
                    height: CUBIE_SIZE,
                    transformStyle: 'preserve-3d',
                    transform: `translate(-50%, -50%)${layerTransform} ${baseTranslate}`,
                    transition:
                      isAffected && isAnimating
                        ? `transform ${ROTATION_ANIMATION_MS}ms ease-in-out`
                        : undefined,
                  }}
                >
                  {(['F', 'B', 'R', 'L', 'U', 'D'] as FaceName[]).map((face) => {
                    const isTransparent = shouldHideFace(face, transparentMode);
                    if (isTransparent) return null;
                    return (
                      <div
                        key={`${cubie.key}-base-${face}`}
                        className="absolute left-1/2 top-1/2 rounded-[4px] border border-black/40 bg-black"
                        style={{
                          width: CUBIE_SIZE,
                          height: CUBIE_SIZE,
                          transform: getCubieSideTransform(face),
                          backfaceVisibility: 'hidden',
                        }}
                      />
                    );
                  })}

                  {cubie.z === 1 && !shouldHideFace('F', transparentMode) ? (
                    <div
                      className="absolute left-1/2 top-1/2 rounded-[3px] border border-black/35"
                      style={{
                        width: STICKER_SIZE,
                        height: STICKER_SIZE,
                        backgroundColor: getFaceColor('F', cubie, faces),
                        transform: `translate(-50%, -50%) translateZ(${CUBIE_SIZE / 2 + 0.5}px)`,
                        backfaceVisibility: 'hidden',
                      }}
                    />
                  ) : null}

                  {cubie.z === -1 ? (
                    <div
                      className="absolute left-1/2 top-1/2 rounded-[3px] border border-black/35"
                      style={{
                        width: STICKER_SIZE,
                        height: STICKER_SIZE,
                        backgroundColor: getFaceColor('B', cubie, faces),
                        transform: `translate(-50%, -50%) rotateY(180deg) translateZ(${CUBIE_SIZE / 2 + 0.5}px)`,
                        backfaceVisibility: transparentMode ? 'visible' : 'hidden',
                      }}
                    />
                  ) : null}

                  {cubie.x === 1 && !shouldHideFace('R', transparentMode) ? (
                    <div
                      className="absolute left-1/2 top-1/2 rounded-[3px] border border-black/35"
                      style={{
                        width: STICKER_SIZE,
                        height: STICKER_SIZE,
                        backgroundColor: getFaceColor('R', cubie, faces),
                        transform: `translate(-50%, -50%) rotateY(90deg) translateZ(${CUBIE_SIZE / 2 + 0.5}px)`,
                        backfaceVisibility: 'hidden',
                      }}
                    />
                  ) : null}

                  {cubie.x === -1 ? (
                    <div
                      className="absolute left-1/2 top-1/2 rounded-[3px] border border-black/35"
                      style={{
                        width: STICKER_SIZE,
                        height: STICKER_SIZE,
                        backgroundColor: getFaceColor('L', cubie, faces),
                        transform: `translate(-50%, -50%) rotateY(-90deg) translateZ(${CUBIE_SIZE / 2 + 0.5}px)`,
                        backfaceVisibility: transparentMode ? 'visible' : 'hidden',
                      }}
                    />
                  ) : null}

                  {cubie.y === 1 && !shouldHideFace('U', transparentMode) ? (
                    <div
                      className="absolute left-1/2 top-1/2 rounded-[3px] border border-black/35"
                      style={{
                        width: STICKER_SIZE,
                        height: STICKER_SIZE,
                        backgroundColor: getFaceColor('U', cubie, faces),
                        transform: `translate(-50%, -50%) rotateX(90deg) translateZ(${CUBIE_SIZE / 2 + 0.5}px)`,
                        backfaceVisibility: 'hidden',
                      }}
                    />
                  ) : null}

                  {cubie.y === -1 ? (
                    <div
                      className="absolute left-1/2 top-1/2 rounded-[3px] border border-black/35"
                      style={{
                        width: STICKER_SIZE,
                        height: STICKER_SIZE,
                        backgroundColor: getFaceColor('D', cubie, faces),
                        transform: `translate(-50%, -50%) rotateX(-90deg) translateZ(${CUBIE_SIZE / 2 + 0.5}px)`,
                        backfaceVisibility: transparentMode ? 'visible' : 'hidden',
                      }}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

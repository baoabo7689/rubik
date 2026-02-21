import type { RubikFaceModel } from '@/models/RubikFaceModel';

interface Rubik3DComponentProps {
  FaceGrid: ({ face, showLabel }: { face: RubikFaceModel; showLabel?: boolean }) => JSX.Element;
  front: RubikFaceModel;
  right: RubikFaceModel;
  up: RubikFaceModel;
}

export default function Rubik3DComponent({ FaceGrid, front, right, up }: Rubik3DComponentProps) {
  return (
    <div className="flex flex-shrink-0 flex-col gap-3">
      <h3 className="text-sm font-semibold text-gray-800">3D View (Front - Right - Up)</h3>
      <div
        className="relative h-[20.5rem] w-80 rounded-md border border-gray-200 bg-gray-50"
        style={{ perspective: '1100px' }}
      >
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            transformStyle: 'preserve-3d',
            transform: 'translate(-50%, -42%) rotateX(-30deg) rotateY(-40deg)',
          }}
        >
          <div className="relative h-[98px] w-[98px]" style={{ transformStyle: 'preserve-3d' }}>
            <div className="absolute inset-0" style={{ transform: 'translateZ(49px)' }}>
              <FaceGrid face={front} showLabel={false} />
            </div>

            <div
              className="absolute inset-0"
              style={{ transform: 'rotateY(90deg) translateZ(49px)' }}
            >
              <FaceGrid face={right} showLabel={false} />
            </div>

            <div
              className="absolute inset-0"
              style={{ transform: 'rotateX(90deg) translateZ(49px)' }}
            >
              <FaceGrid face={up} showLabel={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

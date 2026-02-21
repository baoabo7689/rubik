import {
  rotationActions,
  rotationActionDescriptionKeys,
  RotationAction,
} from '@/constants/rotationActions';

interface RotateComponentProps {
  translations: any;
  onRotateAction: (action: RotationAction) => void;
}

export default function RotateComponent({ translations, onRotateAction }: RotateComponentProps) {
  const forwardActions = rotationActions.filter(
    (action) => !action.startsWith('r') && action !== 'Separate'
  );
  const revertActions = rotationActions.filter((action) => action.startsWith('r'));

  function renderActionButton(action: RotationAction, index: number) {
    const descriptionKey = rotationActionDescriptionKeys[action];
    const description = translations.home.rotationDescriptions[descriptionKey] || action;

    return (
      <button
        key={`${action}-${index}`}
        type="button"
        className="btn-blue-small w-12"
        title={description}
        aria-label={`${action}: ${description}`}
        onClick={() => onRotateAction(action)}
      >
        {action}
      </button>
    );
  }

  return (
    <section className="w-full bg-white">
      <div className="flex items-center gap-4">
        <h2 className="section-label">{translations.home.actions.rotate}</h2>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            {forwardActions.map((action, index) => renderActionButton(action, index))}
          </div>
          <div className="flex gap-2">
            {revertActions.map((action, index) => renderActionButton(action, index))}
          </div>
        </div>
      </div>
    </section>
  );
}

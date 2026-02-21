import { useEffect, useState } from 'react';

interface ImportComponentProps {
  isOpen: boolean;
  value: string;
  onImport: (value: string) => void;
  onClose: () => void;
  errorMessage?: string;
}

export default function ImportComponent({
  isOpen,
  value,
  onImport,
  onClose,
  errorMessage,
}: ImportComponentProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    if (isOpen) {
      setInputValue(value);
    }
  }, [isOpen, value]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
      <div className="w-full max-w-2xl rounded-md bg-white p-4 shadow-xl">
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="rubik-message" className="block text-sm font-semibold text-gray-800">
            Message
          </label>
          <button type="button" className="btn-blue" onClick={onClose}>
            Close
          </button>
        </div>

        <textarea
          id="rubik-message"
          rows={6}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
          className="h-[20.5rem] w-full resize-none rounded-md border border-gray-300 px-3 py-2 font-mono text-sm text-gray-900 outline-none ring-blue-500 focus:ring-2"
          placeholder="Paste flatten format here..."
        />

        <div className="mt-3 flex items-center justify-between">
          <p className={`text-xs ${errorMessage ? 'text-red-600' : 'text-gray-500'}`}>
            {errorMessage || 'Flatten format: [__U_ | B L F R | __D_]'}
          </p>
          <button type="button" className="btn-blue" onClick={() => onImport(inputValue)}>
            Import
          </button>
        </div>
      </div>
    </div>
  );
}

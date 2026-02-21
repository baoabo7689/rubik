'use client';

import { useMemo, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

type RubikColor = {
  name: string;
  value: string;
};

const RUBIK_COLORS: RubikColor[] = [
  { name: 'White', value: '#FFFFFF' },
  { name: 'Yellow', value: '#FACC15' },
  { name: 'Red', value: '#EF4444' },
  { name: 'Brown', value: '#92400E' },
  { name: 'Blue', value: '#3B82F6' },
  { name: 'Green', value: '#22C55E' },
];

type ColorPickerComponentProps = {
  onColorChange?: (color: RubikColor) => void;
};

export default function ColorPickerComponent({ onColorChange }: ColorPickerComponentProps) {
  const { translations } = useLanguage();
  const [selectedColor, setSelectedColor] = useState<RubikColor>(RUBIK_COLORS[0]);

  const selectedTextColor = useMemo(() => {
    return selectedColor.name === 'White' ? 'text-gray-900' : 'text-white';
  }, [selectedColor.name]);

  const handleSelectColor = (color: RubikColor) => {
    setSelectedColor(color);
    onColorChange?.(color);
  };

  return (
    <section className="w-full bg-white pt-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <h2 className="section-label">{translations.home.pickColor}</h2>

          <div className="flex gap-2">
            {RUBIK_COLORS.map((color) => {
              const isSelected = selectedColor.name === color.name;

              return (
                <button
                  key={color.name}
                  type="button"
                  onClick={() => handleSelectColor(color)}
                  className={`h-10 w-10 rounded-md border transition-transform hover:scale-105 ${isSelected ? 'border-gray-900 ring-2 ring-gray-400' : 'border-gray-300'}`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                  aria-label={`Select ${color.name}`}
                  aria-pressed={isSelected}
                />
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <h2 className="text-lg font-semibold text-gray-900">{translations.home.selectedColor}</h2>
          <div
            className={`flex h-10 min-w-24 items-center justify-center rounded-md border border-gray-300 px-2 text-sm font-semibold ${selectedTextColor}`}
            style={{ backgroundColor: selectedColor.value }}
            title={selectedColor.name}
            aria-label={selectedColor.name}
          >
            {selectedColor.name}
          </div>
        </div>
      </div>
    </section>
  );
}

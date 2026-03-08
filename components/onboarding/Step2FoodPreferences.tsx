'use client';

import { useState } from 'react';

interface Step2Props {
  data: {
    cuisinePreferences: string[];
    dietaryRestrictions: string[];
  };
  onUpdate: (updates: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const CUISINES = [
  'Italian',
  'French',
  'Asian',
  'Mexican',
  'Indian',
  'Mediterranean',
  'American',
  'Japanese',
];

const DIETARY_OPTIONS = [
  'Vegetarian',
  'Vegan',
  'Gluten-free',
  'Dairy-free',
  'Keto',
  'No Restrictions',
];

export default function Step2FoodPreferences({
  data,
  onUpdate,
  onNext,
  onBack,
}: Step2Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const toggleCuisine = (cuisine: string) => {
    const updated = data.cuisinePreferences.includes(cuisine)
      ? data.cuisinePreferences.filter((c) => c !== cuisine)
      : [...data.cuisinePreferences, cuisine];
    onUpdate({ cuisinePreferences: updated });
    if (errors.cuisines) setErrors({ ...errors, cuisines: '' });
  };

  const toggleDietary = (option: string) => {
    const updated = data.dietaryRestrictions.includes(option)
      ? data.dietaryRestrictions.filter((d) => d !== option)
      : [...data.dietaryRestrictions, option];
    onUpdate({ dietaryRestrictions: updated });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (data.cuisinePreferences.length === 0) {
      newErrors.cuisines = 'Please select at least one cuisine preference';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onNext();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Cuisine Preferences */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Cuisine Preferences</h2>
        <p className="text-secondary mb-6">Select your favorite cuisines</p>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {CUISINES.map((cuisine) => (
            <button
              key={cuisine}
              type="button"
              onClick={() => toggleCuisine(cuisine)}
              className={`p-4 rounded-lg font-semibold transition-all text-center ${
                data.cuisinePreferences.includes(cuisine)
                  ? 'bg-primary text-background ring-2 ring-primary ring-offset-2 ring-offset-background'
                  : 'bg-muted text-foreground border-2 border-border hover:border-primary'
              }`}
            >
              {cuisine}
            </button>
          ))}
        </div>

        {errors.cuisines && (
          <p className="text-red-500 text-sm mt-3">{errors.cuisines}</p>
        )}
      </div>

      {/* Dietary Restrictions */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Dietary Preferences</h2>
        <p className="text-secondary mb-6">Any dietary restrictions or preferences?</p>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {DIETARY_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => toggleDietary(option)}
              className={`p-4 rounded-lg font-semibold transition-all text-center ${
                data.dietaryRestrictions.includes(option)
                  ? 'bg-accent text-background ring-2 ring-accent ring-offset-2 ring-offset-background'
                  : 'bg-muted text-foreground border-2 border-border hover:border-accent'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-12">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 bg-muted text-foreground py-4 rounded-lg font-semibold text-lg hover:opacity-80 transition-opacity border-2 border-border"
        >
          Back
        </button>
        <button
          type="submit"
          className="flex-1 bg-primary text-background py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
        >
          Continue
        </button>
      </div>
    </form>
  );
}

'use client';

import { useState } from 'react';

interface Step3Props {
  data: {
    usageType: string;
    eventType: string;
  };
  onUpdate: (updates: any) => void;
  onNext: () => void;
  onBack: () => void;
}

const USAGE_TYPES = [
  {
    id: 'personal',
    title: 'Personal Events',
    description: 'Private dinners, intimate gatherings',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    description: 'Team celebrations, business dinners',
  },
  {
    id: 'both',
    title: 'Both',
    description: 'Mix of personal and corporate',
  },
];

const EVENT_TYPES = [
  { id: 'dinner-party', title: 'Dinner Party' },
  { id: 'wedding', title: 'Wedding' },
  { id: 'corporate-lunch', title: 'Corporate Lunch' },
  { id: 'private-chef', title: 'Private Chef Service' },
  { id: 'catering', title: 'Catering' },
  { id: 'other', title: 'Other' },
];

export default function Step3UsageType({
  data,
  onUpdate,
  onNext,
  onBack,
}: Step3Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!data.usageType) {
      newErrors.usageType = 'Please select a usage type';
    }

    if (!data.eventType) {
      newErrors.eventType = 'Please select an event type';
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
      {/* Usage Type */}
      <div>
        <h2 className="text-2xl font-bold mb-2">How will you use InstaChef?</h2>
        <p className="text-secondary mb-6">What's your primary need?</p>

        <div className="space-y-3">
          {USAGE_TYPES.map((type) => (
            <button
              key={type.id}
              type="button"
              onClick={() => {
                onUpdate({ usageType: type.id });
                if (errors.usageType) setErrors({ ...errors, usageType: '' });
              }}
              className={`w-full p-5 rounded-lg text-left transition-all border-2 ${
                data.usageType === type.id
                  ? 'bg-primary text-background border-primary ring-2 ring-primary ring-offset-2 ring-offset-background'
                  : 'bg-muted text-foreground border-border hover:border-primary'
              }`}
            >
              <h3 className="font-semibold text-lg">{type.title}</h3>
              <p className="text-sm opacity-75">{type.description}</p>
            </button>
          ))}
        </div>

        {errors.usageType && (
          <p className="text-red-500 text-sm mt-3">{errors.usageType}</p>
        )}
      </div>

      {/* Event Type */}
      <div>
        <h2 className="text-2xl font-bold mb-2">What type of event?</h2>
        <p className="text-secondary mb-6">Tell us about your upcoming event</p>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {EVENT_TYPES.map((event) => (
            <button
              key={event.id}
              type="button"
              onClick={() => {
                onUpdate({ eventType: event.id });
                if (errors.eventType) setErrors({ ...errors, eventType: '' });
              }}
              className={`p-4 rounded-lg font-semibold transition-all text-center ${
                data.eventType === event.id
                  ? 'bg-primary text-background ring-2 ring-primary ring-offset-2 ring-offset-background'
                  : 'bg-muted text-foreground border-2 border-border hover:border-primary'
              }`}
            >
              {event.title}
            </button>
          ))}
        </div>

        {errors.eventType && (
          <p className="text-red-500 text-sm mt-3">{errors.eventType}</p>
        )}
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

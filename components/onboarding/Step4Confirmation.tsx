'use client';

import { useState } from 'react';

interface Step4Props {
  data: {
    name: string;
    email: string;
    phone: string;
    cuisinePreferences: string[];
    dietaryRestrictions: string[];
    usageType: string;
    eventType: string;
  };
  onComplete: () => void;
  onBack: () => void;
}

const USAGE_TYPE_LABELS: Record<string, string> = {
  personal: 'Personal Events',
  corporate: 'Corporate Events',
  both: 'Both Personal & Corporate',
};

const EVENT_TYPE_LABELS: Record<string, string> = {
  'dinner-party': 'Dinner Party',
  wedding: 'Wedding',
  'corporate-lunch': 'Corporate Lunch',
  'private-chef': 'Private Chef Service',
  catering: 'Catering',
  other: 'Other',
};

export default function Step4Confirmation({
  data,
  onComplete,
  onBack,
}: Step4Props) {
  const [isLoading, setIsLoading] = useState(false);

  const handleComplete = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onComplete();
    setIsLoading(false);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold mb-3">Review Your Details</h2>
        <p className="text-secondary">
          Everything looks good? Let's get started!
        </p>
      </div>

      {/* Summary Cards */}
      <div className="space-y-4">
        {/* Personal Info */}
        <div className="bg-muted p-6 rounded-lg border-2 border-border">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center text-sm font-bold">
              1
            </span>
            Personal Information
          </h3>
          <div className="space-y-2 text-sm md:text-base">
            <div className="flex justify-between">
              <span className="text-secondary">Name:</span>
              <span className="font-semibold">{data.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary">Email:</span>
              <span className="font-semibold">{data.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary">Phone:</span>
              <span className="font-semibold">{data.phone}</span>
            </div>
          </div>
        </div>

        {/* Food Preferences */}
        <div className="bg-muted p-6 rounded-lg border-2 border-border">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center text-sm font-bold">
              2
            </span>
            Food Preferences
          </h3>
          <div className="space-y-3 text-sm md:text-base">
            <div>
              <p className="text-secondary mb-2">Cuisines:</p>
              <div className="flex flex-wrap gap-2">
                {data.cuisinePreferences.map((cuisine) => (
                  <span
                    key={cuisine}
                    className="bg-primary text-background px-3 py-1 rounded-full text-sm"
                  >
                    {cuisine}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-secondary mb-2">Dietary Restrictions:</p>
              <div className="flex flex-wrap gap-2">
                {data.dietaryRestrictions.length > 0 ? (
                  data.dietaryRestrictions.map((restriction) => (
                    <span
                      key={restriction}
                      className="bg-accent text-background px-3 py-1 rounded-full text-sm"
                    >
                      {restriction}
                    </span>
                  ))
                ) : (
                  <span className="text-secondary">No restrictions</span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="bg-muted p-6 rounded-lg border-2 border-border">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span className="w-8 h-8 bg-primary text-background rounded-full flex items-center justify-center text-sm font-bold">
              3
            </span>
            Event Details
          </h3>
          <div className="space-y-2 text-sm md:text-base">
            <div className="flex justify-between">
              <span className="text-secondary">Usage Type:</span>
              <span className="font-semibold">
                {USAGE_TYPE_LABELS[data.usageType]}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-secondary">Event Type:</span>
              <span className="font-semibold">
                {EVENT_TYPE_LABELS[data.eventType]}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Agreement */}
      <div className="bg-accent/10 p-6 rounded-lg border-2 border-accent">
        <p className="text-sm text-foreground">
          By clicking "Complete Setup", you agree to our Terms of Service and Privacy Policy.
          We'll use your information to match you with the best chefs.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 bg-muted text-foreground py-4 rounded-lg font-semibold text-lg hover:opacity-80 transition-opacity border-2 border-border"
        >
          Back
        </button>
        <button
          type="button"
          onClick={handleComplete}
          disabled={isLoading}
          className="flex-1 bg-primary text-background py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {isLoading ? 'Setting up...' : 'Complete Setup'}
        </button>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import ProgressBar from '@/components/onboarding/ProgressBar';
import Step1BasicDetails from '@/components/onboarding/Step1BasicDetails';
import Step2FoodPreferences from '@/components/onboarding/Step2FoodPreferences';
import Step3UsageType from '@/components/onboarding/Step3UsageType';
import Step4Confirmation from '@/components/onboarding/Step4Confirmation';

interface OnboardingData {
  // Step 1
  name: string;
  email: string;
  phone: string;
  
  // Step 2
  cuisinePreferences: string[];
  dietaryRestrictions: string[];
  
  // Step 3
  usageType: string;
  eventType: string;
  
  // Step 4 - Summary
}

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<OnboardingData>({
    name: '',
    email: '',
    phone: '',
    cuisinePreferences: [],
    dietaryRestrictions: [],
    usageType: '',
    eventType: '',
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleComplete = () => {
    console.log('Onboarding completed with data:', formData);
    // TODO: Save to database or send to backend
  };

  const updateFormData = (updates: Partial<OnboardingData>) => {
    setFormData({ ...formData, ...updates });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-2xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-balance">
            Welcome to <span className="text-primary">InstaChef</span>
          </h1>
          <p className="text-lg text-secondary">Let's find your perfect chef</p>
        </div>

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={4} />

        {/* Steps */}
        <div className="mt-12">
          {currentStep === 1 && (
            <Step1BasicDetails
              data={formData}
              onUpdate={updateFormData}
              onNext={handleNext}
            />
          )}

          {currentStep === 2 && (
            <Step2FoodPreferences
              data={formData}
              onUpdate={updateFormData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}

          {currentStep === 3 && (
            <Step3UsageType
              data={formData}
              onUpdate={updateFormData}
              onNext={handleNext}
              onBack={handleBack}
            />
          )}

          {currentStep === 4 && (
            <Step4Confirmation
              data={formData}
              onComplete={handleComplete}
              onBack={handleBack}
            />
          )}
        </div>
      </div>
    </div>
  );
}

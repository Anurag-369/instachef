interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  return (
    <div className="w-full">
      {/* Step Indicators */}
      <div className="flex justify-between mb-8">
        {Array.from({ length: totalSteps }).map((_, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isActive = stepNumber === currentStep;

          return (
            <div key={stepNumber} className="flex flex-col items-center flex-1">
              {/* Step Circle */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-lg transition-colors mb-2 ${
                  isCompleted
                    ? 'bg-primary text-background'
                    : isActive
                    ? 'bg-primary text-background ring-2 ring-primary ring-offset-2 ring-offset-background'
                    : 'bg-muted text-secondary border-2 border-border'
                }`}
              >
                {isCompleted ? '✓' : stepNumber}
              </div>

              {/* Step Label */}
              <span
                className={`text-xs md:text-sm font-medium text-center ${
                  isActive ? 'text-primary font-semibold' : 'text-secondary'
                }`}
              >
                {['Basics', 'Cuisine', 'Usage', 'Confirm'][index]}
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="w-full h-1 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-300"
          style={{
            width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
          }}
        />
      </div>
    </div>
  );
}

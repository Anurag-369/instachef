export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: 'Browse & Select',
      description: 'Browse our curated selection of certified professional chefs. Filter by cuisine, experience, and ratings.',
      icon: '👨‍🍳'
    },
    {
      number: 2,
      title: 'Plan Your Menu',
      description: 'Collaborate with your chosen chef to create a customized menu tailored to your event and preferences.',
      icon: '📋'
    },
    {
      number: 3,
      title: 'Sit Back & Enjoy',
      description: 'Our chef handles everything—shopping, prep, cooking, and cleanup. You just enjoy an unforgettable meal.',
      icon: '🎉'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Three simple steps to elevate your event with professional culinary excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6 text-4xl border-2 border-primary">
                {step.icon}
              </div>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6 text-white font-bold text-lg">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-muted rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">Why Choose InstaChef?</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl font-bold">✓</span>
              <span className="text-foreground">All chefs are certified and background-checked</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl font-bold">✓</span>
              <span className="text-foreground">Flexible menus from various cuisines</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl font-bold">✓</span>
              <span className="text-foreground">Transparent pricing with no hidden fees</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary text-xl font-bold">✓</span>
              <span className="text-foreground">24/7 customer support</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function CTA() {
  return (
    <section id="cta" className="py-20 md:py-32 bg-gradient-to-r from-accent to-secondary">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Elevate Your Event?
        </h2>
        
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Join thousands of satisfied clients who've transformed their special occasions with InstaChef's certified professional chefs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white hover:bg-muted text-accent font-bold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105">
            Sign Up Free
          </button>
          <button className="border-2 border-white hover:bg-white/10 text-white font-bold py-4 px-8 rounded-lg transition duration-300">
            Schedule a Demo
          </button>
        </div>

        <p className="text-white/80 text-sm mt-8">
          No credit card required. Start booking your first chef in minutes.
        </p>
      </div>
    </section>
  );
}

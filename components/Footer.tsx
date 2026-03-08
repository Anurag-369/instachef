export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="font-bold text-lg">🍽</span>
              </div>
              <span className="text-xl font-bold">InstaChef</span>
            </div>
            <p className="text-white/70 text-sm">
              Premium chef hiring platform for special occasions.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Platform</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-primary transition">Browse Chefs</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition">How It Works</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition">Pricing</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition">For Chefs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-primary transition">About Us</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition">Blog</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition">Careers</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/70 hover:text-primary transition">Privacy Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition">Terms of Service</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition">Cookie Policy</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition">Safety Guidelines</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/60 text-sm">
            © 2024 InstaChef. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-primary transition">Twitter</a>
            <a href="#" className="text-white/60 hover:text-primary transition">Instagram</a>
            <a href="#" className="text-white/60 hover:text-primary transition">LinkedIn</a>
            <a href="#" className="text-white/60 hover:text-primary transition">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

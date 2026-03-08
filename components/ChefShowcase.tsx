'use client';

export default function ChefShowcase() {
  const chefs = [
    {
      id: 1,
      name: 'Chef Marcus Sterling',
      specialty: 'French Cuisine',
      experience: '15+ years',
      rating: 4.9,
      reviews: 248,
      image: '👨‍🍳',
      description: 'Michelin-trained chef specializing in classic French techniques and modern interpretations.'
    },
    {
      id: 2,
      name: 'Chef Aisha Patel',
      specialty: 'Indian & Asian Fusion',
      experience: '12+ years',
      rating: 4.8,
      reviews: 312,
      image: '👩‍🍳',
      description: 'Expert in authentic Indian cuisine with innovative fusion approaches for contemporary palates.'
    },
    {
      id: 3,
      name: 'Chef Giovanni Rossi',
      specialty: 'Italian & Mediterranean',
      experience: '18+ years',
      rating: 4.9,
      reviews: 425,
      image: '👨‍🍳',
      description: 'Award-winning chef bringing authentic Italian flavors and Mediterranean sophistication to every event.'
    },
    {
      id: 4,
      name: 'Chef Elena Zhang',
      specialty: 'Contemporary Asian',
      experience: '10+ years',
      rating: 4.7,
      reviews: 189,
      image: '👩‍🍳',
      description: 'Innovative chef combining traditional Asian techniques with modern culinary excellence.'
    },
    {
      id: 5,
      name: 'Chef James Wilson',
      specialty: 'American Contemporary',
      experience: '14+ years',
      rating: 4.8,
      reviews: 267,
      image: '👨‍🍳',
      description: 'Creative chef focusing on farm-to-table principles and seasonal American cuisine.'
    },
    {
      id: 6,
      name: 'Chef Sofia García',
      specialty: 'Spanish & Latin Cuisine',
      experience: '11+ years',
      rating: 4.9,
      reviews: 356,
      image: '👩‍🍳',
      description: 'Passionate chef bringing vibrant Spanish and Latin flavors with impeccable presentation.'
    }
  ];

  return (
    <section id="chefs" className="py-20 md:py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Our Chefs</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Discover world-class certified chefs ready to transform your special event into a culinary masterpiece.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef) => (
            <div 
              key={chef.id} 
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="bg-gradient-to-br from-primary to-secondary p-8 flex items-center justify-center">
                <span className="text-8xl">{chef.image}</span>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{chef.name}</h3>
                <p className="text-primary font-semibold mb-1">{chef.specialty}</p>
                <p className="text-secondary text-sm mb-3">{chef.experience}</p>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-yellow-500">★</span>
                  <span className="font-semibold text-foreground">{chef.rating}</span>
                  <span className="text-secondary text-sm">({chef.reviews} reviews)</span>
                </div>
                
                <p className="text-foreground text-sm leading-relaxed mb-4">
                  {chef.description}
                </p>
                
                <button className="w-full bg-primary hover:bg-secondary text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

export default function Hero() {
  const [eventType, setEventType] = useState('');
  const [guests, setGuests] = useState('');
  const [date, setDate] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', { eventType, guests, date });
  };

  return (
    <section className="bg-gradient-to-b from-muted to-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Hire Certified Professional Chefs for Any Occasion
          </h1>
          <p className="text-xl text-secondary max-w-2xl mx-auto mb-8">
            Elevate your special events with world-class culinary expertise. Book trusted, certified chefs in minutes.
          </p>
        </div>

        <form onSubmit={handleSearch} className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold text-foreground mb-2">Event Type</label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Select type</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate Event</option>
                <option value="birthday">Birthday Party</option>
                <option value="private">Private Dinner</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-foreground mb-2">Number of Guests</label>
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                placeholder="50"
                className="border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-semibold text-foreground mb-2">Event Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
              >
                Find Chef
              </button>
            </div>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="p-6">
            <p className="text-3xl font-bold text-primary mb-2">500+</p>
            <p className="text-foreground">Certified Chefs</p>
          </div>
          <div className="p-6">
            <p className="text-3xl font-bold text-primary mb-2">10K+</p>
            <p className="text-foreground">Events Catered</p>
          </div>
          <div className="p-6">
            <p className="text-3xl font-bold text-primary mb-2">4.9★</p>
            <p className="text-foreground">Average Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}

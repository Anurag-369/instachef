'use client';

import { useState } from 'react';

interface Step1Props {
  data: {
    name: string;
    email: string;
    phone: string;
  };
  onUpdate: (updates: any) => void;
  onNext: () => void;
}

export default function Step1BasicDetails({ data, onUpdate, onNext }: Step1Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!data.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!data.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(data.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
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
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Full Name
        </label>
        <input
          id="name"
          type="text"
          value={data.name}
          onChange={(e) => {
            onUpdate({ name: e.target.value });
            if (errors.name) setErrors({ ...errors, name: '' });
          }}
          placeholder="John Doe"
          className={`w-full px-4 py-3 rounded-lg border-2 bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.name
              ? 'border-red-500 focus:border-red-500'
              : 'border-border focus:border-primary'
          }`}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => {
            onUpdate({ email: e.target.value });
            if (errors.email) setErrors({ ...errors, email: '' });
          }}
          placeholder="john@example.com"
          className={`w-full px-4 py-3 rounded-lg border-2 bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.email
              ? 'border-red-500 focus:border-red-500'
              : 'border-border focus:border-primary'
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          value={data.phone}
          onChange={(e) => {
            const cleaned = e.target.value.replace(/\D/g, '').slice(0, 10);
            onUpdate({ phone: cleaned });
            if (errors.phone) setErrors({ ...errors, phone: '' });
          }}
          placeholder="(555) 000-0000"
          className={`w-full px-4 py-3 rounded-lg border-2 bg-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
            errors.phone
              ? 'border-red-500 focus:border-red-500'
              : 'border-border focus:border-primary'
          }`}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-background py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity mt-8"
      >
        Continue
      </button>
    </form>
  );
}

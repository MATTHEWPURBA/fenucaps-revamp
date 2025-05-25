// src/app/components/ShopFilters.tsx
'use client';
import { useState } from 'react';

export default function ShopFilters() {
  const [priceRange, setPriceRange] = useState([0, 1000000]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCertifications, setSelectedCertifications] = useState<string[]>([]);

  const categories = [
    'ASI Booster',
    'Vitamin Ibu Hamil',
    'Suplemen Menyusui',
    'Herbal Tradisional'
  ];

  const certifications = [
    'BPOM',
    'Halal',
    'FDA',
    'SGS'
  ];

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h3 className="font-bold text-lg mb-6">Filter Produk</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Kategori</h4>
        <div className="space-y-2">
          <label className="flex items-center">
            <input
              type="radio"
              name="category"
              value=""
              checked={selectedCategory === ''}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="text-primary-600 focus:ring-primary-500"
            />
            <span className="ml-2 text-sm">Semua Kategori</span>
          </label>
          {categories.map((category) => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Rentang Harga</h4>
        <div className="space-y-3">
          <input
            type="range"
            min="0"
            max="1000000"
            step="50000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>Rp 0</span>
            <span>Rp {priceRange[1].toLocaleString('id-ID')}</span>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="mb-6">
        <h4 className="font-semibold mb-3">Sertifikasi</h4>
        <div className="space-y-2">
          {certifications.map((cert) => (
            <label key={cert} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCertifications.includes(cert)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedCertifications([...selectedCertifications, cert]);
                  } else {
                    setSelectedCertifications(selectedCertifications.filter(c => c !== cert));
                  }
                }}
                className="text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm">{cert}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset Filters */}
      <button
        onClick={() => {
          setPriceRange([0, 1000000]);
          setSelectedCategory('');
          setSelectedCertifications([]);
        }}
        className="w-full btn-secondary"
      >
        Reset Filter
      </button>
    </div>
  );
}

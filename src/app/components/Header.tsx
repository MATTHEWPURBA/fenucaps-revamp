// src/app/components/Header.tsx
'use client';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="h-10 w-32 bg-primary-600 rounded flex items-center justify-center">
              <span className="text-white font-bold">FENUCAPS</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#beranda" className="text-gray-600 hover:text-primary-600">Beranda</a>
            <a href="#konsultasi" className="text-gray-600 hover:text-primary-600">Konsultasi Dokter</a>
            <a href="#tentang" className="text-gray-600 hover:text-primary-600">Tentang Kami</a>
            <a href="#blog" className="text-gray-600 hover:text-primary-600">Blog</a>
          </nav>

          {/* CTA Button */}
          <button className="hidden md:block btn-secondary">
            Beli Sekarang
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#beranda" className="text-gray-600">Beranda</a>
              <a href="#konsultasi" className="text-gray-600">Konsultasi Dokter</a>
              <a href="#tentang" className="text-gray-600">Tentang Kami</a>
              <a href="#blog" className="text-gray-600">Blog</a>
              <button className="btn-secondary w-full mt-4">Beli Sekarang</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
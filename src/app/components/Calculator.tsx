// src/app/components/Calculator.tsx
'use client';
import { useState } from 'react';

export default function Calculator() {
  const [babyWeight, setBabyWeight] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculateMilkNeeds = () => {
    if (babyWeight) {
      const needs = parseFloat(babyWeight) * 150; // ml per day
      setResult(needs);
    }
  };

  return (
    <section className="section-padding bg-primary-50">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary-600 mb-4">Kalkulator Kebutuhan ASI</h2>
          <p className="text-gray-600">Ingin menghitung kebutuhan ASI bayi? Silahkan konsultasi gratis dengan dokter laktasi Fenucaps Indonesia</p>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <div className="bg-primary-600 text-white p-4 rounded-lg mb-6">
            <h3 className="font-bold text-lg">Kalkulator Kebutuhan ASI</h3>
            <p className="text-primary-100">Hitung perkiraan kebutuhan ASI bayi Anda per hari</p>
          </div>

          <div className="mb-6">
            <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-4 mb-4">
              <p className="text-sm text-yellow-800">
                <strong>Catatan:</strong> Bayi Usia 6-12 Bulan (Mulai MPASI) - Kebutuhan ASI mulai menurun seiring dengan tambahan makanan pendamping.
              </p>
            </div>

            <label className="block text-sm font-medium text-gray-700 mb-2">Berat Badan Bayi (kg)</label>
            <input type="number" value={babyWeight} onChange={(e) => setBabyWeight(e.target.value)} placeholder="Masukkan berat badan kg" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500" />
          </div>

          <button onClick={calculateMilkNeeds} className="w-full btn-primary mb-6">
            Hitung Kebutuhan ASI
          </button>

          {result && (
            <div className="bg-primary-100 rounded-lg p-4 text-center">
              <p className="text-primary-800 font-semibold">
                Kebutuhan ASI perkiraan: <span className="text-xl">{result.toFixed(0)} ml/hari</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// src/app/components/Reviews.tsx
'use client';
import { StarIcon } from '@heroicons/react/24/solid';

export default function Reviews() {
  
  const reviews = [
    {
      name: "Bunda Sarah",
      rating: 5,
      comment: "ASI saya meningkat drastis setelah minum Fenucaps. Sangat recommended!",
      location: "Jakarta"
    },
    {
      name: "Ibu Ani",
      rating: 5,
      comment: "Produk terbaik untuk ASI booster. Tidak ada efek samping sama sekali.",
      location: "Surabaya"
    },
    {
      name: "Mama Lisa",
      rating: 5,
      comment: "Alhamdulillah ASI lancar berkat Fenucaps. Terima kasih!",
      location: "Bandung"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-r from-yellow-50 to-orange-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-600 mb-4">
            500.000<sup>++</sup>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            HONEST REVIEW FROM MOMS
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{review.comment}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-600">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="btn-primary">
            Lihat Semua Review
          </button>
        </div>
      </div>
    </section>
  );
}
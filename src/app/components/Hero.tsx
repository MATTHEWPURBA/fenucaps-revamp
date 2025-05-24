// src/app/components/Hero.tsx
export default function Hero() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              SCIENCE BASED ASI BOOSTER
            </div>
            
            <div className="bg-primary-600 text-white px-4 py-2 rounded-lg inline-block mb-6">
              <span className="text-2xl font-bold">#1</span> DIREKOMENDASIKAN DALAM PENELITIAN INTERNASIONAL THE BREASTFEEDING MEDICINE
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Kandungan <span className="text-primary-600">Fenugreek, Jahe & Kunyit</span>
              <br />
              Meningkatkan ASI <span className="text-primary-600">103%</span>
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Tanpa Efek Samping Pada Bayi dan Ibu*
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold">72x</span>
                </div>
                <div>
                  <h3 className="font-semibold">Fenugreek (200mg)</h3>
                  <p className="text-sm text-gray-600">✓ Meningkatkan ASI 103% dalam 24-72 jam</p>
                  <p className="text-sm text-gray-600">✓ Sebagai rempah pelancer ASI</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold">🌿</span>
                </div>
                <div>
                  <h3 className="font-semibold">Jahe (120mg)</h3>
                  <p className="text-sm text-gray-600">✓ Menjaga saluran sistem ASI</p>
                  <p className="text-sm text-gray-600">✓ Memperbaiki pencernaan</p>
                  <p className="text-sm text-gray-600">✓ Meringankan peredaran darah</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-bold">🧡</span>
                </div>
                <div>
                  <h3 className="font-semibold">Kunyit (100mg)</h3>
                  <p className="text-sm text-gray-600">✓ Meningkatkan sistem ASI</p>
                  <p className="text-sm text-gray-600">✓ Pemulihan pascapersalinan</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary flex-1">
                Konsultasi via WhatsApp
              </button>
              <button className="btn-secondary flex-1">
                Beli di Shopee
              </button>
            </div>
          </div>

          {/* Right Content - Product Placeholder */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto h-96 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-32 mx-auto bg-primary-600 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">FENUCAPS</span>
                </div>
                <p className="text-primary-700 font-semibold">ASI Booster</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold transform rotate-12">
              BEST SELLER!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
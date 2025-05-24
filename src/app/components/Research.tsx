// src/app/components/Research.tsx
export default function Research() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Berdasarkan Penelitian Kandungan Per Kapsul
          </h2>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Effects of Fenugreek, Ginger, and Turmeric Supplementation
              </h3>
              <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="text-sm">
                  <strong>The intervention:</strong> The participants received three capsules of herbal 
                  caps; Herbal Acham's Home Co. Ltd., Thailand) or placebo 
                  (corn starch) three times per day before meals for 4 weeks. 
                  The herbs contained <strong>200 mg fenugreek seed, 120 mg ginger, 
                  and 100 mg turmeric per capsule.</strong>
                </p>
              </div>

              <div className="bg-primary-100 p-4 rounded-lg">
                <p className="text-primary-800 font-semibold">
                  Results: <span className="text-primary-600">103% increase at week 4</span> - 
                  These increases were greater than placebo treatment group and achieved significance at 4 weeks. 
                  Moreover, there were no differences in adverse effects observed in the placebo and herbal groups.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="w-full max-w-sm mx-auto h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl mb-2">📚</div>
                  <p className="text-blue-800 font-semibold">Breastfeeding Medicine Journal</p>
                </div>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Published in The Breastfeeding Medicine Journal
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary-100 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-primary-800 mb-4">
            Mampu meningkatkan produksi ASI hingga 5 kali lipat dalam 2 minggu, 
            tanpa menimbulkan efek samping bagi ibu dan bayi menurut jurnal 
            menyusui The Breastfeeding Medicine
          </h3>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h3>
          <div className="bg-gray-100 p-6 rounded-lg max-w-4xl mx-auto">
            <p className="text-lg">
              Based on this study, mixed herbal supplementation, including 
              <strong> fenugreek, ginger, and turmeric, can increase human milk volume</strong> in a 
              period of <strong>2 weeks without serious adverse effects in mothers and infants</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
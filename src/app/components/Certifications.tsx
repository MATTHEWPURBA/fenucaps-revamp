// src/app/components/Certifications.tsx
export default function Certifications() {
  const certifications = [
    { name: 'SGS', color: 'bg-blue-600' },
    { name: 'FDA', color: 'bg-red-600' },
    { name: 'HALAL', color: 'bg-green-600' },
    { name: 'BPOM', color: 'bg-purple-600' },
  ];

  return (
    <section className="bg-gray-50 py-8">
      <div className="container-custom">
        <div className="flex justify-center items-center space-x-8 md:space-x-16">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className={`h-12 md:h-16 w-16 md:w-20 ${cert.color} rounded-lg flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity`}>
                <span className="text-white font-bold text-xs">{cert.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

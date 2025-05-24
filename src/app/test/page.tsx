// src/app/test/page.tsx
export default function TestPage() {
    return (
      <div className="min-h-screen bg-blue-500 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-green-600 mb-4">
            Tailwind Test
          </h1>
          <div className="bg-primary-600 text-white p-4 rounded">
            Primary Color Test
          </div>
          <button className="btn-primary mt-4">
            Custom Button Test
          </button>
        </div>
      </div>
    );
  }
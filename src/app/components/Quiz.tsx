// src/app/components/Quiz.tsx
'use client';
import { useState } from 'react';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const questions = [
    {
      question: "Berapa lama ASI ekslusif direkomendasikan?",
      options: ["3 bulan", "4 bulan", "6 bulan", "12 bulan"],
      correct: 2
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary-600 mb-4">
            Uji Pengetahuan ASI Anda
          </h2>
          <p className="text-gray-600">
            Uji pengetahuan Anda seputar ASI dan menyusui
          </p>
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-2">
              Pertanyaan 1 dari {questions.length}
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              {questions[currentQuestion].question}
            </h3>
          </div>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <label key={index} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                <input 
                  type="radio" 
                  name="answer" 
                  value={index}
                  className="text-primary-600 focus:ring-primary-500"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button className="btn-primary">
              Pertanyaan Selanjutnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
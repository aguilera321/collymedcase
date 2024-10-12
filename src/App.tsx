import React, { useState, useEffect } from 'react';
import { Stethoscope } from 'lucide-react';
import CaseStudy from './components/CaseStudy';
import ProgressTracker from './components/ProgressTracker';
import { cases } from './data/cases';
import { UserProgress } from './types';

function App() {
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const [userProgress, setUserProgress] = useState<UserProgress>({
    completedCases: [],
    correctAnswers: 0,
    totalAttempts: 0,
  });

  useEffect(() => {
    const savedProgress = localStorage.getItem('userProgress');
    if (savedProgress) {
      setUserProgress(JSON.parse(savedProgress));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userProgress', JSON.stringify(userProgress));
  }, [userProgress]);

  const handleCaseComplete = (correct: boolean) => {
    setUserProgress(prev => ({
      ...prev,
      completedCases: [...prev.completedCases, cases[currentCaseIndex].id],
      correctAnswers: prev.correctAnswers + (correct ? 1 : 0),
      totalAttempts: prev.totalAttempts + 1,
    }));
  };

  const nextCase = () => {
    setCurrentCaseIndex((prev) => (prev + 1) % cases.length);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex items-center">
          <Stethoscope className="mr-2" size={24} />
          <h1 className="text-2xl font-bold">MedCase: Estudios de Casos Clínicos</h1>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <ProgressTracker progress={userProgress} />
        <CaseStudy
          case={cases[currentCaseIndex]}
          onComplete={handleCaseComplete}
        />
        <div className="mt-6 text-center">
          <button
            onClick={nextCase}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Siguiente Caso
          </button>
        </div>
      </main>

      <footer className="bg-gray-200 p-4 mt-8">
        <div className="container mx-auto text-center text-gray-600">
          © 2024 MedCase. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

export default App;
import React from 'react';
import { UserProgress } from '../types';

interface ProgressTrackerProps {
  progress: UserProgress;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ progress }) => {
  const accuracy = progress.totalAttempts > 0
    ? ((progress.correctAnswers / progress.totalAttempts) * 100).toFixed(1)
    : '0.0';

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-6">
      <h2 className="text-xl font-semibold mb-2">Tu Progreso</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Casos Completados:</p>
          <p className="text-2xl font-bold">{progress.completedCases.length}</p>
        </div>
        <div>
          <p className="text-gray-600">Precisión:</p>
          <p className="text-2xl font-bold">{accuracy}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
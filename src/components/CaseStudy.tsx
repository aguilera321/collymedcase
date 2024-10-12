import React, { useState, useEffect } from 'react';
import { Case } from '../types';

interface CaseStudyProps {
  case: Case;
  onComplete: (correct: boolean) => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ case: caseData, onComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Efecto para reiniciar el estado cuando cambia el caso
  useEffect(() => {
    setSelectedAnswer(null);
    setShowExplanation(false);
  }, [caseData.id]);

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowExplanation(true);
      onComplete(selectedAnswer === caseData.correctAnswer);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">{caseData.title}</h2>
      <p className="mb-4">{caseData.description}</p>
      
      <div className="mb-4">
        <h3 className="font-semibold">Síntomas:</h3>
        <ul className="list-disc list-inside">
          {caseData.symptoms.map((symptom, index) => (
            <li key={index}>{symptom}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-4">
        <h3 className="font-semibold">Historia:</h3>
        <p>{caseData.history}</p>
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold">Examen Físico:</h3>
        <p>{caseData.physicalExam}</p>
      </div>
      
      <div className="mb-6">
        <h3 className="font-semibold mb-2">¿Cuál es el diagnóstico más probable?</h3>
        {caseData.options.map((option, index) => (
          <div key={index} className="mb-2">
            <label className="flex items-center">
              <input
                type="radio"
                name="diagnosis"
                value={index}
                checked={selectedAnswer === index}
                onChange={() => setSelectedAnswer(index)}
                className="mr-2"
              />
              {option}
            </label>
          </div>
        ))}
      </div>
      
      <button
        onClick={handleSubmit}
        disabled={selectedAnswer === null}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
      >
        Enviar Respuesta
      </button>
      
      {showExplanation && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Explicación:</h3>
          <p className={selectedAnswer === caseData.correctAnswer ? "text-green-600" : "text-red-600"}>
            {selectedAnswer === caseData.correctAnswer ? "¡Correcto!" : "Incorrecto."}
          </p>
          <p>{caseData.explanation}</p>
          
          <div className="mt-4">
            <h4 className="font-semibold">Aprende Más:</h4>
            <ul className="list-disc list-inside">
              {caseData.references.map((ref, index) => (
                <li key={index}>
                  <a href={ref} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    Referencia {index + 1}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaseStudy;
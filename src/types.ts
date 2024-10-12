export interface Case {
  id: string;
  title: string;
  description: string;
  symptoms: string[];
  history: string;
  physicalExam: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  references: string[];
}

export interface UserProgress {
  completedCases: string[];
  correctAnswers: number;
  totalAttempts: number;
}
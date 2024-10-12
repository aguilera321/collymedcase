import { Case } from '../types';

export const cases: Case[] = [
  // ... (casos existentes)

  {
    id: '6',
    title: 'Dolor Articular y Rigidez Matutina',
    description: 'Una mujer de 45 años presenta dolor y rigidez en múltiples articulaciones, especialmente por las mañanas.',
    symptoms: ['Dolor articular', 'Rigidez matutina', 'Fatiga'],
    history: 'Síntomas han empeorado gradualmente durante los últimos 6 meses',
    physicalExam: 'Inflamación simétrica en articulaciones de manos y pies, limitación del rango de movimiento',
    options: [
      'Artritis Reumatoide',
      'Osteoartritis',
      'Fibromialgia',
      'Gota'
    ],
    correctAnswer: 0,
    explanation: "Los síntomas de dolor articular simétrico, rigidez matutina prolongada y la presentación clínica son característicos de la Artritis Reumatoide.",
    category: 'Reumatología',
    references: [
      'https://www.rheumatology.org/I-Am-A/Patient-Caregiver/Diseases-Conditions/Rheumatoid-Arthritis',
      'https://www.ncbi.nlm.nih.gov/books/NBK441999/'
    ]
  },
  {
    id: '7',
    title: 'Pérdida de Visión Súbita',
    description: 'Un hombre de 70 años experimenta pérdida repentina de visión en un ojo.',
    symptoms: ['Pérdida de visión unilateral', 'Dolor ocular leve'],
    history: 'Hipertenso, diabético',
    physicalExam: 'Agudeza visual severamente disminuida en ojo derecho, fondo de ojo muestra palidez retiniana',
    options: [
      'Desprendimiento de Retina',
      'Oclusión de la Arteria Central de la Retina',
      'Neuritis Óptica',
      'Glaucoma Agudo'
    ],
    correctAnswer: 1,
    explanation: "La pérdida súbita de visión unilateral en un paciente con factores de riesgo cardiovascular sugiere una Oclusión de la Arteria Central de la Retina.",
    category: 'Oftalmología',
    references: [
      'https://www.aao.org/eye-health/diseases/central-retinal-artery-occlusion',
      'https://www.ncbi.nlm.nih.gov/books/NBK470354/'
    ]
  },
  {
    id: '8',
    title: 'Fiebre y Erupción Cutánea',
    description: 'Un niño de 6 años presenta fiebre alta y una erupción cutánea que comenzó en el tronco y se extendió a extremidades.',
    symptoms: ['Fiebre alta', 'Erupción maculopapular', 'Malestar general'],
    history: 'Inicio de síntomas hace 3 días, no vacunado contra el sarampión',
    physicalExam: 'Temperatura 39.5°C, erupción característica, manchas de Koplik en la mucosa bucal',
    options: [
      'Varicela',
      'Sarampión',
      'Rubéola',
      'Escarlatina'
    ],
    correctAnswer: 1,
    explanation: "La combinación de fiebre alta, erupción característica y manchas de Koplik en un niño no vacunado es altamente sugestiva de Sarampión.",
    category: 'Pediatría',
    references: [
      'https://www.cdc.gov/measles/symptoms/signs-symptoms.html',
      'https://www.who.int/news-room/fact-sheets/detail/measles'
    ]
  },
  {
    id: '9',
    title: 'Dolor Abdominal y Diarrea Crónica',
    description: 'Una mujer de 30 años presenta dolor abdominal recurrente y diarrea crónica que empeora después de comer.',
    symptoms: ['Dolor abdominal', 'Diarrea crónica', 'Pérdida de peso'],
    history: 'Síntomas intermitentes durante el último año, empeoran con ciertos alimentos',
    physicalExam: 'Abdomen blando, doloroso a la palpación difusa, sin masas',
    options: [
      'Síndrome del Intestino Irritable',
      'Enfermedad Celíaca',
      'Enfermedad de Crohn',
      'Colitis Ulcerosa'
    ],
    correctAnswer: 1,
    explanation: "Los síntomas crónicos de dolor abdominal y diarrea que empeoran con la ingesta de alimentos, junto con la pérdida de peso, sugieren Enfermedad Celíaca.",
    category: 'Gastroenterología',
    references: [
      'https://celiac.org/about-celiac-disease/what-is-celiac-disease/',
      'https://www.ncbi.nlm.nih.gov/books/NBK441900/'
    ]
  },
  {
    id: '10',
    title: 'Palpitaciones y Ansiedad',
    description: 'Una mujer de 35 años acude a urgencias por episodios recurrentes de palpitaciones y sensación de ansiedad.',
    symptoms: ['Palpitaciones', 'Ansiedad', 'Temblor fino'],
    history: 'Episodios intermitentes durante los últimos 3 meses, pérdida de peso reciente',
    physicalExam: 'Taquicardia (FC 110 lpm), temblor fino en manos, tiroides palpable',
    options: [
      'Trastorno de Ansiedad',
      'Feocromocitoma',
      'Hipertiroidismo',
      'Síndrome de Taquicardia Postural Ortostática'
    ],
    correctAnswer: 2,
    explanation: "La combinación de palpitaciones, ansiedad, pérdida de peso y hallazgos físicos como taquicardia y tiroides palpable sugieren Hipertiroidismo.",
    category: 'Endocrinología',
    references: [
      'https://www.thyroid.org/hyperthyroidism/',
      'https://www.ncbi.nlm.nih.gov/books/NBK513266/'
    ]
  }
  // ... (se pueden agregar más casos siguiendo este patrón)
];
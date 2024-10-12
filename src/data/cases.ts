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
  },
  {
    id: "11",
    title: "Dolor en el Pecho y Disnea",
    description: "Un hombre de 55 años presenta dolor torácico y dificultad para respirar, especialmente al realizar esfuerzo físico.",
    symptoms: ["Dolor torácico", "Disnea", "Sudoración"],
    history: "Antecedentes de hipertensión y tabaquismo, con aparición gradual de los síntomas en los últimos 6 meses.",
    physicalExam: "Auscultación cardíaca revela un soplo sistólico.",
    options: [
      "Infarto Agudo de Miocardio",
      "Angina de Pecho",
      "Neumotórax",
      "Pericarditis"
    ],
    correctAnswer: 1,
    explanation: "La aparición de dolor torácico con el esfuerzo físico, en un paciente con factores de riesgo cardiovascular, sugiere angina de pecho.",
    category: "Cardiología",
    references: [
      "https://www.heart.org/en/health-topics/angina",
      "https://www.ncbi.nlm.nih.gov/books/NBK470222/"
    ]
  },
  {
    id: "12",
    title: "Fiebre, Cefalea y Rigidez de Cuello",
    description: "Un joven de 25 años se presenta con fiebre alta, dolor de cabeza intenso y rigidez en el cuello.",
    symptoms: ["Fiebre", "Cefalea", "Rigidez de cuello", "Fotofobia"],
    history: "Los síntomas comenzaron bruscamente hace 2 días.",
    physicalExam: "Signo de Brudzinski positivo.",
    options: [
      "Meningitis Bacteriana",
      "Encefalitis",
      "Migraña",
      "Hemorragia Subaracnoidea"
    ],
    correctAnswer: 0,
    explanation: "La aparición brusca de fiebre, cefalea y rigidez de cuello, junto con un signo meníngeo positivo, es altamente sugestiva de meningitis bacteriana.",
    category: "Neurología",
    references: [
      "https://www.cdc.gov/meningitis/bacterial.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK82512/"
    ]
  },
  {
    id: "13",
    title: "Diarrea y Deshidratación en un Niño",
    description: "Un niño de 2 años presenta diarrea aguda y signos de deshidratación después de un viaje reciente.",
    symptoms: ["Diarrea líquida", "Vómitos", "Letargia"],
    history: "Los síntomas comenzaron hace 2 días tras ingerir alimentos en mal estado durante el viaje.",
    physicalExam: "Signos de deshidratación moderada.",
    options: [
      "Gastroenteritis Viral",
      "Intoxicación Alimentaria",
      "Parásitos Intestinales",
      "Alergia Alimentaria"
    ],
    correctAnswer: 1,
    explanation: "La diarrea aguda con historia de exposición a alimentos contaminados es típica de una intoxicación alimentaria.",
    category: "Pediatría",
    references: [
      "https://www.who.int/news-room/fact-sheets/detail/food-safety",
      "https://www.ncbi.nlm.nih.gov/books/NBK470248/"
    ]
  },
  {
    id: "14",
    title: "Hematuria y Dolor Abdominal",
    description: "Un hombre de 40 años acude a consulta con dolor abdominal severo y presencia de sangre en la orina.",
    symptoms: ["Dolor lumbar irradiado hacia la ingle", "Hematuria"],
    history: "El paciente refiere episodios previos de dolor similar, pero más leves.",
    physicalExam: "Dolor a la palpación en la fosa renal derecha.",
    options: [
      "Cálculo Renal",
      "Infección Urinaria",
      "Cáncer Renal",
      "Prostatitis"
    ],
    correctAnswer: 0,
    explanation: "El dolor lumbar irradiado a la ingle, asociado a hematuria, es típico de un cálculo renal.",
    category: "Urología",
    references: [
      "https://www.mayoclinic.org/diseases-conditions/kidney-stones/symptoms-causes/syc-20355755",
      "https://www.ncbi.nlm.nih.gov/books/NBK442022/"
    ]
  },
  {
    id: "15",
    title: "Debilidad Muscular y Visión Doble",
    description: "Una mujer de 28 años presenta debilidad muscular progresiva y visión doble, especialmente al final del día.",
    symptoms: ["Ptosis", "Diplopía", "Debilidad muscular"],
    history: "Los síntomas han empeorado durante los últimos meses.",
    physicalExam: "Ptosis bilateral, debilidad muscular proximal.",
    options: [
      "Esclerosis Múltiple",
      "Miastenia Gravis",
      "Síndrome de Guillain-Barré",
      "Distrofia Muscular"
    ],
    correctAnswer: 1,
    explanation: "La debilidad muscular fluctuante que empeora al final del día, junto con la ptosis y diplopía, es indicativa de Miastenia Gravis.",
    category: "Neurología",
    references: [
      "https://myasthenia.org/",
      "https://www.ncbi.nlm.nih.gov/books/NBK459145/"
    ]
  },
  {
    id: "16",
    title: "Pérdida de Peso y Tos Crónica",
    description: "Un hombre de 60 años con antecedentes de tabaquismo presenta pérdida de peso involuntaria y tos crónica con esputo sanguinolento.",
    symptoms: ["Tos crónica", "Pérdida de peso", "Esputo con sangre"],
    history: "Fumador de 40 años de 20 cigarrillos al día.",
    physicalExam: "Disminución de los sonidos respiratorios en el pulmón derecho.",
    options: [
      "Cáncer de Pulmón",
      "Bronquitis Crónica",
      "Tuberculosis",
      "Neumonía"
    ],
    correctAnswer: 0,
    explanation: "La tos crónica con esputo sanguinolento y la historia de tabaquismo son altamente sugestivas de cáncer de pulmón.",
    category: "Neumología",
    references: [
      "https://www.cancer.org/cancer/lung-cancer.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK482377/"
    ]
  },
  {
    id: "17",
    title: "Ictericia y Dolor Abdominal",
    description: "Una mujer de 50 años presenta ictericia, dolor abdominal en el cuadrante superior derecho y pérdida de apetito.",
    symptoms: ["Ictericia", "Dolor abdominal", "Pérdida de apetito"],
    history: "Historia de abuso crónico de alcohol.",
    physicalExam: "Hepatomegalia palpable.",
    options: [
      "Hepatitis Alcohólica",
      "Cálculos Biliares",
      "Pancreatitis Aguda",
      "Hepatitis Viral"
    ],
    correctAnswer: 0,
    explanation: "La ictericia con hepatomegalia en un paciente con historia de alcoholismo crónico sugiere hepatitis alcohólica.",
    category: "Gastroenterología",
    references: [
      "https://www.mayoclinic.org/diseases-conditions/alcoholic-hepatitis/symptoms-causes/syc-20351388",
      "https://www.ncbi.nlm.nih.gov/books/NBK459275/"
    ]
  },
  {
    id: "18",
    title: "Fiebre y Tos Productiva",
    description: "Un hombre de 40 años presenta fiebre alta, tos productiva y dolor en el pecho al respirar profundo.",
    symptoms: ["Fiebre alta", "Tos productiva", "Dolor pleurítico"],
    history: "Inicio de síntomas hace 3 días.",
    physicalExam: "Estertores crepitantes en base pulmonar derecha.",
    options: [
      "Neumonía Bacteriana",
      "Bronquitis Aguda",
      "COVID-19",
      "Tuberculosis"
    ],
    correctAnswer: 0,
    explanation: "La combinación de fiebre alta, tos productiva y estertores en la auscultación sugiere neumonía bacteriana.",
    category: "Neumología",
    references: [
      "https://www.cdc.gov/pneumonia/index.html",
      "https://www.ncbi.nlm.nih.gov/books/NBK513321/"
    ]
  },
  {
    id: "19",
    title: "Fatiga y Piel Seca",
    description: "Una mujer de 30 años presenta fatiga persistente, piel seca y aumento de peso inexplicado.",
    symptoms: ["Fatiga", "Piel seca", "Aumento de peso"],
    history: "Síntomas han empeorado durante los últimos 6 meses.",
    physicalExam: "Tiroides no palpable, piel seca y áspera.",
    options: [
      "Hipotiroidismo",
      "Depresión",
      "Síndrome de Cushing",
      "Diabetes Tipo 2"
    ],
    correctAnswer: 0,
    explanation: "La fatiga, piel seca y aumento de peso inexplicado, junto con la historia, sugieren hipotiroidismo.",
    category: "Endocrinología",
    references: [
      "https://www.thyroid.org/hypothyroidism/",
      "https://www.ncbi.nlm.nih.gov/books/NBK519561/"
    ]
  },
  {
    id: "20",
    title: "Confusión Aguda y Debilidad",
    description: "Un hombre de 75 años es traído por sus familiares debido a confusión aguda y debilidad generalizada, especialmente en el lado derecho del cuerpo.",
    symptoms: ["Confusión", "Debilidad en un lado del cuerpo", "Dificultad para hablar"],
    history: "Antecedentes de hipertensión y diabetes.",
    physicalExam: "Debilidad en brazo y pierna derecha, desviación de la comisura labial hacia la izquierda.",
    options: [
      "Accidente Cerebrovascular",
      "Demencia",
      "Crisis Epiléptica",
      "Hipoglucemia"
    ],
    explanation: "La presentación aguda de debilidad unilateral y confusión en un paciente con factores de riesgo sugiere un accidente cerebrovascular.",
    correctAnswer: 0,
    category: "Neurología",
    references: [
      "https://www.stroke.org/en/about-stroke/stroke-symptoms",
      "https://www.ncbi.nlm.nih.gov/books/NBK538280/"
    ]
  },

];
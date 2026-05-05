export interface QuizQuestion {
  id: number
  question: string
  options: string[]
  correctIndex: number
  explanation: string
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Qual é a distância oficial de uma meia maratona?',
    options: ['15 km', '18 km', '21,097 km', '25 km'],
    correctIndex: 2,
    explanation: 'A meia maratona tem exatamente 21,097 km — metade dos 42,195 km da maratona olímpica.',
  },
  {
    id: 2,
    question: 'Qual a frequência cardíaca ideal para treino de resistência (zona aeróbica)?',
    options: ['50-60% da FCmáx', '60-70% da FCmáx', '70-80% da FCmáx', '85-95% da FCmáx'],
    correctIndex: 2,
    explanation: 'A zona aeróbica (70-80% da FCmáx) é ideal para desenvolver resistência e queimar gordura de forma eficiente.',
  },
  {
    id: 3,
    question: 'O que é o "Muro" na maratona?',
    options: [
      'Uma barreira física no percurso',
      'Esgotamento do glicogênio muscular por volta do km 30-35',
      'Um recurso de hidratação',
      'O ponto de chegada da prova',
    ],
    correctIndex: 1,
    explanation: 'O "Muro" é o momento em que o corpo esgota o glicogênio e começa a usar gordura como combustível, causando fadiga intensa.',
  },
  {
    id: 4,
    question: 'Quantas horas antes de uma prova é recomendado fazer a última refeição completa?',
    options: ['30 minutos', '1 hora', '2-3 horas', '5 horas'],
    correctIndex: 2,
    explanation: 'O ideal é se alimentar 2 a 3 horas antes da largada para garantir boa digestão e energia disponível.',
  },
  {
    id: 5,
    question: 'O que significa o chip de cronometragem usado nas corridas da LCM?',
    options: [
      'Um acessório decorativo',
      'Um dispositivo que registra seu tempo líquido do percurso',
      'Um cartão de identificação',
      'Um sensor de batimentos cardíacos',
    ],
    correctIndex: 1,
    explanation: 'O chip registra o tempo líquido — do momento em que você cruza a largada até a chegada, independente da posição no pelotão.',
  },
]

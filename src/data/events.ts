export interface KitDelivery {
  local: string
  address: string
  date: string
  hours: string
}

export interface Event {
  id: string
  name: string
  date: string
  location: string
  address: string
  expectedParticipants: number
  chipBrasilUrl: string
  status: 'open' | 'soon' | 'closed'
  image: string
  images: string[]
  distance: string
  description: string
  kitDelivery?: KitDelivery
  rules: string[]
}

export const events: Event[] = [
  {
    id: '1',
    name: 'Corrida LCM 10K',
    date: '2025-06-15',
    location: 'Orla de Palmas, TO',
    address: 'Orla da Graciosa — Av. NS 02, Palmas, Tocantins',
    expectedParticipants: 1500,
    chipBrasilUrl: 'https://www.chipbrasil.com.br',
    status: 'open',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
      'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    ],
    distance: '10 KM',
    description:
      'A Corrida LCM 10K é o evento mais esperado do semestre. Com percurso pela Orla da Graciosa, às margens do Lago de Palmas, proporciona uma experiência única para atletas de todos os níveis. Cronometragem oficial por chip RFID via LCM Crono.',
    kitDelivery: {
      local: 'Arena LCM — Setor Comercial',
      address: 'Av. Teotônio Segurado, 1102 — Sala 04, Palmas, TO',
      date: '13 e 14 de junho de 2025',
      hours: 'Das 08h às 18h',
    },
    rules: [
      'É obrigatório o uso de camiseta oficial do evento durante toda a prova.',
      'A retirada do kit só pode ser feita pelo próprio atleta, mediante apresentação de documento com foto.',
      'Menores de 16 anos devem apresentar autorização dos responsáveis.',
      'O percurso será sinalizado com cones e fiscais a cada 1 km.',
      'Haverá pontos de hidratação a cada 2,5 km e ao final da prova.',
      'Animais de estimação e bicicletas não são permitidos no percurso.',
      'Largada às 06h30. Atletas devem estar no local às 06h00.',
      'O tempo máximo para conclusão da prova é de 1h30.',
    ],
  },
  {
    id: '2',
    name: 'Night Run Tocantins',
    date: '2025-07-20',
    location: 'Praça dos Girassóis, Palmas, TO',
    address: 'Praça dos Girassóis — Av. JK, Centro, Palmas, TO',
    expectedParticipants: 800,
    chipBrasilUrl: 'https://www.chipbrasil.com.br',
    status: 'open',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
      'https://images.unsplash.com/photo-1486218119243-13301ef26a17?w=800&q=80',
      'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
    ],
    distance: '5 KM / 10 KM',
    description:
      'A Night Run Tocantins é a corrida noturna mais vibrante do estado. Com iluminação especial pelas ruas do Centro de Palmas, largada às 19h e energia contagiante, é uma experiência que vai além do esporte. Disponível nas distâncias de 5 km e 10 km.',
    kitDelivery: {
      local: 'Shopping Capim Dourado',
      address: 'Av. Teotônio Segurado — Praça de Eventos, Palmas, TO',
      date: '18 e 19 de julho de 2025',
      hours: 'Das 10h às 20h',
    },
    rules: [
      'O uso de colete refletivo ou camiseta com detalhes refletivos é obrigatório.',
      'Largada às 19h00. Chegada no local às 18h30.',
      'O percurso será iluminado e monitorado por equipe de segurança.',
      'Pontos de hidratação a cada 2,5 km.',
      'Tempo máximo: 1h para o 5K e 1h45 para o 10K.',
      'Retirada do kit apenas com documento com foto e comprovante de inscrição.',
    ],
  },
  {
    id: '3',
    name: 'Meia Maratona do Tocantins',
    date: '2025-08-31',
    location: 'Palmas, TO',
    address: 'Largada: Praça dos Girassóis — Chegada: Orla da Graciosa, Palmas, TO',
    expectedParticipants: 2000,
    chipBrasilUrl: 'https://www.chipbrasil.com.br',
    status: 'soon',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1544717305-2782549b5136?w=800&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    ],
    distance: '21 KM',
    description:
      'O maior evento de corrida de rua do Tocantins. A Meia Maratona percorre os pontos mais icônicos de Palmas, da Praça dos Girassóis até a Orla da Graciosa, com largada às 05h30 para aproveitar o frescor da manhã. Cronometragem oficial com chip RFID, categoria élite e amador.',
    kitDelivery: {
      local: 'Arena Multiuso de Palmas',
      address: 'Av. Parque, s/n — Setor Buritis, Palmas, TO',
      date: '29 e 30 de agosto de 2025',
      hours: 'Das 08h às 19h',
    },
    rules: [
      'Prova exclusiva para maiores de 18 anos ou 16 anos com autorização e acompanhamento.',
      'Largada às 05h30. Apresentação obrigatória às 05h00.',
      'Haverá pontos de hidratação e gel energético a cada 5 km.',
      'Tempo máximo de conclusão: 3 horas.',
      'É obrigatório o uso de camiseta oficial LCM durante toda a prova.',
      'Atletas que não completarem o percurso em 3h serão retirados de circulação por segurança.',
      'Bagageiro disponível no local de largada — responsabilidade do atleta.',
      'Proibido uso de fones de ouvido em ambos os ouvidos durante a prova.',
    ],
  },
  {
    id: '4',
    name: 'Desafio da Superação',
    date: '2025-10-12',
    location: 'Parque Cesamar, Palmas, TO',
    address: 'Parque Cesamar — Av. Teotônio Segurado, Palmas, TO',
    expectedParticipants: 600,
    chipBrasilUrl: 'https://www.chipbrasil.com.br',
    status: 'soon',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
      'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
    ],
    distance: '15 KM',
    description:
      'O Desafio da Superação é uma prova técnica com percurso que inclui trechos do Parque Cesamar, com subidas e descidas, projetado para quem busca superar seus próprios limites. Um evento para atletas experientes que querem testar a resistência em terreno variado.',
    rules: [
      'Largada às 06h00. Chegada obrigatória às 05h30.',
      'Percurso com trechos não pavimentados — calçado trail running recomendado.',
      'Hidratação a cada 3 km.',
      'Tempo máximo: 2h30.',
      'Obrigatório o uso de camiseta oficial.',
      'Proibido uso de fones em ambos os ouvidos.',
    ],
  },
]

export const nextEvent = events[0]

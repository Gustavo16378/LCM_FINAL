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

// T00:00:00 sem Z = meia-noite no fuso local (evita o bug de +1 dia do UTC)
const viaEsporte = 'https://viaesporte.com/'

export const events: Event[] = [
  {
    id: '1',
    name: '1ª Etapa do Triathlon Cross',
    date: '2026-05-17T00:00:00',
    location: 'Palmas, TO',
    address: 'Orla da Graciosa — Av. NS 02, Palmas, Tocantins',
    expectedParticipants: 400,
    chipBrasilUrl: viaEsporte,
    status: 'open',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    ],
    distance: 'Triathlon Cross',
    description:
      'A 1ª Etapa do Triathlon Cross marca o início da temporada multiesportiva em Palmas. Com percurso aquático na Orla da Graciosa, ciclismo pela Av. NS 02 e corrida a pé até a chegada, o evento reúne atletas de natação, ciclismo e corrida em um único desafio. Cronometragem oficial chip RFID pela LCM Crono.',
    kitDelivery: {
      local: 'Arena LCM — Setor Comercial',
      address: 'Av. Teotônio Segurado, 1102 — Sala 04, Palmas, TO',
      date: '15 e 16 de maio de 2026',
      hours: 'Das 08h às 18h',
    },
    rules: [
      'Capacete homologado obrigatório durante todo o percurso ciclístico.',
      'Óculos de natação e touca obrigatórios para a prova aquática.',
      'A retirada do kit só pode ser feita pelo próprio atleta, com documento com foto.',
      'Menores de 18 anos devem apresentar autorização dos responsáveis.',
      'Largada às 07h00. Atletas devem estar no local às 06h30.',
      'Pontos de hidratação em todos os percursos.',
      'Proibido uso de fones de ouvido durante a prova.',
      'Tempo máximo de conclusão: 4 horas.',
    ],
  },
  {
    id: '2',
    name: "Stive's Race",
    date: '2026-05-31T00:00:00',
    location: 'Palmas, TO',
    address: 'Praça dos Girassóis — Av. JK, Centro, Palmas, TO',
    expectedParticipants: 600,
    chipBrasilUrl: viaEsporte,
    status: 'open',
    image: '/photos/Stives Race/6ª EDIÇÃO DESAFIO STIVE’S RACE.jpeg',
    images: [
      '/photos/Stives Race/6ª EDIÇÃO DESAFIO STIVE’S RACE.jpeg',
    ],
    distance: '5 KM / 10 KM',
    description:
      "A Stive's Race traz energia, música e comunidade para as ruas de Palmas. Com percursos de 5 km e 10 km partindo da Praça dos Girassóis, é ideal para atletas de todos os níveis que buscam uma experiência vibrante e divertida no coração da capital. Cronometragem LCM Crono.",
    kitDelivery: {
      local: 'Shopping Capim Dourado',
      address: 'Av. Teotônio Segurado — Praça de Eventos, Palmas, TO',
      date: '29 e 30 de maio de 2026',
      hours: 'Das 10h às 20h',
    },
    rules: [
      'Largada às 06h30. Atletas devem estar no local às 06h00.',
      'Retirada do kit somente com documento com foto.',
      'Pontos de hidratação a cada 2,5 km.',
      'Tempo máximo: 45 min para o 5K e 1h30 para o 10K.',
      'Proibido uso de fones em ambos os ouvidos.',
      'Camiseta oficial obrigatória durante toda a prova.',
    ],
  },
  {
    id: '3',
    name: 'Corrida da Marinha',
    date: '2026-06-07T00:00:00',
    location: 'Palmas, TO',
    address: 'Av. NS 10, Palmas, Tocantins',
    expectedParticipants: 700,
    chipBrasilUrl: viaEsporte,
    status: 'open',
    image: '/photos/Corrida da Marinha/1ª CORRIDA DA MARINHA.webp',
    images: [
      '/photos/Corrida da Marinha/1ª CORRIDA DA MARINHA.webp',
    ],
    distance: '5 KM / 10 KM',
    description:
      'A Corrida da Marinha celebra o espírito de superação da Marinha do Brasil. Com percurso pelas principais avenidas de Palmas, o evento reúne militares e civis em uma prova que homenageia os valores de disciplina, coragem e resistência. Aberta ao público em geral.',
    rules: [
      'Documento com foto obrigatório para retirada do kit.',
      'Largada às 07h00. Presença obrigatória às 06h30.',
      'Pontos de hidratação a cada 2,5 km.',
      'Camiseta oficial obrigatória durante a prova.',
      'Proibido uso de fones em ambos os ouvidos.',
      'Tempo máximo: 45 min para 5K e 1h30 para 10K.',
    ],
  },
  {
    id: '4',
    name: 'Meia Maratona das Praias',
    date: '2026-06-14T00:00:00',
    location: 'Orla de Palmas, TO',
    address: 'Praia da Graciosa — Av. NS 02, Palmas, Tocantins',
    expectedParticipants: 1200,
    chipBrasilUrl: viaEsporte,
    status: 'open',
    image: '/photos/Meia Maratona das Praias/MEIA MARATONA DAS PRAIAS.webp',
    images: [
      '/photos/Meia Maratona das Praias/MEIA MARATONA DAS PRAIAS.webp',
    ],
    distance: '21 KM',
    description:
      'A Meia Maratona das Praias é a 2ª Etapa do Circuito Race Tour. Com percurso às margens do Lago de Palmas, passando pelas praias mais famosas da capital, a prova combina beleza natural e alta performance em 21 km de emoção. Cronometragem oficial LCM Crono com chip RFID.',
    kitDelivery: {
      local: 'Arena Multiuso de Palmas',
      address: 'Av. Parque, s/n — Setor Buritis, Palmas, TO',
      date: '12 e 13 de junho de 2026',
      hours: 'Das 08h às 19h',
    },
    rules: [
      'Prova para maiores de 18 anos ou 16 anos com autorização.',
      'Largada às 05h30. Apresentação obrigatória às 05h00.',
      'Hidratação e gel energético a cada 5 km.',
      'Tempo máximo de conclusão: 3 horas.',
      'Camiseta oficial LCM obrigatória durante toda a prova.',
      'Bagageiro disponível no local de largada.',
      'Proibido uso de fones em ambos os ouvidos.',
    ],
  },
  {
    id: '5',
    name: 'Corrida da Casa das Cadeiras',
    date: '2026-07-12T00:00:00',
    location: 'Palmas, TO',
    address: 'Parque Cesamar — Av. Teotônio Segurado, Palmas, TO',
    expectedParticipants: 500,
    chipBrasilUrl: viaEsporte,
    status: 'soon',
    image: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    ],
    distance: '5 KM / 10 KM',
    description:
      'A Corrida da Casa das Cadeiras percorre um dos pontos históricos de Palmas. Com ambiente festivo e familiar, a prova une atletas de diferentes perfis em um circuito urbano seguro e bem sinalizado, passando pelos parques e espaços verdes da capital.',
    rules: [
      'Largada às 06h30. Chegada obrigatória às 06h00.',
      'Camiseta oficial obrigatória durante a prova.',
      'Retirada do kit somente com documento com foto.',
      'Pontos de hidratação a cada 2,5 km.',
      'Proibido uso de fones em ambos os ouvidos.',
    ],
  },
  {
    id: '6',
    name: 'Fla Run',
    date: '2026-08-08T00:00:00',
    location: 'Palmas, TO',
    address: 'Praça dos Girassóis — Av. JK, Centro, Palmas, TO',
    expectedParticipants: 800,
    chipBrasilUrl: viaEsporte,
    status: 'soon',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
      'https://images.unsplash.com/photo-1486218119243-13301ef26a17?w=800&q=80',
    ],
    distance: '5 KM / 10 KM',
    description:
      'A Fla Run traz o espírito do esporte e da comunidade às ruas de Palmas. Um evento vibrante que combina atletismo e paixão, reunindo corredores de todos os níveis em um percurso animado pelo centro da cidade com cronometragem oficial LCM Crono.',
    rules: [
      'Largada às 06h30.',
      'Camiseta oficial obrigatória.',
      'Retirada do kit com documento com foto.',
      'Hidratação a cada 2,5 km.',
      'Proibido uso de fones em ambos os ouvidos.',
    ],
  },
  {
    id: '7',
    name: 'Corrida da OAB',
    date: '2026-08-16T00:00:00',
    location: 'Palmas, TO',
    address: 'OAB Tocantins — Av. Teotônio Segurado, Palmas, TO',
    expectedParticipants: 600,
    chipBrasilUrl: viaEsporte,
    status: 'soon',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    ],
    distance: '5 KM / 10 KM',
    description:
      'A Corrida da OAB é uma iniciativa da Ordem dos Advogados do Brasil — Seccional Tocantins para promover saúde, bem-estar e integração entre a comunidade jurídica e o público em geral. Uma prova que une o direito e o esporte em prol de uma Palmas mais saudável.',
    rules: [
      'Evento aberto à comunidade em geral.',
      'Largada às 06h30.',
      'Camiseta oficial obrigatória.',
      'Hidratação a cada 2,5 km.',
      'Proibido uso de fones em ambos os ouvidos.',
    ],
  },
  {
    id: '8',
    name: '3ª Etapa Race Tour',
    date: '2026-08-30T00:00:00',
    location: 'Orla de Palmas, TO',
    address: 'Orla da Graciosa — Av. NS 02, Palmas, Tocantins',
    expectedParticipants: 1000,
    chipBrasilUrl: viaEsporte,
    status: 'soon',
    image: 'https://images.unsplash.com/photo-1461896836934-1f360e9cad3c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1461896836934-1f360e9cad3c?w=800&q=80',
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
    ],
    distance: '10 KM / 21 KM',
    description:
      'A 3ª Etapa do Circuito Race Tour encerra agosto em grande estilo. Um dos pontos mais aguardados do circuito anual, o evento reúne atletas de toda a região em um percurso de alto nível pela Orla da Graciosa, com cronometragem oficial LCM Crono e resultado em tempo real.',
    rules: [
      'Largada às 06h00.',
      'Camiseta oficial obrigatória.',
      'Hidratação a cada 2,5 km (10K) e 5 km (21K).',
      'Tempo máximo: 1h30 para 10K e 3h para 21K.',
      'Bagageiro disponível para a prova de 21K.',
      'Proibido uso de fones em ambos os ouvidos.',
    ],
  },
  {
    id: '9',
    name: 'Iberleague Tocantins',
    date: '2026-09-04T00:00:00',
    location: 'Palmas, TO',
    address: 'Arena Multiuso de Palmas — Av. Parque, s/n, Palmas, TO',
    expectedParticipants: 1500,
    chipBrasilUrl: viaEsporte,
    status: 'soon',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
      'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
    ],
    distance: 'Multiesportivo',
    description:
      'A Iberleague Tocantins é o maior evento multiesportivo do estado, com quatro dias de competições (04 a 07 de setembro) envolvendo corrida de rua, triathlon, ciclismo e natação. Uma festa do esporte que movimenta atletas de todo o Brasil em Palmas, com cronometragem LCM Crono em todas as provas.',
    rules: [
      'Evento com duração de 04 a 07 de setembro de 2026.',
      'Inscrição por modalidade — verificar categorias disponíveis na Via Esporte.',
      'Cada modalidade terá suas próprias regras e horários de largada.',
      'Cronometragem oficial em todas as provas pela LCM Crono.',
      'Documento com foto obrigatório para credenciamento.',
    ],
  },
  {
    id: '10',
    name: 'Corrida de Revezamento',
    date: '2026-09-12T00:00:00',
    location: 'Palmas, TO',
    address: 'Av. Teotônio Segurado — Ronã Contadores, Palmas, TO',
    expectedParticipants: 800,
    chipBrasilUrl: viaEsporte,
    status: 'soon',
    image: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    ],
    distance: 'Revezamento',
    description:
      'A Corrida de Revezamento Ronã Contadores celebra o trabalho em equipe. Times de 4 a 6 corredores se revezam em percurso total de 20 km pelas principais avenidas de Palmas, com cada integrante correndo um trecho. Prova estratégica, divertida e cheia de espírito coletivo.',
    rules: [
      'Times de 4 a 6 corredores por equipe.',
      'Cada integrante corre um trecho pré-definido do percurso.',
      'Inscrição por equipe na Via Esporte.',
      'Camisetas personalizadas da equipe são permitidas.',
      'Proibido alterar a ordem dos corredores após o início.',
      'Cronometragem oficial chip RFID pela LCM Crono.',
    ],
  },
  {
    id: '11',
    name: '3ª Etapa Copa Palmas Triathlon',
    date: '2026-09-13T00:00:00',
    location: 'Palmas, TO',
    address: 'Orla da Graciosa — Av. NS 02, Palmas, Tocantins',
    expectedParticipants: 500,
    chipBrasilUrl: viaEsporte,
    status: 'soon',
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
      'https://images.unsplash.com/photo-1486218119243-13301ef26a17?w=800&q=80',
    ],
    distance: 'Sprint Triathlon',
    description:
      'A 3ª Etapa da Copa Palmas Triathlon define o ranking da temporada. Com percurso aquático na Orla da Graciosa, seguido de circuito ciclístico e corrida a pé, a prova é referência em triathlon no interior do Brasil. Cronometragem LCM Crono com chip RFID em todas as transições.',
    rules: [
      'Capacete homologado obrigatório no percurso ciclístico.',
      'Touca e óculos de natação obrigatórios na prova aquática.',
      'Atletas devem estar na área de transição 1h antes da largada.',
      'Proibido receber auxílio externo durante a prova.',
      'Tempo máximo de conclusão: 2h30.',
      'Documento com foto obrigatório para credenciamento.',
    ],
  },
  {
    id: '12',
    name: 'Smart Fit Run',
    date: '2026-10-11T00:00:00',
    location: 'Palmas, TO',
    address: 'Shopping Capim Dourado — Av. Teotônio Segurado, Palmas, TO',
    expectedParticipants: 700,
    chipBrasilUrl: viaEsporte,
    status: 'soon',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    ],
    distance: '5 KM / 10 KM',
    description:
      'A Smart Fit Run une o universo fitness à corrida de rua em um evento animado e acessível para todos. Com percurso urbano de 5 km e 10 km pelas ruas de Palmas, o evento promove saúde, bem-estar e comunidade. Venha com a galera da academia e supere seus limites na pista.',
    rules: [
      'Evento aberto a alunos Smart Fit e ao público geral.',
      'Largada às 07h00.',
      'Camiseta oficial obrigatória.',
      'Hidratação a cada 2,5 km.',
      'Proibido uso de fones em ambos os ouvidos.',
    ],
  },
  {
    id: '13',
    name: 'Copa Norte de Triathlon',
    date: '2026-11-01T00:00:00',
    location: 'Palmas, TO',
    address: 'Orla da Graciosa — Av. NS 02, Palmas, Tocantins',
    expectedParticipants: 600,
    chipBrasilUrl: viaEsporte,
    status: 'soon',
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    ],
    distance: 'Olympic Distance',
    description:
      'A Copa Norte de Triathlon é o maior evento de triathlon do Norte e Centro-Oeste do Brasil, reunindo os melhores atletas da região em Palmas. Com distância olímpica — 1.500m de natação, 40 km de ciclismo e 10 km de corrida — é a prova mais exigente e prestigiada do circuito regional.',
    rules: [
      'Capacete homologado obrigatório.',
      'Touca fornecida pela organização é obrigatória na prova aquática.',
      'Área de transição fecha 30 min antes da largada.',
      'Proibido receber auxílio externo.',
      'Tempo máximo: 3 horas.',
      'Documento com foto obrigatório para credenciamento.',
    ],
  },
  {
    id: '14',
    name: 'Meia Maratona da PF',
    date: '2026-11-15T00:00:00',
    location: 'Palmas, TO',
    address: 'Superintendência Regional da PF — Av. Parque, s/n, Palmas, TO',
    expectedParticipants: 900,
    chipBrasilUrl: viaEsporte,
    status: 'soon',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    ],
    distance: '21 KM',
    description:
      'A Meia Maratona da Polícia Federal homenageia os servidores e agentes da PF e é aberta à comunidade em geral. Com 21 km de percurso pelas avenidas de Palmas, o evento exige preparo físico e determinação. Uma prova de resistência em um dos meses mais agradáveis do ano no Tocantins.',
    rules: [
      'Prova para maiores de 18 anos.',
      'Largada às 05h30.',
      'Hidratação e gel energético a cada 5 km.',
      'Tempo máximo: 3 horas.',
      'Camiseta oficial obrigatória.',
      'Bagageiro disponível no local de largada.',
      'Proibido uso de fones em ambos os ouvidos.',
    ],
  },
  {
    id: '15',
    name: 'Desafio dos Fortes',
    date: '2026-12-13T00:00:00',
    location: 'Palmas, TO',
    address: 'Parque Cesamar — Av. Teotônio Segurado, Palmas, TO',
    expectedParticipants: 800,
    chipBrasilUrl: viaEsporte,
    status: 'soon',
    image: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
      'https://images.unsplash.com/photo-1486218119243-13301ef26a17?w=800&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    ],
    distance: '15 KM',
    description:
      'O Desafio dos Fortes encerra a temporada com chave de ouro. Uma prova técnica de 15 km com trechos no Parque Cesamar, subidas, descidas e terreno variado para atletas que querem superar seus limites antes do final de ano. O encerramento épico do calendário LCM 2026.',
    rules: [
      'Largada às 06h00.',
      'Percurso com trechos não pavimentados — calçado trail running recomendado.',
      'Hidratação a cada 3 km.',
      'Tempo máximo: 2h30.',
      'Camiseta oficial obrigatória.',
      'Proibido uso de fones em ambos os ouvidos.',
    ],
  },
]

export const nextEvent = events.find(e => new Date(e.date) > new Date()) ?? events[events.length - 1]

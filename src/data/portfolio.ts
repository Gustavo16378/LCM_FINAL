export interface PortfolioItem {
  id: string
  name: string
  date: string
  participants: number
  image: string
  images: string[]
  description: string
  results: string
  videoUrl?: string
  size: 'large' | 'medium' | 'small'
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    name: 'Meia Maratona do Tocantins',
    date: 'Agosto 2024',
    participants: 2100,
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
      'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
    ],
    description:
      'A maior edição da história. Com 2.100 atletas inscritos, percurso de 21 km cortando Palmas do centro até a Orla da Graciosa. Cobertura completa pela LCM Crono com chip RFID, painel de resultados em tempo real e transmissão ao vivo.',
    results:
      'Masculino: 1º Giovani dos Santos (1h28min) · 2º Rafael Alves (1h31min) · 3º Pedro Costa (1h34min) | Feminino: 1ª Carla Ribeiro (1h39min) · 2ª Ana Beatriz (1h42min) · 3ª Fernanda Lima (1h45min)',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    size: 'large',
  },
  {
    id: '2',
    name: 'Night Run Tocantins',
    date: 'Julho 2024',
    participants: 850,
    image: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80',
      'https://images.unsplash.com/photo-1486218119243-13301ef26a17?w=800&q=80',
    ],
    description:
      'Com luzes, música e 850 atletas pelas ruas iluminadas de Palmas. A Night Run 2024 foi a mais disputada da história, com largada às 19h e festa de chegada com DJ ao vivo.',
    results:
      '10K — Masculino: Felipe Nunes (38min) | 10K — Feminino: Mariana Torres (44min) | 5K — Masculino: João Melo (21min) | 5K — Feminino: Livia Santos (24min)',
    size: 'medium',
  },
  {
    id: '3',
    name: 'Corrida LCM 10K',
    date: 'Junho 2024',
    participants: 1600,
    image: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80',
    ],
    description:
      'Clássico da corrida de rua em Palmas. Com 1.600 participantes e percurso pela Orla do Lago, a Corrida LCM 10K 2024 foi a maior edição em número de inscritos da história do evento.',
    results:
      'Masculino: 1º Giovani dos Santos (35min) | Feminino: 1ª Carla Ribeiro (40min)',
    size: 'medium',
  },
  {
    id: '4',
    name: 'Desafio da Superação',
    date: 'Outubro 2023',
    participants: 620,
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
    ],
    description:
      'Prova técnica de 15 km com percurso desafiador no Parque Cesamar. Trechos com subidas, descidas e trilhas que testaram o limite de cada atleta.',
    results:
      'Masculino: 1º Marcos Oliveira (1h12min) | Feminino: 1ª Juliana Freitas (1h28min)',
    size: 'small',
  },
  {
    id: '5',
    name: 'Corrida LCM 15K',
    date: 'Setembro 2023',
    participants: 980,
    image: 'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1507034589631-9433cc6bc453?w=800&q=80',
      'https://images.unsplash.com/photo-1486218119243-13301ef26a17?w=800&q=80',
    ],
    description:
      '15 km pela capital, incluindo a Avenida JK e o Bosque dos Pioneiros. Uma das provas mais completas da temporada, com largada e chegada na Praça dos Girassóis.',
    results:
      'Masculino: 1º Rafael Alves (58min) | Feminino: 1ª Ana Beatriz (1h06min)',
    size: 'small',
  },
]

export interface PodiumAthlete {
  position: 1 | 2 | 3
  name: string
  time: string
  category: string
  photo: string
}

export interface PodiumEvent {
  id: string
  name: string
  date: string
  location: string
  distance: string
  categories: {
    label: string
    athletes: PodiumAthlete[]
  }[]
}

export const lastEvent: PodiumEvent = {
  id: '1',
  name: 'Meia Maratona do Tocantins',
  date: '2024-09-15',
  location: 'Palmas, TO',
  distance: '21K',
  categories: [
    {
      label: 'Masculino Geral',
      athletes: [
        {
          position: 1,
          name: 'Giovani dos Santos',
          time: '1h28m14s',
          category: 'Masculino Geral',
          photo: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80',
        },
        {
          position: 2,
          name: 'Felipe Nunes',
          time: '1h31m02s',
          category: 'Masculino Geral',
          photo: 'https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?w=400&q=80',
        },
        {
          position: 3,
          name: 'Rafael Costa',
          time: '1h33m49s',
          category: 'Masculino Geral',
          photo: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80',
        },
      ],
    },
    {
      label: 'Feminino Geral',
      athletes: [
        {
          position: 1,
          name: 'Carla Ribeiro',
          time: '1h44m31s',
          category: 'Feminino Geral',
          photo: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&q=80',
        },
        {
          position: 2,
          name: 'Mariana Torres',
          time: '1h47m18s',
          category: 'Feminino Geral',
          photo: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=400&q=80',
        },
        {
          position: 3,
          name: 'Priscila Alves',
          time: '1h51m55s',
          category: 'Feminino Geral',
          photo: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&q=80',
        },
      ],
    },
  ],
}

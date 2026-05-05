export interface Testimonial {
  id: string
  name: string
  city: string
  event: string
  videoUrl: string
  thumbnail: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ana Beatriz Souza',
    city: 'Palmas, TO',
    event: 'Meia Maratona do Tocantins 2024',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=600&q=80',
  },
  {
    id: '2',
    name: 'Ricardo Mendes',
    city: 'Araguaína, TO',
    event: 'Night Run Tocantins 2024',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    id: '3',
    name: 'Fernanda Castro',
    city: 'Palmas, TO',
    event: 'Corrida LCM 10K 2024',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
  },
  {
    id: '4',
    name: 'Marcos Oliveira',
    city: 'Gurupi, TO',
    event: 'Desafio da Superação 2023',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
  },
  {
    id: '5',
    name: 'Juliana Freitas',
    city: 'Porto Nacional, TO',
    event: 'Corrida LCM 15K 2023',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
  },
]

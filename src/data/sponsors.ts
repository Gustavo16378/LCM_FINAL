export interface Sponsor {
  id: string
  name: string
  logo: string
  type: 'annual' | 'event'
  eventId?: string
  website?: string
}

export const sponsors: Sponsor[] = [
  {
    id: '1',
    name: 'Governo do Tocantins',
    logo: 'https://via.placeholder.com/200x80/0A0E1A/F5560A?text=GOV+TO',
    type: 'annual',
    website: '#',
  },
  {
    id: '2',
    name: 'Prefeitura de Palmas',
    logo: 'https://via.placeholder.com/200x80/0A0E1A/F5560A?text=PALMAS',
    type: 'annual',
    website: '#',
  },
  {
    id: '3',
    name: 'Sebrae Tocantins',
    logo: 'https://via.placeholder.com/200x80/0A0E1A/F5560A?text=SEBRAE',
    type: 'annual',
    website: '#',
  },
  {
    id: '4',
    name: 'Chip Brasil',
    logo: 'https://via.placeholder.com/200x80/0A0E1A/FFFFFF?text=CHIP+BRASIL',
    type: 'event',
    eventId: '1',
    website: 'https://www.chipbrasil.com.br',
  },
  {
    id: '5',
    name: 'Decathlon',
    logo: 'https://via.placeholder.com/200x80/0A0E1A/FFFFFF?text=DECATHLON',
    type: 'event',
    eventId: '2',
    website: '#',
  },
  {
    id: '6',
    name: 'Unimed Palmas',
    logo: 'https://via.placeholder.com/200x80/0A0E1A/FFFFFF?text=UNIMED',
    type: 'event',
    eventId: '3',
    website: '#',
  },
]

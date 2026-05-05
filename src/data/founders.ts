export interface Founder {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export const founders: Founder[] = [
  {
    id: 'cezar',
    name: 'Cézar Leão',
    role: 'Diretor Técnico',
    bio: 'Professor de Educação Física com mais de 20 anos de docência universitária. MBA em Gestão Organizacional. Ex-técnico da Seleção Brasileira de Handebol. Referência em gestão e planejamento esportivo no Centro-Oeste.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 'luiz',
    name: 'Luiz Capatan',
    role: 'Gerente Executivo',
    bio: 'Professor de Educação Física. MBA pela FGV. Gestor de futebol com certificações CBF e FIFA. Especialização pelo COB. Gestor da Escola Oficial do Flamengo em Palmas. Referência em gestão esportiva de alto nível.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    id: 'matheus',
    name: 'Matheus Morbeck',
    role: 'Gerente Executivo',
    bio: 'Professor de Educação Física. Conselheiro do CREF 14. Coordenador do curso de Educação Física da ULBRA Palmas. Comprometido com a formação de novos profissionais e o desenvolvimento esportivo do Tocantins.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
  },
]

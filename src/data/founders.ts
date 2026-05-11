import cezarImg from '../assets/founders/Cezar.png'
import luizImg from '../assets/founders/Luiz.png'
import matheusImg from '../assets/founders/Matheus.png'

export interface Founder {
  id: string
  name: string
  role: string
  bio: string
  image: string
}

export const founders: Founder[] = [
  {
    id: 'luiz',
    name: 'Luiz Capatan',
    role: 'Gerente Executivo',
    bio: 'Professor de Educação Física. MBA pela FGV. Gestor de futebol com certificações CBF e FIFA. Especialização pelo COB. Gestor da Escola Oficial do Flamengo em Palmas. Referência em gestão esportiva de alto nível.',
    image: luizImg,
  },
  {
    id: 'cezar',
    name: 'Cézar Leão',
    role: 'Diretor Técnico',
    bio: 'Professor de Educação Física com mais de 20 anos de docência universitária. MBA em Gestão Organizacional. Ex-técnico da Seleção Brasileira de Handebol. Referência em gestão e planejamento esportivo no Centro-Oeste.',
    image: cezarImg,
  },
  {
    id: 'matheus',
    name: 'Matheus Morbeck',
    role: 'Gerente Executivo',
    bio: 'Professor de Educação Física. Conselheiro do CREF 14. Coordenador do curso de Educação Física da ULBRA Palmas. Comprometido com a formação de novos profissionais e o desenvolvimento esportivo do Tocantins.',
    image: matheusImg,
  },
]

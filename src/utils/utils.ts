// utils.ts

export interface Item {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
  SKU: string;
}

export const itemsParaCompra: Item[] = [
  {
    id: 1,
    nome: "Notebook",
    preco: 3500.0,
    descricao: "Notebook de alta performance com 16GB de RAM e 512GB SSD.",
    imagem: "https://imgs.casasbahia.com.br/55065634/1g.jpg",
    SKU: "sb21121876553352856",
  },
  {
    id: 2,
    nome: "Smartphone",
    preco: 2500.0,
    descricao: "Smartphone com tela de 6.5 polegadas, 128GB ultra memoria.",
    imagem: "https://imgs.casasbahia.com.br/55065665/1g.jpg",
    SKU: "sa2112187655652856",
  },
  {
    id: 3,
    nome: "Fone de Ouvido",
    preco: 300.0,
    descricao: "Fone de ouvido sem fio com cancelamento de ruído ativo.",
    imagem: "https://imgs.casasbahia.com.br/1557924206/1xg.jpg",
    SKU: "sa2112187655652856",
  },
  {
    id: 4,
    nome: "Monitor",
    preco: 1200.0,
    descricao: "Monitor de 27 polegadas com resolução 4K e tecnologia IPS.",
    imagem: "https://imgs.casasbahia.com.br/55020706/1xg.jpg",
    SKU: "sa2112187655652856",
  },
  {
    id: 5,
    nome: "Teclado Mecânico",
    preco: 450.0,
    descricao: "Teclado mecânico com switches Cherry MX Blue e iluminação RGB.",
    imagem: "https://imgs.casasbahia.com.br/1561822230/1xg.jpg",
    SKU: "sa2112187655652856",
  },
];

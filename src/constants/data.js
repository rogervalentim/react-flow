import images from './images';

const linksDashboard = [
    {
      id: 1,
      title: "Negócios",
      path: "/negocios",
    },
    {
      id: 2,
      title: "Projetos",
      path: "/projetos",
    },
    {
      id: 3,
      title: "Finanças",
      path: "/finanças"
    }
  ];

const homeContent = [
    {
        title: "Seja bem vindo ao meu React Flow",
        image: images.HomeImage,
    },
]

export default { homeContent, linksDashboard}


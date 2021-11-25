import { v4 as uuidv4 } from 'uuid';
import SystemedInformationSante from '../images/SystemedInformationSante.png';
import SymfonyImg from '../images/Symfony.jpg';
import JeuEchec from '../images/jeuEchec.jpg';
import ReactJs from '../images/ReactJs.png';
import BlogVoyage from '../images/BlogVoyage.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Symfony',
    desc:
      "Durant ma formation, j'ai pu avoir des cours sur symfony et créer une gestion des hopitaux",
    img: SymfonyImg,
  },
  {
    id: uuidv4(),
    name: 'JeuEchec',
    desc: "Nous avons créer un jeu d'Echec",
    img: JeuEchec,
  },
  {
    id: uuidv4(),
    name: 'ReactJs',
    desc:
      "J'ai pu faire de la veille technologique en apprenant le React Js en faisant ce PortFolio",
    img: ReactJs,
  },
  {
    id: uuidv4(),
    name: 'BlogVoyage',
    desc:
      'Le blog de voyage nous a permis de nous apprendre le css et le html en première année ',
    img: BlogVoyage,
  },
  {
    id: uuidv4(),
    name: 'SystemedInformationSante',
    desc: 'Nous avons eu aussi la possibilité de faire un projet réseau',
    img: SystemedInformationSante,
  },
];

export default projects;

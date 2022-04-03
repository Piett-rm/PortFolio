import { v4 as uuidv4 } from 'uuid';
import SystemedInformationSante from '../images/SystemedInformationSante.png';
import SymfonyImg from '../images/Symfony.jpg';
import JeuEchec from '../images/jeuEchec.jpg';
import Veille from '../images/Veille.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Symfony',
    desc:
      'Participer à l’évolution d’un site Web exploitant les données de l’organisation,Analyser les objectifs et les modalités d’organisation d’un projet, Planifier les activités',
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
    name: 'Veille',
    desc: 'Developpement d un outil de veille technologique ',
    img: Veille,
  },
  {
    id: uuidv4(),
    name: 'SystemedInformationSante',
    desc: 'Nous avons eu aussi la possibilité de faire un projet réseau',
    img: SystemedInformationSante,
  },
];

export default projects;

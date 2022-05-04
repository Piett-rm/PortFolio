import { v4 as uuidv4 } from 'uuid';
import SymfonyImg from '../images/Symfony.jpg';
import JeuEchec from '../images/jeuEchec.jpg';
import Veille from '../images/Veille.png';

const projects = [
  {
    id: uuidv4(),
    name: 'ProjetHopital',
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
];

export default projects;

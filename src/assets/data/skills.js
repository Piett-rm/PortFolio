import { v4 as uuidv4 } from 'uuid';
import ReactJS from '../images/jeuEchec.jpg';
import SymfonyTrello from '../images/planification.png';
import ScriptSauvegardeDB from '../images/ScriptSauvegarde.png';
import Zabbix from '../images/SupervisionZabbix.png';
import Habilitation from '../images/Habilitation.png';
import CodeSansCommentaire from '../images/CodeSansCommentaire.png';
import TicketGLPI from '../images/ticketGLPI.png';
import ScriptConnexion from '../images/ScriptConnexionConnexionLecteur.png';
import TaiterDemandeApplications from '../images/DemandeApplication.png';
import PlanifierTaches from '../images/PlanifierTache.png';
import BesoinReponseTechnique from '../images/BesoinReponseTechnique.png';
import EvaluerAnalyser from '../images/Evaluer&Analyser.png';
import Test from '../images/Testaccept.png';
import DeployerService from '../images/DeployerService.png';
import readmepouraiderAccompagner from '../images/readmepouraiderAccompagner.png';
import laragon from '../images/laragon.png';
import gereridentite from '../images/gereridentite.png';
import VeilleT from '../images/VeilleT.png';
import maquette from '../images/maquette.png';

const skills = [
  [
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee:
        'Recenser et identifier les ressources numériques et vérifier les conditions de la continuité d un service informatique',
      descriptionCompetence:
        'Pour recencer et identifier les ressources numériques et vérifier les continuité d un service. Durant notre formation en octobre 2021, ' +
        'nous devions installer un serveur de surveillance afin de surveiller notre serveur Web, notre routeur.',
      screenCompetence: Zabbix,
      telechargement: [
        'Installation Zabbix',
        'https://www.dropbox.com/s/uoiq6hn6udjbbd3/Zabbix.pdf?dl=0',
      ],
    },
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee:
        'Mettre en place et vérifier les niveaux d’habilitation associés à un service',
      descriptionCompetence:
        '' +
        'Pour mettre en place les habilitations à un service. J ai eu l occasion pour mon Projet Hopital de faire un niveau d habiliation Administratif ' +
        'Il permet d avoir d autre droit que les infirmiers. Comme rajouter des stocks de vaccins ou prevoir un rendez-vous ',
      screenCompetence: Habilitation,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee: 'Gérer des sauvegardes',
      descriptionCompetence:
        'Durant notre projet de BTS Hopital, nous avons mis en place un script de Sauvegarde base de donnée. \n\n' +
        'Il permet de sauvegarder la base de donnée tout les jours à 2h du matin car le trafique sur l application est plus calme. ',
      screenCompetence: ScriptSauvegardeDB,
      telechargement: [
        'Sauvegardes',
        'https://www.dropbox.com/s/cz2l3z1cqox7hkr/Sauvegardes.pdf?dl=0',
      ],
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee: '',
      descriptionCompetence:
        'Minim sint ipsum magna consequat aliqua officia cillum adipisicing aliqua do in esse exercitation pariatur. Elit in minim proident amet.',
      screenCompetence: SymfonyTrello,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Gérer le patrimoine informatique',
      idee:
        'Exploiter des référentiels, normes et standards adoptés par le prestataire informatique',
      descriptionCompetence:
        'Durant mon second stage, j ai eu l occasion référentiels, normes et standards adoptés par l entreprise. ' +
        'Pour developper une application, il fallait au maximun developper sans commentaire. De plus il fallait un developpement avec des variables en anglais',
      screenCompetence: CodeSansCommentaire,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine:
        'Répondre aux incidents et aux demandes d’assistance et d’évolution',
      idee: 'Traiter des demandes concernant les applications',
      descriptionCompetence:
        'Au cours de ma formation j ai pu traiter des' +
        'Deserunt culpa culpa nisi laborum cupidatat mollit id adipisicing labore quis et magna commodo.' +
        'Cillum aliquip eu nulla culpa aliqua duis ullamco. Veniam pariatur sunt pariatur ipsum duis voluptate ipsum labore pariatur non amet. ' +
        'Minim amet dolore tempor voluptate eiusmod laboris in nostrud.' +
        'Cillum excepteur elit reprehenderit ut dolor velit nulla laborum esse minim adipisicing Lorem. Dolor quis irure in culpa pariatur incididunt' +
        ' qui excepteur nostrud et nostrud proident adipisicing aliquip. Proident tempor anim exercitation est minim labore.',
      screenCompetence: TaiterDemandeApplications,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine:
        'Répondre aux incidents et aux demandes d’assistance et d’évolution',
      idee: 'Collecter, suivre et orienter des demandes ',
      descriptionCompetence:
        'Durant mon premier stage du 26 avril au 31 juillet 2021, j ai eu l occasion d orienter des demander et de les suivre en tant que Technicien HelpDesk. J ai utilise le gestionnaire de taches GLPI (Gestionnaire Libre de Parc Informatique)',
      screenCompetence: TicketGLPI,
    },
    {
      id: uuidv4(),
      nomDomaine:
        'Traiter des demandes concernant les services réseau et système, applicatifs',
      idee: 'Traiter des demandes concernant les applications',
      descriptionCompetence:
        'Durant mon stage j’ai eu beaucoup de demandes pour des accès à des lecteurs réseaux. Un lecteur réseau est un partage présenté à un poste utilisateur sous la forme d une lettre comme un disque dur. Les lecteurs réseaux se connectent grâce à un script batch à l’ouverture de la session. ',
      screenCompetence: ScriptConnexion,
      screenProjet: ReactJS,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine:
        'Répondre aux incidents et aux demandes d’assistance et d’évolution',
      idee: 'Traiter des demandes concernant les applications',
      descriptionCompetence:
        'Au cours de ma stage j ai pu traiter des demandes concernant des applications.' +
        'Mon maitre de stage m a demandé de renouveler le certificat SSL d’un site d’un client pour remplacer ce certificat avant la date l’expiration.Un certificat SSL est un certificat électronique qui permet authentifier l’identité d’un site' +
        'Web et permet une connexion chiffrée. SSL signifie « Secure Sockets Layer ». ',
      screenCompetence: TaiterDemandeApplications,
      screenProjet: ReactJS,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Développer la présence en ligne de l’organisation',
      idee:
        'Participer à l évolution d un site Web exploitant les données de l organisation',
      descriptionCompetence:
        'Nous avons participé à l evolution d un site web dans plusieurs projets comme le projet Hopital, la gestion des vaccins et voici une maquette d une page du projet gestion des vaccins.',
      screenCompetence: maquette,
      telechargement: [
        'Charte graphique',
        'https://www.dropbox.com/s/bsx6o7o5p2ttrnk/Projet-vaccin.pdf?dl=0',
      ],
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Développer la présence en ligne de l’organisation',
      idee: 'Développer la présence en ligne de l’organisation',
      descriptionCompetence: 'test',
      screenCompetence: SymfonyTrello,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Développer la présence en ligne de l’organisation',
      idee: 'Développer la présence en ligne de l’organisation',
      descriptionCompetence: 'test',
      screenCompetence: SymfonyTrello,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Travailler en mode projet',
      idee:
        'Analyser les objectifs et les modalités d’organisation d’un projet',
      descriptionCompetence:
        'Lors de ma formation, j ai pu analyser un document et extraire les parties prenantes du projet, les besoins, et une reponse technique aux besoins  ',
      screenCompetence: BesoinReponseTechnique,
      telechargement: [
        'besoin',
        'https://www.dropbox.com/s/484r5im07z74fnj/Besoins.pdf?dl=0',
      ],
    },
    {
      id: uuidv4(),
      nomDomaine: 'Travailler en mode projet',
      idee:
        'Évaluer les indicateurs de suivi d’un projet et analyser les écarts',
      descriptionCompetence:
        'Pour évaluer les indicateurs de suivi d’un projet et analyser les écarts,  nous avons utilisé Project Libre, ce logiciel  est un outil open source de planification de projet .' +
        'Nous l avons utilisé dans le cadre d un projet imaginaire. Nous avons planifié les activités et les tâches.' +
        ' Grâce au logiciel, nous pouvions facilement voir le chemin critque d un projet et les ecarts possible. ',
      screenCompetence: EvaluerAnalyser,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Travailler en mode projet',
      idee: 'Travailler en mode projet',
      descriptionCompetence: 'test',
      screenCompetence: SymfonyTrello,
      screenProjet: ReactJS,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Travailler en mode projet',
      idee: 'Planifier les activités',
      descriptionCompetence:
        'Pour l’organisation un trello a été mis en place. Un trello est un site web où nous' +
        'mettons toutes les tâches à faire dans plusieurs catégories.' +
        'Nous avions 5 catégories : ' +
        ' - Backlog : le champ où toutes les tâches à faire sont mises.' +
        ' - Priorités : champ où toutes les tâches à faire en priorités sont mises.' +
        ' - En cours : ce qui permet de voir le suivi de chaque opérateur pour une meilleure ' +
        'répartition des tâches et ne pas travailler en doublon sur un même sujet.' +
        ' - A tester : la catégorie où nous mettons les tâches réalisées à tester.' +
        ' - Terminé : la catégorie où nous enregistrons les tâches terminées et testées.',
      screenCompetence: PlanifierTaches,
      lien: 'test ',
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre à disposition des utilisateurs un service informatique',
      idee: 'Réaliser les tests d’intégration et d’acceptation d’un service',
      descriptionCompetence:
        'Pour le projet Hopital, nous avons fait des test pour tester la connectivité entre le front et la base de donnée, par exemple en ajoutant un patient',
      screenCompetence: Test,
      telechargement: [
        'Test intégration',
        'https://www.dropbox.com/s/r756hi51mbpgsd6/Procedure_MEP_et_test_hopital.a8c147eb.pdf?dl=0',
      ],
    },
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre à disposition des utilisateurs un service informatique',
      idee: 'Déployer un service',
      descriptionCompetence:
        'De plus pour le projet hopital, nous avons deployé en groupe un conteneur sur le serveur Ionos que nous avons loué. Pour ce faire nous devons faire la commande sur le screen et pour tester la connexion, nous pouvons utiliser postman pour envoyer des données.',
      screenCompetence: DeployerService,
      telechargement: [
        'procedure',
        'https://www.dropbox.com/s/r756hi51mbpgsd6/Procedure_MEP_et_test_hopital.a8c147eb.pdf?dl=0',
      ],
    },
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre à disposition des utilisateurs un service informatique',
      idee: 'Accompagner les utilisateurs dans la mise en place d’un service',
      descriptionCompetence:
        'Pour accompagner l installation du projet hopital, un read me a été mis en place, afin que tout le monde puisse l installer.',
      screenCompetence: readmepouraiderAccompagner,
      telechargement: ['readme', 'https://github.com/Jflo02/SymfonyBtsProject'],
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre à disposition des utilisateurs un service informatique',
      idee: '',
      descriptionCompetence: '',
      screenCompetence: PlanifierTaches,
      lien: 'test ',
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine:
        'Mettre à disposition des utilisateurs un service informatique',
      idee: '',
      descriptionCompetence: '',
      screenCompetence: PlanifierTaches,
      lien: 'test ',
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son développement professionnel',
      idee: 'Mettre en place son environnement d’apprentissage personnel',
      descriptionCompetence:
        'Laragon, c est un serveur de développement web pour Windows.Il est installé sur mon ordinateur, ainsi que docker pour conteneurisé les applications et VS code pour developper',
      screenCompetence: laragon,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son développement professionnel',
      idee:
        'Mettre en œuvre des outils et stratégies de veille informationnelle ',
      descriptionCompetence:
        'Grâce a Feedly et un outil de veille que j ai developper, je peux réaliser ma veille.' +
        "L'outil de veille que j'ai developpé me permet de chercher les informations que je souhaite et d'avoir les articles associés." +
        "Ensuite Feedly me permet d'avoir des articles favoris. Je fais ma veille sur python car c'est un code court facile à comprendre." +
        " De plus Docker est une technologie qui permet de faciliter et automatiser le déploiement de services et applications. Je l'utilise pour mes projets.",
      screenCompetence: VeilleT,
    },
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son développement professionnel',
      idee: 'Gérer son identité professionnelle',
      descriptionCompetence:
        'Pour gérer mon identité, j ai créé un compte linkedin qui permet de rechercher et afficher sa carrière.',
      screenCompetence: gereridentite,
      telechargement: [
        'lien linkedin',
        'https://www.linkedin.com/in/r%C3%A9mi-petit-b08244200/',
      ],
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son développement professionnel',
      idee: 'Organiser son développement professionnel',
      descriptionCompetence: 'test',
      screenCompetence: SymfonyTrello,
      screenProjet: ReactJS,
    },
  ],
  [
    {
      id: uuidv4(),
      nomDomaine: 'Organiser son développement professionnel',
      idee: 'Organiser son développement professionnel',
      descriptionCompetence: 'test',
      screenCompetence: SymfonyTrello,
      screenProjet: ReactJS,
    },
  ],
];

export default skills;

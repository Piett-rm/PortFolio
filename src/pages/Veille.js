import React from 'react';
import styled from 'styled-components';
import CompetenceProjectSection from '../compoments/CompetenceProjectSection';
import VeilleT from '../assets/images/Veille.png';

const SymfonyStyles = styled.div`
  margin: 10rem 0;
`;

export default function Veille() {
  return (
    <SymfonyStyles>
      <div>
        <CompetenceProjectSection
          titre="Veille"
          sousTitre="Ma veille"
          texte="Grâce a Feedly et un outil de veille que j'ai developper, je peux réaliser ma veille.
          L'outil de veille que j'ai developpé me permet de chercher les informations que je souhaite et d'avoir les articles associés.
          Ensuite Feedly me permet d'avoir des articles favoris. Je fais ma veille sur python car c'est un code court facile à comprendre.
          De plus Docker est une technologie qui permet de faciliter et automatiser le déploiement de services et applications. Je l'utilise pour mes projets.
          "
          img={VeilleT}
        />
      </div>
    </SymfonyStyles>
  );
}

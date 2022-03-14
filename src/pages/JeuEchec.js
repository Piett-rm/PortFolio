import React from 'react';
import styled from 'styled-components';
import CompetenceProjectSection from '../compoments/CompetenceProjectSection';
import JeuEchecimg from '../assets/images/JeuEchec.png';

const SymfonyStyles = styled.div`
  margin: 10rem 0;
`;

export default function JeuEchec() {
  return (
    <SymfonyStyles>
      <div>
        <CompetenceProjectSection
          titre="Jeu D'échec"
          sousTitre="Les compétences que j'ai eu grâce au Jeu d'Echec"
          texte="Grâce au projet Jeu d'echec,j'ai pu développer une application dans un terminal. Le jeu d'echec m'a permis de m'améliorer en algorithme"
          img={JeuEchecimg}
        />
      </div>
    </SymfonyStyles>
  );
}

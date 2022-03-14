import React from 'react';
import styled from 'styled-components';
import CompetenceProjectSection from '../compoments/CompetenceProjectSection';
import Ftechnique from '../assets/images/ficheTechniqueHopital.png';
import Planification from '../assets/images/planification.png';

const SymfonyStyles = styled.div`
  margin: 10rem 0;
`;

export default function Symfony() {
  return (
    <SymfonyStyles>
      <div>
        <CompetenceProjectSection
          titre="symfony"
          sousTitre="Les compétences que j'ai eu grâce à symfony"
          texte="Grâce au projet Symphony,j'ai pu développer une application de gestion de patients et acquérir des compétences, comme Participer à l’évolution d’un site Web exploitant les données d'un organisation, Analyser les objectifs et les modalités d’organisation d’un projet"
          img={Ftechnique}
        />
      </div>
      <div>
        <CompetenceProjectSection
          titre="Planification"
          sousTitre=""
          img={Planification}
          texte="Puis  j'ai pu apprendre à planifier les activités "
        />
      </div>
    </SymfonyStyles>
  );
}

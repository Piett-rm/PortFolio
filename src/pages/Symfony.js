import React from 'react';
import styled from 'styled-components';

const SymfonyStyles = styled.div`
  margin: 10rem 0;
`;

export default function Competence() {
  return (
    <SymfonyStyles>
      <div>
        <h1>Symfony</h1>
      </div>
      <div>
        <p>J'ai utilisé les compétences </p>
        <p>
          Analyser les objectifs et les modalités d’organisation d’un projet,
          Planifier les activités,Évaluer les indicateurs de suivi d’un projet
          et analyser les écarts, Participer à l’évolution d’un site Web
          exploitant les données de l’organisation.
        </p>
      </div>
    </SymfonyStyles>
  );
}

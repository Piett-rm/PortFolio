import React from 'react';
import styled from 'styled-components';
import CompetenceProjectSection from '../compoments/CompetenceProjectSection';
import Ftechnique from '../assets/images/ficheTechniqueHopital.png';

const SymfonyStyles = styled.div`
  margin: 10rem 0;
  .telechargement {
    margin: auto;
    width: 125px;
    padding: 15px;
    font-size: 2rem;
    .gauche {
      float: left;
    }
    .droite {
      float: right;
    }
  }
`;

export default function Symfony() {
  return (
    <SymfonyStyles>
      <div>
        <CompetenceProjectSection
          titre="Gestion Hopital"
          sousTitre="Les compétences que j'ai eu grâce à ce projet"
          texte="Grâce au projet Symphony,j'ai pu développer une application de gestion de patients et acquérir des compétences, comme Participer à l’évolution d’un site Web exploitant les données d'un organisation, Analyser les objectifs et les modalités d’organisation d’un projet.
          Le back a été fait en symfony et le front en React JS. Ce projet permet de gérer les réservations d un lit d' un patient et affecter les infirmiers à un service."
          img={Ftechnique}
        />
      </div>
      <div className="telechargement">
        <p className="gauche">
          <i className="bi bi-arrow-down" style={{ fontSize: 40 }} />
        </p>

        <a
          href="https://www.dropbox.com/s/7jhvc53sb2hpt1s/Dossier.pdf?dl=0"
          target="_blank"
          rel="noreferrer"
          download
          className="droite"
        >
          Dossier du projet
        </a>
      </div>
    </SymfonyStyles>
  );
}

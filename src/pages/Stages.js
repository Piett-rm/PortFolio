import React from 'react';
import styled from 'styled-components';
import GLPI from '../assets/images/ticketGLPI.png';
import SecondStage from '../assets/images/SecondStage.png';

import CompetenceProjectSection from '../compoments/CompetenceProjectSection';

const StagesStyle = styled.div`
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

export default function Stages() {
  return (
    <>
      <StagesStyle>
        <div>
          <CompetenceProjectSection
            titre="Mon Stage de 1ère année"
            sousTitre=""
            texte="Au cours de mon stage, je suis affecté au service chargé de l’assistance utilisateurs.
          Ces missions sont de différents types : résolution d’incidents types opérations de
          dépannage, maintenance, demande client…J’ai participé à la résolution d’incidents
          auprès de la clientèle professionnelle sur sites ou à distance au même titre que les
          autres techniciens."
            img={GLPI}
          />
          <div className="telechargement">
            <p className="gauche">
              <i className="bi bi-arrow-down" style={{ fontSize: 40 }} />
            </p>
            <a
              href="https://www.dropbox.com/s/y648zts3kboi1bs/rapport_de_stage_R%C3%A9mi_PETIT_BTS_SIO.pdf?dl=0"
              target="_blank"
              rel="noreferrer"
              download
              className="droite"
            >
              Rapport de stage
            </a>
          </div>
        </div>
      </StagesStyle>
      <StagesStyle>
        <div>
          <CompetenceProjectSection
            titre="Mon Stage de 2ème année"
            sousTitre=""
            texte="Au cours de mon stage, j’étais affecté au pôle DEVOPS et IA.
            Le Dev Ops combine le terme développement et opération. Il s’agit de fusionner le
            développement, l’assurance qualité et les opérations de déploiement
            et d’intégration.J’ai réalisé de multiples missions dont le développement d’un extranet. Celui-ci 
            proposera une base de travail sur laquelle construire des espaces en ligne spécifique 
            à des sociétés en assurance ou courtage en assurance. J’ai créé un web service afin 
            de communiquer des données en toute sécurité. J’ai également développé un outil 
            d’editing qui permettra de créer un contrat de façon automatique et facile pour les 
            prochains clients."
            img={SecondStage}
          />
          <div className="telechargement">
            <p className="gauche">
              <i className="bi bi-arrow-down" style={{ fontSize: 40 }} />
            </p>
            <a
              href="https://www.dropbox.com/s/gzzfe84h7lli66h/Rapport%20de%20Stage%20R%C3%A9mi%20PETIT.pdf?dl=0"
              target="_blank"
              rel="noreferrer"
              download
              className="droite"
            >
              Rapport de stage
            </a>
          </div>
        </div>
      </StagesStyle>
    </>
  );
}

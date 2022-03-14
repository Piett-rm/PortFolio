import React from 'react';
import styled from 'styled-components';
import GLPI from '../assets/images/ticketGLPI.png';
import CompetenceProjectSection from '../compoments/CompetenceProjectSection';
import Ftechnique from '../assets/images/ficheTechniqueHopital.png';
import Planification from '../assets/images/planification.png';

const StagesStyle = styled.div`
  margin: 10rem 0;
`;

export default function Stages() {
  return (
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
      </div>
    </StagesStyle>
  );
}

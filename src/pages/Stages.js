import React from 'react';
import styled from 'styled-components';

const StagesStyle = styled.div`
  margin: 10rem 0;
  .stage1 {
    margin-bottom: 10rem;
  }
`;

export default function Stages() {
  return (
    <StagesStyle>
      <div className="container">
        <div className="stage1">
          <h1>Stage 1 </h1>
          <h2>Mes competences durant mon stage 1 : </h2>
          <p>
            Collecter, suivre et orienter des demandes,Traiter des demandes
            concernant les services réseau et système, applicatifs, Traiter des
            demandes concernant les applications Déployer un service Accompagner
            les utilisateurs dans la mise en place d’un service Mettre en œuvre
            des outils et stratégies de veille informationnelle Exploiter des
            référentiels, normes et standards adoptés par le prestataire
            informatique
          </p>
        </div>
        <div className="stage2">
          <h1>Stage 2 </h1>
        </div>
      </div>
    </StagesStyle>
  );
}

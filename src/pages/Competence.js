import React from 'react';
import styled from 'styled-components';
import CompetenceImg from '../assets/images/competences.png';
//
// const CompetenceStyle = styled.div`
//   @media only screen and (max-width: 765px) {
//     .competence__img {
//       transform: translateY(-70px) rotate(90deg);
//     }
//   }
// `;

export default function Competence() {
  return (
    <div>
      <div className="container">
        <div className="competence__img">
          <img src={CompetenceImg} alt="Compétence" />
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import styled from 'styled-components';
import Excel from '../assets/fichier-excel/Epreuve_E4-BTS-SIO-2022.xlsx';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BtsSkillsInteractive from '../compoments/BtsSkillsInteractive';

const BtsSectionStyles = styled.div`
  padding: 10rem 0;
  .container {
  }

  .lien-Excel {
    margin: auto;
    width: 125px;
    padding: 15px;
    font-size: 1rem;
    .lien-Excel-gauche {
      float: left;
    }
    .lien-Excel-droit {
      float: right;
    }
  }
`;

export default function Competence() {
  return (
    // <div>
    //   <div className="container">
    //     <div className="competence__img">
    //       <img src={CompetenceImg} alt="Compétence" />
    //     </div>
    //   </div>
    // </div>
    <BtsSectionStyles>
      <div className="container">
        <BtsSkillsInteractive />
        <div className="lien-Excel">
          <p className="lien-Excel-gauche">
            <i className="bi bi-arrow-down" style={{ fontSize: 50 }} />
          </p>
          <a href={Excel} download className="lien-Excel-droite">
            Fichier Excel complet
          </a>
        </div>
      </div>
    </BtsSectionStyles>
  );
}

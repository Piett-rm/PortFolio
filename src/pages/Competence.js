import React from 'react';
import styled from 'styled-components';
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
  .divTitre {
    margin-bottom: 1em;
    .titre {
      font-size: 3rem;
      display: block;
    }
  }
`;

export default function Competence() {
  return (
    <BtsSectionStyles>
      <div className="container">
        <>
          <div className="divTitre">
            <p className="titre">Tableau des compétences interactif :</p>
          </div>
          <BtsSkillsInteractive />
          <div className="lien-Excel">
            <p className="lien-Excel-gauche">
              <i className="bi bi-arrow-down" style={{ fontSize: 50 }} />
            </p>
            <a
              href="https://www.dropbox.com/scl/fi/bwezyrxkesg3e5qrocl1e/6-Remi-PETIT-Tableau-de-synth-se-Epreuve-E4-BTS-SIO-1.xlsx?dl=0&rlkey=5360fdkbxw1351cqam7xn6v72"
              download
              className="lien-Excel-droite"
            >
              Fichier Excel complet
            </a>
          </div>
        </>
      </div>
    </BtsSectionStyles>
  );
}

import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PText from './PText';

const CompetenceSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
  .competenceSection__right,
  .competenceSection__left {
    flex: 1;
  }
  .section-title {
    text-align: left;
  }
  .para {
    margin-top: 2rem;
    margin-left: 0;
  }
  .competenceSection__buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (max-width: 950px) {
    .competenceSection__left {
      flex: 4;
    }
    competenceSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 765px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .competenceSection__left {
      width: 100%;
    }

    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .competenceSection__buttons {
      flex-direction: column;
      gap: 0;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
`;

export default function CompetenceSection({
  titre = '',
  sousTitre = '',
  texte = 'mon texte',
  img = 'Une photo',
}) {
  return (
    <CompetenceSectionStyle>
      <div className="container">
        <div className="competenceSection__left">
          <SectionTitle heading={titre} subheading={sousTitre} />
          <PText>{texte}</PText>
        </div>
        <div className="competenceSection__right">
          <img src={img} alt="imgage de mon projet" />
        </div>
      </div>
    </CompetenceSectionStyle>
  );
}

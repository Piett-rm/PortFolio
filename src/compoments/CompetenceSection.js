import React from 'react';
import styled from 'styled-components';
import SectionTittle from './SectionTittle';
import PText from './PText';
import Button from './Button';

const CompetenceSectionStyle = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
  }
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

export default function CompetenceSection() {
  return (
    <CompetenceSectionStyle>
      <div className="container">
        <div className="competenceSection__left">
          <SectionTittle
            heading="Mes compétences"
            subheading="Pour voir toutes mes compétences de mes 2 années"
          />
          <PText>
            Durant mes 2 année j'ai pu apprendre beaucoup de compétences, voir
            tableau
          </PText>
          <div className="competenceSection__buttons">
            <Button btnLink="Competences" btnText="Mes competences" />
          </div>
        </div>
      </div>
    </CompetenceSectionStyle>
  );
}

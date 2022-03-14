import React from 'react';
import styled from 'styled-components';
import CompetenceProjectSection from '../compoments/CompetenceProjectSection';
import ReactJsImg from '../assets/images/ReactJs.png';

const SymfonyStyles = styled.div`
  margin: 10rem 0;
`;

export default function ReactJs() {
  return (
    <SymfonyStyles>
      <div>
        <CompetenceProjectSection
          titre="ReactJs"
          sousTitre="Les compétences que j'ai eu grâce à mon PortFolio"
          texte="Grâce à ce projet de Portfolio que je me suis fixé, j'ai pu faire une veille technologique pour apprendre le React JS"
          img={ReactJsImg}
        />
      </div>
    </SymfonyStyles>
  );
}

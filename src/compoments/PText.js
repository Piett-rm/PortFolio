import React from 'react';
import styled from 'styled-components';

const PSstyle = styled.div`
  max-width: 500px;
  margin: 0 auto;
  font-size: 1.8rem;
  line-height: 1.9rem;
  .test {
    color: #1d95adff;
  }
  color: black;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default function PText({ children, hero = false }) {
  return (
    <PSstyle className="para">
      {hero && <p className="test">{children}</p>}
      {!hero && <p>{children}</p>}
    </PSstyle>
  );
}

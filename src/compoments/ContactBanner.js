import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button';

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function contactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
            earum eius est eum ex exercitationem fuga fugiat harum ipsa, laborum
            minima necessitatibus nihil obcaecati odit optio perferendis quia
            saepe unde!
          </PText>
          <h3 className="contactBanner__heading">let me help you</h3>
          <Button btnText="Contact Now" btnLink="/contacts" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}

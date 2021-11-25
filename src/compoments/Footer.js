import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyles = styled.div`
  padding-top: 8rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
    @media only screen and (max-width: 768px) {
      .container {
        flex-direction: column;
        gap: 0rem;
        & > div {
          margin-top: 5rem;
        }
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Rémi PETIT</h1>
          <PText>
            Je suis passionné par le developpement, voici mon portfolio
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Les liens importants"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'Projets',
                path: '/Projects',
                type: 'Link',
              },
              {
                title: 'Competences',
                path: '/Competences',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/Contact',
                type: 'Link',
              },
              {
                title: 'Stage',
                path: '/Stages',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+33 333 3333 333',
                path: 'tel: 33 333 3333 ',
              },
              {
                title: 'remi.petit@epsi.fr',
                path: 'mailto:remi.petit@epsi.fr',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social Link"
            links={[
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/r%C3%A9mi-petit-b08244200/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>Fait par Rémi 2021 </PText>
        </div>
      </div>
    </FooterStyles>
  );
}

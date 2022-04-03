import styled from 'styled-components';
import { React, useState } from 'react';
import CompetenceProjectSection from '../compoments/CompetenceProjectSection';

const SkillStyle = styled.div`
  padding: 10rem 0;
  header {
    text-align: center;
    text-shadow: 3px 2px #000;
    font-size: 40px;
  }
  .lien {
    text-align: center;
    font-size: 15px;
  }

  .telechargement {
    margin: auto;
    width: 125px;
    padding: 15px;
    font-size: 2rem;
    .gauche {
      float: left;
    }
    .droite {
      float: right;
    }
  }
`;

export default function Skill({ location }) {
  const [skills] = useState(location.state);
  console.log(skills);
  console.log(typeof skills);

  return (
    <>
      <SkillStyle>
        <header>{skills[0].nomDomaine}</header>
        {skills.map((skill) => (
          <>
            <div>
              <CompetenceProjectSection
                titre={skill.idee}
                texte={skill.descriptionCompetence}
                img={skill.screenCompetence}
              />
            </div>

            {typeof skill.telechargement !== 'undefined' && (
              <div className="telechargement">
                <p className="gauche">
                  <i className="bi bi-arrow-down" style={{ fontSize: 40 }} />
                </p>

                <a
                  href={skill.telechargement[1]}
                  target="_blank"
                  rel="noreferrer"
                  download
                  className="droite"
                >
                  {skill.telechargement[0]}
                </a>
              </div>
            )}
          </>
        ))}
      </SkillStyle>
    </>
  );
}

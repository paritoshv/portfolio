import React from 'react';
import { DiRasberryPi, DiReact, DiPhotoshop, DiDatabase } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
  <br/>
  <SectionDivider/>
  <br/>
  <SectionTitle>Technologies</SectionTitle>
  <SectionText>
    I have worked with a range of Technologies in the Software Engineering world.
    My skills are in creating Web applications End to End.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem"/>
      <ListContainer>
        <ListTitle>FullStack</ListTitle>
        <ListParagraph>
          Experienced with <br/>
          React.js, Express(/Node) - JS
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiPhotoshop size="3rem"/>
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Figma, Photoshop, <br/>
          HTML/CSS, PremierPro, AE
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiDatabase size="3rem"/>
      {/* <DiRasberryPi size="3rem"/> */}
      <ListContainer>
        <ListTitle>Databases</ListTitle>
        <ListParagraph>
          MongoDB, MySQL  <br/>
          and Redis.
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
 </Section>
);

export default Technologies;

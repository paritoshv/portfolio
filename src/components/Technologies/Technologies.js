import React from 'react';
import { DiRasberryPi, DiReact, DiPhotoshop } from 'react-icons/di';
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
    From Front-end Web development, design to Embedded Software.
  </SectionText>
  <List>
    <ListItem>
      <DiReact size="3rem"/>
      <ListContainer>
        <ListTitle>Front-End</ListTitle>
        <ListParagraph>
          Experienced with <br/>
          React.js
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiPhotoshop size="3rem"/>
      <ListContainer>
        <ListTitle>UI/UX</ListTitle>
        <ListParagraph>
          Tools like Figma, Photoshop
        </ListParagraph>
      </ListContainer>
    </ListItem>
    <ListItem>
      <DiRasberryPi size="3rem"/>
      <ListContainer>
        <ListTitle>Embedded Software</ListTitle>
        <ListParagraph>
          Experienced with <br/>
          C/C++ APIs, Firmware calls.
        </ListParagraph>
      </ListContainer>
    </ListItem>
  </List>
 </Section>
);

export default Technologies;

import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi. I'm Paritosh.<br />
        A Software Engineer
      </SectionTitle>
      <SectionText>
        I’m also a Web developer and electronics undergrad with a keen eye for using efficient and latest technologies in bringing products to life.
      </SectionText>
      <Button onClick={() => window.location ='mailto:varshneyparitosh7@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;
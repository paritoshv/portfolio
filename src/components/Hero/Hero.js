import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi. I'm Paritosh.<br />
        A Software Developer
      </SectionTitle>
      <SectionText>
        I’m a Full Stack Developer with a keen eye for using efficient and latest technologies in bringing products to life.
      </SectionText>
      <Button onClick={() => window.location ='https://drive.google.com/file/d/1CQeZzfkqd3v1wXn56Z5mMxBLuYSnC1Eo/view?usp=sharing'}>Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;
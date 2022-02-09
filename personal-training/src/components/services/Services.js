import React from 'react';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';
import Image1 from '../../assets/images/pt3.svg';
import Image2 from '../../assets/images/pt5.svg';
import Image3 from '../../assets/images/pt6.svg';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Package Options</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Image1} />
          <ServicesH2>4 Session Package</ServicesH2>
          <ServicesP>This will average 1 sessions per week</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Image2} />
          <ServicesH2>8 Session Package</ServicesH2>
          <ServicesP>This will average 2 sessions per week</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Image3} />
          <ServicesH2>12 Session Package</ServicesH2>
          <ServicesP>This will average 3 sessions per week</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;

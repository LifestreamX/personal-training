import React from 'react';
import herovideo from '../../assets/videos/herovideo.mp4';
import { FaArrowRight } from 'react-icons/fa';
import { Button } from '../ButtonElements';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,

  // FaArrowRight,
} from './HeroElements';

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg src={herovideo} autoPlay loop muted />
        </HeroBg>
        <HeroContent>
          <HeroH1>Working Out Made Easy</HeroH1>
          <HeroP>
            Sign up today to recevice 20% your first 5 personal training
            sessions as well as a complimentary fitness evaluation!{' '}
          </HeroP>
          <HeroBtnWrapper>
            <Button to='signup' >
              Start Today <FaArrowRight className='arrow-icon' />
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default Hero;

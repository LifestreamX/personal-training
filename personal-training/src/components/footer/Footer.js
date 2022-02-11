import React from 'react';
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';
import { CgGym } from 'react-icons/cg';
import { animateScroll } from 'react-scroll';

import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsitesRights,
  SocialIcons,
  SocialIconLink,
  FooterLogo,
  FooterLogo2,
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterLogo>
        <CgGym />
      </FooterLogo>

      <FooterLogo2>
        <CgGym />
      </FooterLogo2>

      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              FitForAll
            </SocialLogo>
            <WebsitesRights>
              FitForAll Ⓒ {new Date().getFullYear()} All right reserved
            </WebsitesRights>
            <SocialIcons>
              <SocialIconLink
                href='//facebook.com'
                target='_blank'
                aria-label='Facebook'
              >
                <BsFacebook />
              </SocialIconLink>
              <SocialIconLink
                href='//instagram.com'
                target='_blank'
                aria-label='Instagram'
              >
                <BsInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='//twitter.com'
                target='_blank'
                aria-label='Twitter'
              >
                <BsTwitter />
              </SocialIconLink>
              <SocialIconLink
                href='//youtube.com'
                target='_blank'
                aria-label='Youtube'
              >
                <BsYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;

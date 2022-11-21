import styled from 'styled-components';
import { Link as LinkRouter } from 'react-router-dom';

export const FooterContainer = styled.div`
  background: #101522;
  position: relative;
  height: 350px;
`;

export const FooterLogo = styled.div`
  color: #fff;
  position: absolute;
  top: -40px;
  left: 0;
  margin-left: 130px;
  margin-top: 130px;
  font-size: 50px;

  @media screen and (max-width: 768px) {
    margin-left: 20px;
  }
`;

export const FooterLogo2 = styled.div`
  color: #fff;
  position: absolute;
  top: -40px;
  right: 0;
  margin-right: 130px;
  margin-top: 130px;
  font-size: 50px;

  @media screen and (max-width: 768px) {
    margin-right: 20px;
  }
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const SocialMedia = styled.div`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(LinkRouter)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 46px;
  font-weight: bold;
`;

export const WebsitesRights = styled.small`
  color: #fff;
  margin-bottom: 30px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  font-size: 36px;
  margin-top: 16px;
  color: #fff;
  cursor: pointer;
`;

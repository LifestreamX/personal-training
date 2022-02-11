import styled from 'styled-components';

export const ServicesContainer = styled.div`
  height: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: #010606; */
  @media screen and (max-width: 768px) {
    height: 1400px;
    margin-top: 24px;
  }
  @media screen and (max-width: 1000px) {
    height: 1400px;
  }

  @media screen and (max-width: 480px) {
    height: 100px;
  } ;
`;

export const ServicesH1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 8px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  /* 
  &:after {
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background: #aa0108;
  } */

  /* &:before {
    content: '';
    display: block;
    width: 100%;
    height: 5px;
    background: #aa0108;
  } */
`;

export const ServicesWrapper = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 50px;
  padding: 50px;
  width: 100%;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  } ;
`;

export const ServicesCard = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  flex-direction: flex-start;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 360px;
  width: 100%;
  margin: 1rem;

  padding: 60px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.7);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 260px;
  margin-bottom: 50px;
`;

export const ServicesH2 = styled.h2`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  color: #fff;
  font-size: 1.2rem;
  text-align: center;
`;

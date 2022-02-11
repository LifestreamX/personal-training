import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const Button = styled(LinkScroll)`
  border-radius: 50px;
  background: #aa0108;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 50px' : '14px 32px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '22px' : '18px')};
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #880808;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
    
`;

export const Button2 = styled.button`
  border-radius: 50px;
  background: #aa0108;
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 50px' : '14px 32px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '22px' : '18px')};
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #880808;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
    
`;

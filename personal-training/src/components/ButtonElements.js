import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';

export const Button = styled(LinkScroll)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? '#fff' : '#aa0108')};
  background: ${({ blackButton }) => (blackButton ? '#000' : '#aa0108')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '16px 50px' : '14px 32px')};
  color: ${({ dark }) => (dark ? '#010606' : '#fff')};
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
    background: ${({ primary }) => (primary ? '#aa0108' : '#fff')};
    color: ${({ blackColorHover }) => (blackColorHover ? '#fff' : '#000')};
  }
`;

import React from 'react';
import '../../App.css';
import { FaBars } from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';
import {
  Nav,
  NavbarContainer,
  NavbarLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from './NavElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogo to='/'>
            FitForAll <GiWeightLiftingUp className='icon-logo' />
          </NavbarLogo>
          <MobileIcon onClick={toggle}>
            {/* Icon to toggle Sidebar Mobile Version */}
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>
                <span className='nav-link'>About</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='services'>
                <span className='nav-link'>Services</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='facility'>
                <span className='nav-link'>Facility</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='signup'>
                <span className='nav-link'>Sign Up</span>
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

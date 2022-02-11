import '../../App.css';
import { FaBars } from 'react-icons/fa';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { animateScroll } from 'react-scroll';
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
  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavbarLogo to='/' onClick={toggleHome}>
            FitForAll <GiWeightLiftingUp className='icon-logo' />
          </NavbarLogo>
          <MobileIcon onClick={toggle}>
            {/* Icon to toggle Sidebar Mobile Version */}
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                <span className='nav-link'>About</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='services'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                <span className='nav-link'>Services</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='facility'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                <span className='nav-link'>Facility</span>
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='signup'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                <span
                  className='nav-link'
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact='true'
                  offset={-80}
                >
                  Sign Up
                </span>
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

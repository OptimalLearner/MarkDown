import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn, NavBtnLink } from './Navbar.elements';
import { Brand, Button } from '../../globalStyles';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(false);

    const handleClick = () => {
        setClick(!click);
    }

    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if(window.innerWidth <=960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <div>
            <IconContext.Provider value={{ color: '#FFF' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={ closeMobileMenu }>
                            <NavIcon />
                            <Brand> MARKDOWN </Brand>
                        </NavLogo>
                        <MobileIcon onClick={ handleClick }>
                            {click ? <FaTimes /> : <FaBars /> }
                        </MobileIcon>
                        <NavMenu onClick={ handleClick } click={ click }>
                            <NavItem>
                                <NavLinks to="/" onClick={ closeMobileMenu }>
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/services" onClick={ closeMobileMenu }>
                                    Services
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/products" onClick={ closeMobileMenu }>
                                    Products
                                </NavLinks>
                            </NavItem>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up" onClick={ closeMobileMenu }>
                                        <Button fontBig primary>
                                            SIGN UP
                                        </Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/sign-up" onClick={ closeMobileMenu }>
                                        <Button primary>
                                            SIGN UP
                                        </Button>
                                    </NavBtnLink>
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </div>
    )
}

export default Navbar;
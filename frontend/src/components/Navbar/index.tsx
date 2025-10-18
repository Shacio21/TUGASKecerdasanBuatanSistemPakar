import React, { useState } from "react";
import {
  NavbarWrapper,
  Logo,
  NavMenu,
  NavItem,
  NavLinkStyled,
  Hamburger,
  Bar,
  MobileMenu,
} from "./style";
import navbarData from "../../content/NavbarContent.json";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <NavbarWrapper>
      <Logo>{navbarData.logo}</Logo>

      {/* Desktop Menu */}
      <NavMenu>
        {navbarData.links.map((link, index) => (
          <NavItem key={index}>
            <NavLinkStyled href={link.href}>{link.label}</NavLinkStyled>
          </NavItem>
        ))}
      </NavMenu>

      {/* Hamburger Icon (Mobile Only) */}
      <Hamburger onClick={handleToggle}>
        <Bar />
        <Bar />
        <Bar />
      </Hamburger>

      {/* Mobile Menu */}
      <MobileMenu $open={menuOpen}>
        {navbarData.links.map((link, index) => (
          <NavItem key={index}>
            <NavLinkStyled href={link.href} onClick={handleCloseMenu}>
              {link.label}
            </NavLinkStyled>
          </NavItem>
        ))}
      </MobileMenu>
    </NavbarWrapper>
  );
};

export default Navbar;

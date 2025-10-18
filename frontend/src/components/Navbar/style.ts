import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  width: 100%;
  height: 70px;
  padding: 0 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: fixed;
  top: 0;
  z-index: 100;
  font-family: "Poppins", sans-serif;
`;

export const Logo = styled.h1`
  font-family: "Oswald", sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: #3b86e7ff;
  text-transform: uppercase;
  cursor: pointer;
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li``;

export const NavLinkStyled = styled.a`
  text-decoration: none;
  color: #3b86e7ff;
  font-weight: 600;
  font-size: 1rem;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;

  &:hover {
    color: #56ccfaff;
  }
`;

export const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 20px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Bar = styled.span`
  height: 3px;
  width: 100%;
  background-color: #3b86e7ff;
  border-radius: 2px;
`;

export const MobileMenu = styled.ul<{ $open: boolean }>`
  list-style: none;
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background: none; /* 👉 hapus warna background di container */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: flex-end;
  gap: 1.2rem;
  display: ${({ $open }) => ($open ? "flex" : "none")};
  padding: 1.5rem 1.5rem;

  ${NavLinkStyled} {
    font-size: 1.1rem;
    text-align: right;
    width: fit-content; /* 👉 hanya selebar teks */
    background: #a1ceecff; /* 👉 warna di label saja */
    padding: 0.4rem 0.8rem; /* beri ruang dalam */
    border-radius: 6px; /* sudut lembut */
    color: #0f172a; /* warna teks kontras */
    transition: all 0.2s ease;

    &:hover {
      background: #3b86e7ff;
      color: #fff;
    }
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

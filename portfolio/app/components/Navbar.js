"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Button from "@mui/material/Button";
import { DiCodrops } from "react-icons/di";
import { FaBars } from "react-icons/fa";
import { useTheme } from "styled-components";
import { Bio } from "../data/constants";
const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media (max-width: 960px) {
    transition: 0.8s all ease;
  }
  transition: background-color 0.3s ease;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled.div`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;
const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Span = styled.div`
  padding: 0 4px;
  font-weight: bold;
  font-size: 18px;
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

export const MobileMenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled.div`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileMenuButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

export const MobileNavLogo = styled.div`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo>
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <DiCodrops size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavItem href="#about">About</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#experience">Experience</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#education">Education</NavItem>
        </NavItems>
        <ButtonContainer>
          <Link href={Bio.github} target="_blank">
            <Button
              variant="outlined"
              sx={{
                width: "11rem",
                height: "3rem",
                fontWeight: 500,
                borderRadius: "14px",
                fontSize: "15px",
              }}
            >
              GitHub Profile
            </Button>
          </Link>{" "}
        </ButtonContainer>
      </NavContainer>
      {isOpen && (
        <MobileMenu isOpen={isOpen}>
          <Link href="#about" style={{ textDecoration: "none" }}>
            <MobileLink
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
          </Link>
          <Link href="#skills" style={{ textDecoration: "none" }}>
            <MobileLink
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
          </Link>
          <Link href="#experience" style={{ textDecoration: "none" }}>
            <MobileLink
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
          </Link>
          <Link href="#projects" style={{ textDecoration: "none" }}>
            <MobileLink
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
          </Link>
          <Link href="#education" style={{ textDecoration: "none" }}>
            <MobileLink
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
          </Link>
          <Link
            href={Bio.github}
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              color="info"
              sx={{
                width: "11rem",
                height: "3rem",
                fontWeight: 500,
                borderRadius: "12px",
                fontSize: "15px",
              }}
            >
              GitHub Profile
            </Button>
          </Link>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Navbar;

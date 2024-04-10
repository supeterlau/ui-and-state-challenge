import Link from "next/link";
import styled from "@emotion/styled";
import { Divider } from "./Divider";

const Nav = styled("nav")`
  border-color: #e5e7eb;
  background-color: #ffffff;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;

const NavContainer = styled("div")`
  display: flex;
  padding: 1rem;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
`;

const LogoContainer = styled("a")`
  display: flex;
  align-items: center;
`;
const Logo = styled("img")`
  margin-right: 0.75rem;
  height: 2rem;
`;
const MenuButton = styled("button")`
  display: inline-flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  width: 2.5rem;
  height: 2.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #6b7280;
  @media (min-width: 768px) {
    display: none;
  }
  :hover {
    background-color: #f3f4f6;
  }
  :hover div {
    display: block;
    right: 0px;
    top: 3rem;
  }
`;

const MenuBar = styled("svg")`
  width: 1.25rem;
  height: 1.25rem;
`;
const MenuTip = styled("span")`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
`;
const NavList = styled("div")`
  display: none;
  width: 100%;

  @media (min-width: 768px) {
    display: block;
    width: auto;
  }
`;
const NavLinks = styled("ul")`
  display: flex;
  padding: 1rem;
  margin-top: 1rem;
  flex-direction: column;
  border-radius: 0.5rem;
  border-width: 1px;
  border-color: #f3f4f6;
  font-weight: 500;
  background-color: #f9fafb;
  list-style-type: none;
  margin-block-end: 0;
  li {
    margin-left: 2rem;
  }
  :hover div {
    display: block;
  }

  @media (min-width: 768px) {
    padding: 0;
    margin-top: 0;
    margin-left: 2rem;
    flex-direction: row;
    border-width: 0;
    background-color: #ffffff;
  }
`;
const HomeLink = styled("a")`
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  color: #ffffff;
  background-color: #1d4ed8;

  @media (min-width: 768px) {
    padding: 0;
    color: #1d4ed8;
    background-color: transparent;
  }
`;
const NavLink = styled(Link)`
  display: block;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  color: #111827;

  @media (min-width: 768px) {
    padding: 0;
    border-width: 0;
  }

  :hover {
    background-color: #f3f4f6;
  }
`;

const NavMenuList = styled("div")`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 100;
  right: 0px;
  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  a:hover {
    background-color: #ddd;
  }
`;
export function Header() {
  return (
    <>
      <Nav>
        <NavContainer>
          <LogoContainer href="#">
            <Logo
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/adonisjs/adonisjs-original.svg"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {/* Home */}
            </span>
          </LogoContainer>
          <MenuButton
            id="navbar-toggle"
            data-collapse-toggle="navbar-dropdown"
            type="button"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <MenuTip className="sr-only">Open main menu</MenuTip>
            <MenuBar
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </MenuBar>
            <NavMenuList>
              <Divider />
              <Link href="/">DashBoard</Link>
              <Divider />
              <Link href="/setting">Setting</Link>
            </NavMenuList>
          </MenuButton>
          <NavList id="navbar-dropdown">
            <NavLinks>
              <li>
                <HomeLink href="#" aria-current="page">
                  Menu
                </HomeLink>
                <NavMenuList>
                  <NavLink href="/">DashBoard</NavLink>
                  <Divider />
                  <NavLink href="/setting">Setting</NavLink>
                </NavMenuList>
              </li>
            </NavLinks>
          </NavList>
        </NavContainer>
      </Nav>
    </>
  );
}

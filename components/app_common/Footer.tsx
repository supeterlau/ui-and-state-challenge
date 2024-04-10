import React from "react";
import styled from "@emotion/styled";
import { Container } from "@/components";
import ThemeToggleContext from "@/lib/theme";

const StyledDiv = styled.div`
  height: 3em;
  border-bottom: 0.1em solid gray;
  color: ${(props) => props.theme.color.text};
  background: ${(props) => props.theme.color.background};
  .container {
    // padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    button {
      margin: 0 2em;
      padding: 0.5em 1em;
      font-size: 1em;
      background: transparent;
      color: ${(props) => props.theme.color.text};
      border: 0.1em solid ${(props) => props.theme.color.text};
    }
  }
`;

export function Footer(props) {
  const { isDarkTheme, toggleTheme } = React.useContext(ThemeToggleContext);
  return (
    <StyledDiv className={props.className}>
      <Container
        styles={{
          display: "flex",
          gap: "0.5rem",
          minHeight: "3rem",
          alignItems: "center",
          padding: "0 2rem",
        }}
      >
        <div>Built by</div>
        <div>
          <a
            style={{ textDecoration: "underline" }}
            href="https://github.com/supeterlau"
          >
            <strong>Peter Lau</strong>
          </a>
        </div>
        <div className={"container"}>
          <h1>{props.title}</h1>
          <button onClick={toggleTheme}>
            Switch to {isDarkTheme ? "Light" : "Dark"} mode
          </button>
        </div>
      </Container>
    </StyledDiv>
  );
}

import Header from "./components/Header";
import React from "react";
import Main from "./components/Main";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  button {
    border: 0;
    background-color:transparent; 
  }
  body {
    font-family: 'malgun gothic', 'dotum', sans-serif;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    height: 100%;
    min-width: 1900px;
  }
  input{
    border: 0;
  }
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Main />
    </div>
  );
}

export default App;

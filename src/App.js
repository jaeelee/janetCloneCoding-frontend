import Header from "./components/Header";
import React from "react";
import Main from "./components/Main";
import styles from "./App.module.css";

function App() {
  return (
    <div className={`${styles.Wrapper}`}>
      <Header />
      <Main />
    </div>
  );
}

export default App;

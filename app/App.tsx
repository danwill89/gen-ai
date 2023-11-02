import React from 'react';
import Home from './page';
import LeftMenu from "./components/left-menu";
import styles from "./page.module.css";

const App: React.FC = () => {
  return (
    <div className="App">
      <Home LeftMenu={LeftMenu} styles={styles} />
    </div>
  );
}

export default App;

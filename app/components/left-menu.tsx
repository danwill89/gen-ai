import React from "react";
import styles from "../styles/left-menu.module.scss";

const LeftMenu: React.FC = () => {
  return (
    <div className={styles.leftMenu}>
    <div className={styles.menuItem}>
    <div className={styles.iconPlaceholder} />
        <span>Menu Item 1</span>
      </div>
      <div className={styles.menuItem}>
      <div className={styles.iconPlaceholder} />
        <span>Menu Item 2</span>
      </div>
      <div className={styles.menuItem}>
      <div className={styles.iconPlaceholder} />
        <span>Menu Item 3</span>
      </div>
    </div>
  );
};

export default LeftMenu;
// Removed invalid tags

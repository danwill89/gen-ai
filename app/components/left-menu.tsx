import React from "react";
import "./left-menu.css";

const LeftMenu: React.FC = () => {
  return (
    <div className="left-menu">
      <div className="menu-item">
        <div className="icon-placeholder" />
        <span>Menu Item 1</span>
      </div>
      <div className="menu-item">
        <div className="icon-placeholder" />
        <span>Menu Item 2</span>
      </div>
      <div className="menu-item">
        <div className="icon-placeholder" />
        <span>Menu Item 3</span>
      </div>
    </div>
  );
};

export default LeftMenu;
// Removed invalid tags

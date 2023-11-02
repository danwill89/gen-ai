import React from "react";
import "../globals.css";

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
.left-menu {
  background-color: lightgrey;
  height: 100vh;
  width: 200px;
  position: fixed;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 10px;
}

.icon-placeholder {
  height: 20px;
  width: 20px;
  background-color: grey;
  margin-right: 10px;
}

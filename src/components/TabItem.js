import React from "react";
import "../App.css";

const TabItem = ({ tabName, isActive, clickTabItem }) => {
  const onClickTabItem = () => {
    clickTabItem(tabName);
  };

  const activeClass = isActive ? "active-tab-btn" : "";

  return (
    <li className="tab-item-container">
      <button
        type="button"
        className={`tab-btn ${activeClass}`}
        onClick={onClickTabItem}
      >
        {tabName}
      </button>
    </li>
  );
};

export default TabItem;

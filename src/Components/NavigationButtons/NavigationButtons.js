import React from "react";
import "./navigation.scss";

const NavigationButtons = ({ navItems, clickHandler, activeTab }) => {
    const navLinks = navItems.map((li) => (
        <li key={li} className={activeTab === li ? "active" : null}>
            <button onClick={clickHandler}>{li}</button>
        </li>
    ));

    return (
        <nav>
            <ul>{navLinks}</ul>
        </nav>
    );
};

export default NavigationButtons;
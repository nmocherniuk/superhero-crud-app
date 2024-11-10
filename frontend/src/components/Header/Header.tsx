import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import NavigationMenu from "./NavigationMenu/NavigationMenu";
import Logos from "./Logos/Logos";
import classes from "./Header.module.css";

const Header: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  const toggleNavMenu = (): void => {
    setIsNavOpen((prevState: boolean) => !prevState);
  };

  return (
    <header className={classes.header}>
      <div className={classes["header-container"]}>
        <nav className={classes.navigation}>
          <Logos />
          <NavigationMenu isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
          <span className={classes["hamburger-icon"]} onClick={toggleNavMenu}>
            <Hamburger color="#f2f2f2" toggled={isNavOpen} />
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Header;

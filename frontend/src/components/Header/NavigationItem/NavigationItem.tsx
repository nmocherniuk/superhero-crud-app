import React from "react";
import { Link, useLocation, Location } from "react-router-dom";
import classes from "./NavigationItem.module.css";

interface NavigationItemProps {
  closeMenu: () => void;
  title: string;
  linkTo: string;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  title,
  linkTo,
  closeMenu,
}) => {
  const location: Location = useLocation();
  const isActive = location.pathname === linkTo;
  return (
    <li
      className={`${classes.link} ${isActive ? classes["active-link"] : ""}`}
      onClick={closeMenu}
    >
      <Link to={linkTo}>{title}</Link>
      <div
        className={`${classes["link-line"]} ${
          isActive ? classes["active-link-line"] : ""
        }`}
      />
    </li>
  );
};

export default NavigationItem;

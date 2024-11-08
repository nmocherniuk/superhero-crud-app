import React, { useEffect } from "react";
import NavigationItem from "../NavigationItem/NavigationItem";
import classes from "./NavigationMenu.module.css";

interface NavItem {
  title: string;
  linkTo: string;
}

interface NavigationMenuProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const navItems: NavItem[] = [
  { title: "Home", linkTo: "/" },
  { title: "Superheroes List", linkTo: "/superheroes" },
  { title: "Add Superhero", linkTo: "/new-superhero" },
];

const NavigationMenu: React.FC<NavigationMenuProps> = ({
  isOpen,
  setIsOpen,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <ul
      className={`${classes["nav-menu"]} ${
        isOpen ? classes["nav-menu-open"] : ""
      }`}
    >
      {navItems.map((navItem: NavItem, index: number) => (
        <NavigationItem
          closeMenu={() => setIsOpen(false)}
          key={`navItem-${index}`}
          title={navItem.title}
          linkTo={navItem.linkTo}
        />
      ))}
    </ul>
  );
};

export default NavigationMenu;

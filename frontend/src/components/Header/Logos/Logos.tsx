import React from "react";
import { ReactComponent as MarvelLogo } from "../../../assets/logo/marvel-logo.svg";
import { ReactComponent as DCLogo } from "../../../assets/logo/dc-logo.svg";
import classes from "./Logos.module.css";

const Logos: React.FC = () => {
  return (
    <div className={classes["logos-container"]}>
      <DCLogo className={classes["dc-logo"]} />
      <MarvelLogo className={classes["marvel-logo"]} />
    </div>
  );
};

export default Logos;

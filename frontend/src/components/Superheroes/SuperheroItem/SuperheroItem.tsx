import React from "react";
import { motion as m } from "framer-motion";
import { truncateText } from "../../../util/truncatedText";
import classes from "./SuperheroItem.module.css";

interface SuperheroItemProps {
  nickname: string;
  imgSrc: string;
  index: number;
}

const SuperheroItem: React.FC<SuperheroItemProps> = ({
  nickname,
  imgSrc,
  index,
}) => {
  return (
    <m.li
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: -20 }}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 45,
      }}
      className={classes["superhero-list-item"]}
    >
      <img src={imgSrc} alt={nickname} className={classes["superhero-image"]} />
      {/* <h3 className={classes["superhero-name"]}>{truncateText(name)}</h3> */}
      <h3 className={classes["superhero-name"]}>{nickname}</h3>
    </m.li>
  );
};

export default SuperheroItem;

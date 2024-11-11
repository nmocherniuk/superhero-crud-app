import React from "react";
import { motion as m } from "framer-motion";
import { truncateText } from "../../../util/truncatedText";
import classes from "./SuperheroItem.module.css";
import { Link } from "react-router-dom";

interface SuperheroItemProps {
  id: number;
  nickname: string;
  imgSrc: string;
  index: number;
}

const SuperheroItem: React.FC<SuperheroItemProps> = ({
  id,
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
      <Link to={`/superheroes/${id}`}>
        <img
          src={imgSrc}
          alt={nickname}
          className={classes["superhero-image"]}
        />
        <h3 className={classes["superhero-name"]}>
          {truncateText(nickname, 18)}
        </h3>
      </Link>
    </m.li>
  );
};

export default SuperheroItem;

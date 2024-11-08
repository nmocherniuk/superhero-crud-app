import { forwardRef } from "react";
import SuperheroItem from "../SuperheroItem/SuperheroItem";
import { SuperheroData } from "../../../types";
import classes from "./SuperheroesList.module.css";

interface SuperheroesListProps {
  currentPage: number;
  superheroes: SuperheroData[];
}

const SuperheroesList = forwardRef<HTMLDivElement, SuperheroesListProps>(
  ({ currentPage, superheroes }, ref) => {
    const ITEMS_PER_PAGE = 5;

    const getPagedHeroes = (): SuperheroData[] => {
      const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      return superheroes.slice(startIndex, endIndex);
    };

    return (
      <div className={classes["superheroes-list-container"]} ref={ref}>
        <ul className={classes["superheroes-list"]}>
          {getPagedHeroes().map((heroData: SuperheroData, index: number) => (
            <SuperheroItem
              index={index}
              key={heroData.id}
              name={heroData.name}
              imgSrc={heroData.imgSrc}
            />
          ))}
        </ul>
      </div>
    );
  }
);

export default SuperheroesList;

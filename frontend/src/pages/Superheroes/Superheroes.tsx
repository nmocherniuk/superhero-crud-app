import React, { useRef, useState } from "react";
import { motion as m } from "framer-motion";
import { SuperheroData } from "../../types";
import Container from "../../components/UI/Container/Container";
import SuperheroesList from "../../components/Superheroes/SuperheroesList/SuperheroesList";
import Pagination from "../../components/Superheroes/Pagination/Pagination";
import classes from "./Superheroes.module.css";

const SuperheroesPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [superheroes, setSuperheroes] = useState<SuperheroData[]>([]);
  const heroesListRef = useRef<HTMLDivElement>(null);

  const handlePageChange = (page: number): void => {
    setCurrentPage(page);
    if (heroesListRef.current) {
      heroesListRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={classes["superheroes-page-bg"]}>
      <Container>
        <section className={classes.content}>
          <m.h2
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.4 }}
            className={classes["superheroes-page-title"]}
          >
            Superheroes
          </m.h2>
          <m.p
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className={classes["superheroes-page-subtitle"]}
          >
            Explore a list of iconic superheroes, each with unique powers and
            traits!
          </m.p>
          <div
            className={classes["superheroes-list-container"]}
            ref={heroesListRef}
          >
            <SuperheroesList
              ref={heroesListRef}
              currentPage={currentPage}
              superheroes={superheroes}
            />
          </div>

          <Pagination
            data={superheroes}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </section>
      </Container>
    </div>
  );
};

export default SuperheroesPage;

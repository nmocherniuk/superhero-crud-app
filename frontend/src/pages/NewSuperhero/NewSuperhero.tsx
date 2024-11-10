import React from "react";
import { motion as m } from "framer-motion";
import magnetoImg from "../../assets/images/magneto.png";
import Container from "../../components/UI/Container/Container";
import classes from "./NevSuperhero.module.css";
import AddHeroForm from "../../components/NewSuperhero/AddHeroForm/AddHeroForm";

const NewSuperheroPage: React.FC = () => {
  return (
    <div className={classes.background}>
      <m.img
        animate={{
          x: [900, 740],
          opacity: [0, 1],
        }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        src={magnetoImg}
        alt="Magneto"
        className={classes["magneto-image"]}
      />
      <Container>
        <m.section animate={{ opacity: [0, 1] }} transition={{ duration: 0.9 }}>
          <h2 className={classes.title}>Add Superhero</h2>
          <p className={classes.subtitle}>
            Fill out the details below to add a new superhero to the roster!
          </p>
          <AddHeroForm />
        </m.section>
      </Container>
    </div>
  );
};

export default NewSuperheroPage;

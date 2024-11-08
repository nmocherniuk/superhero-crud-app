import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion as m, Variants } from "framer-motion";
import Container from "../../components/UI/Container/Container";
import classes from "./Home.module.css";

const HomePage: React.FC = () => {
  const [isAnimationComplete, setIsAnimationComplete] =
    useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflowY = isAnimationComplete ? "auto" : "hidden";
  }, [isAnimationComplete]);

  const handleAnimationComplete = (): void => {
    setIsAnimationComplete(true);
    document.body.style.overflowY = "auto";
  };

  const bannerVariants: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className={classes["home-page-bg"]}>
      <m.div
        initial="hidden"
        animate="visible"
        variants={bannerVariants}
        onAnimationComplete={handleAnimationComplete}
        className={classes["main-banner"]}
      >
        <Container>
          <section className={classes.content}>
            <h1 className={classes["greeting"]}>
              Welcome to the Superhero Universe!
            </h1>
            <p className={classes.subtitle}>
              "Create. Discover. Inspire." — Easily navigate to find your
              favorite heroes, update their profiles, or introduce a new legend
              to the world.
            </p>
            <Link to="/superheroes" className={classes["hero-button"]}>
              See All Heroes
            </Link>
          </section>
        </Container>
      </m.div>
    </div>
  );
};

export default HomePage;

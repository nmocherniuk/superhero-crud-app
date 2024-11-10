import React from "react";
import { motion as m } from "framer-motion";
import warningDeadpool from "../../assets/images/deadpool-warning.jpg";
import Container from "../../components/UI/Container/Container";
import classes from "./Error.module.css";
import Header from "../../components/Header/Header";

const ErrorPage: React.FC = () => {
  return (
    <div className={classes.background}>
      <Header />
      <Container>
        <m.section
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.9 }}
          className={classes.content}
        >
          <img src={warningDeadpool} alt="Deadpool" className={classes.image} />
          <h1 className={classes.title}>Excelsior! Page not found.</h1>
          <p className={classes.subtitle}>
            Sorry, the page you are looking for does not exist or has been
            moved.
          </p>
        </m.section>
      </Container>
    </div>
  );
};

export default ErrorPage;

import React, { useState } from "react";
import { motion as m } from "framer-motion";
import Container from "../../components/UI/Container/Container";
import { SuperheroDetailsData } from "../../types";
import SuperheroProfileEdit from "../../components/EditSuperhero/SuperheroProfileEdit";
import classes from "./EditSuperhero.module.css";

const EditSuperheroPage: React.FC = () => {
  const [data, setData] = useState<SuperheroDetailsData | null>(null);

  return (
    <div className={classes.background}>
      <Container>
        <section className={classes.content}>
          <m.h2
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.4 }}
            className={classes.title}
          >
            Edit details for {data?.nickname}
          </m.h2>
          <m.p
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className={classes.subtitle}
          >
            Edit detailed information about a superhero.
          </m.p>
          <SuperheroProfileEdit initialData={data} />
        </section>
      </Container>
    </div>
  );
};

export default EditSuperheroPage;

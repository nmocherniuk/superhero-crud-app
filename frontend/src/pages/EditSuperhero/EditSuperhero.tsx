import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion as m } from "framer-motion";
import Container from "../../components/UI/Container/Container";
import { SuperheroData } from "../../types";
import SuperheroProfileEdit from "../../components/EditSuperhero/SuperheroProfileEdit";
import classes from "./EditSuperhero.module.css";
import { useParams } from "react-router-dom";

const EditSuperheroPage: React.FC = () => {
  const [dataDetail, setDataDetail] = useState<SuperheroData | null>(null);
  const { superheroId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3001/superheroes/${superheroId}`)
      .then((response) => {
        setDataDetail(response.data);
      });
  }, []);

  return (
    <div className={classes.background}>
      <Container>
        <section className={classes.content}>
          <m.h2
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.4 }}
            className={classes.title}
          >
            Edit details for {dataDetail?.nickname}
          </m.h2>
          <m.p
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className={classes.subtitle}
          >
            Edit detailed information about a superhero.
          </m.p>
          <SuperheroProfileEdit data={dataDetail} />
        </section>
      </Container>
    </div>
  );
};

export default EditSuperheroPage;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Params, useParams } from "react-router-dom";
import { motion as m } from "framer-motion";
import Container from "../../components/UI/Container/Container";
import { SuperheroData } from "../../types";
import SuperheroProfile from "../../components/SuperheroDetail/SuperheroProfile/SuperheroProfile";
import classes from "./SuperheroDetail.module.css";

const initialData: SuperheroData = {
  id: 0,
  nickname: "",
  real_name: "",
  superpowers: "",
  catch_phrase: "",
  origin_description: "",
  images: [],
};

const SuperheroDetailPage: React.FC = () => {
  const { superheroId } = useParams<Params>();
  const [dataDetail, setDataDetail] = useState<SuperheroData>(initialData);

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
            Detail info about {dataDetail.nickname}
          </m.h2>
          <m.p
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.6 }}
            className={classes.subtitle}
          >
            Learn more about Superman&apos;s nickname, real name, superpowers,
            and more.
          </m.p>
          <SuperheroProfile superheroData={dataDetail} />
        </section>
      </Container>
    </div>
  );
};

export default SuperheroDetailPage;

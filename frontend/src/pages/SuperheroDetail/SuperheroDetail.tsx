import React, { useState } from "react";
import Container from "../../components/UI/Container/Container";
import { SuperheroData } from "../../types";
import SuperheroProfile from "../../components/SuperheroDetail/SuperheroProfile/SuperheroProfile";
import { motion as m } from "framer-motion";
import classes from "./SuperheroDetail.module.css";

const SuperheroDetailPage: React.FC = () => {
  const [dataDetail, setDataDetail] = useState<SuperheroData | null>(null);

  return (
    <div className={classes.background}>
      <Container>
        <section className={classes.content}>
          <m.h2
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.4 }}
            className={classes.title}
          >
            Detail info about {dataDetail?.nickname}
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

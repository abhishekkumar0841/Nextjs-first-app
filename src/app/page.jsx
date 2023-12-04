import Image from "next/image";
import React from "react";
import hero from "public//heroImage.png";
import styles from "./page.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur .{" "}
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur.
          temporibus rerum labore! Quasi corrupti saepe architecto quod minima nulla, inventore aliquam iusto, .
        </p>
        <button className={styles.button}>See Our Works</button>
      </div>
      <div className={styles.item}>
        <Image src={hero} alt="Home Image" className={styles.image} />
      </div>
    </div>
  );
};

export default Home;

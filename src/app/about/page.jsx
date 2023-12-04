import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://cdn.pixabay.com/photo/2016/05/27/08/51/mobile-phone-1419275_1280.jpg"
          alt="About Cover Image"
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Story Tellers</h1>
          <h2 className={styles.imgDesc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Are?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio atque repellendus et, voluptates praesentium quis.
          </p>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque
            laudantium esse sint maxime tempora, laborum odio, blanditiis autem
            omnis labore totam nulla pariatur debitis dicta non veniam.
            Asperiores, possimus.
          </p>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
            voluptatum! Tempora obcaecati autem eius nostrum nesciunt corrupti,
            quasi officiis repellat?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            distinctio atque repellendus et, voluptates praesentium quis.
          </p>
          <p className={styles.desc}>-Dynamic websites</p>
          <p className={styles.desc}>-Fast and handy mobile apps</p>
          <Button title={"Contact"} href={"/contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get In Touch, with us...</h1>
      <div className={styles.itemContainer}>
        <div className={styles.items}>
          <Image
          className={styles.image}
            src={
              "https://dreamztech.com.my/images/1_Dreamztech/career/programmers.png"
            }
            width={400}
            height={400}
          />
        </div>
        <div className={styles.items}>
          <form>
            <input className={styles.inputs} type="text" placeholder="Name" />
            <input className={styles.inputs} type="text" placeholder="email" />
            <textarea className={styles.inputs}
              name=""
              placeholder="Message"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <Button href={"#"} title={"Send"} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

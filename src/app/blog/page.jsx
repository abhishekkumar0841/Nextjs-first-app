import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href={"blog/test"} className={styles.container}>
        <div className={styles.container}>
          <Image
            className={styles.container}
            src={
              "https://th.bing.com/th/id/OIP.a5YOm_1N-oe-O025Jw4PTQHaE8?rs=1&pid=ImgDetMain"
            }
            alt="blog image"
            width={400}
            height={250}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;

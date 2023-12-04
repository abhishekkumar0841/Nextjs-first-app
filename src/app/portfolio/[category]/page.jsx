import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
          <Button title={'See more'} href={'#'} />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={'https://bestinau.com.au/wp-content/uploads/2019/01/free-images.jpg'} fill={true} alt="Category Image" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
          <Button title={'See more'} href={'#'} />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={'https://bestinau.com.au/wp-content/uploads/2019/01/free-images.jpg'} fill={true} alt="Category Image" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
          <Button title={'See more'} href={'#'} />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={'https://bestinau.com.au/wp-content/uploads/2019/01/free-images.jpg'} fill={true} alt="Category Image" />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>Desc</p>
          <Button title={'See more'} href={'#'} />
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={'https://bestinau.com.au/wp-content/uploads/2019/01/free-images.jpg'} fill={true} alt="Category Image" />
        </div>
      </div>
    </div>
  );
};

export default Category;

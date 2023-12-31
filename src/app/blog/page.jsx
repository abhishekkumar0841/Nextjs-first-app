import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const fetchData = async () => {
  const res = await fetch(`http://localhost:3000/api/posts`, {
    cache: "no-store",
  });
  if (!res.ok) {
    // throw new Error("Failed to fetch data!");
    console.log("Failed to fetch data!");
    return null
  }

  return res.json();
};

export const metadata = {
  title: "Ak Posts Section",
  description: "Generated Ak Posts Section",
};

const Blog = async () => {
  const data = await fetchData();
  return (
    <div className={styles.mainContainer}>
      {data?.map((item) => (
        <Link
          key={item?._id}
          href={`blog/${item?._id}`}
          className={styles.container}
        >
          <div className={styles.container}>
            <Image
              className={styles.container}
              src={item?.image}
              alt="blog image"
              width={400}
              height={250}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item?.title}</h1>
            <p className={styles.desc}>{item?.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;

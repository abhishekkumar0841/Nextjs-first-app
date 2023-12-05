import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

const fetchData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }

  return res.json();
};

export async function generateMetadata({ params }) {
  const post = await fetchData(params.id)
  return {
    title: post.title,
    description: post.desc
  };
}

const BlogPost = async ({ params }) => {
  const post = await fetchData(params.id);
  console.log("Params id:" + params.id);
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.left}>
          <h1 className={styles.title}>{post?.title}</h1>
          <p className={styles.desc}>{post?.desc}</p>
          <div className={styles.userDetails}>
            <Image
              src={
                "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-1024.png"
              }
              height={30}
              width={30}
              alt="User"
            />
            <p className={styles.uName}>{post?.username}</p>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            className={styles.blogImg}
            src={post?.image}
            fill={true}
            alt="Blog"
          />
        </div>
      </div>

      <div className={styles.lower}>{post?.content}</div>
    </div>
  );
};

export default BlogPost;

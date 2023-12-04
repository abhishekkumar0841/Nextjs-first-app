import React from "react";
import styles from "./button.module.css";
import Link from "next/link";

const Button = ({ title, href }) => {
  return (
    <Link href={href}>
      <button className={styles.button}>{title}</button>
    </Link>
  );
};

export default Button;

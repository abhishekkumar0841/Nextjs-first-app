"use client";
import React, { useContext, useState } from "react";
import styles from "./DarkModeToggle.module.css";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { ThemeContext } from "../../../context/ThemeContext";

const DarkModeToggle = () => {
  const { toggleMode, mode } = useContext(ThemeContext);

  return (
    <div className={styles.container} onClick={toggleMode}>
      <BsMoon className={styles.icons} />
      <BsSun className={styles.icons} />
      <div
        className={styles.ball}
        style={mode === "light" ? { left: "3px" } : { right: "3px" }}
      ></div>
    </div>
  );
};

export default DarkModeToggle;

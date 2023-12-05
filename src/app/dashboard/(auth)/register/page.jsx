"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const Register = () => {
  const [text, setText] = useState({
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter()

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setText((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(text)
    });
    if(response?.ok){
      router.push('/')
      setText({
        username: "",
        email: "",
        password: "",
      })
    }
    } catch (error) {
     console.log("ERROR WHILE REGISTRATION:", error); 
    }
  };

  return (
    <div className={styles.container}>
      <h1>Register here..</h1>
      <form className={styles.form} onSubmit={submitHandler}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter Name"
          onChange={changeHandler}
          value={text.username}
          name="username"
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Enter Email"
          onChange={changeHandler}
          value={text.email}
          name="email"
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Enter Password"
          onChange={changeHandler}
          value={text.password}
          name="password"
        />
        <button className={styles.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;

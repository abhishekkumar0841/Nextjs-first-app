"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";

const Dashboard = () => {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [err, setErr] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const res = await fetch(`https://dummyjson.com/posts`, {
  //       cache: "no-store",
  //     });
  //     if (!res.ok) {
  //       setErr(true);
  //     }
  //     const {posts} = await res.json();
  //     setLoading(false);
  //     setData(posts)
  //   };
  //   fetchData();
  // }, []);
  // console.log("Data Dashboard:", data);
  
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error, isLoading } = useSWR('https://dummyjson.com/posts', fetcher)
  console.log("data-->", data);

  return <div className={styles.container}>Dashboard</div>;
};

export default Dashboard;

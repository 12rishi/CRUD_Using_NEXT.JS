"use client";
import axios from "axios";
import Card from "./components/Card";
import { useEffect } from "react";

export default function Home() {
  const fetchdata = async () => {
    const data = await axios.get("http://localhost:3000/api/recipe");
    if (data) {
      console.log(data);
    }
  };
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <>
      <div className="flex flex-wrap">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

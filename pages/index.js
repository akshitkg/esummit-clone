import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Cards from "../components/Cards";
// import Card from "../components/Card";
import axios from "axios";

export default function Home(dataProp) {
  const data = dataProp.dataProp;
  return (
    <div>
      <Cards />
    </div>
  );
}



import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from '../components/Header'
import EventsHeading from "../components/Events";
import Cards from "../components/Cards";
import Footer from "../components/Footer"
// import Card from "../components/Card";
import axios from "axios";

export default function Home(dataProp) {
  const data = dataProp.dataProp;
  return (
    <div>
      <Header/>
      <EventsHeading/>
      <Cards />
      <Footer/>
    </div>
  );
}



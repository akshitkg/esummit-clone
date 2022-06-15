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
      {/* <ul>
        {data.map((prop) => {
          return <li key={prop.id}>{prop.event_name}</li>;
        })}
      </ul> */}
      <Cards />
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get("https://api.esummit.in/events/all");
  const dataProp = response.data.CompetitiveEvents;
  // setData(response.data.CompetitiveEvents);
  // console.log(dataProp);
  return {
    props: {
      dataProp,
    },
  };
}

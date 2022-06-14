import React, { useState, useEffect } from "react";
import axios from "axios";
import { getData } from "../utils/get-data";

export default function Cards() {
  const [data, setData] = useState([]);
  useEffect( () => {
    const response =  axios.get("https://api.esummit.in/events/all");
    const dataProp =  response.data;

    setData(dataProp);
  });

  return console.log(data);
}

// export async function getStaticProps() {
//   const response = await axios.get("https://api.esummit.in/events/all");
//   // const dataProp = response.data.CompetitiveEvents;
//   setData(response.data.CompetitiveEvents);
//   console.log(dataProp);
//   return {
//     props: {
//       dataProp,
//     },
//   };
// }

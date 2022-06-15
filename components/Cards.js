import React, { useState, useEffect } from "react";
import axios from "axios";
import { getData } from "../utils/get-data";
import Card from './Card'

export default function Cards() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://api.esummit.in/events/all")
        .then((res) => setData(res.data.CompetitiveEvents));
    }
    fetchData();
  }, []);
  // useEffect(() => {
  //   axios
  //     .get("https://api.esummit.in/events/all")
  //     .then((res) => setData(res.data));
  // });

  // const response = axios.get("https://api.esummit.in/events/all");
  // const dataProp = response.data;

  // () => setData(dataProp);
  return <Card props={data}/> 

}



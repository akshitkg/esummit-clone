import React, { useState, useEffect } from "react";
import axios from "axios";
import { getData } from "../utils/get-data";
import Card from "./Card";

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

  return (
    <div className="h-auto w-full p-0 flex justify-center content-center bg-transparent">
      <Card props={data} />
    </div>
  );
}

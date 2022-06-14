import axios from "axios";

export async function getData() {
  await axios
    .get("https://api.esummit.in/events/all")
    .then((res) => {
      return res.data.CompetitiveEvents;
    })
    .catch((err) => console.log(err));
}

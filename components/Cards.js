export default function Cards(dataProp) {
  return console.log(dataProp);
}

export async function getStaticProps() {
  const response = await axios.get("https://api.esummit.in/events/all");
  // const dataProp = response.data.CompetitiveEvents;
  setData(response.data.CompetitiveEvents);
  console.log(dataProp);
  return {
    props: {
      dataProp,
    },
  };
}

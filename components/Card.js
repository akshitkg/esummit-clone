import Image from "next/image";

export default function Card(props) {
  const dataProps = props.props;
  return (
    <div className="bg-pink border-2 border-yellow w-full mr-[3%] ml-[3%] flex flex-row flex-wrap justify-center">
      {dataProps.map((dataElement) => {
        const card_description = dataElement.card_description.replace(
          /(<([^>]+)>)/gi,
          ""
        );
        // const card_description = str.ireplace(
        //   "<p>",
        //   "",
        //   dataElement.card_description
        // );
        // const card_description_final = .replace(
        //   "<p>",
        //   "",
        //   card_description
        // );
        return (
          <div className=" border-t-2 border-l-2 border-r-2 border-b-2 border-golden rounded-tl-[64px] rounded-tr-[16px] rounded-br-[64px] basis-1/4 m-[3%] h- w-full flex flex-col relative">
            <Image
              className="object-cover w-full h-full relative rounded-tl-[64px] rounded-tr-[16px]"
              key={dataElement.card_image}
              src={dataElement.card_image}
              unoptimized={true}
              width="90"
              height="400"
            />

            <div className="bg-golden rounded-br-[64px]">
              <h3 className="text-white">{dataElement.event_name}</h3>
              <div className="bg-violet bottom-0 overflow-hidden w-full hover:transition-all">
                <div className=" flex border-green border-2 flex-col justify-between overflow-scroll">
                  <p>{card_description}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// flex flex-row flex-wrap justify-center

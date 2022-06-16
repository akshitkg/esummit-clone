import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-black text-white flex flex-row justify-between p-6">
      <div className="basis-1/5 p-4 flex flex-col justify-between">
        <Image alt={'The Universe'} src="/Esummitlogofinal.webp" width={150} height={50}></Image>
        <div>
          <h3 className="text-xl font-weight">EMAIL</h3>
          <p>esummit@iitr.ac.in</p>
        </div>
        <div>
          <h3 className="text-2xl font-weight">FOLLOW US AT</h3>
          <div className="flex flex-row justify-between flex-wrap pt-2">
            <Image src="/facebook.webp" width={35} height={35}></Image>
            <Image src="/Twitter.png" width={35} height={35}></Image>
            <Image src="/Instagram.webp" width={35} height={35}></Image>
            <Image src="/LinkedIN.webp" width={35} height={35}></Image>
            <Image src="/Youtube.webp" width={35} height={35}></Image>
          </div>
        </div>
      </div>
      <div className="basis-1/5 p-4 flex flex-col justify-between">
        <Image alt={'The Universe'} className="p-1" src="/Ecell_logo.webp" width={150} height={50}></Image>
        <div className="p-3">
          <h2 className="text-2xl font-weight mt-3 mb-3">PHONE</h2>
          Daksh:
          <br />
          +91 96465 83392
          <br />
          Abhinandan:
          <br />
          +91 80546 89033
          <br />
        </div>
        <div className="p-3">
          <h2 className="text-2xl font-weight mt-3 mb-3">OUR ADDRESS</h2>
          <div>
            E-cell Office SAC Building
            <br />
            IIT Roorkee
            <br />
            Roorkee, Uttarakhand-
            <br />
            247667, INDIA
          </div>
        </div>
      </div>
      <div className="basis-1/5 p-4 flex flex-col justify-between">
        <input
          type="text"
          placeholder="Name"
          className="text-white bg-black border-2 border-grey p-2 rounded-lg"
        ></input>
        <input
          type="email"
          placeholder="Email"
          className="text-white bg-black border-2 border-grey p-2 rounded-lg"
        ></input>
        <input
          type="text"
          placeholder="Phone Number"
          className="text-white bg-black border-2 border-grey p-2 rounded-lg"
        ></input>
        <input
          type="text"
          placeholder="Write your message"
          className="text-white bg-black border-2 border-grey p-2 rounded-lg"
        ></input>
        <button className="border-2 border-grey p-2 rounded-lg">SUBMIT</button>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="bg-black w-full p-2 fixed top-0 z-10 flex flex-row justify-between">
      <Image src="/Esummitlogofinal.webp" width={150} height={50} />
      <ul className="flex flex-row justify-between basis-1/3 items-center">
        <li className="text-white">
          <Link href="#">
            <a>HOME</a>
          </Link>
        </li>
        <li className="text-white">
          <Link href="#">
            <a>TEAM</a>
          </Link>
        </li>
        <li className="text-golden border-b-4 border-golden">
          <Link href="#">
            <a>EVENTS</a>
          </Link>
        </li>
        <li className="text-white">
          <Link href="#">
            <a>SPEAKERS</a>
          </Link>
        </li>
        <li className="text-white">
          <Link href="#">
            <a>SPONSORS</a>
          </Link>
        </li>
        <li className="text-white">
          <Link href="#">
            <a>FAQ</a>
          </Link>
        </li>
      </ul>
      <ul className="flex flex-row justify-between items-center basis-1/6 p-4">
        <li className="text-white">
          <Link href="#">
            <a>LOGIN</a>
          </Link>
        </li>
        <li className="text-white">
          OR
        </li>
        <li className="text-white">
          <Link href="#">
            <a><button className="bg-golden pt-0.5 pb-0.5 pr-1.5 pl-1.5 rounded-tl-xl rounded-br-xl rounded-tr-lg">REGISTER</button></a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

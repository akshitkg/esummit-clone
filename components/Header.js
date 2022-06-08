import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="flex flex-row font-bold w-full">
      <Image
        className=""
        src="/Esummitlogofinal.webp"
        height={40}
        width={200}
      />
      <ul className="text-white flex justify-between basis-2/4">
        <Link href="#">
          <a>HOME</a>
        </Link>
        <Link href="#">
          <a>TEAM</a>
        </Link>
        <Link href="#">
          <a>EVENTS</a>
        </Link>
        <Link href="#">
          <a>SPEAKERS</a>
        </Link>
        <Link href="#">
          <a>SPONSORS</a>
        </Link>
        <Link href="#">
          <a>FAQ</a>
        </Link>
      </ul>
      <div className="text-white flex justify-between basis-1/4">
        <a>LOGIN</a>
        <p>or</p>
        <a className="bg-yellow">
          <button className="bg-golden">REGISTER</button>
        </a>
      </div>
    </nav>
  );
}

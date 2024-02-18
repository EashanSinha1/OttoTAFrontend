import Image from "next/image";
import { Lexend } from "next/font/google";
import React from "react";
// import { ButtonPrimary } from "./ButtonPrimary";
// import { ButtonSecondary } from "./ButtonSecondary";
// import { NavBar } from "./NavBar";
import Link from "next/link";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

export default function Home() {
  return (
    <div className={lexend.className}>
      <div className="w-[1728px] h-[1117px] relative bg-gradient-to-r from-purple-700 to-fuchsia-400">
        <div className="absolute left-[50px] top-[32px] text-white text-[40px] font-medium">
          OttoTA
        </div>
        <div className="absolute left-[50px] top-[405px] text-center text-white text-[100px] font-medium">
          14x Your Learning
        </div>
        <div className="absolute left-[50px] top-[534px] text-white text-[40px] font-normal">
          Connect to your Canvas profile to master your classes.
        </div>
        <img
          className="absolute w-[449px] h-[646px] left-[1062px] top-[207px]"
          src="/otto.png"
          alt="Otto the Otter"
        />

        <nav className="absolute w-[600px] h-[25px] left-[591px] top-[47px] flex justify-center space-x-[145px]">
          <a
            href="#"
            className="text-center text-white text-xl font-semibold hover:text-opacity-75 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-center text-white text-xl font-semibold hover:text-opacity-75 transition"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-center text-white text-xl font-semibold hover:text-opacity-75 transition"
          >
            About Us
          </a>
        </nav>

        <button className="absolute w-[264.36px] h-14 left-[50px] top-[619px] bg-fuchsia-100 rounded-[28px] border-2 border-purple-700 flex items-center justify-center hover:bg-white hover:text-white transition duration-300">
          <Link
            href="/signin"
            className="text-center text-purple-700 text-xl font-semibold"
          >
            Get Started
          </Link>
        </button>

        <button className="absolute w-[199px] h-14 left-[383px] top-[619px] bg-white bg-opacity-40 rounded-[28px] border-2 border-fuchsia-100 flex items-center justify-center hover:bg-fuchsia-100 hover:text-purple-700 transition duration-300">
          <span className="text-center text-white text-xl font-semibold">
            Watch Demo
          </span>
        </button>

        <button className="absolute w-[154px] h-14 left-[1524px] top-[32px] bg-white bg-opacity-40 rounded-[28px] border-2 border-fuchsia-100 flex items-center justify-center hover:bg-fuchsia-100 hover:text-purple-700 transition duration-300">
          <Link
            href="/signin"
            className="text-center text-white text-xl font-semibold"
          >
            Login
          </Link>
        </button>
      </div>
    </div>
  );
}

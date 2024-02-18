"use client";
import { FC, MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import { auth } from "../../auth/firebase";
import { Lexend } from "next/font/google";
import Link from "next/link";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

const TokenPage: FC = () => {
  const router = useRouter();
  const [token, setToken] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToken(e.target.value);
  };

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const status = await fetch(
      "https://back.otto-ta.tech/verifyCanvasApi/" + token,
    );
    const data = await status.json();
    console.log(data);
    console.log(status);
    console.log(token);
    if (data === true) {
      const uid = auth.currentUser?.uid;
      const setAuth = await fetch(
        "https://back.otto-ta.tech/users/" + uid + "/" + token,
        {
          method: "POST",
        },
      );
      console.log(setAuth.status);
      router.push("/selectclasses");
    } else {
      setToken((prev) => "");
      alert("Invalid Token, please try again.");
    }
  };

  return (
    <main className=" text-black flex min-h-screen flex-col items-center justify-center py-0 bg-gradient-to-r from-purple-700 to-fuchsia-400">
      <div className={lexend.className}>
        {/* <div className="w-[1728px] h-[1117px] relative bg-gradient-to-r from-purple-700 to-fuchsia-400"> */}
        <div className="w-[1254px] h-[600px] left-[237px] top-[180px] absolute bg-white rounded-[60px]">
          <div className="left-[147px] top-[90px] absolute justify-center text-center text-black text-6xl font-medium font-lexend tracking-custom">
            Let’s get to know more about you
          </div>
          <div className="left-[162px] top-[188px] absolute text-center text-zinc-600 text-3xl font-medium font-lexend tk-sub-title tracking-custom">
            Input your canvas auth token so we can import your course data
          </div>

          <div className="w-[868px] h-[65px] left-[193px] top-[240px] absolute">
            <div className="w-[868px] h-[65px]  bg-white rounded-[15px] border-2 border-zinc-600">
              <input
                type="text"
                placeholder="Enter your Canvas auth token here"
                className="w-full h-full rounded-[15px] pl-2"
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button
            className="absolute w-[260px] h-12 left-[497px] top-[330px] bg-purple-600 rounded-[14px] flex items-center justify-center hover:bg-purple-400 hover:text-white transition duration-300"
            onClick={handleClick}
          >
            <span className="text-center text-white text-xl font-medium">
              Submit
            </span>
          </button>
          {/* <div className="w-[260px] h-12 left-[497px] top-[389px] absolute">
                <div className="w-[260px] h-12 left-0 top-0 absolute bg-purple-600 rounded-[14px]" />
                <div className="left-[96px] top-[11px] absolute text-center text-white text-xl font-medium font-lexend">Submit</div>
            </div> */}
        </div>
        <div className="w-[132px] h-[50px] left-[50px] top-[32px] absolute justify-center items-center inline-flex">
          <div className="text-white text-[40px] font-medium font-lexend">
            OttoTA
          </div>
        </div>
        {/* </div> */}
      </div>
      {/* <div className="flex flex-col items-center w-[1000px] h-[750px] bg-white rounded-[60px]">

    
//       <h1 className="text-black text-4xl pt-10 pb-3">Lets get to know more about you</h1>
//       <h1 className="text-2xl "
//       >Input your canvas auth token so we can import your course data</h1>
      
//       <div className="w-[868px] h-[65px] pt-20">
//     <div className="w-[868px] h-[65px]  bg-white rounded-[15px] border-2 border-zinc-600">
//       <input type="text" placeholder="Canvas Auth Token" className="w-full h-full rounded-[15px] pl-2" onChange={handleInputChange}/>
//     </div>
//     <div className="w-full ">
//     <button className="w-[100px] h-[65px] bg-purple-700 rounded-[15px] mt-5 text-white" onClick={handleClick} >Submit</button>

//     </div>
// </div>
// </div> */}
    </main>
  );
};

export default TokenPage;

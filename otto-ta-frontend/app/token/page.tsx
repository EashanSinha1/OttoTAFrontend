"use client";
import { FC, MouseEvent, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { getAuth } from "firebase/auth";
import { auth } from "../../auth/firebase";

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
    <main className=" text-black flex min-h-screen flex-col items-center justify-center py-0 bg-gradient-to-br from-purple-700 to-purple-300/90">
      <h1 className="absolute top-0 left-0 p-5 text-3xl">OttoTa</h1>
      <div className="flex flex-col items-center w-[1000px] h-[750px] bg-white rounded-[60px]">
        <h1 className="text-black text-4xl pt-10 pb-3">
          Lets get to know more about you
        </h1>
        <h1 className="text-2xl ">
          Input your canvas auth token so we can import your course data
        </h1>

        <div className="w-[868px] h-[65px] pt-20">
          <div className="w-[868px] h-[65px]  bg-white rounded-[15px] border-2 border-zinc-600">
            <input
              type="text"
              placeholder="Canvas Auth Token"
              className="w-full h-full rounded-[15px] pl-2"
              onChange={handleInputChange}
            />
          </div>
          <div className="w-full ">
            <button
              className="w-[100px] h-[65px] bg-purple-700 rounded-[15px] mt-5 text-white"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TokenPage;

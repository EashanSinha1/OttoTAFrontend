"use client";
import { FC, useEffect } from "react";
import SignInWidget from "@/components/SignInWidget";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Lexend } from "next/font/google";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
});

const Home: FC = () => {
  const router = useRouter();
  return (
    // <main className="flex min-h-screen flex-col items-center justify-center py-0 bg-gradient-to-br from-purple-700 to-purple-300/90">
    <div className={lexend.className}>
      <div className="w-[1728px] h-[1117px] relative bg-gradient-to-r from-purple-700 to-fuchsia-400">
        {/* <div className="w-[773px] h-[262px] left-[477px] top-[428px] absolute">
          <div className="w-[773px] h-[262px] left-0 top-0 absolute bg-white rounded-[60px] shadow" />
            <div className="left-[317px] top-[34px] absolute text-center text-black text-[40px] font-medium font-lexend">Sign In</div>
            <div className="w-[543px] h-[105px] relative">
              <SignInWidget onSignIn={() => {
                router.push("/hom")
                  
                }} signInText="Continue with Google" />
            </div>
            <div className="w-12 h-12 left-[186px] top-[140px] absolute" />
      </div> */}

        <div className="w-[773px] h-[262px] left-[477px] top-[428px] absolute">
          <div className="w-[773px] h-[262px] left-0 top-0 absolute bg-white rounded-[60px] shadow" />
          <div className="left-[317px] top-[34px] absolute text-center text-black text-[40px] font-medium font-lexend">
            Sign In
          </div>
          <div className="w-[543px] h-[105px] left-[131px] top-[111px] absolute">
            <div className="w-[543px] h-[105px] left-0 top-0 absolute bg-white rounded-[20px] border-2 border-neutral-400" />
            {/* <div className="left-[129px] top-[31px] absolute text-center text-neutral-400 text-[35px] font-medium font-lexend">Continue with Google</div> */}
            <SignInWidget
              onSignIn={() => {
                router.push("/token");
              }}
              signInText="Continue with Google"
            />
            <div className="w-12 h-12 left-[55px] top-[29px] absolute" />
          </div>
        </div>
        <div className="w-[132px] h-[50px] left-[50px] top-[32px] absolute justify-center items-center inline-flex">
          <div className="text-white text-[40px] font-medium font-lexend">
            OttoTA
          </div>
        </div>
      </div>
    </div>

    // </main>
  );
};

export default Home;

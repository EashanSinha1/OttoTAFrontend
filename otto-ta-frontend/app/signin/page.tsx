"use client";
import {FC, useEffect} from "react";
import SignInWidget from "@/components/SignInWidget";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Home: FC = () => {
  const router = useRouter();
  return (

    <main className="flex min-h-screen flex-col items-center justify-center py-0 bg-gradient-to-br from-purple-700 to-purple-300/90">
    
    <div className="flex flex-col items-center w-[650px] h-[220px] bg-white rounded-[60px] shadow">
      <h1 className="text-4xl font-bold text-black pt-10 pb-5"
      >Sign in with google</h1>
    <SignInWidget onSignIn={() => {
      router.push("/hom")
        
      }} signInText="Continue with Google" />


    </div>
     
    </main>
  );
}

export default Home;
"use client";
import SignInWidget from "@/components/SignInWidget";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignInWidget onSignIn={() => {
        console.log("Signed in");
      }} signInText="Sign in with Google" />
    </main>
  );
}

import React, { MouseEvent, FC } from "react";
import { auth } from "../auth/firebase";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { sign } from "crypto";

interface SignInWidgetProps {
  onSignIn: (user: User | null) => void;
  signInText: string;
}
const SignInWidget: FC<SignInWidgetProps> = ({ onSignIn, signInText }) => {
  const signIn = async (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const provider = await new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        onSignIn(result.user);
      })
      .catch((error) => {
        // Handle errors here
        console.error(error);
      });
  };
  //The intention of this is to design a consistent sign in widget later on for modularity @Austin @Ben - Kind regards, Matt
  return (
    // <div className="w-[773px] h-[262px] relative" onClick={signIn} >

    //     <div className="w-[773px] h-[262px] left-0 top-0 absolute bg-white rounded-[60px] shadow" />
    //     <div className="left-[317px] top-[34px] absolute text-center text-black text-[40px] font-medium font-['Lexend']">Sign In</div>
    //     <div className="w-[543px] h-[105px] left-[131px] top-[111px] absolute bg-white rounded-[20px] border-2 border-neutral-400" />
    //     <div className="left-[260px] top-[142px] absolute text-center text-neutral-400 text-[35px] font-medium font-lexend">{signInText}</div>
    //     <div className="w-12 h-12 left-[186px] top-[140px] absolute" />
    // </div>

    <div
      className="w-[543px] h-[105px] relative cursor-pointer"
      onClick={signIn}
    >
      {signInText}
      <div className="w-[543px] h-[105px] left-0 top-0 absolute bg-white rounded-[20px] border-2 border-neutral-400" />
      <div className="left-[129px] top-[26px] absolute text-center text-neutral-400 text-[35px] font-medium no-select cursor-pointer">
        Continue with Google
      </div>
      <img
        className="w-12 h-12 left-[55px] top-[29px] absolute"
        src="/Google Icon.svg"
        alt="Google Logo"
      />
    </div>

    // <div>
    //     <button
    //         className="text-white px-3 py-2 text-2xl rounded-lg bg-green-600 hover:text-white hover:scale-105"
    //         onClick={signIn} >
    //         {signInText}
    //     </button>
    // </div>
  );
};

export default SignInWidget;

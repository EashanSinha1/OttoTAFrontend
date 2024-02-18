import React, { MouseEvent, FC } from "react";
import { auth } from "../auth/firebase";
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";

interface SignInWidgetProps {

    onSignIn: (user: User | null ) => void;
    signInText: string;

}
const SignInWidget: FC<SignInWidgetProps> = ({ onSignIn, signInText}) => {
    const signIn = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const provider = await new GoogleAuthProvider();
        signInWithPopup(auth, provider).then((result) => {
            onSignIn(result.user);
        })
            .catch((error) => {
                // Handle errors here
                console.error(error);
            });
    }
    //The intention of this is to design a consistent sign in widget later on for modularity @Austin @Ben - Kind regards, Matt
    return (

        <div>
            <button
                className="text-white px-3 py-2 rounded-lg bg-green-600 hover:text-white sm:text-sm hover:scale-105"
                onClick={signIn} >
                {signInText}
            </button>
        </div>
    )
}

export default SignInWidget
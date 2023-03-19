import React, { useContext, useState } from "react";
import Link from "next/link";
import { VscArrowSmallRight } from "react-icons/vsc";
import Image from "next/image";
import { toast } from "react-toastify";

import Inputs from "@/components/inputs";
import connection from "@/config/connection";
import { AuthContext } from "@/contexts/AuthContext";

const Signin = () => {
  const { signIn } = useContext(AuthContext)
  const initialState = {
    username: "",
    password: "",
  }
  const [user, setUser] = useState({...initialState});

  const fetchSignin = async (e) => {
    e.preventDefault();
    
    try {
      await signIn(user)
      
    } catch (err) {
      console.log(err)

    }
  };

  return (
    <div className="flex sm:flex-col md:flex-row w-screen h-screen overflow-x-hidden scrollbar-hide">
      <div className="sm:flex-1 md:flex-[2_2_0%] animate-slide-in-left">
        <Image
          width={1920}
          height={1080}
          src="/signin-img.png"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col flex-1 p-8  md:justify-center">
        <div className="h-fit overflow-y-auto flex flex-col gap-16 scrollbar-hide">
          <div className="font-black text-xl animate-fade-up">
            <p>Login</p>
          </div>
          <form
            onSubmit={(e) => fetchSignin(e)}
            className="flex flex-col gap-8"
          >
            <Inputs type={'signin'} user={user} setUser={setUser} />
            <Link href={'/signup'} className="text-end">don&apos;t have an account? <b>Click Here!</b></Link>
            <div className="flex justify-around  animate-fade-up">
              <button className="hover:opacity-40 transition rounded-full flex-1 h-[40px] bg-background-base dark:bg-dark-background-base text-typography-secondary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;

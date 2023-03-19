import React, { useState } from "react";
import Link from "next/link";
import { VscArrowSmallRight } from "react-icons/vsc";
import Image from "next/image";
import { toast } from "react-toastify";

import Inputs from "@/components/inputs";
import connection from "@/config/connection";

const Signup = () => {
  const initialState ={
    name: "",
    email: "",
    username: "",
    password: "",
    password_confirm: "",
  }
  const [user, setUser] = useState({...initialState});

  const fetchSignup = async (e) => {
    e.preventDefault();

    try{
      const {data} = await connection.post('/signup', user)
      setUser(initialState)
      toast.success(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
    } catch(err) {
      toast.error(err.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <div className="flex sm:flex-col md:flex-row w-screen h-screen overflow-x-hidden scrollbar-hide">
      <div className="sm:flex-1 md:flex-[2_2_0%] animate-slide-in-left">
        <Image
          width={1920}
          height={1080}
          priority
          src="/signup-img.svg"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col flex-1 p-8  md:justify-center">
        <div className="h-fit overflow-y-auto flex flex-col gap-16 scrollbar-hide">
          <div className="font-black text-xl animate-fade-up">
            <p>Sign Up</p>
          </div>
          <form
            onSubmit={(e) => fetchSignup(e)}
            className="flex flex-col gap-8"
          >
            <Inputs user={user} setUser={setUser} />
            <div className="flex justify-around  animate-fade-up">
              <button className="hover:opacity-40 transition rounded-full flex-1 h-[40px] bg-background-base dark:bg-dark-background-base text-typography-secondary">
                Sign Up
              </button>
              <Link
                href={"/signin"}
                className="hover:opacity-40 transition rounded-full flex-1 flex justify-center items-center"
              >
                Sign in <VscArrowSmallRight />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

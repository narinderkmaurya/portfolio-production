import Image from "next/image";
import React from "react";

import { IoReload } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { FaGithub } from "react-icons/fa6";

import Tooltip from "./Tooltip";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className=" mx-96 text-white bg-[#72665d] bg-opacity-10 backdrop-blur-lg p-2 rounded-full flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Tooltip text="I bet you are curious :p">
          <button className="bg-opacity-20 bg-white backdrop-blur-lg p-2 rounded-full">
            <FaArrowLeft />
          </button>
        </Tooltip>

        <div className="bg-opacity-10  backdrop-blur-lg p-2 rounded-full">
          <FaArrowRight color="grey" />
        </div>

        <Tooltip text="India 💖">
          <button className="bg-opacity-10  backdrop-blur-lg p-2 rounded-full ml-3">
            <GoHome />
          </button>
        </Tooltip>
      </div>

      {/* search box */}
      <div className="flex justify-between gap-16 items-center py-1 bg-white bg-opacity-20 backdrop-blur-xl rounded-full px-3">
        <span>Aa</span>
        <p className="font-extralight flex gap-2 items-center">
          <CiLock className="mt-0.5" />
          narinderkmaurya.me
        </p>
        <IoReload />
      </div>
      <Link href='https://github.com/narinderkmaurya' className="bg-opacity-20 bg-white backdrop-blur-lg p-2 rounded-full">
        <FaGithub />
      </Link>
    </nav>
  );
};

export default Navbar;

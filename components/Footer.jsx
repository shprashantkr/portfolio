import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center ">
        <Image src={assets.myLogo2} alt="" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          sh.prashantkr01@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 Prashant Kumar Sharma, All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/shprashantkr01" target="_blank">
              <Image src={assets.github_icon} alt="" className="w-12 rounded-full bg-transparent" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/prashant-kumar-sharma-40528934b/"
              target="_blank"
            >
              <Image src={assets.linkedin_icon} alt="" className="w-12 rounded-full bg-transparent" />
            </a>
          </li>
          <li>
            <a href="https://leetcode.com/u/1prashant1/" target="_blank">
              <Image src={assets.leetcode_icon} alt="" className="w-12 rounded-full bg-transparent" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default footer;

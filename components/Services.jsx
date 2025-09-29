import { serviceData } from "@/assets/assets";
import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What I offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        I am a Software Engineer from Delhi, India with a degree in bachelor's
        of technology in Computer Science and Engineering.
      </p>

      <div className="grid gap-6 my-10 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {serviceData.map(({icon, title, description, link }, index)=>(
            <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 hover:-translate-y-1 diration-500 cursor-pointer hover:bg-[#fcf4ff] hover:shadow-[4px_4px_4px_rgba(0,0,0,0.4)]">
                <Image src={icon} alt="icon" className="w-10"/>
                <h3 className="text-lg my-4 text-gray-700">{title}</h3>
                <p className="text-sm text-gray-600 leading-5">{description}</p>
                <a href={link} className="flex items-center gap-2 text-sm mt-5"> Read More <Image src={assets.right_arrow} alt="" className="w-4"/></a>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

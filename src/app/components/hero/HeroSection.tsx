"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import imageMe from "../../../../public/image.jpg";
import Aos from "aos";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div
          data-aos="fade-down"
          className="col-span-7 place-self-center text-center sm:text-left"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I{"'m"}
            </span>
            <br />
            <TypeAnimation
              sequence={["Truong", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            I am a Frontend Developer and I am passionate about creating and
            developing user interfaces to create the best web experience for
            users.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
              Github
            </button>
            <button className="px-1 py-1 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 to-pink-500 text-white mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Dowload CV
              </span>
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="col-span-5 place-self-center mt-4 lg:mt-10"
        >
          <Image
            src={imageMe}
            alt="hero image"
            width={400}
            height={400}
            className="rounded-3xl lg:h-[500px] lg:w-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";
import React, { useEffect, useRef } from "react";
import GithubIcon from "../../../../public/github-icon.svg";
import LinkedinIcon from "../../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import Aos from "aos";

const EmailSection = () => {
  const form = useRef<any>();

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qos8l7i",
        "template_dki8ifr",
        form.current,
        "xD9gZhgkSQOGuLSTD"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
          if (result) {
            Swal.fire({
              icon: "success",
              text: "Send email successfully",
            });
            form.current.reset();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
    Aos.init({ easing: "ease-in-sine" });
  }, []);

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4" id="contact">
      <div data-aos="fade-right">
        <h5 className="text-xl font-bold text-white my-2">
          Let{"'s "} Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I{"'m"} current looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I{"'ll"} try
          my best to get back to you!
        </p>
        <div className="flex flex-row gap-2 text-white">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" ref={form} onSubmit={sendEmail}>
          <div data-aos="flip-left">
            <label
              htmlFor="email"
              className="text-white block mb-2 font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@gmail.com"
            />
            <label
              htmlFor="email"
              className="text-white block mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6" data-aos="flip-left">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            data-aos="flip-left"
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;

"use client";

import Link from "next/link";
import { ReactTyped } from "react-typed";

export default function TypingAnimation() {
  return (
    <div className="w-full min-h-screen bg-[#ADD8E6] text-color-01 flex flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-3xl font-bold sm:text-xl lg:text-2xl">Hello !!</h1>

      <h1 className="text-5xl pb-5 font-bold sm:text-3xl lg:text-4xl">
        I am <span className="text-orange-300">Nabila Bannay Khan</span>
      </h1>

      <span className="text-4xl font-bold sm:text-2xl lg:text-3xl">I am a Passionate</span>
      <br />

      <ReactTyped
        strings={["Front-End Developer.", "Web Developer.", "UI/UX Designer."]}
        className="text-pink-300 text-5xl font-bold sm:text-3xl lg:text-4xl"
        typeSpeed={50}
        backSpeed={30}
        loop
      />

      <h1 className="text-black text-2xl max-w-4xl py-5 font-sans sm:text-lg">
        I am passionate about coding and technology. I started my journey into programming through the Governor Sindh Initiative for GenAI, Web3, and the Metaverse, and have since developed skills in languages such as HTML, CSS, TypeScript, JavaScript, Next.js, and Python. I am currently learning AI. I love the challenge of problem-solving and enjoy creating applications that can make everyday tasks easier.
      </h1>

      <div className="py-8">
        <Link
          href="/#contact"
          className="text-color-01 text-lg border-2 rounded-3xl px-8 py-3 cursor-pointer hover:text-black hover:font-bold hover:bg-02"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}

import Image from "next/image";

import AboutMe from "@/app/about/page";
import Skills from "@/app/skills/page";
import Projects from "@/app/projects/page";
import ContactForm from "@/app/contact/page";
import TypingAnimation from "@/app/animation/page";



export default function page() {
  return (
    <div>
    

      {/* Hero Section */}
      <section id="home" className="relative w-full bg-[#ADD8E6] h-4/5 max-lg:h-auto">
        <div className="flex justify-between items-center w-full p-9 max-lg:flex-col">
          {/* Profile Image */}
          <div className="flex justify-center w-3/4 h-full pl-10 pb-16 max-sm:p-0 max-lg:pb-0">
            <div className="relative w-96 h-96 max-sm:w-52 max-sm:h-52 max-lg:h-56 max-lg:w-56 max-xl:w-60 max-xl:h-60">
              <Image
                src="/images/pf-8.jpg"
                alt="Profile picture"
                fill
                className="rounded-full object-cover"
              />
            </div>
          </div>

          {/* Typing Animation */}
          <div className="w-full relative my-20 max-xl:mx-auto max-lg:my-10">
            <TypingAnimation />
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <section id="about"><AboutMe /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><ContactForm /></section>

     
    </div>
  );
}

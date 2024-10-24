import Link from "next/link";

export default function AboutMe() {
  return (
    <section className="relative border-y-2 bg-cover  bg-[url('/images/sun-6.jpg')] w-full text-center py-20 px-64 max-lg:px-0 max-sm:py-14 ">
      <div className="absolute bg-black-1 inset-0 opacity-85"></div>
      <div>
        <div className="relative text-center text-color-01 text-5xl pb-16 max-sm:pb-8 max-sm:text-4xl">
          <strong>About Me</strong>
        </div>
        <div className="relative text-start leading-8 text-black text-xl px-20 pb-8 max-sm:px-12 max-sm:text-lg max-lg:px-14 max-xl:px-0">
          <ul className="list-disc">
            <li className="pl-4 max-sm:pl-2">
            I am a coder who recently started my learning journey with the Governor Sindh Initiative for GenAI, Web3, and the Metaverse. As a beginner, I faced challenges while working on various projects, but I persevered and successfully completed them. This experience has not only enhanced my skills but also fueled my passion for exploring new technologies and creating innovative solutions in the digital space.
            </li>
            <br />
            <li className="pl-4 max-sm:pl-2">
            I am a medical student who recently completed my FSc. Alongside my studies, I pursued my interest in coding by passing my first quarter in "Typescript" at GIAIC. Currently, I am learning "Next.js," which is expanding my skills in web development. Balancing my medical studies with programming allows me to explore the intersection of technology and healthcare, fueling my passion for both fields.
            </li>
          </ul>
        </div>
        <div className="relative py-8 text-center ">
          <Link
            href="/#Contact Us"
            className="text-color-01 text-lg border-2 rounded-3xl px-8 py-3 cursor-pointer hover:text-black hover:font-bold hover:bg-02"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

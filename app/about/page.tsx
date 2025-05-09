import Link from "next/link";

export default function About() {
  return (
    <section
      id="About"
      className="relative bg-[#ADD8E6] w-full min-h-screen text-center py-20 px-64 max-lg:px-0 max-sm:py-14"
    >
      <div>
        <div className="text-center text-color-01 text-5xl pb-16 max-sm:pb-8 max-sm:text-4xl relative">
          <strong>About Me</strong>
        </div>

        <div className="relative text-start leading-8 text-black text-xl px-20 pb-8 max-sm:px-12 max-sm:text-lg max-lg:px-14 max-xl:px-0">
          <ul className="list-disc">
            <li className="pl-4 max-sm:pl-2">
              I’m a passionate and self-driven developer with a growing foundation in web technologies like HTML, CSS, JavaScript, TypeScript, and modern frameworks such as React and Next.js. Alongside web development, I’m also exploring the power of Python for data analysis, automation, and backend development. My journey began with curiosity and turned into a commitment to continuous learning and building real-world projects. I enjoy turning complex problems into clean, efficient solutions and find deep satisfaction in writing code that not only works, but is also readable and scalable. Currently, I’m focused on deepening my skills in full-stack development, Python scripting, and exploring the future of tech through initiatives in AI and blockchain. Every line of code I write brings me one step closer to becoming a better developer.
            </li>
          </ul>
        </div>

        <div className="relative py-8 text-center">
          <Link
            href="/#ContactUs"
            className="text-color-01 text-lg border-2 rounded-3xl px-8 py-3 cursor-pointer hover:text-black hover:font-bold hover:bg-02"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}


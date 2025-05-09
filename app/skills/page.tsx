import Image from "next/image";

export default function Skills() {
  return (
    <section
      id="Skills"
      className="w-full bg-[#ADD8E6] py-24 px-6 sm:px-12 md:px-24 xl:px-56 border-y-2"
    >
      <div className="text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-color-01 mb-10">
          Skills
        </h2>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 text-center">
            
            {/* Skill Item */}
            <div>
              <Image
                src="/images/icon1.png"
                alt="HTML"
                width={120}
                height={120}
                className="mx-auto rounded object-cover hover:scale-125 duration-300"
              />
              <p className="mt-4 text-lg font-semibold">HTML</p>
            </div>

            <div>
              <Image
                src="/images/icon2.png"
                alt="CSS"
                width={120}
                height={120}
                className="mx-auto rounded object-cover hover:scale-125 duration-300"
              />
              <p className="mt-4 text-lg font-semibold">CSS</p>
            </div>

            <div>
              <Image
                src="/images/icon3.png"
                alt="Tailwind CSS"
                width={120}
                height={120}
                className="mx-auto rounded object-cover hover:scale-125 duration-300"
              />
              <p className="mt-4 text-lg font-semibold">Tailwind CSS</p>
            </div>

            <div>
              <Image
                src="/images/icon6.png"
                alt="Typescript"
                width={120}
                height={120}
                className="mx-auto rounded object-cover hover:scale-125 duration-300"
              />
              <p className="mt-4 text-lg font-semibold">Typescript</p>
            </div>

            <div>
              <Image
                src="/images/icon8.png"
                alt="Next Js"
                width={120}
                height={120}
                className="mx-auto rounded object-cover hover:scale-125 duration-300"
              />
              <p className="mt-4 text-lg font-semibold">Next Js</p>
            </div>

            <div>
              <Image
                src="/images/icon5.png"
                alt="Python"
                width={120}
                height={120}
                className="mx-auto rounded object-cover hover:scale-125 duration-300"
              />
              <p className="mt-4 text-lg font-semibold">Python</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

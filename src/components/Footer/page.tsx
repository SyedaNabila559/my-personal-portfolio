import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="bg-gray-800 text-white py-10">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-6 mb-10">
          <a
            href="https://www.linkedin.com/in/nabila-bannay-khan-a38b57313"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-color-01 transition duration-700"
          >
            <FaGithub size={40} />
          </a>
          <a
            href="https://github.com/SyedaNabila559"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-color-01 transition duration-700"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="mailto:syedanabila33@gmail.com"
            className="hover:text-color-01 transition duration-700"
          >
            <FaGoogle size={40} />
          </a>
        </div>
        <div>
          <hr className="my-8 border-gray-600" />
          <p className="text-sm">
            &copy; 2024 Nabila Bannay Khan. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
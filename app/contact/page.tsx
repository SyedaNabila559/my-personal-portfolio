"use client";

import { useState, FormEvent } from "react";
import { FaGithub, FaLinkedin, FaGoogle, FaTwitter } from "react-icons/fa";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "57b508e4-8fc2-4c0c-b22e-7e05a1affbc2",
        name: target.name.value,
        email: target.email.value,
        message: target.message.value,
      }),
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      setMessage("Message sent successfully!!!");
      console.log(result);
    } else {
      setMessage("There was an error submitting the form.");
    }
  }

  return (
    <section
      className="w-full bg-[#ADD8E6] text-black py-16"
      id="contact"
    >
      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="text-center">
        <div className="text-color-01 pb-16 text-5xl font-bold max-sm:text-4xl">
          Contact Me
        </div>
        <div className="mb-10">
          <input
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="border-2 rounded-lg border-black p-3 text-xl text-black w-2/4 max-lg:w-3/4 max-md:text-lg mx-auto"
          />
        </div>
        <div className="mb-10">
          <input
            type="email"
            name="email"
            required
            placeholder="Enter Your Email"
            className="border-2 rounded-lg border-black p-3 text-xl text-black w-2/4 max-lg:w-3/4 max-md:text-lg mx-auto"
          />
        </div>
        <div className="mb-10">
          <textarea
            name="message"
            required
            rows={3}
            placeholder="Enter Message"
            className="border-2 rounded-lg border-black p-3 text-xl text-black w-2/4 max-lg:w-3/4 max-md:text-lg mx-auto"
          ></textarea>
        </div>
        <div className="text-color-01 text-xl pb-5">
          {message && <p>{message}</p>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="text-black text-lg border-2 rounded-3xl px-12 py-3 cursor-pointer hover:text-black hover:font-bold hover:bg-02"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Social Media Links */}
      <div className="text-center py-8">
        <div className="text-2xl font-semibold mb-4">Connect with Me</div>
        <div className="flex justify-center gap-6 sm:gap-4 md:gap-8">
          <a
            href="https://www.linkedin.com/in/nabila-bannay-khan-a38b57313"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-color-01 transition duration-700"
          >
            <FaLinkedin className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          </a>
          <a
            href="https://github.com/SyedaNabila559"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-color-01 transition duration-700"
          >
            <FaGithub className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          </a>
          <a
            href="mailto:syedanabila33@gmail.com"
            className="hover:text-color-01 transition duration-700"
          >
            <FaGoogle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          </a>
          <a
            href="https://x.com/SyedaNabila55?t=1-jVOtyKtjBiMEFPH4RhyA&s=08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-color-01 transition duration-700"
          >
            <FaTwitter className="text-xl sm:text-2xl md:text-3xl lg:text-4xl" />
          </a>
        </div>
      </div>
    </section>
  );
}


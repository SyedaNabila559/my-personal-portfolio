import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Resume Builder",
      image: "/images/resume.jpeg",
      description:
        "These project is HTML and CSS base. An intuitive web application to create professional resumes with form inputs, data handling, and downloadable PDF output.",
      link: "https://milestone-djcy.vercel.app/",
    },
    {
      title: "My First Website (GIAIC OFFICIAL)",
      image: "/images/website.webp",
      description:
        "These project is Next Js base. A personal website showcasing my interests with a clean UI and sections like blog, gallery, and contact links.",
      link: "https://milestone2-rho.vercel.app/",
    },
    {
      title: "TypeScript Question 45",
      image: "/images/45.jpg",
      description: "A CLI-based assignment solving 45 TypeScript questions.",
      link: "https://github.com/SyedaNabila559/45-assigment-question.git",
    },
    {
      title: "Giaic Student Id-Card",
      image: "/images/Project-3.jpg",
      description: "These project is Next Js base. I create student id card from Giaic where i learning artifical intelligence,web metavers 0.3 and cloud computing.",
      link: "https://giaic-student-card-sage.vercel.app/",
    },
    {
      title: "Baby Baba Product (E-Commerce)",
      image: "/images/sho1.jpg",
      description:
        "These project is Next Js base E-Commerce Website. This is a responsive website with a functionality that allows users to add items to the cart.",
      link: "https://baby-product-ecommerce.vercel.app/",
    },
    {
      title: "Dynamic Blog",
      image: "/images/pf-5.webp",
      description:
        "These project is Next Js base Dynamic Blog. Dynamic routing has been implemented, and it features user-friendly navigation.",
      link: "https://dynamic-block.vercel.app/",
    },
    {
      title: "Market Place E-Commerce (Sanity)",
      image: "/images/orange-sofa.png",
      description:
        "These project is Next Js base Market place Sanity E-Commerce website. This is a furniture website. It is user-friendly and includes add-to-cart functionality.",
      link: "https://marketplace-by-syeda-6q1t-dud4p7r4v-syeda-nabilas-projects.vercel.app/",
    },
    {
      title: "Figma E-Commerce",
      image: "/images/game3.png",
      description:
        "These project is Next Js base Figma E-Commerce website. This is a user-friendly website with add-to-cart, login, and signup functionality.",
      link: "https://website-ecommerce-figma.vercel.app/",
    },
    {
      title: "Mindset-growth",
      image: "/images/m.png",
      description:
        "These project is Python and Streamlit base. In this, we can add our daily progress and save it as a PDF.",
      link: "https://syeda-mindset-growth.streamlit.app/",
    },
    {
      title: "Secure Data Encryption System",
      image: "/images/e.png",
      description:
        "These project is Python and Streamlit base. It also saves and deletes data, and encrypts and decrypts it for security.",
      link: "https://secure-data-encryption-system-776.streamlit.app/",
    },
    {
      title: "Time Zone",
      image: "/images/t.png",
      description:
        "These project is Python and Streamlit base. It displays the time of Asian countries based on their respective time zones. ",
      link: "https://time-zone-49epd8mcuzc97exujw2czn.streamlit.app/",
    },
    {
      title: "Unit Convertor",
      image: "/images/u.png",
      description:
        "These project is Python and Streamlit base. In this, we can convert units like length and weight. ",
      link: "https://unit-converter-web-app.streamlit.app/",
    },
    {
      title: "Task Manager",
      image: "/images/tm.png",
      description:
        "These project is Python and Streamlit base. In this, we can add all our tasks and download them as a CSV file. ",
      link: "https://syeda-task-manager.streamlit.app/",
    },
    {
      title: "Personal Finance Tracker",
      image: "/images/pft.png",
      description:
        "These project is Python and Streamlit base.  This project uses an OOP (Object-Oriented Programming) library and is a tracker where users can add their monthly budget and save it in CSV format.",
      link: "https://python-class7-assignment.streamlit.app/",
    },
    {
      title: "Hospital Management System",
      image: "/images/h.png",
      description:
        "These project is Python and Streamlit base. These application is an interactive dashboard for managing doctors, nurses, patients, and appointments using OOP concepts and Streamlit UI.",
      link: "https://python-class8-assignment-6msixcuu6vejkwvuxs4baw.streamlit.app/",
    },
    
    
    
  ];

  return (
    <section className="w-full bg-[#ADD8E6]" id="projects">
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center text-color-01 text-5xl font-bold max-sm:text-4xl">
          My Projects
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 pt-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-4 border-l-cyan-400 border-r-sky-600 border-t-green-700 border-b-teal-700 rounded-3xl hover:scale-105 duration-300 bg-white shadow-lg"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="object-cover rounded-t-3xl h-64 w-full"
              />
              <div className="text-center font-bold text-2xl py-4 text-black">
                {project.title}
              </div>
              <p className="text-center text-sm text-gray-800 px-5">{project.description}</p>
              <div className="py-6 text-center">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-color-01 text-lg border-2 rounded-3xl px-8 py-3 cursor-pointer hover:text-black hover:font-bold hover:bg-02"
                >
                  Visit Site
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

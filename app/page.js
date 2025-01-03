'use client';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faEnvelope, faHome, faSchool } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JsonView from 'react18-json-view'
import 'react18-json-view/src/style.css'
import 'react18-json-view/src/dark.css'
import Image from "next/image";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useState, useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";





const s = "#c22028"
const data = {
  Age: "19",
  Interests: ["Full Stack Development", "Data Science", "Cloud Computing", "Machine Learning", "Computer Networks"],
  Languages: ["Java", "Python", "JavaScript", "C++", "SQL"],
  Libraries: ["Spring", "React", "Node", "Next.js", "Django"],
  Hobbies: ["Tennis", "Running", "Soccer"],

}

const styling = {
  backgroundImage: `url("https://gifdb.com/images/high/starfield-dark-background-sgli8iwvguwxzovr.gif")`,
  width: "100%",
  height: "100%",


}
{
  <Image
    src={'/Users/rohansah/rohansah/public/tumblr_a4e62f065ab4d244532754de265e7c8a_bc2ef8c2_500.gif'}
    layout={'responsive'}
    height={175}
    width={175}
    alt={`A cute animal!`}
    unoptimized={true}
  />
}

const education = [
  {
    name: "Iowa State University",
    position: "August 2023 - May 2027",
    role: "B.S. in Computer Science, Minor in Applied Mathematics",
    imageUrl: "/Iowa-State-Logo-drawing.jpg",
    gpa: "3.8",
    color: "Relevant Coursework:\n" +
      "- Math 265 (Multivariable Calculus)\n" +
      "- COM S 227 (Object-Oriented Programming)\n" +
      "- COM S 228 (Data Structures)\n" +
      "- COM S 230 (Discrete Mathematics for Computing)\n" +
      "- COM S 309 (Software Development Practices)\n" +
      "- COM S 311 (Analysis of Algorithms)\n" +
      "- COM S 321 (Computer Architecture and Organization)\n" +
      "- COM S 363 (Introduction to Databases)\n" +
      "- COM S 362 (Object-Oriented Analysis and Design)",
    date: "Present",
  },
];


const work = [
  {
    name: "John Deere",
    position: "Incoming Student Software Engineer",
    role: "🚜 Full Stack Software Development @ John Deere Financial",
    imageUrl: "/286b4ecc9af91eb03bee1f3d970d5aa3.jpg",
    color: "#C8E6C9",
    date: "Present"
  },
  {
    name: "Ivy College Of Business",
    position: "Software Engineering Research Assistant",
    role: "🧳 Business Research & Full-Stack Software Development for the public good",
    imageUrl: "/Iowa-State-University-Ivy-College-of-Business.jpeg",
    color: "#F8D7DA",
    date: "Present"

  },
  {
    name: "Indu Sah Foundation",
    position: "Founding Software Engineer",
    role: "🌏 Developing the website for the Nepalese-American humanitarian non-profit, Indu Sah Foundation",
    imageUrl: "/IMG_0009.JPG",
    color: "#F8D7DA",
    date: "Present"

  },
  {
    name: "Iowa Legislature",
    position: "Data Science Intern for Iowa Senator",
    role: "📊 Built historic voter data automation software",
    imageUrl: "/Capitol image-1.jpg",
    color: "#A7C7E7",
    date: "Summer 2024"
  },
  // {
  //   name: "Iowa State University",
  //   position: "Undergraduate Research Assistant",
  //   role: "Defense of Lidar sensor via Deep Learning",
  //   imageUrl: "/IMG_0006.JPG",
  //   color: "#A7C7E7",
  //   date: "Fall 2023, Spring 2024"

  // },


  // {
  //   name: "Gladiators NYC",
  //   position: "Technology Intern",
  //   role: "💪 Building Web Apps for the Team",
  //   imageUrl: "/6b7494_8b0abaf9d22c444cafb659a0e25e5625~mv2.png",
  //   color: "white"
  // },
];


export default function Home() {



  return (
    <div className="overflow-auto scroll-smooth" style={styling} >
      <section id="home">
        <div className="h-5" />

        {(<nav className=" fixed top-0 left-0 right-0 z-10 flex justify-center items-center py-3 rounded-full space-x-10">
          <a href="#home" className="relative group">
            <div className="bg-gray-300 hover:bg-gray-200 h-28 w-28 text-center flex items-center justify-center text-gray-700 font-medium cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg opacity-50 group-hover:opacity-100">
              <FontAwesomeIcon icon={faHome} size="4x" />
            </div>
            <span className="absolute top-28 left-1/2 transform -translate-x-1/2 text-white bg-gray-700 px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition duration-300">Home</span>
          </a>
          <a href="#work" className="relative group">
            <div className="bg-gray-300 hover:bg-gray-200 h-28 w-28 text-center flex items-center justify-center text-gray-700 font-medium cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg opacity-50 group-hover:opacity-100">
              <FontAwesomeIcon icon={faBriefcase} size="4x" />
            </div>
            <span className="absolute top-28 left-1/2 transform -translate-x-1/2 text-white bg-gray-700 px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition duration-300">Experiences</span>
          </a>
          <a href="#education" className="relative group">
            <div className="bg-gray-300 hover:bg-gray-200 h-28 w-28 text-center flex items-center justify-center text-gray-700 font-medium cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg opacity-50 group-hover:opacity-100">
              <FontAwesomeIcon icon={faSchool} size="4x" />
            </div>
            <span className="absolute top-28 left-1/2 transform -translate-x-1/2 text-white bg-gray-700 px-2 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition duration-300">Education</span>
          </a>
        </nav>)}
        <div className="flex items-center justify-center h-screen mt-20">
          <div className="text-center mr-32">
            <div className="text-6xl font-mono text-black">A Software Engineerd </div>
            {/* <div className="w-1/3 h-1/3 items-center justify-center">         
            <img src="/78170C86-93AC-4037-9408-CDF1FF058404_1_105_c.jpeg" className=" h-full w-full object-cover bg-gray-300  rounded-xl"/>
          </div> */}

            <div className="text-6xl font-mono "><ReactTyped strings={["Hi! I'm Rohan 👋", "a CS Student", "A Software Engineer"]} typeSpeed={100} backSpeed={100} loop></ReactTyped></div>
            <div className="space-x-4 mt-2 ">
              <a href="https://github.com/exploratoryprorammer"><FontAwesomeIcon size="4x" className="" icon={faGithub} /></a>
              <a href="https://www.linkedin.com/in/rohan-sah/"><FontAwesomeIcon size="4x" className="text-blue-600" icon={faLinkedin} /></a>
              <a href="mailto:your.email@example.com"><FontAwesomeIcon size="4x" icon={faEnvelope} /></a>
            </div>
          </div>
          
          <div className="w-1/3 text-2xl bg-white rounded-lg mr-12 mt-20 overflow-auto">
            <div className="flex items-center justify-between bg-gray-200 rounded-t-lg p-1">
              <div className="flex ml-2 space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-700 font-semibold">Rohan.json</div>
              <div></div>
            </div>

            <div className="overflow-x-auto">
              <JsonView src={data} displaySize={10} displayArrayIndex={false} />
            </div>
          </div>




        </div>
      </section>

      <section id="work">
        <div className="h-36" />
        <div className="flex flex-col justify-center items-center ml-16">
          <div className="w-11/12 text-2xl bg-white rounded-lg mr-10">
            <div className="flex items-center justify-between bg-gray-200 rounded-t-lg p-1">
              <div className="flex ml-2 space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-700 font-semibold"> WorkExperience.app</div>
              <div></div>
            </div>

            <div className="flex flex-col bg-gray-300 pt-8 pb-8 pl-6 pr-6 gap-3 w-full h-full justify center items-center rounded-b-lg">
              {work.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row bg-white w-full lg:w-full h-auto rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative w-56 h-40 md:w-56">

                    {/* Image Section */}
                    <img
                      src={item.imageUrl}
                      alt="Work Experience"
                      className="absolute h-40 w-56 md:w-56 object-cover bg-gray-200 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                    />
                  </div>
                  {/* Content Section */}
                  <div className="p-4 text-black flex flex-col w-full">
                    <div className="flex items-center w-full justify-between">
                      <h2 className="text-3xl font-semibold font-serif ">{item.name}</h2>
                      <p className="text-lg italic text-gray-950 font-sans ml-auto">{item.date}</p>
                    </div>
                    <p className="text-lg italic text-gray-950 font-sans">{item.position}</p>
                    <p className="text-xl text-black mt-3 font-mono">{item.role}</p>
                  </div>
                </div>
              ))}

              <div
                className="flex flex-col md:flex-row bg-white w-full lg:w-full h-auto rounded-lg shadow-lg overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative w-56 h-40 md:w-56">

                  <img
                    src={"/6b7494_8b0abaf9d22c444cafb659a0e25e5625~mv2.png"}
                    alt="Work Experience"
                    className="absolute h-40 w-56 md:w-56 object-cover bg-red-700 p-2 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                {/* Content Section */}
                <div className="p-4 text-black flex flex-col w-full">
                  <div className="flex items-center w-full">

                    <h2 className="text-3xl font-semibold font-serif">Gladiator's NYC</h2>
                    <p className="text-lg italic text-gray-950 font-sans ml-auto">Summer 2024</p>

                  </div>
                  <p className="text-lg italic text-gray-950 font-sans">{ }Software Engineering Intern</p>
                  <p className="text-xl text-black mt-3 font-mono">{ }📈 Streamlined & Automated product price, name, & availability updates</p>
                </div>
              </div>
              <div
                className="flex flex-col md:flex-row bg-white w-full lg:w-full h-auto rounded-lg shadow-lg overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative w-56 h-40 md:w-56">

                  <img
                    src={"/IMG_0006.JPG"}
                    alt="Work Experience"
                    className="absolute h-40 w-56 md:w-56 object-cover bg-red-700 p-2 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
                  />
                </div>
                {/* Content Section */}
                <div className="p-4 text-black flex flex-col w-full">
                  <div className="flex items-center w-full">

                    <h2 className="text-3xl font-semibold font-serif">Iowa State University</h2>
                    <p className="text-lg italic text-gray-950 font-sans ml-auto">Fall 2023, Spring 2024</p>

                  </div>
                  <p className="text-lg italic text-gray-950 font-sans">{ } Undergraduate Research Assistant</p>
                  <p className="text-xl text-black mt-3 font-mono">{ }Defense of Lidar sensor via Deep Learning</p>
                </div>
              </div>
            </div>
            



          </div>


        </div>
      </section>
      <section id="education">
        <div className="h-36" />
        <div className="flex flex-col justify-start mt-24 items-center ml-16 pb-24">
          <div className="w-11/12 text-2xl bg-white rounded-lg mr-10">
            <div className="flex items-center justify-between bg-gray-200 rounded-t-lg p-1">
              <div className="flex ml-2 space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-700 font-semibold"> Education.app</div>
              <div></div>
            </div>

            <div className=" flex flex-col bg-gray-300 pt-8 pb-8 pl-6 pr-6 gap-3 w-full h-full justify center items-center rounded-b-lg">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-10 md:flex-row w-full lg:w-full h-auto rounded-xl overflow-hidden"
                >
                  <div className=" w-1/3 ">

                    <img
                      src={item.imageUrl}
                      alt="Work Experience"
                      className=" h-full w-full object-cover bg-gray-300  rounded-xl"
                    />
                  </div>


                  <div className="p-4 bg-white rounded-xl shadow-lg text-black flex flex-col w-2/3">
                    <div className="flex items-center w-full justify-between">
                      <h2 className="text-3xl font-semibold font-serif ">{item.name}</h2>
                      <p className="text-lg italic text-gray-950 font-sans ml-auto">{item.position}</p>

                    </div>
                    <p className="text-lg italic text-gray-950 font-sans">{item.role}</p>
                    <p className="text-xl text-black mt-3 font-mono">
                      Key Coursework:<br />
                      - Math 265 (Multivariable Calculus)<br />
                      - Math 267 (Differential Equations)<br />
                      - COM S 227 (Object-Oriented Programming)<br />
                      - COM S 228 (Data Structures)<br />
                      - COM S 230 (Discrete Mathematics for Computing)<br />
                      - COM S 309 (Software Development Practices)<br />
                      - COM S 311 (Analysis of Algorithms)<br />
                      - COM S 321 (Computer Architecture and Organization)<br />
                      - COM S 331 (Theory of Computing) <br />
                      - COM S 363 (Introduction to Databases)<br />
                      - COM S 362 (Object-Oriented Analysis and Design)
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
        <div className="h-60" />

      </section>










    </div >
  );
}

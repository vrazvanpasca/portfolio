import React from "react";
import Image from "next/image";

const skills = [
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "React" },
  { skill: "React Native" },
  { skill: "Next.js" },
  { skill: "NodeJS" },
  { skill: "Express" },
  { skill: "Nest" },
  { skill: "MySQL" },
  { skill: "Mongo" },
  { skill: "REST" },
  { skill: "GraphQL" },
  { skill: "MaterialUI" },
  { skill: "Tailwind CSS" },
  { skill: "GitHub" },
  { skill: "Docker" },
  { skill: "Figma" },
  { skill: "Cypress" },
  { skill: "Puppeteer" },
  { skill: "React Testing Library" },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Razvan and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Romania, Europe.
            </p>
            <br />
            <p>
              I graduated from Automation and Computer Science University
              Cluj-Napoca in 2020 with a BS in Computer Engineering and have
              been working in the field right before. I started my career in
              software development since 2018.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, to cooking interesting
              recipes, I am always seeking new experiences and love to keep
              myself engaged and learning new things.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that&#39;s what I strive to do, I have a passion for
              technology and a desire to always push the limits of what is
              possible. I am excited to see where my career takes me and I am
              always open to new opportunities. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
            <Image
              src="/superhero.png"
              alt="superhero"
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-32 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

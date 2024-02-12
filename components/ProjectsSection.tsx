import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: 'Gambling Lotto Application',
    description:
      'Hoteliant creates products that help hoteliers provide a better and safer guest experience',
    image: '/lotto.png',
    github: 'https://github.com/hqasmei/thankful-thoughts',
    link: 'https://hoteliant.com/',
  },
  {
    name: 'Bussinesses management application',
    description:
      'Hoteliant creates products that help hoteliers provide a better and safer guest experience',
    image: '/anaplan.png',
    github: 'https://github.com/hqasmei/thankful-thoughts',
    link: 'https://hoteliant.com/',
  },
  {
    name: 'Legacy app',
    description:
      'Hoteliant creates products that help hoteliers provide a better and safer guest experience',
    image: '/cloudoflegacy.png',
    github: 'https://github.com/hqasmei/thankful-thoughts',
    link: 'https://hoteliant.com/',
  },
  {
    name: 'Car Documents App',
    description:
      'Hoteliant creates products that help hoteliers provide a better and safer guest experience',
    image: '/drumbun.png',
    github: 'https://github.com/hqasmei/thankful-thoughts',
    link: 'https://hoteliant.com/',
  },
  {
    name: 'Hoteliant',
    description:
      'Hoteliant creates products that help hoteliers provide a better and safer guest experience',
    image: '/hoteliant.png',
    github: 'https://github.com/hqasmei/thankful-thoughts',
    link: 'https://hoteliant.com/',
  },
  {
    name: 'Techsylvania Conference',
    description:
      "Techsylvania Conference in Cluj: Where global tech leaders meet for an annual exploration of cutting-edge innovations in the heart of Romania's tech hub.",
    image: '/techsylvania.png',
    github: 'https://github.com/hqasmei/katorfamilyphotos',
    link: 'https://techsylvania.com/',
  },
  {
    name: 'Codiax Conference',
    description: 'PlatoIO is a to do list app that built using the PERN stack.',
    image: '/codiax.png',
    github: 'https://github.com/hqasmei/platoio',
    link: 'https://codiax.co/',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;

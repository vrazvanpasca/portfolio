import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from './SlideUp';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';

const projects = [
  {
    name: 'Gambling Lotto Application',
    description:
      'Contributed to an international web development team, leveraging latest technologies to deliver a high-performance gambling web application for a prominent client.',
    technologies: 'Typescript | Next 13 | React Testing Library | SCSS',
    image: '/lotto.png',
    github: 'https://github.com/vrazvanpasca',
  },
  {
    name: 'Bussinesses management application',
    description:
      'Developed and deployed a game-changing web app for global enterprises, providing essential utilities and tools; boosted operational efficiency by automating key processes and saving an average of 200 hours per month.',
    technologies:
      'Typescript | React | React-Router | Cypress | React Testing Library | Docker | TILT ',
    image: '/anaplan.png',
    github: 'https://github.com/vrazvanpasca',
  },
  {
    name: 'Legacy app',
    description:
      'Contributed to developing an application for securely storing digital data and thoughts, unlockable only by designated heirs, ensuring a lasting legacy.',
    technologies: 'Next.js | Javascript | Material UI | Github',
    image: '/cloudoflegacy.png',
    github: 'https://github.com/vrazvanpasca',
    link: 'https://cloudoflegacy.com/',
  },
  {
    name: 'Car Documents App',
    description:
      'Contributed to crafting an app tailored for managing essential car documents in Romania. Streamlining the process, it ensures easy access and organization, simplifying the complexities of vehicle-related paperwork.',
    technologies: 'React Native | Typescript | Expo | SCSS | NestJS',
    image: '/drumbun.png',
    github: 'https://github.com/vrazvanpasca',
    link: 'https://drumbun.ro/',
  },
  {
    name: 'Hoteliant',
    description:
      'Hoteliant creates products that help hoteliers provide a better and safer guest experience',
    image: '/hoteliant.png',
    technologies: 'React | Javascript | Material UI',
    github: 'https://github.com/vrazvanpasca',
    link: 'https://hoteliant.com/',
  },
  {
    name: 'Techsylvania Conference',
    description:
      "Techsylvania Conference in Cluj: Where global tech leaders meet for an annual exploration of cutting-edge innovations in the heart of Romania's tech hub.",
    image: '/techsylvania.png',
    technologies: 'Wordpress | PHP | CSS',
    github: 'https://github.com/vrazvanpasca',
    link: 'https://techsylvania.com/',
  },
  {
    name: 'Codiax Conference',
    description:
      'Contributed to the creation of a dynamic website for a tech conference, providing a seamless platform for information, registration, and engagement. Designed to enhance the attendee experience and showcase cutting-edge content in the world of technology.',
    technologies: 'Wordpress | PHP | CSS',
    image: '/codiax.png',
    github: 'https://github.com/vrazvanpasca',
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
      <p className="text-left text-s italic mb-10">
        *Please note that certain projects below are bound by confidentiality
        agreements, restricting the disclosure of their names or providing
        access to their repositories. Screenshots have been carefully curated to
        exclude any sensitive information. Thank you for your understanding.
      </p>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link || '/'}>
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
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      <span className="text-decoration-line: underline;">
                        Technologies:
                      </span>{' '}
                      {project.technologies || ''}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github && (
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
                      {project.link && (
                        <Link href={project.link} target="_blank">
                          <BsArrowUpRightSquare
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </Link>
                      )}
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

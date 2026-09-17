import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import SectionHeading from "./SectionHeading"
import { BsArrowUpRightSquare } from "react-icons/bs"

type Project = {
  name: string
  description: string
  stack: string[]
  image: string
  category: string
  link?: string
  confidential?: boolean
}

const projects: Project[] = [
  {
    name: "Lottery platform",
    description:
      "High-traffic consumer lottery and instant-win product for an international client. Built with a modern Next.js stack, with a strong focus on performance, reliability, and test coverage.",
    stack: ["TypeScript", "Next.js", "React Testing Library", "SCSS"],
    image: "/lotto.png",
    category: "Consumer web",
    confidential: true,
  },
  {
    name: "Enterprise planning platform",
    description:
      "Web application for global enterprises — utilities and workflows that automated core planning processes and saved teams an average of 200 hours per month.",
    stack: [
      "TypeScript",
      "React",
      "React Router",
      "Cypress",
      "React Testing Library",
      "Docker",
      "Tilt",
    ],
    image: "/anaplan.png",
    category: "Enterprise",
    confidential: true,
  },
  {
    name: "Cloud of Legacy",
    description:
      "A product for storing personal digital archives and thoughts, unlockable only by designated heirs.",
    stack: ["Next.js", "JavaScript", "Material UI"],
    image: "/cloudoflegacy.png",
    category: "Product",
    link: "https://cloudoflegacy.com/",
  },
  {
    name: "DrumBun",
    description:
      "Mobile app for managing essential vehicle documents in Romania — simpler access, clearer organization, less paperwork friction.",
    stack: ["React Native", "TypeScript", "Expo", "SCSS", "NestJS"],
    image: "/drumbun.png",
    category: "Mobile",
    link: "https://drumbun.ro/",
  },
  {
    name: "Hoteliant",
    description:
      "Product suite that helps hotels deliver a better, safer guest experience.",
    stack: ["React", "JavaScript", "Material UI"],
    image: "/hoteliant.png",
    category: "Hospitality",
    link: "https://hoteliant.com/",
  },
  {
    name: "Techsylvania",
    description:
      "Conference website for one of Romania's major tech gatherings, where global leaders meet in Cluj-Napoca.",
    stack: ["WordPress", "PHP", "CSS"],
    image: "/techsylvania.png",
    category: "Conference",
    link: "https://techsylvania.com/",
  },
  {
    name: "Codiax",
    description:
      "Conference site covering program, registration, and attendee experience for a technology event.",
    stack: ["WordPress", "PHP", "CSS"],
    image: "/codiax.png",
    category: "Conference",
    link: "https://codiax.co/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects" className="scroll-mt-24 py-16 md:py-24">
      <SectionHeading eyebrow="Selected work">Projects</SectionHeading>
      <p className="mx-auto mb-12 max-w-2xl text-center text-sm leading-relaxed text-stone-500 dark:text-stone-400">
        A few engagements are under NDA. Client names and repositories are
        omitted, and screenshots exclude sensitive information.
      </p>

      <div className="flex flex-col gap-24">
        {projects.map((project, idx) => {
          const image = (
            <Image
              src={project.image}
              alt={`${project.name} preview`}
              width={1200}
              height={800}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          )

          return (
            <div key={project.name}>
              <SlideUp offset="0px 0px -80px 0px">
                <article
                  className={`flex flex-col items-center gap-8 md:flex-row md:gap-12 ${
                    idx % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm md:w-1/2 dark:border-stone-800 dark:bg-stone-900">
                    {project.link ? (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        {image}
                      </Link>
                    ) : (
                      image
                    )}
                  </div>

                  <div className="w-full md:w-1/2">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">
                      {project.category}
                      {project.confidential ? " · Confidential" : ""}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900 md:text-3xl dark:text-stone-50">
                      {project.name}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-stone-600 dark:text-stone-300">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 dark:bg-stone-900 dark:text-stone-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.link ? (
                      <Link
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition-colors hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300"
                      >
                        Visit site
                        <BsArrowUpRightSquare size={16} />
                      </Link>
                    ) : null}
                  </div>
                </article>
              </SlideUp>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ProjectsSection

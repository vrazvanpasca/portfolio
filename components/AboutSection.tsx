import React from "react"
import SectionHeading from "./SectionHeading"

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "React Native",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "NestJS",
      "REST",
      "GraphQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Quality & tooling",
    skills: [
      "GitHub",
      "Docker",
      "Cypress",
      "Puppeteer",
      "React Testing Library",
      "Figma",
    ],
  },
]

const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-24">
      <SectionHeading eyebrow="About">About me</SectionHeading>

      <div className="flex flex-col items-start gap-12 md:flex-row md:gap-16">
        <div className="w-full space-y-5 text-base leading-relaxed text-stone-600 md:w-1/2 dark:text-stone-300">
          <p>
            I&apos;m a software engineer based in Cluj-Napoca, Romania. I
            graduated from the Technical University of Cluj-Napoca (Automation
            and Computer Science) in 2020 with a B.S. in Computer Engineering,
            and I&apos;ve been shipping production software since 2018.
          </p>
          <p>
            My work sits between product and engineering: performant interfaces,
            reliable APIs, and the tests and tooling that keep them that way. I
            have contributed to international teams on consumer lottery
            products, enterprise planning platforms, hospitality software, and
            mobile apps used across Romania.
          </p>
          <p>
            Outside of work I read, travel, cook, and stay active — the same
            curiosity I bring to building software. I&apos;m always interested
            in thoughtful product work and new collaborations.
          </p>
        </div>

        <div className="w-full space-y-8 md:w-1/2">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-500 dark:text-stone-400">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-stone-200 bg-white px-3 py-1.5 text-sm font-medium text-stone-700 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection

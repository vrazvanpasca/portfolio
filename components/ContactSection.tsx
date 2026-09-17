"use client"

import React from "react"
import SectionHeading from "./SectionHeading"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"
import { HiOutlineDocumentDownload } from "react-icons/hi"

const contacts = [
  {
    title: "LinkedIn",
    description: "The easiest way to get in touch about roles and collaborations.",
    href: "https://www.linkedin.com/in/razvanpasca/",
    label: "View profile",
    icon: AiOutlineLinkedin,
  },
  {
    title: "GitHub",
    description: "Selected public work and experiments.",
    href: "https://github.com/vrazvanpasca",
    label: "View GitHub",
    icon: AiOutlineGithub,
  },
  {
    title: "Curriculum vitae",
    description: "A concise overview of experience, education, and skills.",
    href: "/cv.pdf",
    label: "Download CV",
    icon: HiOutlineDocumentDownload,
    download: "Razvan-Pasca-CV",
  },
]

const ContactSection = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24">
      <SectionHeading eyebrow="Contact">Let&apos;s work together</SectionHeading>
      <p className="mx-auto mb-12 max-w-2xl text-center text-base leading-relaxed text-stone-600 dark:text-stone-300">
        Open to product-minded engineering work, consulting, and conversations
        about what you&apos;re building.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {contacts.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.title}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              download={item.download}
              className="group rounded-2xl border border-stone-200 bg-white p-6 transition-colors hover:border-teal-500 dark:border-stone-800 dark:bg-stone-900 dark:hover:border-teal-400"
            >
              <Icon
                size={28}
                className="text-teal-700 dark:text-teal-400"
              />
              <h3 className="mt-4 text-lg font-semibold text-stone-900 dark:text-stone-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                {item.description}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-teal-700 group-hover:underline dark:text-teal-400">
                {item.label}
              </span>
            </a>
          )
        })}
      </div>
    </section>
  )
}

export default ContactSection

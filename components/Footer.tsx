import React from "react"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-stone-200 py-8 text-sm text-stone-500 md:flex-row dark:border-stone-800 dark:text-stone-400">
        <p>© {new Date().getFullYear()} Răzvan Valentin Pașca</p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/vrazvanpasca"
            rel="noreferrer"
            target="_blank"
            aria-label="GitHub"
            className="rounded-full p-1.5 transition-transform hover:-translate-y-0.5"
          >
            <AiOutlineGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/razvanpasca/"
            rel="noreferrer"
            target="_blank"
            aria-label="LinkedIn"
            className="rounded-full p-1.5 transition-transform hover:-translate-y-0.5"
          >
            <AiOutlineLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

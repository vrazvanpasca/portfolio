"use client"

import React from "react"
import Image from "next/image"
import { HiArrowDown } from "react-icons/hi"

const stats = [
  { value: "8+", label: "Years shipping software" },
  { value: "Full-stack", label: "Web & mobile products" },
  { value: "Cluj-Napoca", label: "Based in Romania" },
]

const HeroSection = () => {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="flex animate-fadeIn flex-col items-center py-24 sm:py-28 md:flex-row md:items-center md:gap-14 md:py-36">
        <div className="relative md:w-5/12">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-500/25 via-teal-600/10 to-transparent blur-2xl"
          />
          <div className="relative aspect-square w-64 overflow-hidden rounded-3xl shadow-2xl ring-1 ring-stone-900/10 sm:w-80 md:w-full dark:ring-white/10">
            <Image
              src="/headshot.png"
              alt="Răzvan Pașca"
              fill
              priority
              sizes="(max-width: 768px) 20rem, 40vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 text-center md:mt-0 md:w-7/12 md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">
            Software Engineer
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl md:text-6xl dark:text-stone-50">
            Răzvan Pașca
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-stone-600 md:text-lg dark:text-stone-300">
            I build web and mobile products that are fast, reliable, and
            straightforward to use — from high-traffic consumer platforms to
            internal tools that save teams hundreds of hours.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#projects"
              className="btn-primary"
              onClick={(event) => {
                event.preventDefault()
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
                window.history.replaceState(null, "", "#projects")
              }}
            >
              View work
            </a>
            <a
              className="btn-secondary"
              href="/cv.pdf"
              download="Razvan-Pasca-CV"
            >
              Download CV
            </a>
          </div>
          <dl className="mt-10 grid grid-cols-1 gap-4 border-t border-stone-200 pt-8 text-left sm:grid-cols-3 dark:border-stone-800">
            {stats.map((item) => (
              <div key={item.label}>
                <dt className="text-sm font-semibold text-stone-900 dark:text-stone-50">
                  {item.value}
                </dt>
                <dd className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                  {item.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="flex justify-center pb-6">
        <a
          href="#about"
          aria-label="Scroll to about"
          className="cursor-pointer text-stone-400 transition-colors hover:text-teal-600 dark:text-stone-500 dark:hover:text-teal-400"
        >
          <HiArrowDown size={28} className="animate-bounce" />
        </a>
      </div>
    </section>
  )
}

export default HeroSection

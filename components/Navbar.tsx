"use client"

import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { RiMoonFill, RiSunLine } from "react-icons/ri"
import { IoMdMenu, IoMdClose } from "react-icons/io"

interface NavItem {
  label: string
  page: string
}

const NAV_ITEMS: Array<NavItem> = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Work", page: "projects" },
  { label: "Contact", page: "contact" },
]

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme === "system" ? systemTheme : theme
  const [navbar, setNavbar] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState("home")

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.page)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0 }
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const scrollTo = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault()
    setNavbar(false)
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    window.history.replaceState(null, "", `#${id}`)
  }

  return (
    <header className="fixed top-0 z-50 w-full border-b border-stone-200/80 bg-white/80 backdrop-blur-xl dark:border-stone-800 dark:bg-stone-950/80">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 md:py-4">
        <a
          href="#home"
          className="cursor-pointer"
          onClick={(event) => scrollTo(event, "home")}
        >
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-600 text-sm font-bold tracking-tight text-white">
              RP
            </span>
            <span className="text-base font-semibold tracking-tight text-stone-900 dark:text-stone-50">
              Răzvan Pașca
            </span>
          </div>
        </a>

        <div className="flex items-center gap-2 md:hidden">
          {mounted ? (
            <button
              type="button"
              aria-label="Toggle theme"
              className="rounded-full border border-stone-200 p-2 text-stone-700 transition-colors hover:border-teal-500 dark:border-stone-700 dark:text-stone-200"
              onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            >
              {currentTheme === "dark" ? (
                <RiSunLine size={18} />
              ) : (
                <RiMoonFill size={18} />
              )}
            </button>
          ) : (
            <span className="h-9 w-9" />
          )}
          <button
            type="button"
            aria-label={navbar ? "Close menu" : "Open menu"}
            className="rounded-md p-2 text-stone-700 dark:text-stone-200"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? <IoMdClose size={26} /> : <IoMdMenu size={26} />}
          </button>
        </div>

        <nav
          className={`${
            navbar ? "flex" : "hidden"
          } absolute left-0 right-0 top-full z-50 flex-col gap-1 border-b border-stone-200 bg-white px-4 py-4 shadow-lg dark:border-stone-800 dark:bg-stone-950 md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none dark:md:bg-transparent`}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.page}
              href={`#${item.page}`}
              className={`cursor-pointer rounded-md px-2 py-2 text-sm font-medium transition-colors hover:text-teal-700 dark:hover:text-teal-300 ${
                active === item.page
                  ? "text-teal-700 dark:text-teal-300"
                  : "text-stone-600 dark:text-stone-300"
              }`}
              onClick={(event) => scrollTo(event, item.page)}
            >
              {item.label}
            </a>
          ))}
          <span className="hidden md:block">
            {mounted ? (
              <button
                type="button"
                aria-label="Toggle theme"
                className="rounded-full border border-stone-200 p-2 text-stone-700 transition-colors hover:border-teal-500 dark:border-stone-700 dark:text-stone-200"
                onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
              >
                {currentTheme === "dark" ? (
                  <RiSunLine size={18} />
                ) : (
                  <RiMoonFill size={18} />
                )}
              </button>
            ) : (
              <span className="inline-block h-9 w-9" />
            )}
          </span>
        </nav>
      </div>
    </header>
  )
}

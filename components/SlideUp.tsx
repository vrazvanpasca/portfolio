"use client"

import React, { useEffect, useRef, ReactNode } from "react"

interface Props {
  offset?: string
  children?: ReactNode
}

export default function SlideUp({ children, offset = "0px" }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reveal = (el: Element) => {
      el.classList.remove("opacity-0")
      el.classList.add("animate-slideUpCubiBezier")
      observer.unobserve(el)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting ||
            entry.boundingClientRect.top < window.innerHeight
          ) {
            reveal(entry.target)
          }
        })
      },
      { rootMargin: offset, threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [offset])

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  )
}

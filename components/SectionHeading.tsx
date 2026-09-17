import React from "react"

const SectionHeading = ({
  eyebrow,
  children,
}: {
  eyebrow?: string
  children: React.ReactNode
}) => {
  return (
    <div className="mb-8 text-center">
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-teal-700 dark:text-teal-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl dark:text-stone-50">
        {children}
      </h2>
      <span className="mx-auto mt-4 block h-1 w-12 rounded-full bg-teal-600" />
    </div>
  )
}

export default SectionHeading

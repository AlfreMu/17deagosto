"use client"

import { motion } from "framer-motion"

const EASE = [0.22, 1, 0.36, 1] as const

const fadeUpProps = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.6, delay, ease: EASE }
})

type ScrollAnimationProps = {
  children: React.ReactNode
  delay?: number
  className?: string
  as?: "div" | "section"
  id?: string
  style?: React.CSSProperties
}

export function ScrollAnimation({ 
  children, 
  delay = 0, 
  className = "",
  as = "div",
  id,
  style
}: ScrollAnimationProps) {
  if (as === "section") {
    return (
      <motion.section {...fadeUpProps(delay)} className={className} id={id} style={style}>
        {children}
      </motion.section>
    )
  }
  return (
    <motion.div {...fadeUpProps(delay)} className={className} id={id} style={style}>
      {children}
    </motion.div>
  )
}

export function HeroAnimation({ 
  children, 
  className = "" 
}: { 
  children: React.ReactNode
  className?: string 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.7, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

import { useEffect, useRef, useState } from 'react'

/** Replaces WOW.js — animates element when it scrolls into view */
export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

/** Replaces typed.js — cycles through strings with typing effect */
export function useTyped(strings, { typeSpeed = 100, backSpeed = 20 } = {}) {
  const [text, setText] = useState('')
  const state = useRef({ strIndex: 0, charIndex: 0, deleting: false })

  useEffect(() => {
    if (!strings.length) return
    let timer

    const tick = () => {
      const s = state.current
      const current = strings[s.strIndex % strings.length]
      let delay = typeSpeed

      if (!s.deleting) {
        s.charIndex++
        setText(current.slice(0, s.charIndex))
        if (s.charIndex === current.length) {
          s.deleting = true
          delay = 2000 // pause at end of word
        }
      } else {
        s.charIndex--
        setText(current.slice(0, s.charIndex))
        delay = backSpeed
        if (s.charIndex === 0) {
          s.deleting = false
          s.strIndex = (s.strIndex + 1) % strings.length
          delay = 500
        }
      }
      timer = setTimeout(tick, delay)
    }

    timer = setTimeout(tick, typeSpeed)
    return () => clearTimeout(timer)
  }, [strings, typeSpeed, backSpeed])

  return text
}

/** Replaces counter-up — animates a number from 0 to target when visible */
export function useCountUp(target, { duration = 2000, started } = {}) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!started) return
    const startTime = performance.now()
    let raf
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      // ease-out for a natural feel
      setValue(Math.floor(target * (1 - Math.pow(1 - progress, 3))))
      if (progress < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, started])

  return value
}

/** Replaces the jQuery scroll handler — returns true when page is scrolled */
export function useScrolled(offset = 300) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}

/** Replaces the jQuery smooth-scroll + active-link logic */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const onScroll = () => {
      const pos = window.scrollY + 100
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= pos) current = id
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])
  return active
}

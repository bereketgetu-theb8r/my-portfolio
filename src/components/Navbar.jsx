import { useState } from 'react'
import { useActiveSection, useScrolled } from '../hooks'

const LEFT_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skill', label: 'Skills' },
  { id: 'service', label: 'Services' },
]

const RIGHT_LINKS = [
  { id: 'project', label: 'Projects' },
  // { id: 'team', label: 'Team' },
  { id: 'testimonial', label: 'Testimonial' },
  { id: 'contact', label: 'Contact' },
]

const ALL_IDS = [...LEFT_LINKS, ...RIGHT_LINKS].map((l) => l.id)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(60)
  const active = useActiveSection(ALL_IDS)

  const link = (item) => (
    <a
      key={item.id}
      href={`#${item.id}`}
      onClick={() => setOpen(false)}
      className={`block px-5 py-2.5 text-lg font-semibold transition-colors duration-300 lg:px-4 lg:py-5 ${
        active === item.id ? 'text-primary' : 'text-dark hover:text-primary'
      }`}
    >
      {item.label}
    </a>
  )

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between bg-white px-4 shadow-lg transition-all duration-500 lg:px-10 ${
        scrolled ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {/* Mobile brand */}
      <a href="#home" className="py-4 lg:hidden">
        <h1 className="m-0 text-2xl font-bold text-primary">ProMan</h1>
      </a>

      {/* Mobile hamburger */}
      <button
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setOpen(!open)}
        className="rounded-lg border-2 border-primary p-2 text-primary lg:hidden"
      >
        <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} />
      </button>

      <div className="hidden items-center justify-between grow lg:flex">
        <div className="ms-auto flex">{LEFT_LINKS.map(link)}</div>
        <a href="#home" className="bg-secondary px-6 py-4 mx-4">
          <h1 className="m-0 text-2xl font-bold text-primary">ProMan</h1>
        </a>
        <div className="me-auto flex">{RIGHT_LINKS.map(link)}</div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white pb-4 shadow-lg lg:hidden">
          <div className="flex flex-col">{[...LEFT_LINKS, ...RIGHT_LINKS].map(link)}</div>
        </div>
      )}
    </nav>
  )
}

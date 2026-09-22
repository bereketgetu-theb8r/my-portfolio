import { useState } from 'react'
import { useInView } from '../hooks'

const PROJECTS = [
  { img: '/img/project-1.jpg', category: 'first', label: 'Full-stack' },
  { img: '/img/project-2.jpg', category: 'second', label: 'Backend' },
  { img: '/img/project-3.jpg', category: 'first', label: 'Full-stack' },
  { img: '/img/project-4.jpg', category: 'second', label: 'Backend' },
  { img: '/img/project-5.jpg', category: 'first', label: 'Full-stack' },
  { img: '/img/project-6.jpg', category: 'second', label: 'Backend' },
]

const FILTERS = [
  { key: '*', label: 'All Projects' },
  { key: 'first', label: 'Full-stack' },
  { key: 'second', label: 'Backend' }
]

export default function Projects() {
  const [ref, visible] = useInView()
  const [filter, setFilter] = useState('*')

  const shown = PROJECTS.filter((p) => filter === '*' || p.category === filter)

  return (
    <div id="project" className="py-24 pt-8">
      <div className="mx-auto max-w-7xl px-4">
        <div
          ref={ref}
          className={`mb-12 grid items-center gap-6 lg:grid-cols-2 ${
            visible ? 'animate-fade-in-up wow-delay-1' : 'opacity-0'
          }`}
        >
          <h1 className="mb-0 text-4xl font-bold">My Projects</h1>
          <ul className="mb-0 flex flex-wrap justify-start gap-x-8 lg:justify-end">
            {FILTERS.map((f) => (
              <li
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`cursor-pointer border-b-2 pb-1 font-medium transition-colors duration-300 ${
                  filter === f.key
                    ? 'border-primary text-primary'
                    : 'border-transparent text-dark hover:text-primary'
                }`}
              >
                {f.label}
              </li>
            ))}
          </ul>
        </div>

        {/* Replaces Isotope filtering with React state */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((project) => (
            <div key={project.img} className="group">
              <div className="relative overflow-hidden rounded-lg">
                <img className="w-full" src={project.img} alt={project.label} />
                <div className="absolute inset-0 flex items-end bg-primary/90 p-8 pb-24 opacity-0 transition-all duration-500 group-hover:pb-8 group-hover:opacity-100">
                  <a
                    href={project.img}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.label} project`}
                    className="mx-1 flex h-12 w-12 items-center justify-center border-2 border-gray-400 text-white transition hover:bg-white hover:text-dark"
                  >
                    <i className="fa fa-eye" aria-hidden="true" />
                  </a>
                  <a
                    href="#project"
                    aria-label={`Open ${project.label} project link`}
                    className="mx-1 flex h-12 w-12 items-center justify-center border-2 border-gray-400 text-white transition hover:bg-white hover:text-dark"
                  >
                    <i className="fa fa-link" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

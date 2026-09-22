import { useState } from 'react'
import { useInView } from '../hooks'

const SKILLS = [
  { name: 'HTML / CSS', value: 95, color: 'bg-primary' },
  { name: 'JavaScript / jQuery', value: 90, color: 'bg-secondary' },
  { name: 'React.js', value: 85, color: 'bg-sky-500' },
  { name: 'Tailwind / Bootstrap', value: 90, color: 'bg-red-500' },
  { name: 'Node.js / Express', value: 80, color: 'bg-green-500' },
  { name: 'MongoDB / Firebase', value: 85, color: 'bg-yellow-500' },
]

const EXPERIENCE = [
  { title: 'Full-Stack Developer', years: '2025 - Present', company: 'Freelance & Open Source' },
  { title: 'Backend Architecture', years: '2024 - Present', company: 'Self-Taught / Personal Projects' },
  { title: 'Frontend Developer', years: '2023 - 2024', company: 'UI/UX & Web Design' },
  { title: 'MERN Stack Developer', years: '2024 - Present', company: 'Independent Creator' },
]

const EDUCATION = [
  { title: 'Grade 10 High School', years: '2026 - Present', company: 'High School' },
  { title: 'Full-Stack Web Development', years: '2023 - Present', company: 'Self-Directed & Online Mastery' },
  { title: 'JavaScript & React Specialization', years: '2024 - 2025', company: 'Modern Web Engineering' },
  { title: 'Database & Backend Systems', years: '2024 - 2025', company: 'Node, Express, MongoDB & Firebase' },
]

function SkillBar({ skill, visible }) {
  return (
    <div className="mb-6">
      <div className="mb-1.5 flex justify-between">
        <h6 className="font-bold">{skill.name}</h6>
        <h6 className="font-bold">{skill.value}%</h6>
      </div>
      <div className="h-[5px] rounded-full bg-gray-200">
        <div
          className={`h-full rounded-full transition-all duration-[3000ms] ease-out ${skill.color}`}
          style={{ width: visible ? `${skill.value}%` : '0%' }}
        />
      </div>
    </div>
  )
}

function TimelineEntry({ item }) {
  return (
    <div>
      <h5 className="font-medium">{item.title}</h5>
      <hr className="my-2 w-8 border-primary" />
      <p className="mb-1 text-primary">{item.years}</p>
      <h6 className="mb-0 text-sm font-semibold">{item.company}</h6>
    </div>
  )
}

export default function Skills() {
  const [ref, visible] = useInView()
  const [tabRef, tabVisible] = useInView()
  const [tab, setTab] = useState('experience')

  const items = tab === 'experience' ? EXPERIENCE : EDUCATION

  return (
    <div id="skill" className="py-24 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Skill bars */}
          <div ref={ref} className={`animate-fade-in-up wow-delay-1 ${visible ? '' : 'opacity-0'}`}>
            <h1 className="mb-8 text-4xl font-bold">Skills &amp; Experience</h1>
            <p className="mb-6 text-gray-600">
              Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum
              amet diam ipsum clita dolor duo clita sit.
            </p>
            <h3 className="mb-6 text-2xl font-semibold">My Skills</h3>
            <div className="grid gap-x-8 sm:grid-cols-2">
              {SKILLS.map((skill) => (
                <SkillBar key={skill.name} skill={skill} visible={visible} />
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div ref={tabRef} className={`animate-fade-in-up wow-delay-5 ${tabVisible ? '' : 'opacity-0'}`}>
            <ul className="mb-8 grid grid-cols-2 overflow-hidden rounded-lg border-2 border-primary">
              {[
                { key: 'experience', label: 'Experience' },
                { key: 'education', label: 'Education' },
              ].map((t) => (
                <li key={t.key}>
                  <button
                    type="button"
                    onClick={() => setTab(t.key)}
                    className={`w-full py-3.5 text-lg transition-colors duration-300 ${
                      tab === t.key ? 'bg-primary text-white' : 'text-dark hover:bg-primary/10'
                    }`}
                  >
                    {t.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="grid gap-x-6 gap-y-10 sm:grid-cols-2">
              {items.map((item) => (
                <TimelineEntry key={item.title} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

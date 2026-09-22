import { useInView } from '../hooks'

const MEMBERS = [
  { img: '/img/team-1.jpg', name: 'Full Name', role: 'Designer' },
  { img: '/img/team-2.jpg', name: 'Full Name', role: 'Designer' },
  { img: '/img/team-3.jpg', name: 'Full Name', role: 'Designer' },
]

export default function Team() {
  const [ref, visible] = useInView()

  return (
    <div id="team" className="py-24 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div
          ref={ref}
          className={`mb-12 grid items-center gap-6 lg:grid-cols-2 ${
            visible ? 'animate-fade-in-up wow-delay-1' : 'opacity-0'
          }`}
        >
          <h1 className="mb-0 text-4xl font-bold">Team Members</h1>
          <div className="lg:text-right">
            <a
              href="#contact"
              className="inline-block bg-primary py-3.5 px-8 font-medium text-white transition-colors duration-300 hover:bg-dark"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MEMBERS.map((member, i) => (
            <TeamCard
              key={member.img}
              member={member}
              delay={['wow-delay-1', 'wow-delay-3', 'wow-delay-5'][i]}
              visible={visible}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function TeamCard({ member, delay, visible }) {
  return (
    <div className={visible ? `animate-fade-in-up ${delay}` : 'opacity-0'}>
      <div className="group relative">
        <img
          className="w-full rounded-lg transition-opacity duration-500 group-hover:opacity-70"
          src={member.img}
          alt={member.name}
        />
        <div className="absolute bottom-8 left-0 right-16 flex items-center justify-between rounded-r-lg bg-white p-4 opacity-0 transition-all duration-500 group-hover:right-8 group-hover:opacity-100">
          <div className="transition-all duration-500 group-hover:ml-8">
            <h5 className="font-medium">{member.name}</h5>
            <span className="text-sm text-gray-500">{member.role}</span>
          </div>
          <i className="fa fa-arrow-right text-2xl text-primary" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}

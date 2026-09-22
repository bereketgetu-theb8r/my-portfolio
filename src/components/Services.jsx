import { useInView } from '../hooks'

const SERVICES = [
  { icon: 'fa-laptop-code', title: 'Full-Stack Development', price: '$299', desc: 'End-to-end web applications built with the MERN stack (MongoDB, Express, React, Node) and Firebase.' },
  { icon: 'fa-code', title: 'Frontend Engineering', price: '$199', desc: 'Responsive, high-performance UI implementation using React, Bootstrap 5, and Tailwind CSS.' },
  { icon: 'fa-server', title: 'Backend & APIs', price: '$249', desc: 'Secure server-side architecture, RESTful APIs, database design, and user authentication systems.' },
  { icon: 'fa-tools', title: 'Portfolio & Custom Sites', price: '$149', desc: 'Lightweight, lightning-fast personal websites and custom templates optimized for speed.' },
]

export default function Services() {
  const [ref, visible] = useInView()

  return (
    <div id="service" className="bg-light my-12 py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div
          ref={ref}
          className={`mb-12 grid items-center gap-6 lg:grid-cols-2 ${
            visible ? 'animate-fade-in-up wow-delay-1' : 'opacity-0'
          }`}
        >
          <h1 className="mb-0 text-4xl font-bold">My Services</h1>
          <div className="lg:text-right">
            <a
              href="#contact"
              className="inline-block bg-primary py-3.5 px-8 font-medium text-white transition-colors duration-300 hover:bg-dark"
            >
              Hire Me
            </a>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} delay={i % 2 ? 'wow-delay-3' : 'wow-delay-1'} visible={visible} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ service, delay, visible }) {
  return (
    <div className={visible ? `animate-fade-in-up ${delay}` : 'opacity-0'}>
      <div className="flex h-full flex-col rounded-lg bg-white p-6 sm:flex-row sm:p-10 shadow-sm">
        <div className="mb-4 flex shrink-0 items-center justify-center bg-center bg-cover sm:mb-0 sm:mr-4 rounded-lg bg-primary/10" style={{ width: 100, height: 100 }}>
          <i className={`fas ${service.icon} text-3xl text-primary`} aria-hidden="true" />
        </div>
        <div className="sm:ml-4 flex flex-col justify-between">
          <div>
            <h4 className="mb-2 text-xl font-semibold">{service.title}</h4>
            <h6 className="mb-2 font-medium">
              Start from <span className="text-primary">{service.price}</span>
            </h6>
            <p className="text-gray-600 text-sm">
              {service.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
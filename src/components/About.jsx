import { useCountUp, useInView } from '../hooks'

export default function About() {
  const [leftRef, leftVisible] = useInView()
  const [rightRef, rightVisible] = useInView()
  
  // Set initial numbers realistic for starting your freelance journey
  const clients = useCountUp(5, { started: rightVisible })
  const projects = useCountUp(3, { started: rightVisible })

  const check = (
    <i className="far fa-check-circle mr-3 text-primary" aria-hidden="true" />
  )

  return (
    <div id="about" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left column */}
          <div
            ref={leftRef}
            className={`animate-fade-in-up wow-delay-1 ${leftVisible ? '' : 'opacity-0'}`}
          >
            <div className="mb-8 flex items-center">
              <div className="shrink-0 text-center">
                <h1 className="mb-0 text-[6rem] leading-[5rem] font-bold">Full</h1>
                <h5 className="mb-0 text-sm font-medium tracking-[0.5rem]">STACK</h5>
              </div>
              <h3 className="mb-0 ml-6 text-2xl leading-snug">
                Web developer specializing in modern React &amp; MERN architecture
              </h3>
            </div>
            <p className="mb-6 text-gray-600">
              Passionate full-stack developer based in Addis Ababa, focused on building clean, lightning-fast web applications and high-performance user interfaces.
            </p>
            <p className="mb-3">{check}Affordable &amp; Scalable Solutions</p>
            <p className="mb-3">{check}High-Quality React &amp; Node Code</p>
            <p className="mb-3">{check}On-Time Project Delivery</p>
            <a
              href="#service"
              className="mt-4 inline-block bg-primary py-3.5 px-8 font-medium text-white transition-colors duration-300 hover:bg-dark"
            >
              My Services
            </a>
          </div>

          {/* Right column */}
          <div
            ref={rightRef}
            className={`animate-fade-in-up wow-delay-5 ${rightVisible ? '' : 'opacity-0'}`}
          >
            <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <img className="w-full rounded-lg object-cover h-48" src="/img/about-1.jpg" alt="Developer workspace" />
              <img className="w-full rounded-lg object-cover h-48" src="/img/about-2.jpg" alt="Coding setup" />
            </div>
            <div className="mb-3 flex items-center">
              <h5 className="mb-0 border-r border-dark pr-4 mr-4 text-lg font-medium">
                Satisfied Clients
              </h5>
              <h2 className="mb-0 text-3xl font-bold text-primary">{clients}+</h2>
            </div>
            <p className="mb-6 text-gray-600">
              Dedicated to delivering reliable digital solutions and seamless user experiences for early clients and projects.
            </p>
            <div className="mb-3 flex items-center">
              <h5 className="mb-0 border-r border-dark pr-4 mr-4 text-lg font-medium">
                Projects Completed
              </h5>
              <h2 className="mb-0 text-3xl font-bold text-primary">{projects}</h2>
            </div>
            <p className="mb-0 text-gray-600">
              Core portfolio systems and production-ready web apps built from the ground up.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
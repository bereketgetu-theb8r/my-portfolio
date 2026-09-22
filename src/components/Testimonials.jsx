import { useState } from 'react'
import { useInView } from '../hooks'

const TESTIMONIALS = [
  { img: '/img/testimonial-1.jpg', name: 'Client Name', role: 'Profession' },
  { img: '/img/testimonial-2.jpg', name: 'Client Name', role: 'Profession' },
  { img: '/img/testimonial-3.jpg', name: 'Client Name', role: 'Profession' },
]

const QUOTE =
  'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.'

export default function Testimonials() {
  const [ref, visible] = useInView()
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setCurrent((c) => (c + 1) % TESTIMONIALS.length)

  return (
    <div id="testimonial" className="bg-light my-12 py-20">
      <div className="py-5">
        <h1
          ref={ref}
          className={`mb-12 text-center text-4xl font-bold ${
            visible ? 'animate-fade-in-up wow-delay-1' : 'opacity-0'
          }`}
        >
          Testimonial
        </h1>
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 lg:grid-cols-12">
          {/* Side images — left */}
          <div className="hidden lg:col-span-3 lg:block">
            <SideImages reverse={false} />
          </div>

          {/* Carousel (replaces Owl Carousel) */}
          <div className={`lg:col-span-6 ${visible ? 'animate-fade-in-up wow-delay-5' : 'opacity-0'}`}>
            <div className="text-center">
              <div className="relative mb-10 inline-block">
                <img
                  className="mx-auto h-28 w-28 rounded-full border-2 border-gray-300 bg-white p-1.5"
                  src={TESTIMONIALS[current].img}
                  alt={TESTIMONIALS[current].name}
                />
                <div className="absolute -bottom-4 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-secondary bg-white">
                  <i className="fa fa-quote-left text-primary" aria-hidden="true" />
                </div>
              </div>
              <p className="text-lg italic">{QUOTE}</p>
              <hr className="mx-auto w-16 border-gray-400" />
              <h5 className="mt-4 font-medium">{TESTIMONIALS[current].name}</h5>
              <span className="text-sm text-gray-500">{TESTIMONIALS[current].role}</span>

              <div className="mt-6 flex items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-secondary bg-white transition hover:bg-secondary"
                >
                  <i className="fas fa-chevron-left text-sm" aria-hidden="true" />
                </button>
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.img}
                    type="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setCurrent(i)}
                    className="relative h-7 w-7 rounded-full border-2 border-secondary bg-white transition"
                  >
                    <span
                      className={`absolute left-1 top-1 h-4 w-4 rounded-full transition-colors ${
                        current === i ? 'bg-primary' : 'bg-secondary'
                      }`}
                    />
                  </button>
                ))}
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next testimonial"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-secondary bg-white transition hover:bg-secondary"
                >
                  <i className="fas fa-chevron-right text-sm" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Side images — right */}
          <div className="hidden lg:col-span-3 lg:block">
            <SideImages reverse />
          </div>
        </div>
      </div>
    </div>
  )
}

function SideImages({ reverse }) {
  const positions = reverse
    ? ['top-[10%] left-1/2 -translate-x-1/2 h-16 w-16', 'top-1/2 left-[10%] -translate-y-1/2 h-14 w-14', 'bottom-[10%] right-[10%] h-12 w-12']
    : ['top-[10%] left-1/2 -translate-x-1/2 h-16 w-16', 'top-1/2 left-[10%] -translate-y-1/2 h-14 w-14', 'bottom-[10%] right-[10%] h-12 w-12']

  const order = reverse ? [2, 1, 0] : [0, 1, 2]

  return (
    <div className="relative h-64">
      {order.map((imgIndex, i) => (
        <img
          key={imgIndex}
          className={`absolute rounded-full border border-secondary p-1 ${positions[i]}`}
          src={TESTIMONIALS[imgIndex].img}
          alt=""
        />
      ))}
    </div>
  )
}

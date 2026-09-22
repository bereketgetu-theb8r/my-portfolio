import { useState } from 'react'
import { useInView } from '../hooks'

const SOCIALS = [
  { icon: 'fab fa-github', label: 'GitHub', url: 'https://github.com/bereketgetu-theb8r/' },
  { icon: 'fab fa-linkedin-in', label: 'LinkedIn', url: 'https://linkedin.com' },
  { icon: 'fas fa-envelope', label: 'Email', url: 'mailto:bereketgetu525@gmail.com' },
]

export default function Contact() {
  const [headRef, headVisible] = useInView()
  const [infoRef, infoVisible] = useInView()
  const [formRef, formVisible] = useInView()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  const inputCls =
    'w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-700 outline-none transition-colors focus:border-primary'

  return (
    <div id="contact" className="pb-24">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <div
          ref={headRef}
          className={`mb-12 grid items-center gap-6 lg:grid-cols-2 ${
            headVisible ? 'animate-fade-in-up wow-delay-1' : 'opacity-0'
          }`}
        >
          <h1 className="mb-0 text-4xl font-bold">Let's Work Together</h1>
          <div className="lg:text-right">
            <a
              href="mailto:info@example.com"
              className="inline-block bg-primary py-3.5 px-8 font-medium text-white transition-colors duration-300 hover:bg-dark"
            >
              Say Hello
            </a>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-12">
          {/* Contact info */}
<div ref={infoRef} className={`lg:col-span-5 md:col-span-6 ${infoVisible ? 'animate-fade-in-up wow-delay-1' : 'opacity-0'}`}>
  <p className="mb-2 text-gray-600">Location:</p>
  <h3 className="font-bold">Addis Ababa, Ethiopia</h3>
  <hr className="my-4 border-gray-300" />
  <p className="mb-2 text-gray-600">Email me:</p>
  <h3 className="font-bold">bereketgetu525@gmail.com</h3>
  <hr className="my-4 border-gray-300" />
  <p className="mb-2 text-gray-600">Connect with me:</p>
  <div className="flex gap-2 pt-2">
    {SOCIALS.map((s) => (
      <a
        key={s.label}
        href={s.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={s.label}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition hover:bg-dark"
      >
        <i className={s.icon} aria-hidden="true" />
      </a>
    ))}
  </div>
</div>

          {/* Form (replaces Bootstrap form-floating) */}
          <div ref={formRef} className={`lg:col-span-7 md:col-span-6 ${formVisible ? 'animate-fade-in-up wow-delay-5' : 'opacity-0'}`}>
            <form onSubmit={submit} className="grid gap-4 sm:grid-cols-2">
              <input type="text" required placeholder="Your Name" value={form.name} onChange={update('name')} className={inputCls} />
              <input type="email" required placeholder="Your Email" value={form.email} onChange={update('email')} className={inputCls} />
              <input type="text" required placeholder="Subject" value={form.subject} onChange={update('subject')} className={`${inputCls} sm:col-span-2`} />
              <textarea placeholder="Leave a message here" required value={form.message} onChange={update('message')} className={`${inputCls} h-28 sm:col-span-2`} />
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="bg-primary py-3.5 px-8 font-medium text-white transition-colors duration-300 hover:bg-dark"
                >
                  {sent ? 'Message Sent!' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


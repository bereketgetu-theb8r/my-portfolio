import { useScrolled } from '../hooks'

export default function BackToTop() {
  const visible = useScrolled(300)

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-11 right-11 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-500 hover:bg-dark ${
        visible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <i className="fas fa-arrow-up" aria-hidden="true" />
    </button>
  )
}

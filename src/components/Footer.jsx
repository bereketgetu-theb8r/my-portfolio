export default function Footer() {
  return (
    <div className="bg-dark py-5 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="text-center md:text-left">
            &copy; <a href="#home" className="border-b border-gray-400 text-gray-300">Your Site Name</a>, All
            Right Reserved.
          </div>
          <div className="text-center md:text-right">
            Designed By{' '}
            <a
              href="https://htmlcodex.com"
              target="_blank"
              rel="noreferrer"
              className="border-b border-gray-400 text-gray-300"
            >
              HTML Codex
            </a>
            <br />
            Distributed By:{' '}
            <a
              href="https://themewagon.com"
              target="_blank"
              rel="noreferrer"
              className="border-b border-gray-400"
            >
              ThemeWagon
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useTyped } from '../hooks'
import mainImg from '../assets/sample-main.jpg'
import codingImg from '../assets/sample-coding.jpg'
import workspaceImg from '../assets/sample-workspace.jpg'

const ROLES = [
  'MERN Stack Developer',
  'Backend-First Architect',
  'Fullstack Engineer'
]

const VIDEO_SRC = 'https://www.youtube.com/embed/DWRcNpR6Kdc'

export default function Hero() {
  const typed = useTyped(ROLES)
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <div
      id="home"
      className="relative text-white bg-slate-950 py-20 lg:py-32 overflow-hidden border-b border-slate-800"
    >
      {/* Optional subtle ambient background glow instead of a full image */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          
          {/* Left Column: Introduction & Bio */}
          <div className="py-6">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-emerald-400 uppercase bg-slate-900 border border-emerald-500/40 rounded-full">
              Welcome to The B8R Portfolio
            </span>
            <h3 className="mb-2 text-2xl text-emerald-400 font-medium">Hello, I'm</h3>
            <h1 className="mb-4 text-5xl font-extrabold tracking-tight lg:text-7xl text-white">
              Bereket Getu
            </h1>
            
            <div className="flex items-center gap-2 mb-6">
              <h2 className="text-2xl lg:text-3xl font-semibold text-slate-200">{typed}</h2>
              <span className="text-2xl lg:text-3xl text-emerald-400 animate-pulse">|</span>
            </div>

            {/* Professional Summary/Explanation */}
            <p className="mb-8 text-lg text-slate-300 leading-relaxed max-w-xl">
              Passionate developer specializing in the <strong className="text-white">MERN stack (MongoDB, Express, React, Node.js)</strong>. 
              Focused on a rigorous backend-first approach, building robust microservices, clean APIs, and scalable, production-ready web applications.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-6">
              <a
                href="#contact"
                className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3.5 px-8 rounded-lg shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:scale-105"
              >
                Download CV
              </a>
              <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setVideoOpen(true)}>
                <button
                  type="button"
                  aria-label="Play video"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 border-2 border-emerald-400 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300"
                >
                  ▶
                </button>
                <span className="text-base font-medium text-slate-200 group-hover:text-emerald-400 transition-colors">
                  Play Intro Video
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Pictures Grid Layout */}
          <div className="grid grid-cols-2 gap-4 items-center">
            {/* Main/Primary Picture */}
            <div className="col-span-2 relative p-2 rounded-2xl bg-slate-900 border border-emerald-500/30 shadow-xl">
              <img 
                className="w-full h-64 object-cover rounded-xl" 
                src={mainImg} 
                alt="Bereket Getu - Main Portrait" 
              />
              <span className="absolute bottom-4 left-4 bg-slate-950/80 px-3 py-1 text-xs text-emerald-400 rounded border border-emerald-500/30">
                Main Profile
              </span>
            </div>

            {/* Secondary Picture 1 */}
            <div className="relative p-2 rounded-2xl bg-slate-900 border border-slate-700 shadow-lg">
              <img 
                className="w-full h-40 object-cover rounded-xl" 
                src={codingImg} 
                alt="Bereket Coding" 
              />
              <span className="absolute bottom-4 left-4 bg-slate-950/80 px-2 py-0.5 text-[10px] text-slate-300 rounded">
                Coding
              </span>
            </div>

            {/* Secondary Picture 2 */}
            <div className="relative p-2 rounded-2xl bg-slate-900 border border-slate-700 shadow-lg">
              <img 
                className="w-full h-40 object-cover rounded-xl" 
                src={workspaceImg}
                alt="Bereket Workspace" 
              />
              <span className="absolute bottom-4 left-4 bg-slate-950/80 px-2 py-0.5 text-[10px] text-slate-300 rounded">
                Workspace
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setVideoOpen(false)}
        >
          <div
            className="w-full max-w-3xl rounded-xl bg-slate-900 border border-slate-700 p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Introduction Video</h3>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setVideoOpen(false)}
                className="text-2xl leading-none text-slate-400 hover:text-white"
              >
                &times;
              </button>
            </div>
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
              <iframe
                src={`${VIDEO_SRC}?autoplay=1&modestbranding=1&showinfo=0`}
                title="Video"
                allow="autoplay; fullscreen"
                allowFullScreen
                className="h-full w-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const isVisible = true // Example, replace with actual logic

  return (
    <div className="bg-slate-900 min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-slate-900/70 backdrop-blur-md border-b border-slate-800">
        <div className="container py-4 px-4 mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-bold text-2xl text-white">
              Avinash Verma
            </Link>
            <div
              className={`flex flex-wrap items-center gap-4 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              {/* Social links */}
              <Button
                variant="outline"
                size="sm"
                asChild
                className="group hover:scale-105 transition-all duration-200 hover:border-blue-500 hover:text-blue-600 bg-transparent"
              >
                <Link href="https://linkedin.com/in/avi-verma" target="_blank">
                  <Linkedin className="w-4 h-4 mr-2 group-hover:text-blue-600" />
                  LinkedIn
                  <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="group hover:scale-105 transition-all duration-200 hover:border-purple-500 hover:text-purple-600 bg-transparent"
              >
                <Link href="https://github.com/avi-verma" target="_blank">
                  <Github className="w-4 h-4 mr-2 group-hover:text-purple-600" />
                  GitHub
                  <ExternalLink className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
              {/* Contact / Resume */}
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hover:scale-105 transition-transform duration-200 bg-transparent"
              >
                <Link href="#contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Link>
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-20 mx-auto flex-grow">
        {/* Hero Section */}
        <section id="hero" className="mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Hi, I'm Avinash Verma.
            <br />
            I'm a Full-Stack Developer.
          </h1>
          <p className="text-slate-400 text-lg md:text-xl mb-8">
            Crafting seamless web experiences with a focus on performance and scalability.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">About Me</h2>
          <p className="text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
          {/* Project cards will go here */}
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-3xl font-bold text-white mb-4">Contact</h2>
          {/* Contact form or details will go here */}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="container px-4 mx-auto text-center">
          <p className="text-slate-300">© 2025 Avinash Verma. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

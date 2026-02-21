import { Button } from '@/components/ui/button.jsx'
import { GlassIcons } from './GlassIcon.jsx'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <GlassIcons.Code
              size="sm"
              variant="primary"
              glow={true}
              className="text-primary-foreground"
            />
            <span className="text-xl font-bold text-foreground">
              PMO | Project Coordinator
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Home
            </a>
            <a href="#skills" className="text-foreground hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-foreground hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#certification" className="text-foreground hover:text-primary transition-colors">
              Certification
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About me
            </a>
          </nav>



          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <GlassIcons.Close size="xs" variant="secondary" className="text-foreground" />
            ) : (
              <GlassIcons.Menu size="xs" variant="secondary" className="text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#skills" className="text-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#certification" className="text-foreground hover:text-primary transition-colors">
                Certification
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About me
              </a>

            </div>
          </nav>
        )}
      </div>
    </header>
  )
}


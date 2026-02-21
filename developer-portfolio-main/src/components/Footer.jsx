import { GlassIcons } from './GlassIcon.jsx'
import { Button } from '@/components/ui/button.jsx'

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <GlassIcons.Code
                size="sm"
                variant="primary"
                glow={true}
                className="text-primary-foreground"
              />
              <span className="text-xl font-bold text-foreground">
                PMO | PROJECT COORDINATOR
              </span>
            </div>

            <p className="text-muted-foreground mb-6 max-w-md">
              Results-driven PMO professional specializing in project governance,
              UAT & API testing, stakeholder coordination, and delivery assurance
              across overseas and cross-functional programs.
            </p>

            <div className="flex gap-4">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-3 bg-background/50 backdrop-blur-sm border-white/10 hover:bg-background/70"
                onClick={() => window.open('https://linkedin.com/in/aravind-m-beee', '_blank')}
              >
                <GlassIcons.LinkedIn size="xs" variant="primary" />
                LinkedIn
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Contact
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <GlassIcons.Mail size="xs" variant="primary" className="text-primary" />
                <span className="text-muted-foreground text-sm">
                  aravindmeenu18@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-4">
                <GlassIcons.MapPin size="xs" variant="primary" className="text-primary" />
                <span className="text-muted-foreground text-sm">
                  Madurai, Tamil Nadu, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2025 Aravind M Portfolio. All rights reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
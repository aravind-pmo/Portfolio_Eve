import { Button } from '@/components/ui/button.jsx'
import { GlassIcons } from './GlassIcon.jsx'
import { motion } from 'framer-motion'
import { useState } from 'react'
import SplitText from './SplitText'
import PixelBlast from './PixelBlast'

export default function Hero() {
  const [message, setMessage] = useState('')

  const handleSendMessage = () => {
    const linkedinUrl = 'https://linkedin.com/in/aravind-m-beee'
    const email = 'aravindmeenu18@gmail.com'
    
    if (message.trim()) {
      window.open(linkedinUrl, '_blank')
      
      const mailtoUrl = `mailto:${email}?subject=Contact Request&body=${encodeURIComponent(message)}`
      window.location.href = mailtoUrl
      
      setMessage('')
    } else {
      window.open(linkedinUrl, '_blank')
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Pixel Blast Background */}
      <div className="absolute inset-0">
        <PixelBlast 
          variant="square"
          pixelSize={3}
          color="#8B5CF6"
          patternScale={1.5}
          patternDensity={0.8}
          speed={0.3}
          edgeFade={0.4}
          ripples={true}
          liquid={true}
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-primary/20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Name */}
          <div className="mb-6">
            <SplitText 
              text="ARAVIND M"
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              tag="h1"
            />
          </div>

          {/* Role */}
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            PMO | Project Coordinator
          </motion.h2>

          {/* Summary */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            PMO and Project Coordinator with proven expertise in managing overseas traceability, 
            supply chain, and MOSIP-based National Card Issuance projects. Experienced in UAT and API testing, 
            server coordination, and cross-functional stakeholder management. Skilled in SQL, Postman, Jira, 
            Confluence, and Excel with strong focus on delivery governance and deployment readiness.
          </motion.p>

          {/* Email */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>✉️ aravindmeenu18@gmail.com</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Send a request"
                className="bg-secondary/50 border border-border rounded-full px-6 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary w-64"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button
                onClick={handleSendMessage}
                className="bg-primary/20 backdrop-blur-md border border-primary/30 hover:bg-primary/30 text-primary-foreground rounded-full px-8 py-3 flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send
                <GlassIcons.Send size="xs" variant="primary" className="text-primary-foreground" />
              </Button>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div>

    </section>
  )
}
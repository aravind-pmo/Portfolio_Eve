import { motion } from 'framer-motion'
import { GlassIcons } from './GlassIcon.jsx'

const certifications = [
  {
    category: "Project Management & Agile",
    icon: <GlassIcons.Award size="sm" variant="primary" glow={true} />,
    items: [
      {
        name: "Project Management & Agile Fundamentals including SCRUM and Kanban",
        provider: "Udemy",
        year: "2025",
      },
    ],
  },
  {
    category: "Business Analysis",
    icon: <GlassIcons.BookOpen size="sm" variant="primary" glow={true} />,
    items: [
      {
        name: "Business Analysis A to Z Masterclass",
        provider: "Udemy",
        year: "2026",
      },
      {
        name: "Business Analysis and Process Management",
        provider: "Coursera",
        year: "2024",
      },
      {
        name: "Operational and Sales Management",
        provider: "Prograd Institute",
        year: "2022",
      },
    ],
  },
  {
    category: "Technical Certifications",
    icon: <GlassIcons.Certificate size="sm" variant="primary" glow={true} />,
    items: [
      {
        name: "API Testing and Automation with Real Time Project APIs",
        provider: "Udemy",
        year: "2025",
      },
      {
        name: "SQL Bootcamp",
        provider: "Udemy",
        year: "2025",
      },
      {
        name: "Optical Fibre Splicer (Internship)",
        provider: "BSNL",
        year: "2018",
      },
      {
        name: "In-plant Training",
        provider: "BSNL",
        year: "2018",
      },
    ],
  },
];

export default function Certification() {
  return (
    <section id="certification" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary">{category.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.category}
                </h3>
              </div>

              <div className="space-y-4">
                {category.items.map((cert) => (
                  <div
                    key={cert.name}
                    className="border border-border rounded-lg p-4 hover:bg-primary/5 transition-colors"
                  >
                    <p className="font-medium text-foreground">
                      {cert.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {cert.provider} • {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
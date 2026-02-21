import { motion } from 'framer-motion'
import { GlassIcons } from './GlassIcon.jsx'

const skills = [
  {
    category: "Project & PMO Expertise",
    icon: <GlassIcons.Server size="sm" variant="primary" glow={true} />,
    technologies: [
      { name: "Project Coordination", level: 92, description: "Managing schedules, coordinating stakeholders, and serving as point of contact across multiple projects in different time zones" },
      { name: "PMO Governance", level: 90, description: "Documentation, reporting, delivery tracking" },
      { name: "Scrum & Agile", level: 88, description: "Stand-ups, sprint review, retrospectives" },
      { name: "UAT Management", level: 90, description: "Test planning, defect tracking, validation" }
    ]
  },
  {
    category: "Testing & Technical Support",
    icon: <GlassIcons.Globe size="sm" variant="primary" glow={true} />,
    technologies: [
      { name: "API Testing", level: 88, description: "Postman, integration validation" },
      { name: "SQL", level: 85, description: "Data validation, query analysis" },
      { name: "Server Monitoring", level: 82, description: "Linux logs, issue troubleshooting" },
      { name: "Technical Support", level: 87, description: "Ticket handling, root cause analysis" }
    ]
  },
  {
    category: "Tools & Data Analysis",
    icon: <GlassIcons.Database size="sm" variant="primary" glow={true} />,
    technologies: [
      { name: "Jira & Confluence", level: 90, description: "Agile tracking, documentation" },
      { name: "Microsoft Excel", level: 92, description: "Pivot, VLOOKUP, MIS reporting" },
      { name: "Salesforce", level: 80, description: "CRM tracking, case management" }
    ]
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise in modern technologies for building scalable, high-performance applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => (
            <motion.div
              key={skillCategory.category}
              className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary">
                  {skillCategory.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {skillCategory.category}
                </h3>
              </div>

              <div className="space-y-6">
                {skillCategory.technologies.map((tech, techIndex) => (
                  <div key={tech.name}>
                    <div className="mb-2">
                      <span className="font-medium text-foreground">{tech.name}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{tech.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            "PMO", "Project Coordination", "UAT", "Project Management", "API Testing",
            "Linux CMD's", "Excel", "JIRA", "SQL Quering", "Postman"
          ].map((tool, index) => (
            <motion.div
              key={tool}
              className="bg-card border border-border rounded-lg p-4 text-center hover:bg-primary/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-sm font-medium text-foreground">{tool}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


import { motion } from 'framer-motion'
import { GlassIcons } from './GlassIcon.jsx'
import { Button } from '@/components/ui/button.jsx'

const projects = [
  {
    title: "MOSIP National Card Issuance Program",
    description:
      "Coordinated MOSIP-based national ID card issuance initiatives across overseas environments, ensuring deployment readiness, cross-team alignment, and delivery governance.",
    technologies: ["PMO Governance", "UAT", "API Testing", "SQL", "Jira", "Confluence"],
    features: [
      "Coordinated multi-country card issuance workflows",
      "Performed UAT validation and defect tracking",
      "Acted as liaison between client, dev, and DB teams",
      "Ensured deployment readiness and milestone tracking",
      "Maintained project documentation and reporting",
      "Supported Scrum ceremonies and sprint monitoring"
    ],
    github: "https://linkedin.com/in/aravind-m-beee"
  },
  {
    title: "Global Traceability & Tax Management Projects",
    description:
      "Managed parallel overseas traceability and tax management projects, supporting server issue resolution, stakeholder communication, and delivery timelines.",
    technologies: ["SQL", "Postman", "Linux", "Excel", "Jira", "ITSM"],
    features: [
      "Monitored 4+ overseas projects across time zones",
      "Handled server logs and database validation",
      "Performed API integration testing via Postman",
      "Provided structured technical support",
      "Tracked and resolved tickets through ITSM process",
      "Delivered MIS reports and executive updates"
    ],
    github: "https://linkedin.com/in/aravind-m-beee"
  },
  {
    title: "UAT & Customer Operations Support",
    description:
      "Executed UAT test planning and customer operations support while working with cross-functional teams to improve system quality and operational efficiency.",
    technologies: ["UAT", "iBwave", "Excel Analytics", "Git Support", "Salesforce"],
    features: [
      "Created and executed UAT test cases",
      "Managed priority-based ticket workflows",
      "Supported customer lifecycle in Salesforce",
      "Prepared quotations using iBwave analysis",
      "Automated utility scripts in VM environments",
      "Mentored team members on process adherence"
    ],
    github: "https://linkedin.com/in/aravind-m-beee"
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Key Programs & Initiatives
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            PMO-driven delivery, UAT governance, and cross-functional program coordination
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Left Visual */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative group">
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 h-80 flex items-center justify-center">
                    <div className="text-center">
                      <div className="flex items-center justify-center mx-auto mb-4">
                        {index === 0 && <GlassIcons.Globe size="lg" variant="primary" glow={true} />}
                        {index === 1 && <GlassIcons.Server size="lg" variant="primary" glow={true} />}
                        {index === 2 && <GlassIcons.Database size="lg" variant="primary" glow={true} />}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground">
                        PMO Program Delivery
                      </p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>

              {/* Right Details */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <h3 className="text-3xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-8">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="bg-background/20 backdrop-blur-md border border-white/20 hover:bg-background/30 flex items-center gap-3 shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open(project.github, '_blank')}
                  >
                    <GlassIcons.LinkedIn size="xs" variant="secondary" />
                    View Profile
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
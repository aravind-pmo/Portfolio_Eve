import { motion } from 'framer-motion'
import { Award, Calendar, MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'

const achievements = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "PMO Specialist",
    description: "Project Governance & Delivery"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "UAT & API Testing",
    description: "Postman & SQL"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Agile Practitioner",
    description: "Scrum & Sprint Support"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Data & MIS Reporting",
    description: "Excel & SQL Analysis"
  }
]

const experience = [
  {
    period: "Aug 2024 - Present",
    role: "PMO | Project Coordinator",
    company: "Madras Security Printers (Eagle Tech Groups)",
    description:
      "Coordinating global traceability, tax management, and MOSIP-based National Card Issuance projects. Acting as liaison between clients, developers, IT, and database teams while ensuring deployment readiness, UAT validation, and issue resolution. Successfully managing multiple overseas projects across time zones while maintaining governance, documentation, and delivery timelines."
  },
  {
    period: "Mar 2024 – Jul 2024",
    role: "Analyst",
    company: "Personiv",
    description:
      "Managed Salesforce CRM records, subscription billing workflows in Recurly, and customer lifecycle data. Developed process documentation and provided mentorship to team members while ensuring data accuracy, visibility, and efficient issue escalation workflows."
  },
  {
    period: "Jul 2022 – Dec 2023",
    role: "Associate Project Engineer",
    company: "Ecsite Solutions Pvt Ltd",
    description:
      "Supported Customer Success, Service Operations, and UAT activities. Prepared test plans, executed UAT cases, managed priority tickets, and coordinated new technology implementations. Utilized iBwave, Excel analytics, and Git-based troubleshooting to support project delivery."
  },
  {
    period: "Feb 2021 – Jun 2022",
    role: "Branch Associate",
    company: "HDFC Life (Off-role)",
    description:
      "Handled policy servicing, MIS reporting, and operational process improvements. Supported system implementations and analyzed business workflows to improve efficiency and data integrity."
  }
]

export default function About() {
  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            PMO professional driving structured delivery, quality assurance, and cross-functional coordination
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Professional Summary
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Results-driven PMO and Project Coordinator with proven expertise in managing overseas traceability,
                supply chain, and MOSIP-implemented National Card Issuance projects. Skilled in UAT and API testing,
                server coordination, stakeholder management, and deployment readiness. Proficient in SQL, Postman,
                Jira, Confluence, Excel, and Linux with strong focus on delivery governance, quality assurance,
                and operational excellence.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Madurai, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-foreground">4+ Years Experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div className="flex flex-col">
                    <span className="text-foreground">
                      aravindmeenu18@gmail.com 
                    </span>
                    <span className="text-foreground">
                      aravindmeenu07@gmail.com
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-foreground">+91-90950-17173</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                  onClick={() => window.open('https://linkedin.com/in/aravind-m-beee', '_blank')}
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  className="bg-card border border-border rounded-xl p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-primary mb-2 flex justify-center">
                    {achievement.icon}
                  </div>
                  <h4 className="font-semibold text-foreground text-sm mb-1">
                    {achievement.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE — Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Work Experience
            </h3>

            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  className="relative pl-8 border-l-2 border-primary/30"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full"></div>

                  <div className="bg-card border border-border rounded-xl p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-lg font-semibold text-foreground">
                        {exp.role}
                      </h4>
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <h5 className="text-primary font-medium mb-3">
                      {exp.company}
                    </h5>
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div
              className="mt-12 bg-card border border-border rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                Education
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">
                    Bachelor of Engineering, Electrical and Electronics
                  </h4>
                  <p className="text-primary">
                    PSNA College of Engineering and Technology
                  </p>
                  <p className="text-sm text-muted-foreground">2020</p>
                </div>

                <div className="mt-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    Languages
                  </h4>
                  <p className="text-muted-foreground">Tamil, English</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  Calendar,
  ExternalLink,
  Download,
  ChevronDown,
  ChevronUp,
  Building2,
  GraduationCap,
  Code,
  Server,
  Database,
  Cloud,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>("greenlight")

  const toggleExperience = (company: string) => {
    setExpandedExperience(expandedExperience === company ? null : company)
  }

  const experiences = [
    {
      id: "greenlight",
      company: "Greenlight Financial Tech",
      position: "Senior Software Engineer",
      duration: "Sept 2024 – Present",
      location: "Bengaluru, India",
      achievements: [
        "Led Notifications and User-Actions services, optimizing delivery success rate from 89% to 99%",
        "Migrated legacy systems to microservices, reducing latency by 40% and improving scalability",
        "Integrated Datadog monitoring, halving incident resolution time",
        "Implemented device token management for secure logout and access control",
        "Reduced delivery time by 30%; improved system reliability by 60%",
        "Leveraged GitHub Copilot and Cursor to accelerate code generation and prototyping, improving feature delivery speed by 30%",
      ],
    },
    {
      id: "coinswitch",
      company: "CoinSwitch",
      position: "SDE2",
      duration: "Jan 2022 – Sept 2024",
      location: "Bengaluru, India",
      achievements: [
        "Built Mutual-Funds platform and core microservices: Orders, Identity/KYC, Portfolio",
        "Improved crypto portfolio service performance 5x; reduced P99 latency to 300ms",
        "Partnered with CX teams to improve support flows and Play Store rating (4.2 to 4.4)",
        "Boosted weekly active investors from 60k to 87k",
      ],
    },
    {
      id: "visa",
      company: "Visa Inc.",
      position: "Senior Software Engineer",
      duration: "Nov 2019 – Jan 2022",
      location: "Bengaluru, India",
      achievements: [
        "Engineered tokenization workflows in Token Management System (TMS) supporting 1B+ transactions",
        "Worked as Site Reliability Engineer (SRE) for 1 year, managing technical outages and maintaining 99.999% system availability",
      ],
    },
    {
      id: "cisco",
      company: "Cisco Systems (via TCS)",
      position: "Software Engineer",
      duration: "Aug 2017 – Nov 2019",
      location: "Bengaluru, India",
      achievements: [
        "Developed RESTful APIs for Webex using Spring Boot and Angular 6",
        "Hands-on experience with full-stack systems across J2EE and client-server architectures",
      ],
    },
  ]

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Java", "Kotlin", "Golang", "Python", "JavaScript", "SQL"],
    },
    {
      title: "Frameworks & Libraries",
      icon: <Server className="w-5 h-5" />,
      skills: ["Spring Boot", "React Native", "Angular", "Gin", "Flask", "Kafka", "GraphQL", "Swagger"],
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-5 h-5" />,
      skills: ["AWS (SQS, DynamoDB, EC2)", "Docker", "Kubernetes", "ArgoCD"],
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: ["PostgreSQL", "MySQL"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-slate-900">Avinash Verma</h1>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Link>
            </Button>
            <Button size="sm">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">Senior Software Engineer</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              8 years of experience building scalable, low-latency systems in fintech and cloud-based domains. Proven
              track record of optimizing system performance, leading technical initiatives, and mentoring engineers.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-slate-600 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>avivrma95@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 9458706284</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://linkedin.com/in/avi-verma" target="_blank">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
                <ExternalLink className="w-3 h-3 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/avi-verma" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                GitHub
                <ExternalLink className="w-3 h-3 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Work Experience</h2>
            <p className="text-slate-600">8 years of building scalable systems and leading technical initiatives</p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card key={exp.id} className="transition-all duration-200 hover:shadow-md">
                <CardHeader className="cursor-pointer" onClick={() => toggleExperience(exp.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-slate-500" />
                      <div>
                        <CardTitle className="text-lg">{exp.company}</CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-1">
                          <span>{exp.position}</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                    {expandedExperience === exp.id ? (
                      <ChevronUp className="w-5 h-5 text-slate-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </CardHeader>

                {expandedExperience === exp.id && (
                  <CardContent className="pt-0">
                    <Separator className="mb-4" />
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2 text-slate-600">
                          <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <p className="text-slate-600">Expertise in backend development, microservices, and distributed systems</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2">
                    {category.icon}
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Education</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-slate-500" />
                  <div>
                    <CardTitle className="text-lg">Bachelor of Technology</CardTitle>
                    <CardDescription>Computer Science and Engineering</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">SRMSCET, Bareilly</p>
                <p className="text-sm text-slate-500">2013 – 2017</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-slate-500" />
                  <div>
                    <CardTitle className="text-lg">Bachelor of Science</CardTitle>
                    <CardDescription>Mathematics (Hons.)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">University of Allahabad, Prayagraj</p>
                <p className="text-sm text-slate-500">2011 – 2013</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Let's Connect</h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6">
              <Mail className="w-8 h-8 text-slate-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-slate-600">avivrma95@gmail.com</p>
            </Card>

            <Card className="p-6">
              <Phone className="w-8 h-8 text-slate-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-slate-600">+91 9458706284</p>
            </Card>

            <Card className="p-6">
              <MapPin className="w-8 h-8 text-slate-600 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-slate-600">Bengaluru, India</p>
            </Card>
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="https://linkedin.com/in/avi-verma" target="_blank">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="https://github.com/avi-verma" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                View GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">© 2024 Avinash Verma. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}

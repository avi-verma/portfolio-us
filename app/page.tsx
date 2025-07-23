"use client"

import React from "react"

import { useState, useEffect } from "react"
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
  GraduationCap,
  Code,
  Server,
  Database,
  Cloud,
  ArrowRight,
  CreditCard,
  Bitcoin,
  Shield,
  Globe,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [expandedExperience, setExpandedExperience] = useState<string | null>("greenlight")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleExperience = (company: string) => {
    setExpandedExperience(expandedExperience === company ? null : company)
  }

  const experiences = [
    {
      id: "greenlight",
      company: "Greenlight Financial Technology",
      website: "https://greenlight.com/",
      tagline: "Debit Card for Kids and Teens",
      position: "Senior Software Engineer",
      duration: "Sept 2024 – Present",
      location: "Bengaluru, India",
      color: "from-green-500 to-emerald-600",
      icon: <CreditCard className="w-6 h-6 text-white" />,
      description: "Leading fintech company providing smart debit cards and financial education for families",
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
      website: "https://coinswitch.co/",
      tagline: "India's Largest Crypto Exchange",
      position: "SDE2",
      duration: "Jan 2022 – Sept 2024",
      location: "Bengaluru, India",
      color: "from-blue-600 to-indigo-700",
      icon: <Bitcoin className="w-6 h-6 text-white" />,
      description: "Premier cryptocurrency exchange platform enabling Bitcoin trading and crypto investments",
      achievements: [
        "Built Mutual-Funds platform and core microservices: Orders, Identity/KYC, Portfolio",
        "Improved crypto portfolio service performance 5x; reduced P99 latency to 300ms",
        "Partnered with CX teams to improve support flows and Play Store rating (4.2 to 4.4)",
        "Boosted weekly active investors from 60k to 87k",
      ],
    },
    {
      id: "visa",
      company: "Visa Inc. (Cybersource)",
      website: "https://www.cybersource.com/en.html",
      tagline: "Payment Platform & Fraud Management",
      position: "Senior Software Engineer",
      duration: "Nov 2019 – Jan 2022",
      location: "Bengaluru, India",
      color: "from-blue-800 to-purple-700",
      icon: <Shield className="w-6 h-6 text-white" />,
      description:
        "Global payment technology company providing secure payment processing and fraud management solutions",
      achievements: [
        "Engineered tokenization workflows in Token Management System (TMS) supporting 1B+ transactions",
        "Worked as Site Reliability Engineer (SRE) for 1 year, managing technical outages and maintaining 99.999% system availability",
        "Developed fraud detection algorithms reducing false positives by 25%",
        "Optimized payment processing pipelines handling millions of daily transactions",
      ],
    },
    {
      id: "tcs",
      company: "Tata Consultancy Services",
      website: "https://www.tcs.com/home-page",
      tagline: "Cisco Webex Subscriptions",
      position: "Software Engineer (Cisco Project)",
      duration: "Aug 2017 – Nov 2019",
      location: "Bengaluru, India",
      color: "from-indigo-600 to-blue-800",
      icon: <Globe className="w-6 h-6 text-white" />,
      description: "Global IT services and consulting company delivering digital transformation solutions",
      achievements: [
        "Developed RESTful APIs for Webex collaboration platform using Spring Boot and Angular 6",
        "Hands-on experience with full-stack systems across J2EE and client-server architectures",
        "Collaborated with Cisco engineering teams on video conferencing solutions",
        "Implemented scalable microservices architecture for enterprise communication tools",
      ],
    },
  ]

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-5 h-5" />,
      skills: ["Java", "Kotlin", "Golang", "Python", "JavaScript", "SQL"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Frameworks & Libraries",
      icon: <Server className="w-5 h-5" />,
      skills: ["Spring Boot", "React Native", "Angular", "Gin", "Flask", "Kafka", "GraphQL", "Swagger"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="w-5 h-5" />,
      skills: ["AWS (SQS, DynamoDB, EC2)", "Docker", "Kubernetes", "ArgoCD"],
      color: "from-violet-500 to-purple-500",
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: ["PostgreSQL", "MySQL"],
      color: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className="relative bg-white/80 backdrop-blur-sm shadow-sm border-b border-slate-200/50 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div
            className={`flex items-center gap-4 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
          >
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
          </div>
          <div
            className={`flex gap-4 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
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
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200"
            >
              <Link
                href="https://drive.google.com/file/d/1Nq0_fVKt1G3B1s9S-UvIqe179FW9-t3N/view?usp=drive_link"
                target="_blank"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <div
            className={`mb-8 transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-2">
              Avinash Verma
            </h1>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-700 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-4">
              Senior Software Engineer
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              8 years of experience building scalable, low-latency systems in fintech and cloud-based domains. Proven
              track record of optimizing system performance, leading technical initiatives, and mentoring engineers.
            </p>
          </div>

          <div
            className={`flex flex-wrap justify-center gap-6 text-slate-600 mb-8 transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
              <MapPin className="w-4 h-4" />
              <span>Bengaluru, India</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
              <Mail className="w-4 h-4" />
              <span>avivrma95@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
              <Phone className="w-4 h-4" />
              <span>+91 9458706284</span>
            </div>
          </div>

          <div
            className={`flex justify-center gap-4 transition-all duration-1000 delay-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
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
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Work Experience
            </h2>
            <p className="text-slate-600">
              8 years of building scalable systems across fintech, crypto, and enterprise solutions
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={exp.id}
                className={`group transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border-l-4 border-l-transparent hover:border-l-blue-500 animate-fade-in-up overflow-hidden`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="cursor-pointer" onClick={() => toggleExperience(exp.id)}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <CardTitle className="text-xl group-hover:text-blue-600 transition-colors duration-200">
                            <Link
                              href={exp.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline flex items-center gap-2"
                            >
                              {exp.company}
                              <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                            </Link>
                          </CardTitle>
                          <Badge variant="secondary" className="text-xs font-medium">
                            {exp.tagline}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-600 mb-2 max-w-2xl">{exp.description}</p>
                        <CardDescription className="flex flex-wrap items-center gap-4">
                          <span className="font-medium text-slate-700">{exp.position}</span>
                          <span className="flex items-center gap-1 text-slate-500">
                            <Calendar className="w-3 h-3" />
                            {exp.duration}
                          </span>
                          <span className="flex items-center gap-1 text-slate-500">
                            <MapPin className="w-3 h-3" />
                            {exp.location}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} animate-pulse`}></div>
                      {expandedExperience === exp.id ? (
                        <ChevronUp className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors duration-200" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors duration-200" />
                      )}
                    </div>
                  </div>
                </CardHeader>

                {expandedExperience === exp.id && (
                  <CardContent className="pt-0 animate-fade-in">
                    <Separator className="mb-4" />
                    <div className="grid gap-3">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div
                          key={achievementIndex}
                          className={`flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-slate-50 to-white border border-slate-100 group/item hover:shadow-md transition-all duration-200 animate-slide-in-left`}
                          style={{ animationDelay: `${achievementIndex * 100}ms` }}
                        >
                          <div
                            className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                          >
                            <ArrowRight className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-slate-700 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
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
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <p className="text-slate-600">Expertise in backend development, microservices, and distributed systems</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`h-full group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {React.cloneElement(category.icon, { className: "w-5 h-5 text-white" })}
                    </div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-200">
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`text-xs hover:scale-105 transition-all duration-200 cursor-default animate-fade-in`}
                        style={{ animationDelay: `${index * 200 + skillIndex * 50}ms` }}
                      >
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
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-4">
              Education
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors duration-200">
                      Bachelor of Technology
                    </CardTitle>
                    <CardDescription>Computer Science and Engineering</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 font-medium">SRMSCET, Bareilly</p>
                <p className="text-sm text-slate-500">2013 – 2017</p>
              </CardContent>
            </Card>

            <Card
              className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg group-hover:text-emerald-600 transition-colors duration-200">
                      Bachelor of Science
                    </CardTitle>
                    <CardDescription>Mathematics (Hons.)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 font-medium">University of Allahabad, Prayagraj</p>
                <p className="text-sm text-slate-500">2011 – 2013</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent mb-8">
            Let's Connect
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-blue-600 transition-colors duration-200">Email</h3>
              <p className="text-slate-600">avivrma95@gmail.com</p>
            </Card>

            <Card
              className="p-6 group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: "200ms" }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-emerald-600 transition-colors duration-200">Phone</h3>
              <p className="text-slate-600">+91 9458706284</p>
            </Card>

            <Card
              className="p-6 group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 group-hover:text-orange-600 transition-colors duration-200">
                Location
              </h3>
              <p className="text-slate-600">Bengaluru, India</p>
            </Card>
          </div>

          <div className="flex justify-center gap-4">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition-all duration-200 group"
            >
              <Link href="https://linkedin.com/in/avi-verma" target="_blank">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="hover:scale-105 transition-all duration-200 group hover:border-purple-500 hover:text-purple-600 bg-transparent"
            >
              <Link href="https://github.com/avi-verma" target="_blank">
                <Github className="w-4 h-4 mr-2" />
                View GitHub
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-300">© 2025 Avinash Verma. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.4s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.4s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}

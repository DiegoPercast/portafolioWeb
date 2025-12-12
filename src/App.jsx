import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react";
import "./App.css"

const App = () => {
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState("es");

  const translations = {
    es: {
      nav: {
        home: "Inicio",
        about: "Sobre Mí",
        skills: "Habilidades",
        projects: "Proyectos",
        certifications: "Certificaciones",
        contact: "Contacto",
      },
      hero: {
        greeting: "Hola, soy",
        name: "Diego Pérez Castillo",
        role: "Desarrollador Full Stack",
        subtitle:
          "Especializado en desarrollo web moderno con enfoque en experiencias de usuario excepcionales",
        cta: "Ver Proyectos",
        downloadCV: "Descargar CV",
      },
      about: {
        title: "Sobre Mí",
        intro: "Estudiante de Tecnologías de la Información e Innovación Digital en la Universidad Politécnica de Sinaloa",
        description:
          "Soy un desarrollador apasionado por crear soluciones web innovadoras y funcionales. Mi enfoque se centra en escribir código limpio, escalable y mantener las mejores prácticas de desarrollo.",
        education: "Formación Académica",
        degree: "Tecnico en Programación",
        university: "CBTIS 051 Juan De Dios Batiz Paredes",
        period: "2021 - 2024",
        location: "Mazatlán, Sinaloa, México",
      },
      skills: {
        title: "Habilidades Técnicas",
        languages: "Lenguajes de Programación",
        frameworks: "Frameworks y Librerías",
        tools: "Herramientas y Tecnologías",
        databases: "Bases de Datos",
      },
      projects: {
        title: "Proyectos Principales",
        viewCode: "Ver Código",
        viewDemo: "Ver Demo",
        project1: {
          title: "Sistema de Gestión Empresarial",
          description:
            "Aplicación web completa para la gestión de inventarios, ventas y clientes. Incluye dashboard interactivo con gráficos en tiempo real y sistema de reportes.",
          tech: "React, Node.js, Express, MongoDB, Chart.js",
        },
        project2: {
          title: "Plataforma E-Learning",
          description:
            "Sistema de aprendizaje en línea con autenticación de usuarios, gestión de cursos, evaluaciones interactivas y seguimiento de progreso estudiantil.",
          tech: "Next.js, TypeScript, PostgreSQL, Tailwind CSS",
        },
      },
      certifications: {
        title: "Certificaciones y Reconocimientos",
        cert1: "Certificación en Desarrollo Web Full Stack",
        issuer1: "FreeCodeCamp - 2024",
        cert2: "AWS Cloud Practitioner",
        issuer2: "Amazon Web Services - 2024",
        cert3: "Desarrollo de Aplicaciones Modernas",
        issuer3: "Universidad XYZ - 2023",
      },
      contact: {
        title: "Contacto",
        subtitle:
          "Estoy disponible para colaboraciones y oportunidades profesionales",
        email: "tuemail@institucional.edu.mx",
        location: "Mazatlán, Sinaloa, México",
        form: {
          name: "Nombre",
          email: "Correo Electrónico",
          message: "Mensaje",
          send: "Enviar Mensaje",
        },
      },
      footer: {
        rights: "Todos los derechos reservados",
        built: "Desarrollado con React y Tailwind CSS",
      },
    },
    en: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        certifications: "Certifications",
        contact: "Contact",
      },
      hero: {
        greeting: "Hello, I am",
        name: "Diego Pérez Castillo",
        role: "Full Stack Developer",
        subtitle:
          "Specialized in modern web development with a focus on exceptional user experiences",
        cta: "View Projects",
        downloadCV: "Download CV",
      },
      about: {
        title: "About Me",
        intro: "Information Technology Student",
        description:
          "I am a developer passionate about creating innovative and functional web solutions. My focus is on writing clean, scalable code and maintaining best development practices.",
        education: "Academic Background",
        degree: "Information Technology Engineering",
        university: "XYZ University",
        period: "2021 - 2025",
        location: "Mazatlan, Sinaloa, Mexico",
      },
      skills: {
        title: "Technical Skills",
        languages: "Programming Languages",
        frameworks: "Frameworks and Libraries",
        tools: "Tools and Technologies",
        databases: "Databases",
      },
      projects: {
        title: "Main Projects",
        viewCode: "View Code",
        viewDemo: "View Demo",
        project1: {
          title: "Business Management System",
          description:
            "Complete web application for inventory, sales and customer management. Includes interactive dashboard with real-time charts and reporting system.",
          tech: "React, Node.js, Express, MongoDB, Chart.js",
        },
        project2: {
          title: "E-Learning Platform",
          description:
            "Online learning system with user authentication, course management, interactive assessments and student progress tracking.",
          tech: "Next.js, TypeScript, PostgreSQL, Tailwind CSS",
        },
      },
      certifications: {
        title: "Certifications and Achievements",
        cert1: "Full Stack Web Development Certification",
        issuer1: "FreeCodeCamp - 2024",
        cert2: "AWS Cloud Practitioner",
        issuer2: "Amazon Web Services - 2024",
        cert3: "Modern Application Development",
        issuer3: "XYZ University - 2023",
      },
      contact: {
        title: "Contact",
        subtitle:
          "I am available for collaborations and professional opportunities",
        email: "youremail@institutional.edu.mx",
        location: "Mazatlan, Sinaloa, Mexico",
        form: {
          name: "Name",
          email: "Email",
          message: "Message",
          send: "Send Message",
        },
      },
      footer: {
        rights: "All rights reserved",
        built: "Built with React and Tailwind CSS",
      },
    },
    fr: {
      nav: {
        home: "Accueil",
        about: "À Propos",
        skills: "Compétences",
        projects: "Projets",
        certifications: "Certifications",
        contact: "Contact",
      },
      hero: {
        greeting: "Bonjour, je suis",
        name: "Diego Pérez Castillo",
        role: "Développeur Full Stack",
        subtitle:
          "Spécialisé dans le développement web moderne avec un accent sur des expériences utilisateur exceptionnelles",
        cta: "Voir les Projets",
        downloadCV: "Télécharger CV",
      },
      about: {
        title: "À Propos de Moi",
        intro: "Étudiant en Technologies de l'Information",
        description:
          "Je suis un développeur passionné par la création de solutions web innovantes et fonctionnelles. Mon approche se concentre sur l'écriture de code propre et évolutif tout en maintenant les meilleures pratiques de développement.",
        education: "Formation Académique",
        degree: "Ingénierie en Technologies de l'Information",
        university: "Université XYZ",
        period: "2021 - 2025",
        location: "Mazatlán, Sinaloa, Mexique",
      },
      skills: {
        title: "Compétences Techniques",
        languages: "Langages de Programmation",
        frameworks: "Frameworks et Bibliothèques",
        tools: "Outils et Technologies",
        databases: "Bases de Données",
      },
      projects: {
        title: "Projets Principaux",
        viewCode: "Voir le Code",
        viewDemo: "Voir la Démo",
        project1: {
          title: "Système de Gestion d'Entreprise",
          description:
            "Application web complète pour la gestion des inventaires, des ventes et des clients. Comprend un tableau de bord interactif avec des graphiques en temps réel et un système de rapports.",
          tech: "React, Node.js, Express, MongoDB, Chart.js",
        },
        project2: {
          title: "Plateforme E-Learning",
          description:
            "Système d'apprentissage en ligne avec authentification des utilisateurs, gestion des cours, évaluations interactives et suivi de la progression des étudiants.",
          tech: "Next.js, TypeScript, PostgreSQL, Tailwind CSS",
        },
      },
      certifications: {
        title: "Certifications et Reconnaissances",
        cert1: "Certification en Développement Web Full Stack",
        issuer1: "FreeCodeCamp - 2024",
        cert2: "AWS Cloud Practitioner",
        issuer2: "Amazon Web Services - 2024",
        cert3: "Développement d'Applications Modernes",
        issuer3: "Université XYZ - 2023",
      },
      contact: {
        title: "Contact",
        subtitle:
          "Je suis disponible pour des collaborations et des opportunités professionnelles",
        email: "votreemail@institutionnel.edu.mx",
        location: "Mazatlán, Sinaloa, Mexique",
        form: {
          name: "Nom",
          email: "Email",
          message: "Message",
          send: "Envoyer le Message",
        },
      },
      footer: {
        rights: "Tous droits réservés",
        built: "Développé avec React et Tailwind CSS",
      },
    },
  };

  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "inicio",
        "sobre-mi",
        "habilidades",
        "proyectos",
        "certificaciones",
        "contacto",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const skills = {
    languages: ["JavaScript", "TypeScript", "Python", "Java", "HTML5", "CSS3"],
    frameworks: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Bootstrap",
    ],
    tools: ["Git", "Docker", "VS Code", "Figma", "Postman", "Linux"],
    databases: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: "inicio", label: t.nav.home },
                { id: "sobre-mi", label: t.nav.about },
                { id: "habilidades", label: t.nav.skills },
                { id: "proyectos", label: t.nav.projects },
                { id: "certificaciones", label: t.nav.certifications },
                { id: "contacto", label: t.nav.contact },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors ${
                    activeSection === item.id
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              {/* Language Selector */}
              <div className="flex gap-2 ml-4 border-l border-slate-700 pl-4">
                {["es", "en", "fr"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                      language === lang
                        ? "bg-blue-500 text-white"
                        : "bg-slate-800 text-gray-400 hover:text-white"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <div className="flex gap-2">
                {["es", "en", "fr"].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      language === lang
                        ? "bg-blue-500 text-white"
                        : "bg-slate-800 text-gray-400"
                    }`}
                  >
                    {lang.toUpperCase()}
                  </button>
                ))}
              </div>
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden pb-4">
              {[
                { id: "inicio", label: t.nav.home },
                { id: "sobre-mi", label: t.nav.about },
                { id: "habilidades", label: t.nav.skills },
                { id: "proyectos", label: t.nav.projects },
                { id: "certificaciones", label: t.nav.certifications },
                { id: "contacto", label: t.nav.contact },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 ${
                    activeSection === item.id
                      ? "text-blue-400 bg-slate-800"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="min-h-screen flex items-center justify-center pt-16 px-4"
      >
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1">
              <div className="w-full h-full rounded-full bg-transparent flex items-center justify-center text-6xl font-bold over">
                <img src="./diegopc.jpeg" alt="" />
              </div>
            </div>
          </div>
          <p className="text-blue-400 text-lg mb-2">{t.hero.greeting}</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {t.hero.name}
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            {t.hero.role}
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection("proyectos")}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
            >
              {t.hero.cta}
            </button>
            <button className="px-8 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
              <Download size={20} />
              {t.hero.downloadCV}
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t.about.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">
                {t.about.intro}
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                {t.about.description}
              </p>
              <div className="flex items-center gap-2 text-gray-400 mb-2">
                <Mail size={18} />
                <span>{t.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                <span>{t.about.location}</span>
              </div>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-lg border border-slate-700">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">
                {t.about.education}
              </h3>
              <div className="space-y-2">
                <p className="text-lg font-medium">{t.about.degree}</p>
                <p className="text-gray-400">{t.about.university}</p>
                <p className="text-gray-500">{t.about.period}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t.skills.title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: t.skills.languages,
                items: skills.languages,
                color: "blue",
              },
              {
                title: t.skills.frameworks,
                items: skills.frameworks,
                color: "purple",
              },
              { title: t.skills.tools, items: skills.tools, color: "pink" },
              {
                title: t.skills.databases,
                items: skills.databases,
                color: "indigo",
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <h3
                  className={`text-lg font-semibold mb-4 text-${category.color}-400`}
                >
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-gray-300 flex items-center gap-2"
                    >
                      <span
                        className={`w-2 h-2 rounded-full bg-${category.color}-400`}
                      ></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="proyectos" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t.projects.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[t.projects.project1, t.projects.project2].map((project, idx) => (
              <div
                key={idx}
                className="bg-slate-900/50 rounded-lg overflow-hidden border border-slate-700 hover:border-slate-600 transition-colors"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-6xl font-bold">
                  {idx + 1}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <p className="text-sm text-blue-400 mb-4">
                    <span className="font-semibold">Tech Stack:</span>{" "}
                    {project.tech}
                  </p>
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded transition-colors">
                      <Github size={18} />
                      {t.projects.viewCode}
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors">
                      <ExternalLink size={18} />
                      {t.projects.viewDemo}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certificaciones" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {t.certifications.title}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: t.certifications.cert1,
                issuer: t.certifications.issuer1,
              },
              {
                title: t.certifications.cert2,
                issuer: t.certifications.issuer2,
              },
              {
                title: t.certifications.cert3,
                issuer: t.certifications.issuer3,
              },
            ].map((cert, idx) => (
              <div
                key={idx}
                className="bg-slate-800/50 p-6 rounded-lg border border-slate-700 hover:border-blue-500 transition-colors"
              >
                <div className="w-full h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded mb-4 flex items-center justify-center text-4xl font-bold">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                <p className="text-gray-400 text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            {t.contact.title}
          </h2>
          <p className="text-gray-400 text-center mb-12">
            {t.contact.subtitle}
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-blue-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-400">{t.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-purple-400 mt-1" size={24} />
                  <div>
                    <h3 className="font-semibold mb-1">Ubicación</h3>
                    <p className="text-gray-400">{t.contact.location}</p>
                  </div>
                </div>
                <div className="flex gap-4 pt-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={t.contact.form.name}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder={t.contact.form.email}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors"
                />
                <textarea
                  placeholder={t.contact.form.message}
                  rows="4"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors resize-none"
                ></textarea>
                <button
                  onClick={() => alert("Funcionalidad de envío de mensaje")}
                  className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
                >
                  {t.contact.form.send}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p className="mb-2">
            © 2024 {t.hero.name}. {t.footer.rights}.
          </p>
          <p className="text-sm">{t.footer.built}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Terminal, 
  Database, 
  User, 
  Moon, 
  Sun, 
  ChevronDown, 
  Brain, 
  Container, 
  Cpu,
  FileText,
  Search,
  Globe,
  Award,
  Eye,
  X,
  MessageSquare,
  Car,
  ScanText,
  Loader // Pour les certifs en cours
} from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState('fr');
  const [selectedCert, setSelectedCert] = useState(null);

  // --- CONTENU BILINGUE ---
  const content = {
    fr: {
      nav: { skills: "Compétences", projects: "Projets", certs: "Certifications", contact: "Contact" },
      hero: {
        badge: "Recherche stage fin d'études (Fév 2026)",
        title: "Ingénieure Junior ",
        subtitle: "en AI & Data Science",
        bio: "Élève ingénieure en Data Science & IoT à l'ENSIAS. Passionnée par l'IA générative, les systèmes intelligents et le MLOps. Je recherche un stage de fin d'études (4-6 mois) à partir de février 2026.",
        cta: "Me contacter",
        linkedin: "LinkedIn",
        github: "GitHub"
      },
      skills: {
        title: "Arsenal Technique",
        subtitle: "Une combinaison solide de Data Science avancée, d'ingénierie logicielle et de pratiques MLOps modernes.",
        categories: [
          { name: "IA & Data Science", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Transformers", "LLMs (Llama3, BERT)", "LangChain", "RAG"] },
          { name: "DevOps & Cloud", items: ["Docker", "Kubernetes", "Jenkins", "MLflow", "GitHub Actions", "SonarQube"] },
          { name: "Backend & Data", items: ["Python", "Java", "Flask", "FastAPI", "Neo4j (Graph DB)", "SQL", "NoSQL", "Hadoop/Spark"] }
        ]
      },
      projects: {
        title: "Projets Sélectionnés",
        subtitle: "Expériences professionnelles et projets académiques démontrant l'application de l'IA à des problèmes réels.",
        viewGithub: "Voir tout sur GitHub",
        items: [
           {
            title: "Assistant de Traduction Anglais-Darija",
            role: "NLP & Generative AI",
            desc: "Système de traduction automatique bidirectionnel Anglais <-> Arabe Marocain (Darija). Développement d'un chatbot interactif supportant l'entrée vocale et textuelle.",
            tech: ["NLP", "Text Mining", "Python", "Speech-to-Text"],
            icon: <MessageSquare size={24} />
          },
          {
            title: "Système de Smart Parking IoT",
            role: "IoT & Computer Vision",
            desc: "Application Android de réservation de parking temps réel. Reconnaissance de plaques d'immatriculation via Deep Learning (YOLOv8) et contrôle d'accès automatisé (Raspberry Pi).",
            tech: ["YOLOv8", "PyTorch", "Raspberry Pi", "Flask API", "Android"],
            icon: <Car size={24} />
          },
          {
            title: "Custom Named Entity Recognition (NER)",
            role: "NLP Engineering",
            desc: "Fine-tuning de modèles SpaCy pour reconnaître des entités spécifiques à un domaine (au-delà des modèles pré-entraînés). Pipeline réutilisable pour la personnalisation et l'évaluation.",
            tech: ["SpaCy", "Python", "Data Annotation", "Model Tuning"],
            icon: <ScanText size={24} />
          },
          {
            title: "Plateforme ERP & Classification de CV",
            role: "Stage Data Eng. @ INTELLCAP",
            desc: "Conception d'une architecture microservices. Développement d'un classificateur de CV avec BERT (96% précision) déployé sur Kubernetes.",
            tech: ["BERT", "Kubernetes", "Microservices", "Docker", "Agile"],
            icon: <Cpu size={24} />
          },
          {
            title: "Exploration d'Articles Scientifiques (RAG)",
            role: "Projet Académique",
            desc: "Plateforme d'exploration intelligente d'articles scientifiques utilisant des Knowledge Graphs et Graph RAG. Chatbot pour résumer les insights.",
            tech: ["Neo4j", "Graph RAG", "SpaCy", "NLTK", "LLM"],
            icon: <Search size={24} />
          },
          {
            title: "Pipeline MLOps End-to-End",
            role: "Projet Académique",
            desc: "Pipeline complet : entraînement, déploiement et monitoring. Versioning des données/modèles et déploiement scalable.",
            tech: ["MLflow", "FastAPI", "Docker", "GitHub Actions", "SonarQube"],
            icon: <Terminal size={24} />
          }
        ]
      },
      certs: {
        title: "Certifications & Apprentissage",
        subtitle: "Un engagement constant dans la veille technologique et la maîtrise de nouveaux outils.",
        viewCert: "Voir le certificat",
        inProgress: "En cours",
        items: [
          {
            title: "Spark Fundamentals",
            issuer: "IBM Cognitive Class",
            date: "2025", 
            desc: "Traitement distribué, RDDs, DataFrames et Spark SQL.",
            file: null, // Pas de fichier car en cours
            status: "ongoing"
          },
          {
            title: "Hadoop 101",
            issuer: "IBM Cognitive Class",
            date: "2025", 
            desc: "Architecture Big Data, HDFS, MapReduce et YARN.",
            file: null, // Pas de fichier car en cours
            status: "ongoing"
          },
          {
            title: "Big Data 101",
            issuer: "IBM Cognitive Class",
            date: "Dec 2025", 
            desc: "Fondamentaux du Big Data, Hadoop et écosystème Spark.",
            file: "/certificats/ibm-bigdata.jpg" 
          },
          {
            title: "Business Intelligence",
            issuer: "MDS Talks",
            date: "Jan 2025",
            desc: "De la donnée à la décision : stratégies BI modernes.",
            file: "/certificats/mds-bi.jpg"
          },
          {
            title: "AI 101",
            issuer: "MDS Talks",
            date: "Dec 2024",
            desc: "Fondamentaux et applications de l'Intelligence Artificielle.",
            file: "/certificats/mds-ai101.jpg"
          },
          {
            title: "LLM Optimization & MLOps",
            issuer: "MDS Talks",
            date: "Jan 2025",
            desc: "Focus sur le Fine-Tuning d'adapteurs et les pratiques LLMOps avancées.",
            file: "/certificats/mds-llm.jpg"
          },
          {
            title: "NLP & Text Mining",
            issuer: "Simplilearn",
            date: "Août 2024",
            desc: "Spécialisation sur les techniques de traitement du langage naturel.",
            file: "/certificats/nlp-simplilearn.jpg"
          },
          {
            title: "Women in AI Summit",
            issuer: "Google / Women in AI",
            date: "Déc 2024",
            desc: "Participation au sommet sur l'innovation et l'éthique en IA.",
            file: "/certificats/women-in-ai.jpg"
          }
        ]
      },
      contact: {
        title: "Prête à collaborer",
        desc: "Je suis à la recherche d'un **stage de fin d'études de 4 à 6 mois** à partir de février 2026. Si vous cherchez une ingénieure passionnée par l'IA, discutons-en !",
        emailBtn: "Envoyer un email",
        linkedinBtn: "LinkedIn",
        copyright: "© 2025 Saadia AKERKOUCH. Développé avec React & Tailwind CSS."
      }
    },
    en: {
      nav: { skills: "Skills", projects: "Projects", certs: "Certifications", contact: "Contact" },
      hero: {
        badge: "Seeking End-of-Studies Internship (Feb 2026)",
        title: "Engineer",
        subtitle: "AI & Data Science",
        bio: "Engineering student in Data Science & IoT at ENSIAS. Passionate about Generative AI, intelligent systems, and MLOps. Seeking a 4-6 month internship starting February 2026.",
        cta: "Contact Me",
        linkedin: "LinkedIn",
        github: "GitHub"
      },
      skills: {
        title: "Technical Arsenal",
        subtitle: "A strong combination of advanced Data Science, Software Engineering, and modern MLOps practices.",
        categories: [
          { name: "AI & Data Science", items: ["TensorFlow", "PyTorch", "Scikit-learn", "Transformers", "LLMs (Llama3, BERT)", "LangChain", "RAG"] },
          { name: "DevOps & Cloud", items: ["Docker", "Kubernetes", "Jenkins", "MLflow", "GitHub Actions", "SonarQube"] },
          { name: "Backend & Data", items: ["Python", "Java", "Flask", "FastAPI", "Neo4j (Graph DB)", "SQL", "NoSQL", "Hadoop/Spark"] }
        ]
      },
      projects: {
        title: "Selected Projects",
        subtitle: "Professional experiences and academic projects demonstrating the application of AI to real-world problems.",
        viewGithub: "View all on GitHub",
        items: [
           {
            title: "English-Darija Translation Assistant",
            role: "NLP & Generative AI",
            desc: "Automatic translation system between English and Moroccan Arabic. Developed interactive chatbot interface supporting text and voice input.",
            tech: ["NLP", "Text Mining", "Python", "Speech-to-Text"],
            icon: <MessageSquare size={24} />
          },
          {
            title: "Smart Parking System",
            role: "IoT & Computer Vision",
            desc: "Android app for real-time parking reservation. License plate recognition using Deep Learning (YOLOv8) and automated access control (Raspberry Pi).",
            tech: ["YOLOv8", "PyTorch", "Raspberry Pi", "Flask API", "Android"],
            icon: <Car size={24} />
          },
          {
            title: "Custom Named Entity Recognition (NER)",
            role: "NLP Engineering",
            desc: "Fine-tuned SpaCy models to recognize domain-specific entities beyond default pretrained sets. Built a reusable pipeline for customization.",
            tech: ["SpaCy", "Python", "Data Annotation", "Model Tuning"],
            icon: <ScanText size={24} />
          },
          {
            title: "ERP Platform & CV Classification",
            role: "Data Eng. Intern @ INTELLCAP",
            desc: "Designed microservices architecture for an ERP. Developed a CV classification microservice using fine-tuned BERT (96% accuracy) on Kubernetes.",
            tech: ["BERT", "Kubernetes", "Microservices", "Docker", "Agile"],
            icon: <Cpu size={24} />
          },
          {
            title: "IT Scientific Paper Exploration (RAG)",
            role: "Academic Project",
            desc: "Intelligent exploration platform for scientific papers using Knowledge Graphs and Graph RAG. Chatbot for summarizing key insights.",
            tech: ["Neo4j", "Graph RAG", "SpaCy", "NLTK", "LLM"],
            icon: <Search size={24} />
          },
          {
            title: "End-to-End MLOps Pipeline",
            role: "Academic Project",
            desc: "Built a complete pipeline for training, deployment, and monitoring. Data/Model versioning and scalable deployment.",
            tech: ["MLflow", "FastAPI", "Docker", "GitHub Actions", "SonarQube"],
            icon: <Terminal size={24} />
          }
        ]
      },
      certs: {
        title: "Certifications & Learning",
        subtitle: "Continuous engagement in technology watch and mastering new tools.",
        viewCert: "View Certificate",
        inProgress: "In Progress",
        items: [
          {
            title: "Spark Fundamentals",
            issuer: "IBM Cognitive Class",
            date: "2025", 
            desc: "Distributed processing, RDDs, DataFrames, and Spark SQL.",
            file: null, 
            status: "ongoing"
          },
          {
            title: "Hadoop 101",
            issuer: "IBM Cognitive Class",
            date: "2025", 
            desc: "Big Data Architecture, HDFS, MapReduce, and YARN.",
            file: null, 
            status: "ongoing"
          },
          {
            title: "Big Data 101",
            issuer: "IBM Cognitive Class",
            date: "Dec 2025",
            desc: "Big Data fundamentals, Hadoop, and Spark ecosystem.",
            file: "/certificats/ibm-bigdata.jpg"
          },
          {
            title: "Business Intelligence",
            issuer: "MDS Talks",
            date: "Jan 2025",
            desc: "From data to decisions: modern BI strategies.",
            file: "/certificats/mds-bi.jpg"
          },
           {
            title: "AI 101",
            issuer: "MDS Talks",
            date: "Dec 2024",
            desc: "Fundamentals and applications of Artificial Intelligence.",
            file: "/certificats/mds-ai101.jpg"
          },
          {
            title: "LLM Optimization & MLOps",
            issuer: "MDS Talks",
            date: "Jan 2025",
            desc: "Focus on Fine-Tuning adapters and advanced LLMOps practices.",
            file: "/certificats/mds-llm.jpg"
          },
          {
            title: "NLP & Text Mining",
            issuer: "Simplilearn",
            date: "Aug 2024",
            desc: "Specialization in Natural Language Processing techniques.",
            file: "/certificats/nlp-simplilearn.jpg"
          },
          {
            title: "Women in AI Summit",
            issuer: "Google / Women in AI",
            date: "Dec 2024",
            desc: "Participation in the summit on innovation and ethics in AI.",
            file: "/certificats/women-in-ai.jpg"
          }
        ]
      },
      contact: {
        title: "Ready to Collaborate",
        desc: "I am looking for a **4-6 month end-of-studies internship** starting February 2026. If you are looking for an engineer passionate about AI, let's talk!",
        emailBtn: "Send Email",
        linkedinBtn: "LinkedIn",
        copyright: "© 2025 Saadia AKERKOUCH. Built with React & Tailwind CSS."
      }
    }
  };

  const t = content[lang];
  const common = {
    social: {
      github: "https://github.com/Saadia-Akerkouch",
      linkedin: "https://www.linkedin.com/in/saadia-akerkouch",
      email: "mailto:saadiaakerkouch2003@gmail.com",
    },
    skillIcons: [<Brain size={20} />, <Container size={20} />, <Database size={20} />]
  };

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleLang = () => setLang(lang === 'fr' ? 'en' : 'fr');

  // Composant Modal Interne
  const CertificateModal = ({ cert, onClose }) => {
    if (!cert) return null;
    const isPdf = cert.file && cert.file.toLowerCase().endsWith('.pdf');

    return (
      <div 
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
        onClick={onClose}
      >
        <div 
          className="relative w-full max-w-5xl h-[85vh] bg-transparent flex flex-col items-center justify-center"
          onClick={e => e.stopPropagation()} 
        >
           {/* Bouton de fermeture externe pour plus de clarté */}
           <button 
              onClick={onClose}
              className="absolute -top-12 right-0 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors text-white"
            >
              <X size={32} />
            </button>

          <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full h-full flex flex-col">
            {/* Header de la modale */}
            <div className="flex justify-between items-center p-4 border-b bg-gray-50 flex-shrink-0">
              <div>
                <h3 className="font-bold text-lg text-gray-900">{cert.title}</h3>
                <p className="text-sm text-gray-500">{cert.issuer}</p>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-600"
              >
                <X size={24} />
              </button>
            </div>

            {/* Corps de la modale */}
            <div className="flex-1 bg-gray-100 p-4 overflow-hidden relative flex items-center justify-center">
              {cert.file ? (
                isPdf ? (
                  <iframe 
                    src={cert.file} 
                    className="w-full h-full rounded-lg border border-gray-200"
                    title={cert.title}
                  />
                ) : (
                  <img 
                    src={cert.file} 
                    alt={cert.title} 
                    className="max-w-full max-h-full object-contain shadow-lg"
                  />
                )
              ) : (
                <div className="text-center p-8">
                  <Loader size={48} className="mx-auto text-emerald-500 mb-4 animate-spin" />
                  <p className="text-gray-600 font-medium">Certification en cours d'acquisition.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-gray-50 text-gray-900'} font-sans`}>
      
      {/* Affichage de la modale si un certificat est sélectionné */}
      {selectedCert && (
        <CertificateModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}

      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${darkMode ? 'bg-slate-900/90 border-b border-slate-800' : 'bg-white/90 border-b border-gray-200'} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter">S. Akerkouch<span className="text-emerald-500">.</span></span>
          <div className="flex items-center gap-4 md:gap-6">
            <a href="#about" className="hidden md:block hover:text-emerald-500 transition-colors text-sm font-medium">{t.nav.skills}</a>
            <a href="#projects" className="hidden md:block hover:text-emerald-500 transition-colors text-sm font-medium">{t.nav.projects}</a>
            <a href="#certifications" className="hidden md:block hover:text-emerald-500 transition-colors text-sm font-medium">{t.nav.certs}</a>
            <a href="#contact" className="hidden md:block hover:text-emerald-500 transition-colors text-sm font-medium">{t.nav.contact}</a>
            
            <div className="h-6 w-px bg-gray-500/30 hidden md:block"></div>

            <button onClick={toggleLang} className="flex items-center gap-1 text-sm font-bold hover:text-emerald-500 transition-colors px-2 py-1 rounded">
              <Globe size={16} />
              {lang.toUpperCase()}
            </button>
            
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200/20 transition-colors">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${darkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-100 text-emerald-700 border-emerald-200'}`}>
              {t.hero.badge}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              {t.hero.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                {t.hero.subtitle}
              </span>
            </h1>
            <p className={`text-lg max-w-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              {t.hero.bio}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={common.social.github} target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 shadow-sm'}`}>
                <Github size={20} />
                <span>{t.hero.github}</span>
              </a>
              <a href={common.social.linkedin} target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all ${darkMode ? 'bg-[#0077b5] hover:bg-[#006396] text-white' : 'bg-[#0077b5] hover:bg-[#006396] text-white shadow-sm'}`}>
                <Linkedin size={20} />
                <span>{t.hero.linkedin}</span>
              </a>
              <a href={common.social.email} className={`flex items-center gap-2 px-5 py-3 rounded-lg border transition-all ${darkMode ? 'border-slate-700 hover:border-emerald-500 text-slate-300' : 'border-gray-200 hover:border-emerald-500 text-gray-700'}`}>
                <FileText size={20} />
                <span>{t.hero.cta}</span>
              </a>
            </div>
          </div>

          <div className="relative hidden md:flex items-center justify-center h-full">
             <div className={`relative w-80 h-80 rounded-2xl rotate-3 border-4 ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} flex items-center justify-center shadow-2xl`}>
                <div className={`absolute inset-0 bg-grid-slate-700/20 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]`}></div>
                <div className="space-y-4 text-center z-10 p-6">
                  <div className="flex justify-center mb-4">
                     <Brain size={64} className="text-emerald-500" />
                  </div>
                  <div className="font-mono text-sm opacity-70">
                    &gt; model.fit(X_train, y_train)<br/>
                    &gt; Epoch 1/100...<br/>
                    &gt; Accuracy: 96%
                  </div>
                </div>
             </div>
             <div className={`absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl -rotate-6 border-4 z-0 ${darkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-gray-100 border-gray-200'}`}></div>
          </div>
        </div>
        
        <div className="flex justify-center mt-20 animate-bounce">
          <ChevronDown size={24} className="text-slate-500" />
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className={`py-20 ${darkMode ? 'bg-slate-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.skills.title}</h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              {t.skills.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.skills.categories.map((skill, index) => (
              <div key={index} className={`p-8 rounded-2xl border transition-all hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-slate-900 border-slate-700 hover:border-emerald-500/50' : 'bg-white border-gray-200 shadow-sm hover:border-emerald-500/50'}`}>
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
                  {common.skillIcons[index]}
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className={`text-sm px-3 py-1.5 rounded-full font-medium ${darkMode ? 'bg-slate-800 text-slate-300 border border-slate-700' : 'bg-gray-100 text-gray-700 border border-gray-200'}`}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold mb-4">{t.projects.title}</h2>
              <p className={`max-w-xl ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                {t.projects.subtitle}
              </p>
            </div>
            <a href={common.social.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-medium group">
              {t.projects.viewGithub} <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.projects.items.map((project, index) => (
              <div key={index} className={`group rounded-2xl p-8 border transition-all duration-300 ${darkMode ? 'bg-slate-800/30 border-slate-700 hover:bg-slate-800 hover:border-emerald-500/50' : 'bg-white border-gray-200 hover:shadow-lg hover:border-emerald-500/50'}`}>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-lg ${darkMode ? 'bg-slate-900 text-emerald-400' : 'bg-emerald-50 text-emerald-600'}`}>
                    {project.icon}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${darkMode ? 'bg-slate-700 text-slate-300' : 'bg-gray-100 text-gray-600'}`}>
                    {project.role}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-emerald-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className={`mb-6 leading-relaxed ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                  {project.desc}
                </p>
                
                <div className="pt-6 border-t border-dashed border-gray-700/50">
                   <div className="flex flex-wrap gap-3">
                    {project.tech.map((tag, i) => (
                      <span key={i} className={`text-xs font-mono px-2 py-1 rounded ${darkMode ? 'text-emerald-400 bg-emerald-500/10' : 'text-emerald-700 bg-emerald-100'}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className={`py-20 ${darkMode ? 'bg-slate-800/30' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">{t.certs.title}</h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              {t.certs.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.certs.items.map((cert, index) => (
              <div key={index} className={`flex flex-col p-6 rounded-xl border transition-all hover:scale-105 ${darkMode ? 'bg-slate-900 border-slate-700 hover:border-emerald-500/50' : 'bg-white border-gray-200 shadow-sm hover:border-emerald-500/50'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="text-emerald-500" size={28} />
                    {/* Badge En cours si nécessaire */}
                    {cert.status === 'ongoing' && (
                       <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700'}`}>
                         {t.certs.inProgress}
                       </span>
                    )}
                  </div>
                  <span className={`text-xs font-mono px-2 py-1 rounded ${darkMode ? 'bg-slate-800 text-slate-400' : 'bg-gray-100 text-gray-500'}`}>
                    {cert.date}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-1 leading-tight">{cert.title}</h3>
                <div className={`text-sm font-medium mb-3 ${darkMode ? 'text-emerald-400' : 'text-emerald-700'}`}>
                  {cert.issuer}
                </div>
                <p className={`text-sm leading-relaxed mb-6 flex-grow ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                  {cert.desc}
                </p>
                
                {/* Bouton Voir le certificat (Désactivé si en cours) */}
                <button 
                  onClick={() => cert.file && setSelectedCert(cert)}
                  disabled={!cert.file}
                  className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors 
                    ${!cert.file ? 'opacity-50 cursor-not-allowed text-gray-500' : 'cursor-pointer'} 
                    ${darkMode ? (cert.file ? 'text-emerald-400 hover:text-emerald-300' : '') : (cert.file ? 'text-emerald-600 hover:text-emerald-800' : '')}
                  `}
                >
                  {cert.file ? <Eye size={14} /> : <Loader size={14} className="animate-spin" />}
                  {cert.file ? t.certs.viewCert : t.certs.inProgress}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <section id="contact" className={`py-24 px-6 text-center ${darkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-gray-50 border-t border-gray-200'}`}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-block p-4 rounded-full bg-emerald-500/10 text-emerald-500 mb-8">
            <Mail size={32} />
          </div>
          <h2 className="text-4xl font-bold mb-6">{t.contact.title}</h2>
          <p className={`text-lg mb-10 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            {t.contact.desc.split('**').map((part, i) => 
              i % 2 === 1 ? <strong key={i} className="text-emerald-500 font-semibold">{part}</strong> : part
            )}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={common.social.email} className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-emerald-600/20">
              {t.contact.emailBtn}
            </a>
            <a href={common.social.linkedin} target="_blank" rel="noreferrer" className={`inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full font-bold border transition-all ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
              <Linkedin size={20} />
              {t.contact.linkedinBtn}
            </a>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-800/50 text-sm text-slate-500">
            {t.contact.copyright}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
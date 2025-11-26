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
  Search
} from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);

  // Données extraites de votre CV
  const profile = {
    name: "Saadia AKERKOUCH",
    title: "Junior AI & Data Science Engineer",
    bio: "Élève ingénieure en Data Science & IoT à l'ENSIAS. Passionnée par l'IA générative, les systèmes intelligents et le MLOps. Je recherche un stage de fin d'études (4-6 mois) à partir de février 2026 pour contribuer à des projets innovants.",
    location: "Rabat, Maroc",
    email: "mailto:saadiaakerkouch2003@gmail.com",
    social: {
      github: "https://github.com/Saadia-Akerkouch",
      linkedin: "https://www.linkedin.com/in/saadia-akerkouch", // Lien standard déduit
    },
    skills: [
      { 
        name: "IA & Data Science", 
        icon: <Brain size={20} />, 
        items: ["TensorFlow", "PyTorch", "Scikit-learn", "Transformers", "LLMs (Llama3, BERT)", "LangChain", "RAG"] 
      },
      { 
        name: "DevOps & Cloud", 
        icon: <Container size={20} />, 
        items: ["Docker", "Kubernetes", "Jenkins", "MLflow", "GitHub Actions", "SonarQube"] 
      },
      { 
        name: "Backend & Data", 
        icon: <Database size={20} />, 
        items: ["Python", "Java", "Flask", "FastAPI", "Neo4j (Graph DB)", "SQL", "NoSQL", "Hadoop/Spark"] 
      }
    ],
    projects: [
      {
        title: "Intelligent Recruitment Platform (LLMs)",
        role: "NLP Intern @ 3D Smart Factory",
        desc: "Développement Full-stack d'une application web intelligente automatisant le workflow de recrutement. Génération de tests personnalisés via LLM.",
        tech: ["Flask", "LlamaIndex", "Groq Cloud (LLAMA3)", "LlamaParse"],
        icon: <User size={24} />
      },
      {
        title: "ERP Platform & CV Classification",
        role: "AI & Data Eng. Intern @ INTELLCAP",
        desc: "Conception d'une architecture microservices pour un ERP. Développement d'un microservice de classification de CV utilisant un modèle BERT fine-tuné (96% précision) et déployé sur Kubernetes.",
        tech: ["BERT", "Kubernetes", "Microservices", "Docker", "Agile"],
        icon: <Cpu size={24} />
      },
      {
        title: "IT Scientific Paper Exploration (RAG)",
        role: "Projet Académique",
        desc: "Plateforme d'exploration intelligente d'articles scientifiques utilisant des Knowledge Graphs et Graph RAG. Chatbot pour résumer et connecter les insights clés.",
        tech: ["Neo4j", "Graph RAG", "SpaCy", "NLTK", "LLM"],
        icon: <Search size={24} />
      },
      {
        title: "MLOps Pipeline End-to-End",
        role: "Projet Académique",
        desc: "Mise en place d'un pipeline complet : entraînement, déploiement et monitoring. Versioning des données et modèles, et déploiement scalable.",
        tech: ["MLflow", "FastAPI", "Docker", "GitHub Actions", "SonarQube"],
        icon: <Terminal size={24} />
      }
    ]
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-900 text-slate-100' : 'bg-gray-50 text-gray-900'} font-sans`}>
      
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${darkMode ? 'bg-slate-900/90 border-b border-slate-800' : 'bg-white/90 border-b border-gray-200'} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tighter">S. Akerkouch<span className="text-emerald-500">.</span></span>
          <div className="flex items-center gap-6">
            <a href="#about" className="hidden md:block hover:text-emerald-500 transition-colors text-sm font-medium">Compétences</a>
            <a href="#projects" className="hidden md:block hover:text-emerald-500 transition-colors text-sm font-medium">Projets</a>
            <a href="#contact" className="hover:text-emerald-500 transition-colors text-sm font-medium">Contact</a>
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200/20 transition-colors">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium border ${darkMode ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' : 'bg-emerald-100 text-emerald-700 border-emerald-200'}`}>
              Recherche stage fin d'études (Fév 2026)
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Ingénieure <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                AI & Data Science
              </span>
            </h1>
            <p className={`text-lg max-w-lg leading-relaxed ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              {profile.bio}
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href={profile.social.github} target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 shadow-sm'}`}>
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className={`flex items-center gap-2 px-5 py-3 rounded-lg transition-all ${darkMode ? 'bg-[#0077b5] hover:bg-[#006396] text-white' : 'bg-[#0077b5] hover:bg-[#006396] text-white shadow-sm'}`}>
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a href={profile.email} className={`flex items-center gap-2 px-5 py-3 rounded-lg border transition-all ${darkMode ? 'border-slate-700 hover:border-emerald-500 text-slate-300' : 'border-gray-200 hover:border-emerald-500 text-gray-700'}`}>
                <FileText size={20} />
                <span>Me contacter</span>
              </a>
            </div>
          </div>

          {/* Abstract Visualization of "Data/AI" */}
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
            <h2 className="text-3xl font-bold mb-4">Arsenal Technique</h2>
            <p className={`max-w-2xl mx-auto ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Une combinaison solide de Data Science avancée, d'ingénierie logicielle et de pratiques MLOps modernes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {profile.skills.map((skill, index) => (
              <div key={index} className={`p-8 rounded-2xl border transition-all hover:-translate-y-2 hover:shadow-xl ${darkMode ? 'bg-slate-900 border-slate-700 hover:border-emerald-500/50' : 'bg-white border-gray-200 shadow-sm hover:border-emerald-500/50'}`}>
                <div className="w-14 h-14 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
                  {skill.icon}
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
              <h2 className="text-4xl font-bold mb-4">Projets Sélectionnés</h2>
              <p className={`max-w-xl ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                Expériences professionnelles et projets académiques démontrant l'application de l'IA à des problèmes réels.
              </p>
            </div>
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-emerald-500 hover:text-emerald-400 font-medium group">
              Voir tout sur GitHub <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {profile.projects.map((project, index) => (
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

      {/* CTA / Footer */}
      <section id="contact" className={`py-24 px-6 text-center ${darkMode ? 'bg-slate-900 border-t border-slate-800' : 'bg-gray-50 border-t border-gray-200'}`}>
        <div className="max-w-3xl mx-auto">
          <div className="inline-block p-4 rounded-full bg-emerald-500/10 text-emerald-500 mb-8">
            <Mail size={32} />
          </div>
          <h2 className="text-4xl font-bold mb-6">Prête à collaborer</h2>
          <p className={`text-lg mb-10 ${darkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Je suis à la recherche d'un <strong>stage de fin d'études de 4 à 6 mois</strong> à partir de février 2026.
            Si vous cherchez une ingénieure passionnée par l'IA et le Data Engineering, discutons-en !
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={profile.email} className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold transition-all hover:scale-105 shadow-lg shadow-emerald-600/20">
              Envoyer un email
            </a>
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className={`inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full font-bold border transition-all ${darkMode ? 'border-slate-700 hover:bg-slate-800' : 'bg-white border-gray-200 hover:bg-gray-50'}`}>
              <Linkedin size={20} />
              LinkedIn
            </a>
          </div>
          
          <div className="mt-16 pt-8 border-t border-slate-800/50 text-sm text-slate-500">
            © {new Date().getFullYear()} Saadia AKERKOUCH. Développé avec React & Tailwind CSS.
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
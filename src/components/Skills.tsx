import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, BarChart, Settings, Users, Terminal, Cpu } from 'lucide-react';

const services = [
  {
    title: 'Product Management',
    description: 'Memimpin siklus pengembangan produk end-to-end, merumuskan product roadmap, serta memandu tim lintas disiplin untuk menghasilkan produk berdampak tinggi.',
    icon: <Briefcase className="w-7 h-7 text-[#0A192F]" />,
    deliverables: ['Product Roadmap', 'User Stories & PRD', 'Sprint Leadership']
  },
  {
    title: 'Business Analysis',
    description: 'Menjembatani visi bisnis dan implementasi teknis, memetakan proses bisnis, menyusun FSD/BRD, serta mengeliminasi hambatan operasional.',
    icon: <BarChart className="w-7 h-7 text-[#0A192F]" />,
    deliverables: ['BRD & FSD Specs', 'Gap Analysis', 'Process Re-engineering']
  },
  {
    title: 'ERP Implementation',
    description: 'Spesialisasi implementasi modul Odoo ERP, integrasi sistem SDM/HRIS dan operasional, serta kustomisasi alur kerja perusahaan.',
    icon: <Settings className="w-7 h-7 text-[#0A192F]" />,
    deliverables: ['Odoo HRIS & CRM', 'System Integration', 'User Training & Rollout']
  },
  {
    title: 'Project Management',
    description: 'Mengelola ruang lingkup, linimasa, mitigasi risiko, alokasi anggaran, dan menjamin kepuasan stakeholder melalui metodologi Scrum/Agile.',
    icon: <Users className="w-7 h-7 text-[#0A192F]" />,
    deliverables: ['Risk Mitigation', 'Agile/Scrum Velocity', 'Stakeholder Communication']
  }
];

interface ToolItem {
  name: string;
  role: string;
  category: 'code' | 'database' | 'management';
  img: string;
}

const tools: ToolItem[] = [
  // 1. Programming & Web (Requested)
  { 
    name: 'React', 
    role: 'Frontend Framework', 
    category: 'code',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' 
  },
  { 
    name: 'TypeScript', 
    role: 'Type-Safe Architecture', 
    category: 'code',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' 
  },
  { 
    name: 'PHP', 
    role: 'Backend Engineering', 
    category: 'code',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' 
  },
  { 
    name: 'C++', 
    role: 'IoT & Systems Core', 
    category: 'code',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' 
  },
  { 
    name: 'HTML5', 
    role: 'Semantic Structure', 
    category: 'code',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' 
  },
  { 
    name: 'CSS3', 
    role: 'Responsive Styling', 
    category: 'code',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' 
  },
  { 
    name: 'Python', 
    role: 'Data & Automation', 
    category: 'code',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' 
  },

  // 2. Database, DevOps & Testing (Requested)
  { 
    name: 'PostgreSQL', 
    role: 'Relational Database', 
    category: 'database',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' 
  },
  { 
    name: 'Docker', 
    role: 'Containerization', 
    category: 'database',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' 
  },
  { 
    name: 'Postman', 
    role: 'API Testing & Contracts', 
    category: 'database',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' 
  },
  { 
    name: 'Git', 
    role: 'Version Control', 
    category: 'database',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' 
  },

  // 3. Enterprise & Product Management
  { 
    name: 'Odoo ERP', 
    role: 'Enterprise Planning', 
    category: 'management',
    img: '/logos/odoo.svg' 
  },
  { 
    name: 'Jira', 
    role: 'Agile & Sprint Tracking', 
    category: 'management',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' 
  },
  { 
    name: 'Trello', 
    role: 'Kanban Workflow', 
    category: 'management',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg' 
  },
  { 
    name: 'Figma', 
    role: 'Wireframing & UI Specs', 
    category: 'management',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' 
  },
  { 
    name: 'Slack', 
    role: 'Team Communication', 
    category: 'management',
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg' 
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'code' | 'database' | 'management'>('all');

  const filteredTools = activeCategory === 'all' 
    ? tools 
    : tools.filter((t) => t.category === activeCategory);
  return (
    <section id="skills" className="py-24 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 sm:mb-24">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1F5F9] border border-[#0A192F]/15 mb-3 shadow-xs">
              <Terminal size={13} className="text-[#0A192F]" />
              <span className="text-xs font-mono font-bold tracking-wider text-[#0A192F] uppercase">
                CAPABILITIES_MATRIX // CORE_COMPETENCIES
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0A192F] tracking-tight">
              Keahlian Utama
            </h2>

            <p className="mt-4 text-[#334155] text-base sm:text-lg max-w-2xl mx-auto [text-wrap:balance]">
              Menyediakan solusi komprehensif untuk mendorong pertumbuhan bisnis dan efisiensi operasional melalui arsitektur produk dan metodologi teknologi modern.
            </p>
          </motion.div>
        </div>
        
        {/* Services Grid with Smooth Scale Up Hover Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="bg-[#F1F5F9] p-7 sm:p-8 rounded-2xl border border-[#0A192F]/15 shadow-xs transition-all duration-300 ease-out transform will-change-transform hover:scale-[1.03] hover:-translate-y-2 hover:shadow-xl hover:border-[#0A192F]/35 hover:bg-slate-200/70 group flex flex-col justify-between relative overflow-hidden"
            >
              {/* Tech Corner Accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-[#0A192F]/5 group-hover:bg-[#0A192F]/15 transition-colors rounded-bl-2xl flex items-center justify-center font-mono text-[9px] font-bold text-[#0A192F]/50">
                0{index + 1}
              </div>

              <div>
                <div className="mb-6 p-3.5 bg-white rounded-xl inline-block group-hover:scale-110 group-hover:bg-[#0A192F] group-hover:text-white transition-all duration-300 shadow-xs text-[#0A192F]">
                  {React.cloneElement(service.icon, {
                    className: 'w-7 h-7 transition-colors duration-300 group-hover:text-white'
                  })}
                </div>

                <h3 className="text-xl font-extrabold text-[#0A192F] mb-3 group-hover:text-[#1E3E62] transition-colors">
                  {service.title}
                </h3>

                <p className="text-[#334155] text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Deliverables pill-free tags */}
              <div className="pt-4 border-t border-[#0A192F]/15 space-y-1.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#0A192F]/70 block mb-1">
                  DELIVERABLES:
                </span>
                {service.deliverables.map((item) => (
                  <div key={item} className="text-xs text-[#334155] flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tools & Technologies */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F8FAFC] rounded-3xl p-8 sm:p-12 border border-[#0A192F]/15 shadow-xs">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-widest text-[#0A192F]/80 mb-2">
              <Cpu size={14} />
              <span>STACK_ENVIRONMENT // DEV_TOOLING</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A192F]">
              Tools &amp; Teknologi yang Digunakan
            </h3>
            <p className="text-[#334155] text-sm mt-2 max-w-lg mx-auto">
              Perangkat lunak andalan untuk merancang alur kerja teknis, mengelola sprint pengembang, dan mengoptimalkan sistem.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {[
                { id: 'all', label: 'Semua Teknologi' },
                { id: 'code', label: 'Frontend & Code' },
                { id: 'database', label: 'Database & DevOps' },
                { id: 'management', label: 'Product & Tools' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all duration-200 cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-gradient-to-r from-[#0A192F] to-[#1E3E62] text-white shadow-sm'
                      : 'bg-white text-[#334155] border border-[#0A192F]/15 hover:border-[#0A192F]/30 hover:bg-slate-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6">
            {filteredTools.map((tool) => (
              <div 
                key={tool.name} 
                className="bg-white rounded-xl p-5 border border-[#0A192F]/15 flex flex-col items-center justify-center text-center gap-3 transition-all duration-300 ease-out transform will-change-transform hover:scale-105 hover:-translate-y-1.5 hover:shadow-lg hover:border-[#0A192F]/40 group cursor-default"
              >
                <div className="w-12 h-12 flex items-center justify-center transition-transform duration-300 group-hover:scale-120">
                  <img 
                    src={tool.img} 
                    alt={tool.name} 
                    className="w-10 h-10 object-contain drop-shadow-xs" 
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#0A192F] group-hover:text-[#1E3E62] transition-colors">
                    {tool.name}
                  </h4>
                  <span className="text-[11px] font-mono text-[#334155]/75 font-medium block mt-0.5">
                    {tool.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

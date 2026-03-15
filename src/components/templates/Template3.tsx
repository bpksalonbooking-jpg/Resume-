import React from 'react';
import { TemplateProps } from '../../types';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Template3({ data }: TemplateProps) {
  const { personalInfo, summary, experience, education, skills, projects, certifications, languages, hobbies, themeColor } = data;

  return (
    <div className="w-full h-full bg-[#121212] text-gray-300 font-sans p-8 flex flex-col gap-6" style={{ '--theme-color': themeColor } as React.CSSProperties}>
      {/* Header */}
      <div className="text-center pb-6 border-b border-gray-800">
        <h1 className="text-4xl font-black tracking-tighter text-white mb-2">
          {personalInfo.firstName} <span style={{ color: 'var(--theme-color)' }}>{personalInfo.lastName}</span>
        </h1>
        <h2 className="text-xl font-medium text-gray-400 tracking-widest uppercase">{personalInfo.jobTitle}</h2>
        
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-sm text-gray-400">
          {personalInfo.email && <div className="flex items-center gap-1"><Mail size={14} /> {personalInfo.email}</div>}
          {personalInfo.phone && <div className="flex items-center gap-1"><Phone size={14} /> {personalInfo.phone}</div>}
          {personalInfo.address && <div className="flex items-center gap-1"><MapPin size={14} /> {personalInfo.address}</div>}
          {personalInfo.linkedin && <div className="flex items-center gap-1"><Linkedin size={14} /> {personalInfo.linkedin}</div>}
          {personalInfo.github && <div className="flex items-center gap-1"><Github size={14} /> {personalInfo.github}</div>}
        </div>
      </div>

      {summary && (
        <section className="text-center max-w-3xl mx-auto">
          <p className="text-sm leading-relaxed text-gray-400">{summary}</p>
        </section>
      )}

      <div className="grid grid-cols-2 gap-8 mt-4">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          {experience.length > 0 && (
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2 text-white">
                <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Experience
              </h3>
              <div className="flex flex-col gap-6">
                {experience.map((exp) => (
                  <div key={exp.id} className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                    <h4 className="font-bold text-white text-lg">{exp.role}</h4>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium" style={{ color: 'var(--theme-color)' }}>{exp.company}</span>
                      <span className="text-xs text-gray-500">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <p className="text-sm text-gray-400">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2 text-white">
                <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Projects
              </h3>
              <div className="flex flex-col gap-4">
                {projects.map((proj) => (
                  <div key={proj.id} className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                    <h4 className="font-bold text-white">{proj.title}</h4>
                    <div className="text-xs font-medium text-gray-500 mb-2">{proj.techStack}</div>
                    <p className="text-sm text-gray-400">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8">
          {education.length > 0 && (
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2 text-white">
                <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                    <h4 className="font-bold text-white">{edu.degree}</h4>
                    <div className="text-sm" style={{ color: 'var(--theme-color)' }}>{edu.university}</div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>{edu.year}</span>
                      <span>{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2 text-white">
                <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill.id} className="px-3 py-1 text-xs font-medium rounded-full border border-gray-700 bg-[#1a1a1a] text-gray-300">
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {certifications.length > 0 && (
            <section>
              <h3 className="text-lg font-bold uppercase tracking-widest mb-4 flex items-center gap-2 text-white">
                <span className="w-4 h-4 rounded-sm" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Certifications
              </h3>
              <div className="flex flex-col gap-3">
                {certifications.map((cert) => (
                  <div key={cert.id} className="bg-[#1a1a1a] p-3 rounded-lg border border-gray-800">
                    <h4 className="font-bold text-white text-sm">{cert.name}</h4>
                    <div className="text-xs text-gray-500">{cert.issuer} - {cert.year}</div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

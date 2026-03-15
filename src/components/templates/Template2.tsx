import React from 'react';
import { TemplateProps } from '../../types';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Template2({ data }: TemplateProps) {
  const { personalInfo, summary, experience, education, skills, projects, certifications, languages, hobbies, themeColor } = data;

  return (
    <div className="w-full h-full bg-gray-50 text-gray-800 font-serif flex" style={{ '--theme-color': themeColor } as React.CSSProperties}>
      {/* Sidebar */}
      <div className="w-1/3 text-white p-8 flex flex-col gap-8" style={{ backgroundColor: 'var(--theme-color)' }}>
        <div className="flex flex-col items-center text-center gap-4">
          {personalInfo.photoUrl && (
            <img src={personalInfo.photoUrl} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-lg" />
          )}
          <div>
            <h1 className="text-3xl font-bold tracking-wide">{personalInfo.firstName} <br/> {personalInfo.lastName}</h1>
            <h2 className="text-lg font-medium text-white/80 mt-2">{personalInfo.jobTitle}</h2>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-sm text-white/90">
          {personalInfo.email && <div className="flex items-center gap-3"><Mail size={16} /> <span className="break-all">{personalInfo.email}</span></div>}
          {personalInfo.phone && <div className="flex items-center gap-3"><Phone size={16} /> <span>{personalInfo.phone}</span></div>}
          {personalInfo.address && <div className="flex items-center gap-3"><MapPin size={16} /> <span>{personalInfo.address}</span></div>}
          {personalInfo.linkedin && <div className="flex items-center gap-3"><Linkedin size={16} /> <span className="break-all">{personalInfo.linkedin}</span></div>}
          {personalInfo.github && <div className="flex items-center gap-3"><Github size={16} /> <span className="break-all">{personalInfo.github}</span></div>}
        </div>

        {skills.length > 0 && (
          <section>
            <h3 className="text-xl font-bold border-b border-white/30 pb-2 mb-4 uppercase tracking-widest">Skills</h3>
            <div className="flex flex-col gap-2">
              {skills.map((skill) => (
                <div key={skill.id} className="text-sm font-medium">{skill.name}</div>
              ))}
            </div>
          </section>
        )}

        {languages.length > 0 && (
          <section>
            <h3 className="text-xl font-bold border-b border-white/30 pb-2 mb-4 uppercase tracking-widest">Languages</h3>
            <div className="flex flex-col gap-2">
              {languages.map((lang) => (
                <div key={lang.id} className="flex justify-between text-sm">
                  <span>{lang.name}</span>
                  <span className="text-white/70">{lang.proficiency}</span>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Main Content */}
      <div className="w-2/3 p-8 flex flex-col gap-8 bg-white">
        {summary && (
          <section>
            <h3 className="text-2xl font-bold mb-3 uppercase tracking-widest" style={{ color: 'var(--theme-color)' }}>Profile</h3>
            <p className="text-sm leading-relaxed text-gray-600">{summary}</p>
          </section>
        )}

        {experience.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest" style={{ color: 'var(--theme-color)' }}>Experience</h3>
            <div className="flex flex-col gap-6">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-4 border-l-2" style={{ borderColor: 'var(--theme-color)' }}>
                  <div className="absolute w-3 h-3 rounded-full -left-[7px] top-1.5" style={{ backgroundColor: 'var(--theme-color)' }}></div>
                  <h4 className="font-bold text-lg text-gray-800">{exp.role}</h4>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-600">{exp.company}</span>
                    <span className="text-xs text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-sm text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest" style={{ color: 'var(--theme-color)' }}>Education</h3>
            <div className="flex flex-col gap-4">
              {education.map((edu) => (
                <div key={edu.id}>
                  <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{edu.university}</span>
                    <span className="text-xs text-gray-500">{edu.year} | {edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {projects.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-widest" style={{ color: 'var(--theme-color)' }}>Projects</h3>
            <div className="flex flex-col gap-4">
              {projects.map((proj) => (
                <div key={proj.id}>
                  <h4 className="font-bold text-gray-800">{proj.title}</h4>
                  <div className="text-xs font-medium text-gray-500 mb-1">{proj.techStack}</div>
                  <p className="text-sm text-gray-600">{proj.description}</p>
                  {proj.link && <div className="text-xs mt-1" style={{ color: 'var(--theme-color)' }}>{proj.link}</div>}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

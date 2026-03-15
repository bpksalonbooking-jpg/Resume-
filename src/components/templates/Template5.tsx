import React from 'react';
import { TemplateProps } from '../../types';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Template5({ data }: TemplateProps) {
  const { personalInfo, summary, experience, education, skills, projects, certifications, languages, hobbies, themeColor } = data;

  return (
    <div className="w-full h-full bg-[#fdfbfb] text-gray-800 font-sans p-8 flex flex-col gap-6" style={{ '--theme-color': themeColor } as React.CSSProperties}>
      {/* Header */}
      <div className="flex flex-col items-center text-center pb-6 border-b-2" style={{ borderColor: 'var(--theme-color)' }}>
        {personalInfo.photoUrl && (
          <img src={personalInfo.photoUrl} alt="Profile" className="w-28 h-28 rounded-full object-cover mb-4 shadow-md" />
        )}
        <h1 className="text-5xl font-light tracking-widest uppercase mb-2" style={{ color: 'var(--theme-color)' }}>
          {personalInfo.firstName} <span className="font-bold">{personalInfo.lastName}</span>
        </h1>
        <h2 className="text-xl font-medium text-gray-500 tracking-widest uppercase mb-4">{personalInfo.jobTitle}</h2>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          {personalInfo.email && <div className="flex items-center gap-2"><Mail size={16} style={{ color: 'var(--theme-color)' }} /> {personalInfo.email}</div>}
          {personalInfo.phone && <div className="flex items-center gap-2"><Phone size={16} style={{ color: 'var(--theme-color)' }} /> {personalInfo.phone}</div>}
          {personalInfo.address && <div className="flex items-center gap-2"><MapPin size={16} style={{ color: 'var(--theme-color)' }} /> {personalInfo.address}</div>}
          {personalInfo.linkedin && <div className="flex items-center gap-2"><Linkedin size={16} style={{ color: 'var(--theme-color)' }} /> {personalInfo.linkedin}</div>}
          {personalInfo.github && <div className="flex items-center gap-2"><Github size={16} style={{ color: 'var(--theme-color)' }} /> {personalInfo.github}</div>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">
        {/* Left Column */}
        <div className="col-span-2 flex flex-col gap-8">
          {summary && (
            <section>
              <h3 className="text-2xl font-light uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px]" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Profile
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">{summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <h3 className="text-2xl font-light uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px]" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Experience
              </h3>
              <div className="flex flex-col gap-6">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-lg text-gray-800">{exp.role}</h4>
                      <span className="text-sm font-medium" style={{ color: 'var(--theme-color)' }}>{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <div className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wider">{exp.company}</div>
                    <p className="text-sm text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section>
              <h3 className="text-2xl font-light uppercase tracking-widest mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px]" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Projects
              </h3>
              <div className="flex flex-col gap-6">
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <h4 className="font-bold text-lg text-gray-800 mb-1">{proj.title}</h4>
                    <div className="text-xs font-medium text-gray-500 mb-2 uppercase tracking-wider">{proj.techStack}</div>
                    <p className="text-sm text-gray-600">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="col-span-1 flex flex-col gap-8">
          {education.length > 0 && (
            <section>
              <h3 className="text-2xl font-light uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px]" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="font-bold text-gray-800">{edu.degree}</h4>
                    <div className="text-sm text-gray-500 mt-1">{edu.university}</div>
                    <div className="text-sm font-medium mt-1" style={{ color: 'var(--theme-color)' }}>{edu.year} | {edu.score}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h3 className="text-2xl font-light uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px]" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Skills
              </h3>
              <div className="flex flex-col gap-2">
                {skills.map((skill) => (
                  <div key={skill.id} className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </section>
          )}

          {certifications.length > 0 && (
            <section>
              <h3 className="text-2xl font-light uppercase tracking-widest mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px]" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Certifications
              </h3>
              <div className="flex flex-col gap-3">
                {certifications.map((cert) => (
                  <div key={cert.id}>
                    <h4 className="font-bold text-gray-800 text-sm">{cert.name}</h4>
                    <div className="text-xs text-gray-500 mt-1">{cert.issuer} - {cert.year}</div>
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

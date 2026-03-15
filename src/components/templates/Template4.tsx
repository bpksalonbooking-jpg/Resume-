import React from 'react';
import { TemplateProps } from '../../types';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Template4({ data }: TemplateProps) {
  const { personalInfo, summary, experience, education, skills, projects, certifications, languages, hobbies, themeColor } = data;

  return (
    <div className="w-full h-full bg-white text-gray-800 font-sans flex flex-col" style={{ '--theme-color': themeColor } as React.CSSProperties}>
      {/* Header */}
      <div className="p-8 text-white flex justify-between items-center" style={{ backgroundColor: 'var(--theme-color)' }}>
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{personalInfo.firstName} {personalInfo.lastName}</h1>
          <h2 className="text-xl font-medium opacity-90 mt-1">{personalInfo.jobTitle}</h2>
        </div>
        {personalInfo.photoUrl && (
          <img src={personalInfo.photoUrl} alt="Profile" className="w-24 h-24 rounded-full object-cover border-4 border-white/20" />
        )}
      </div>

      <div className="flex-1 flex p-8 gap-8">
        {/* Left Column */}
        <div className="w-2/3 flex flex-col gap-6">
          {summary && (
            <section>
              <h3 className="text-xl font-bold border-b-2 pb-1 mb-3" style={{ borderColor: 'var(--theme-color)', color: 'var(--theme-color)' }}>Summary</h3>
              <p className="text-sm leading-relaxed text-gray-700">{summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <h3 className="text-xl font-bold border-b-2 pb-1 mb-4" style={{ borderColor: 'var(--theme-color)', color: 'var(--theme-color)' }}>Experience</h3>
              <div className="flex flex-col gap-5">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-lg text-gray-900">{exp.role}</h4>
                      <span className="text-xs font-bold text-gray-500">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <div className="text-sm font-semibold text-gray-700 mb-1">{exp.company}</div>
                    <p className="text-sm text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section>
              <h3 className="text-xl font-bold border-b-2 pb-1 mb-4" style={{ borderColor: 'var(--theme-color)', color: 'var(--theme-color)' }}>Projects</h3>
              <div className="flex flex-col gap-4">
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <h4 className="font-bold text-gray-900">{proj.title}</h4>
                    <div className="text-xs font-medium text-gray-500 mb-1">{proj.techStack}</div>
                    <p className="text-sm text-gray-600">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="w-1/3 flex flex-col gap-6">
          <section>
            <h3 className="text-xl font-bold border-b-2 pb-1 mb-3" style={{ borderColor: 'var(--theme-color)', color: 'var(--theme-color)' }}>Contact</h3>
            <div className="flex flex-col gap-3 text-sm text-gray-700">
              {personalInfo.email && <div className="flex items-center gap-2"><Mail size={16} style={{ color: 'var(--theme-color)' }} /> <span className="break-all">{personalInfo.email}</span></div>}
              {personalInfo.phone && <div className="flex items-center gap-2"><Phone size={16} style={{ color: 'var(--theme-color)' }} /> <span>{personalInfo.phone}</span></div>}
              {personalInfo.address && <div className="flex items-center gap-2"><MapPin size={16} style={{ color: 'var(--theme-color)' }} /> <span>{personalInfo.address}</span></div>}
              {personalInfo.linkedin && <div className="flex items-center gap-2"><Linkedin size={16} style={{ color: 'var(--theme-color)' }} /> <span className="break-all">{personalInfo.linkedin}</span></div>}
              {personalInfo.github && <div className="flex items-center gap-2"><Github size={16} style={{ color: 'var(--theme-color)' }} /> <span className="break-all">{personalInfo.github}</span></div>}
            </div>
          </section>

          {education.length > 0 && (
            <section>
              <h3 className="text-xl font-bold border-b-2 pb-1 mb-3" style={{ borderColor: 'var(--theme-color)', color: 'var(--theme-color)' }}>Education</h3>
              <div className="flex flex-col gap-3">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="font-bold text-gray-900 text-sm">{edu.degree}</h4>
                    <div className="text-sm text-gray-700">{edu.university}</div>
                    <div className="text-xs text-gray-500">{edu.year} | {edu.score}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h3 className="text-xl font-bold border-b-2 pb-1 mb-3" style={{ borderColor: 'var(--theme-color)', color: 'var(--theme-color)' }}>Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill.id} className="px-2 py-1 text-xs font-medium rounded-md bg-gray-100 text-gray-800 border" style={{ borderColor: 'var(--theme-color)' }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {certifications.length > 0 && (
            <section>
              <h3 className="text-xl font-bold border-b-2 pb-1 mb-3" style={{ borderColor: 'var(--theme-color)', color: 'var(--theme-color)' }}>Certifications</h3>
              <div className="flex flex-col gap-2">
                {certifications.map((cert) => (
                  <div key={cert.id}>
                    <h4 className="font-bold text-gray-900 text-sm">{cert.name}</h4>
                    <div className="text-xs text-gray-600">{cert.issuer} - {cert.year}</div>
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

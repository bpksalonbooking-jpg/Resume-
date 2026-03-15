import React from 'react';
import { TemplateProps } from '../../types';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Template1({ data }: TemplateProps) {
  const { personalInfo, summary, experience, education, skills, projects, certifications, languages, hobbies, themeColor } = data;

  return (
    <div className="w-full h-full bg-white text-gray-800 font-sans p-8 flex flex-col gap-6" style={{ '--theme-color': themeColor } as React.CSSProperties}>
      {/* Header */}
      <div className="flex items-center gap-6 border-b-4 pb-6" style={{ borderColor: 'var(--theme-color)' }}>
        {personalInfo.photoUrl && (
          <img src={personalInfo.photoUrl} alt="Profile" className="w-24 h-24 rounded-full object-cover border-2" style={{ borderColor: 'var(--theme-color)' }} />
        )}
        <div className="flex-1">
          <h1 className="text-4xl font-bold uppercase tracking-wider" style={{ color: 'var(--theme-color)' }}>
            {personalInfo.firstName} {personalInfo.lastName}
          </h1>
          <h2 className="text-xl font-medium text-gray-600 mt-1">{personalInfo.jobTitle}</h2>
          
          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
            {personalInfo.email && <div className="flex items-center gap-1"><Mail size={14} /> {personalInfo.email}</div>}
            {personalInfo.phone && <div className="flex items-center gap-1"><Phone size={14} /> {personalInfo.phone}</div>}
            {personalInfo.address && <div className="flex items-center gap-1"><MapPin size={14} /> {personalInfo.address}</div>}
            {personalInfo.linkedin && <div className="flex items-center gap-1"><Linkedin size={14} /> {personalInfo.linkedin}</div>}
            {personalInfo.github && <div className="flex items-center gap-1"><Github size={14} /> {personalInfo.github}</div>}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="col-span-2 flex flex-col gap-6">
          {summary && (
            <section>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-2" style={{ color: 'var(--theme-color)' }}>Profile</h3>
              <p className="text-sm leading-relaxed">{summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--theme-color)' }}>Experience</h3>
              <div className="flex flex-col gap-4">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-gray-800">{exp.role}</h4>
                      <span className="text-xs text-gray-500 font-medium">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <div className="text-sm font-medium text-gray-600 mb-1">{exp.company}</div>
                    <p className="text-sm text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--theme-color)' }}>Projects</h3>
              <div className="flex flex-col gap-4">
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <div className="flex justify-between items-baseline">
                      <h4 className="font-bold text-gray-800">{proj.title}</h4>
                      {proj.link && <span className="text-xs text-blue-500">{proj.link}</span>}
                    </div>
                    <div className="text-xs font-medium text-gray-500 mb-1">{proj.techStack}</div>
                    <p className="text-sm text-gray-600">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="col-span-1 flex flex-col gap-6">
          {education.length > 0 && (
            <section>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--theme-color)' }}>Education</h3>
              <div className="flex flex-col gap-3">
                {education.map((edu) => (
                  <div key={edu.id}>
                    <h4 className="font-bold text-gray-800 text-sm">{edu.degree}</h4>
                    <div className="text-sm text-gray-600">{edu.university}</div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
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
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--theme-color)' }}>Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill.id} className="px-2 py-1 text-xs font-medium rounded text-white" style={{ backgroundColor: 'var(--theme-color)' }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {certifications.length > 0 && (
            <section>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--theme-color)' }}>Certifications</h3>
              <div className="flex flex-col gap-2">
                {certifications.map((cert) => (
                  <div key={cert.id}>
                    <h4 className="font-bold text-gray-800 text-sm">{cert.name}</h4>
                    <div className="text-xs text-gray-600">{cert.issuer} - {cert.year}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {languages.length > 0 && (
            <section>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--theme-color)' }}>Languages</h3>
              <div className="flex flex-col gap-1">
                {languages.map((lang) => (
                  <div key={lang.id} className="flex justify-between text-sm">
                    <span className="font-medium text-gray-800">{lang.name}</span>
                    <span className="text-gray-500">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {hobbies.length > 0 && (
            <section>
              <h3 className="text-lg font-bold uppercase tracking-wider mb-3" style={{ color: 'var(--theme-color)' }}>Interests</h3>
              <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                {hobbies.map((hobby) => (
                  <span key={hobby.id}>{hobby.name}</span>
                )).reduce((prev, curr) => [prev, ', ', curr] as any)}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { TemplateProps } from '../../types';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Template7({ data }: TemplateProps) {
  const { personalInfo, summary, experience, education, skills, projects, certifications, languages, hobbies, themeColor } = data;

  return (
    <div className="w-full h-full bg-white text-black font-serif p-10 flex flex-col gap-6 border-8" style={{ borderColor: themeColor } as React.CSSProperties}>
      {/* Header */}
      <div className="text-center pb-6 border-b-2 border-black">
        <h1 className="text-5xl font-bold uppercase tracking-widest mb-2">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <h2 className="text-xl font-medium uppercase tracking-widest text-gray-600 mb-4">{personalInfo.jobTitle}</h2>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm font-sans">
          {personalInfo.email && <div className="flex items-center gap-1"><Mail size={14} /> {personalInfo.email}</div>}
          {personalInfo.phone && <div className="flex items-center gap-1"><Phone size={14} /> {personalInfo.phone}</div>}
          {personalInfo.address && <div className="flex items-center gap-1"><MapPin size={14} /> {personalInfo.address}</div>}
          {personalInfo.linkedin && <div className="flex items-center gap-1"><Linkedin size={14} /> {personalInfo.linkedin}</div>}
          {personalInfo.github && <div className="flex items-center gap-1"><Github size={14} /> {personalInfo.github}</div>}
        </div>
      </div>

      {summary && (
        <section className="text-center max-w-4xl mx-auto">
          <p className="text-sm leading-relaxed font-sans">{summary}</p>
        </section>
      )}

      <div className="flex flex-col gap-8 mt-4">
        {experience.length > 0 && (
          <section>
            <h3 className="text-2xl font-bold uppercase tracking-widest mb-4 text-center border-b border-black pb-2">Experience</h3>
            <div className="flex flex-col gap-6">
              {experience.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-bold text-lg">{exp.role}</h4>
                    <span className="text-sm font-sans italic">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wider">{exp.company}</div>
                  <p className="text-sm font-sans leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col gap-8">
            {education.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold uppercase tracking-widest mb-4 text-center border-b border-black pb-2">Education</h3>
                <div className="flex flex-col gap-4">
                  {education.map((edu) => (
                    <div key={edu.id}>
                      <h4 className="font-bold text-lg">{edu.degree}</h4>
                      <div className="text-sm text-gray-700 mt-1">{edu.university}</div>
                      <div className="flex justify-between text-sm font-sans italic mt-1">
                        <span>{edu.year}</span>
                        <span>{edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {projects.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold uppercase tracking-widest mb-4 text-center border-b border-black pb-2">Projects</h3>
                <div className="flex flex-col gap-5">
                  {projects.map((proj) => (
                    <div key={proj.id}>
                      <h4 className="font-bold text-lg mb-1">{proj.title}</h4>
                      <div className="text-xs font-sans font-bold text-gray-600 mb-2 uppercase tracking-wider">{proj.techStack}</div>
                      <p className="text-sm font-sans leading-relaxed">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <div className="flex flex-col gap-8">
            {skills.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold uppercase tracking-widest mb-4 text-center border-b border-black pb-2">Skills</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skills.map((skill) => (
                    <span key={skill.id} className="px-3 py-1 text-sm font-sans border border-black">
                      {skill.name}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {certifications.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold uppercase tracking-widest mb-4 text-center border-b border-black pb-2">Certifications</h3>
                <div className="flex flex-col gap-3">
                  {certifications.map((cert) => (
                    <div key={cert.id} className="text-center">
                      <h4 className="font-bold text-lg">{cert.name}</h4>
                      <div className="text-sm font-sans italic mt-1">{cert.issuer} - {cert.year}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {languages.length > 0 && (
              <section>
                <h3 className="text-2xl font-bold uppercase tracking-widest mb-4 text-center border-b border-black pb-2">Languages</h3>
                <div className="flex flex-col gap-2 text-center">
                  {languages.map((lang) => (
                    <div key={lang.id} className="text-sm font-sans">
                      <span className="font-bold">{lang.name}</span> - <span className="italic">{lang.proficiency}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { TemplateProps } from '../../types';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Template6({ data }: TemplateProps) {
  const { personalInfo, summary, experience, education, skills, projects, certifications, languages, hobbies, themeColor } = data;

  return (
    <div className="w-full h-full bg-white text-gray-800 font-sans p-8 flex flex-col gap-6" style={{ '--theme-color': themeColor } as React.CSSProperties}>
      {/* Header */}
      <div className="flex justify-between items-end border-b-4 pb-4" style={{ borderColor: 'var(--theme-color)' }}>
        <div className="flex items-center gap-6">
          {personalInfo.photoUrl && (
            <img src={personalInfo.photoUrl} alt="Profile" className="w-24 h-24 rounded-lg object-cover shadow-sm" />
          )}
          <div>
            <h1 className="text-5xl font-black tracking-tighter text-gray-900 uppercase">
              {personalInfo.firstName} <span style={{ color: 'var(--theme-color)' }}>{personalInfo.lastName}</span>
            </h1>
            <h2 className="text-xl font-bold text-gray-500 uppercase tracking-widest mt-1">{personalInfo.jobTitle}</h2>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1 text-xs font-medium text-gray-600">
          {personalInfo.email && <div className="flex items-center gap-2">{personalInfo.email} <Mail size={14} style={{ color: 'var(--theme-color)' }} /></div>}
          {personalInfo.phone && <div className="flex items-center gap-2">{personalInfo.phone} <Phone size={14} style={{ color: 'var(--theme-color)' }} /></div>}
          {personalInfo.address && <div className="flex items-center gap-2">{personalInfo.address} <MapPin size={14} style={{ color: 'var(--theme-color)' }} /></div>}
          {personalInfo.linkedin && <div className="flex items-center gap-2">{personalInfo.linkedin} <Linkedin size={14} style={{ color: 'var(--theme-color)' }} /></div>}
          {personalInfo.github && <div className="flex items-center gap-2">{personalInfo.github} <Github size={14} style={{ color: 'var(--theme-color)' }} /></div>}
        </div>
      </div>

      <div className="flex gap-8 mt-2">
        {/* Left Column */}
        <div className="w-2/3 flex flex-col gap-6">
          {summary && (
            <section className="bg-gray-50 p-4 rounded-lg border-l-4" style={{ borderColor: 'var(--theme-color)' }}>
              <p className="text-sm leading-relaxed text-gray-700 italic">"{summary}"</p>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <h3 className="text-xl font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-6" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Work Experience
              </h3>
              <div className="flex flex-col gap-6">
                {experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-lg text-gray-900">{exp.role}</h4>
                      <span className="text-xs font-bold px-2 py-1 rounded text-white" style={{ backgroundColor: 'var(--theme-color)' }}>{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <div className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">{exp.company}</div>
                    <p className="text-sm text-gray-600">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section>
              <h3 className="text-xl font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-6" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Projects
              </h3>
              <div className="flex flex-col gap-5">
                {projects.map((proj) => (
                  <div key={proj.id}>
                    <h4 className="font-bold text-lg text-gray-900 mb-1">{proj.title}</h4>
                    <div className="text-xs font-bold text-gray-500 mb-2 uppercase tracking-wider">{proj.techStack}</div>
                    <p className="text-sm text-gray-600">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Column */}
        <div className="w-1/3 flex flex-col gap-6">
          {education.length > 0 && (
            <section>
              <h3 className="text-xl font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-6" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Education
              </h3>
              <div className="flex flex-col gap-4">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-bold text-gray-900">{edu.degree}</h4>
                    <div className="text-sm text-gray-600 mt-1">{edu.university}</div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs font-bold text-gray-500">{edu.year}</span>
                      <span className="text-xs font-bold" style={{ color: 'var(--theme-color)' }}>{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h3 className="text-xl font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-6" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill.id} className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded bg-gray-100 text-gray-800 border-b-2" style={{ borderColor: 'var(--theme-color)' }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {certifications.length > 0 && (
            <section>
              <h3 className="text-xl font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="w-2 h-6" style={{ backgroundColor: 'var(--theme-color)' }}></span>
                Certifications
              </h3>
              <div className="flex flex-col gap-3">
                {certifications.map((cert) => (
                  <div key={cert.id} className="bg-gray-50 p-3 rounded-lg border-l-2" style={{ borderColor: 'var(--theme-color)' }}>
                    <h4 className="font-bold text-gray-900 text-sm">{cert.name}</h4>
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

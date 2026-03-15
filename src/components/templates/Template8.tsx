import React from 'react';
import { TemplateProps } from '../../types';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export default function Template8({ data }: TemplateProps) {
  const { personalInfo, summary, experience, education, skills, projects, certifications, languages, hobbies, themeColor } = data;

  return (
    <div className="w-full h-full bg-white text-gray-800 font-sans flex flex-col" style={{ '--theme-color': themeColor } as React.CSSProperties}>
      {/* Header */}
      <div className="p-10 text-white flex flex-col items-center text-center relative overflow-hidden" style={{ background: themeColor }}>
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          {personalInfo.photoUrl && (
            <img src={personalInfo.photoUrl} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl mb-4" />
          )}
          <h1 className="text-5xl font-black tracking-tight mb-2 drop-shadow-md">{personalInfo.firstName} {personalInfo.lastName}</h1>
          <h2 className="text-2xl font-medium opacity-90 tracking-wide drop-shadow-sm">{personalInfo.jobTitle}</h2>
          
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm font-medium bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm">
            {personalInfo.email && <div className="flex items-center gap-2"><Mail size={16} /> {personalInfo.email}</div>}
            {personalInfo.phone && <div className="flex items-center gap-2"><Phone size={16} /> {personalInfo.phone}</div>}
            {personalInfo.address && <div className="flex items-center gap-2"><MapPin size={16} /> {personalInfo.address}</div>}
            {personalInfo.linkedin && <div className="flex items-center gap-2"><Linkedin size={16} /> {personalInfo.linkedin}</div>}
            {personalInfo.github && <div className="flex items-center gap-2"><Github size={16} /> {personalInfo.github}</div>}
          </div>
        </div>
      </div>

      <div className="flex-1 p-10 grid grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="col-span-2 flex flex-col gap-8">
          {summary && (
            <section>
              <h3 className="text-2xl font-black uppercase tracking-widest mb-4 text-transparent bg-clip-text" style={{ backgroundImage: themeColor }}>Profile</h3>
              <p className="text-base leading-relaxed text-gray-700 font-medium">{summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section>
              <h3 className="text-2xl font-black uppercase tracking-widest mb-6 text-transparent bg-clip-text" style={{ backgroundImage: themeColor }}>Experience</h3>
              <div className="flex flex-col gap-8">
                {experience.map((exp) => (
                  <div key={exp.id} className="relative pl-6 border-l-4" style={{ borderImage: `${themeColor} 1` }}>
                    <div className="absolute w-4 h-4 rounded-full -left-[10px] top-1" style={{ background: themeColor }}></div>
                    <div className="flex justify-between items-baseline mb-1">
                      <h4 className="font-bold text-xl text-gray-900">{exp.role}</h4>
                      <span className="text-sm font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{exp.startDate} - {exp.endDate}</span>
                    </div>
                    <div className="text-base font-bold text-gray-700 mb-2">{exp.company}</div>
                    <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section>
              <h3 className="text-2xl font-black uppercase tracking-widest mb-6 text-transparent bg-clip-text" style={{ backgroundImage: themeColor }}>Projects</h3>
              <div className="grid grid-cols-2 gap-6">
                {projects.map((proj) => (
                  <div key={proj.id} className="bg-gray-50 p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-lg text-gray-900 mb-1">{proj.title}</h4>
                    <div className="text-xs font-bold text-white px-2 py-1 rounded inline-block mb-3" style={{ background: themeColor }}>{proj.techStack}</div>
                    <p className="text-sm text-gray-600 mb-3">{proj.description}</p>
                    {proj.link && <div className="text-xs font-bold text-blue-600 break-all">{proj.link}</div>}
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
              <h3 className="text-2xl font-black uppercase tracking-widest mb-4 text-transparent bg-clip-text" style={{ backgroundImage: themeColor }}>Education</h3>
              <div className="flex flex-col gap-5">
                {education.map((edu) => (
                  <div key={edu.id} className="bg-white p-5 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] border border-gray-50">
                    <h4 className="font-bold text-gray-900 text-lg leading-tight mb-1">{edu.degree}</h4>
                    <div className="text-sm font-medium text-gray-600 mb-3">{edu.university}</div>
                    <div className="flex justify-between items-center text-sm font-bold">
                      <span className="text-gray-500">{edu.year}</span>
                      <span className="text-transparent bg-clip-text" style={{ backgroundImage: themeColor }}>{edu.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h3 className="text-2xl font-black uppercase tracking-widest mb-4 text-transparent bg-clip-text" style={{ backgroundImage: themeColor }}>Skills</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill.id} className="px-4 py-2 text-sm font-bold rounded-full text-white shadow-sm" style={{ background: themeColor }}>
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>
          )}

          {certifications.length > 0 && (
            <section>
              <h3 className="text-2xl font-black uppercase tracking-widest mb-4 text-transparent bg-clip-text" style={{ backgroundImage: themeColor }}>Certifications</h3>
              <div className="flex flex-col gap-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex flex-col">
                    <h4 className="font-bold text-gray-900 text-base">{cert.name}</h4>
                    <div className="text-sm text-gray-500 font-medium">{cert.issuer} • {cert.year}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {languages.length > 0 && (
            <section>
              <h3 className="text-2xl font-black uppercase tracking-widest mb-4 text-transparent bg-clip-text" style={{ backgroundImage: themeColor }}>Languages</h3>
              <div className="flex flex-col gap-3">
                {languages.map((lang) => (
                  <div key={lang.id} className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg">
                    <span className="font-bold text-gray-800">{lang.name}</span>
                    <span className="text-sm font-medium text-gray-500">{lang.proficiency}</span>
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

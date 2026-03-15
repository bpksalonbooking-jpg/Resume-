import React from 'react';
import { ResumeData, Experience, Education, Project, Skill, Certification, Language, Hobby } from '../types';
import { Plus, Trash2, GripVertical } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';

interface FormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export default function Form({ data, onChange }: FormProps) {
  const updatePersonalInfo = (field: keyof ResumeData['personalInfo'], value: string) => {
    onChange({
      ...data,
      personalInfo: { ...data.personalInfo, [field]: value }
    });
  };

  const updateSummary = (value: string) => {
    onChange({ ...data, summary: value });
  };

  // Generic handlers for arrays
  const addItem = <T extends any>(field: keyof ResumeData, newItem: T) => {
    onChange({
      ...data,
      [field]: [...(data[field] as any[]), newItem]
    });
  };

  const updateItem = <T extends any>(field: keyof ResumeData, id: string, itemField: keyof T, value: string) => {
    onChange({
      ...data,
      [field]: (data[field] as any[]).map(item => 
        item.id === id ? { ...item, [itemField]: value } : item
      )
    });
  };

  const removeItem = (field: keyof ResumeData, id: string) => {
    onChange({
      ...data,
      [field]: (data[field] as any[]).filter(item => item.id !== id)
    });
  };

  return (
    <div className="p-8 max-w-3xl mx-auto flex flex-col gap-10">
      
      {/* Personal Info */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Personal Information</h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">First Name</label>
            <input type="text" value={data.personalInfo.firstName} onChange={e => updatePersonalInfo('firstName', e.target.value)} className="input-field" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" value={data.personalInfo.lastName} onChange={e => updatePersonalInfo('lastName', e.target.value)} className="input-field" />
          </div>
          <div className="flex flex-col gap-1 col-span-2">
            <label className="text-sm font-medium text-gray-700">Job Title</label>
            <input type="text" value={data.personalInfo.jobTitle} onChange={e => updatePersonalInfo('jobTitle', e.target.value)} className="input-field" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input type="email" value={data.personalInfo.email} onChange={e => updatePersonalInfo('email', e.target.value)} className="input-field" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Phone</label>
            <input type="text" value={data.personalInfo.phone} onChange={e => updatePersonalInfo('phone', e.target.value)} className="input-field" />
          </div>
          <div className="flex flex-col gap-1 col-span-2">
            <label className="text-sm font-medium text-gray-700">Address</label>
            <input type="text" value={data.personalInfo.address} onChange={e => updatePersonalInfo('address', e.target.value)} className="input-field" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">LinkedIn URL</label>
            <input type="text" value={data.personalInfo.linkedin} onChange={e => updatePersonalInfo('linkedin', e.target.value)} className="input-field" />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">GitHub/Portfolio URL</label>
            <input type="text" value={data.personalInfo.github} onChange={e => updatePersonalInfo('github', e.target.value)} className="input-field" />
          </div>
          <div className="flex flex-col gap-1 col-span-2">
            <label className="text-sm font-medium text-gray-700">Photo URL</label>
            <input type="text" value={data.personalInfo.photoUrl} onChange={e => updatePersonalInfo('photoUrl', e.target.value)} className="input-field" placeholder="https://example.com/photo.jpg" />
          </div>
        </div>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">Professional Summary</h2>
        <textarea 
          value={data.summary} 
          onChange={e => updateSummary(e.target.value)} 
          className="input-field min-h-[120px] resize-y"
          placeholder="Write a brief summary of your professional background..."
        />
      </section>

      {/* Experience */}
      <section>
        <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
          <button onClick={() => addItem<Experience>('experience', { id: uuidv4(), company: '', role: '', startDate: '', endDate: '', description: '' })} className="btn-add">
            <Plus size={16} /> Add
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {data.experience.map((exp, index) => (
            <div key={exp.id} className="bg-gray-50 p-5 rounded-xl border border-gray-200 relative group">
              <button onClick={() => removeItem('experience', exp.id)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
                <Trash2 size={18} />
              </button>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600">Company</label>
                  <input type="text" value={exp.company} onChange={e => updateItem<Experience>('experience', exp.id, 'company', e.target.value)} className="input-field bg-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600">Role</label>
                  <input type="text" value={exp.role} onChange={e => updateItem<Experience>('experience', exp.id, 'role', e.target.value)} className="input-field bg-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600">Start Date</label>
                  <input type="text" value={exp.startDate} onChange={e => updateItem<Experience>('experience', exp.id, 'startDate', e.target.value)} className="input-field bg-white" placeholder="e.g. Jan 2020" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600">End Date</label>
                  <input type="text" value={exp.endDate} onChange={e => updateItem<Experience>('experience', exp.id, 'endDate', e.target.value)} className="input-field bg-white" placeholder="e.g. Present" />
                </div>
                <div className="flex flex-col gap-1 col-span-2">
                  <label className="text-xs font-medium text-gray-600">Description</label>
                  <textarea value={exp.description} onChange={e => updateItem<Experience>('experience', exp.id, 'description', e.target.value)} className="input-field bg-white min-h-[80px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Education</h2>
          <button onClick={() => addItem<Education>('education', { id: uuidv4(), degree: '', university: '', year: '', score: '' })} className="btn-add">
            <Plus size={16} /> Add
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {data.education.map((edu) => (
            <div key={edu.id} className="bg-gray-50 p-5 rounded-xl border border-gray-200 relative">
              <button onClick={() => removeItem('education', edu.id)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
                <Trash2 size={18} />
              </button>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 col-span-2">
                  <label className="text-xs font-medium text-gray-600">Degree</label>
                  <input type="text" value={edu.degree} onChange={e => updateItem<Education>('education', edu.id, 'degree', e.target.value)} className="input-field bg-white" />
                </div>
                <div className="flex flex-col gap-1 col-span-2">
                  <label className="text-xs font-medium text-gray-600">University/Institution</label>
                  <input type="text" value={edu.university} onChange={e => updateItem<Education>('education', edu.id, 'university', e.target.value)} className="input-field bg-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600">Year</label>
                  <input type="text" value={edu.year} onChange={e => updateItem<Education>('education', edu.id, 'year', e.target.value)} className="input-field bg-white" placeholder="e.g. 2018 - 2022" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600">Score/CGPA</label>
                  <input type="text" value={edu.score} onChange={e => updateItem<Education>('education', edu.id, 'score', e.target.value)} className="input-field bg-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
          <button onClick={() => addItem<Skill>('skills', { id: uuidv4(), name: '' })} className="btn-add">
            <Plus size={16} /> Add
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {data.skills.map((skill) => (
            <div key={skill.id} className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <input 
                type="text" 
                value={skill.name} 
                onChange={e => updateItem<Skill>('skills', skill.id, 'name', e.target.value)} 
                className="px-3 py-2 outline-none w-32 text-sm"
                placeholder="Skill name"
              />
              <button onClick={() => removeItem('skills', skill.id)} className="px-2 py-2 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors border-l border-gray-200">
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section>
        <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <button onClick={() => addItem<Project>('projects', { id: uuidv4(), title: '', description: '', techStack: '', link: '' })} className="btn-add">
            <Plus size={16} /> Add
          </button>
        </div>
        <div className="flex flex-col gap-6">
          {data.projects.map((proj) => (
            <div key={proj.id} className="bg-gray-50 p-5 rounded-xl border border-gray-200 relative">
              <button onClick={() => removeItem('projects', proj.id)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors">
                <Trash2 size={18} />
              </button>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1 col-span-2">
                  <label className="text-xs font-medium text-gray-600">Project Title</label>
                  <input type="text" value={proj.title} onChange={e => updateItem<Project>('projects', proj.id, 'title', e.target.value)} className="input-field bg-white" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600">Tech Stack</label>
                  <input type="text" value={proj.techStack} onChange={e => updateItem<Project>('projects', proj.id, 'techStack', e.target.value)} className="input-field bg-white" placeholder="e.g. React, Node.js" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-gray-600">Link</label>
                  <input type="text" value={proj.link} onChange={e => updateItem<Project>('projects', proj.id, 'link', e.target.value)} className="input-field bg-white" placeholder="e.g. github.com/..." />
                </div>
                <div className="flex flex-col gap-1 col-span-2">
                  <label className="text-xs font-medium text-gray-600">Description</label>
                  <textarea value={proj.description} onChange={e => updateItem<Project>('projects', proj.id, 'description', e.target.value)} className="input-field bg-white min-h-[80px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section>
        <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Certifications</h2>
          <button onClick={() => addItem<Certification>('certifications', { id: uuidv4(), name: '', issuer: '', year: '' })} className="btn-add">
            <Plus size={16} /> Add
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {data.certifications.map((cert) => (
            <div key={cert.id} className="flex gap-3 items-start">
              <div className="flex-1 grid grid-cols-3 gap-3">
                <input type="text" value={cert.name} onChange={e => updateItem<Certification>('certifications', cert.id, 'name', e.target.value)} className="input-field col-span-3 sm:col-span-1" placeholder="Certification Name" />
                <input type="text" value={cert.issuer} onChange={e => updateItem<Certification>('certifications', cert.id, 'issuer', e.target.value)} className="input-field col-span-2 sm:col-span-1" placeholder="Issuer" />
                <input type="text" value={cert.year} onChange={e => updateItem<Certification>('certifications', cert.id, 'year', e.target.value)} className="input-field col-span-1" placeholder="Year" />
              </div>
              <button onClick={() => removeItem('certifications', cert.id)} className="p-3 text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors border border-gray-200">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Languages */}
      <section>
        <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Languages</h2>
          <button onClick={() => addItem<Language>('languages', { id: uuidv4(), name: '', proficiency: '' })} className="btn-add">
            <Plus size={16} /> Add
          </button>
        </div>
        <div className="flex flex-col gap-4">
          {data.languages.map((lang) => (
            <div key={lang.id} className="flex gap-3 items-start">
              <div className="flex-1 grid grid-cols-2 gap-3">
                <input type="text" value={lang.name} onChange={e => updateItem<Language>('languages', lang.id, 'name', e.target.value)} className="input-field" placeholder="Language" />
                <input type="text" value={lang.proficiency} onChange={e => updateItem<Language>('languages', lang.id, 'proficiency', e.target.value)} className="input-field" placeholder="Proficiency (e.g. Native, Fluent)" />
              </div>
              <button onClick={() => removeItem('languages', lang.id)} className="p-3 text-gray-400 hover:text-red-500 bg-gray-50 hover:bg-red-50 rounded-lg transition-colors border border-gray-200">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-6 pb-2 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Hobbies / Interests</h2>
          <button onClick={() => addItem<Hobby>('hobbies', { id: uuidv4(), name: '' })} className="btn-add">
            <Plus size={16} /> Add
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {data.hobbies.map((hobby) => (
            <div key={hobby.id} className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <input 
                type="text" 
                value={hobby.name} 
                onChange={e => updateItem<Hobby>('hobbies', hobby.id, 'name', e.target.value)} 
                className="px-3 py-2 outline-none w-32 text-sm"
                placeholder="Hobby"
              />
              <button onClick={() => removeItem('hobbies', hobby.id)} className="px-2 py-2 text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors border-l border-gray-200">
                <Trash2 size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

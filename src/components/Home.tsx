import React, { useState, useMemo } from 'react';
import { TEMPLATES } from '../constants';
import { Filter, ArrowDownUp } from 'lucide-react';

interface HomeProps {
  onSelectTemplate: (templateId: string) => void;
}

export default function Home({ onSelectTemplate }: HomeProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('Popularity');

  const categories = ['All', ...Array.from(new Set(TEMPLATES.map(t => t.category)))];

  const filteredAndSortedTemplates = useMemo(() => {
    let result = [...TEMPLATES];

    if (selectedCategory !== 'All') {
      result = result.filter(t => t.category === selectedCategory);
    }

    if (sortBy === 'Popularity') {
      result.sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === 'A-Z') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [selectedCategory, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Resume Builder <span className="text-blue-600">Pro</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Create a professional resume in minutes. Choose from our collection of beautiful, customizable templates.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 w-full sm:w-auto overflow-x-auto pb-2 sm:pb-0">
            <Filter size={20} className="text-gray-400 shrink-0" />
            <div className="flex gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category 
                      ? 'bg-blue-600 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <ArrowDownUp size={20} className="text-gray-400 shrink-0" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-100 border-none text-gray-700 text-sm rounded-xl focus:ring-2 focus:ring-blue-500 block w-full p-2.5 font-medium cursor-pointer outline-none"
            >
              <option value="Popularity">Sort by Popularity</option>
              <option value="A-Z">Sort A-Z</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredAndSortedTemplates.map((template) => (
            <div 
              key={template.id} 
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 ease-out overflow-hidden border border-gray-100 flex flex-col cursor-pointer"
              onClick={() => onSelectTemplate(template.id)}
            >
              {/* Thumbnail Placeholder */}
              <div 
                className="h-48 w-full relative overflow-hidden"
                style={{ background: template.color.includes('gradient') ? template.color : `${template.color}20` }}
              >
                {/* Category Tag Overlay */}
                <div className="absolute top-3 right-3 z-10">
                  <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-gray-800 rounded-full shadow-sm">
                    {template.category}
                  </span>
                </div>

                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ 
                    backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                    color: template.color.includes('gradient') ? 'white' : template.color
                  }}
                ></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-24 h-32 bg-white shadow-lg rounded-sm border border-gray-200 transform group-hover:scale-110 transition-transform duration-500 flex flex-col p-2 gap-1"
                  >
                    <div className="w-full h-4 rounded-sm" style={{ background: template.color }}></div>
                    <div className="w-3/4 h-1 bg-gray-200 rounded-sm mt-1"></div>
                    <div className="w-1/2 h-1 bg-gray-200 rounded-sm"></div>
                    <div className="w-full h-1 bg-gray-100 rounded-sm mt-2"></div>
                    <div className="w-full h-1 bg-gray-100 rounded-sm"></div>
                    <div className="w-5/6 h-1 bg-gray-100 rounded-sm"></div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{template.name}</h3>
                    <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded-md border border-gray-100">Pop: {template.popularity}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4 line-clamp-2 leading-relaxed">
                    {template.description}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectTemplate(template.id);
                  }}
                  className="w-full py-3 px-4 bg-gray-900 group-hover:bg-blue-600 text-white font-medium rounded-xl transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Use This Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

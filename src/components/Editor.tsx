import React, { useRef, useState, useEffect } from 'react';
import { TEMPLATES, initialResumeData } from '../constants';
import { ResumeData } from '../types';
import Form from './Form';
import Preview from './Preview';
import { ArrowLeft, Download, Palette, Undo, Redo } from 'lucide-react';
// @ts-ignore
import html2pdf from 'html2pdf.js';

interface EditorProps {
  templateId: string;
  onBack: () => void;
}

export default function Editor({ templateId, onBack }: EditorProps) {
  const [history, setHistory] = useState<ResumeData[]>([initialResumeData]);
  const [historyIndex, setHistoryIndex] = useState<number>(0);
  const previewRef = useRef<HTMLDivElement>(null);

  const data = history[historyIndex];

  // Set initial theme color based on selected template
  useEffect(() => {
    const template = TEMPLATES.find(t => t.id === templateId);
    if (template) {
      const initialDataWithTheme = { ...initialResumeData, themeColor: template.color };
      setHistory([initialDataWithTheme]);
      setHistoryIndex(0);
    }
  }, [templateId]);

  const handleDataChange = (newData: ResumeData) => {
    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(newData);
    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
    }
  };

  const handleDownloadPDF = () => {
    const element = previewRef.current;
    if (!element) return;

    const opt = {
      margin: 0,
      filename: `${data.personalInfo.firstName}_${data.personalInfo.lastName}_Resume.pdf`,
      image: { type: 'jpeg' as const, quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' as const }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100 overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center shrink-0 z-10 shadow-sm">
        <div className="flex items-center gap-4">
          <button 
            onClick={onBack}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
            title="Back to Templates"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-bold text-gray-800">Resume Editor</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border-r border-gray-200 pr-4">
            <button 
              onClick={handleUndo}
              disabled={historyIndex === 0}
              className={`p-2 rounded-lg transition-colors ${historyIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
              title="Undo"
            >
              <Undo size={18} />
            </button>
            <button 
              onClick={handleRedo}
              disabled={historyIndex === history.length - 1}
              className={`p-2 rounded-lg transition-colors ${historyIndex === history.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-100'}`}
              title="Redo"
            >
              <Redo size={18} />
            </button>
          </div>

          <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
            <Palette size={16} className="text-gray-500" />
            <input 
              type="color" 
              value={data.themeColor.includes('gradient') ? '#000000' : data.themeColor} 
              onChange={(e) => handleDataChange({ ...data, themeColor: e.target.value })}
              className="w-6 h-6 rounded cursor-pointer border-0 p-0"
              title="Change Theme Color"
            />
          </div>
          <button 
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium transition-colors shadow-sm"
          >
            <Download size={18} />
            Download PDF
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Form Section */}
        <div className="w-1/2 h-full overflow-y-auto bg-white border-r border-gray-200 shadow-inner">
          <Form data={data} onChange={handleDataChange} />
        </div>

        {/* Preview Section */}
        <div className="w-1/2 h-full overflow-y-auto bg-gray-200 p-8 flex justify-center">
          <div className="w-[210mm] min-h-[297mm] bg-white shadow-2xl transition-all duration-300" ref={previewRef}>
            <Preview templateId={templateId} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

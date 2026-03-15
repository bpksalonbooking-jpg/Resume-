/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Home from './components/Home';
import Editor from './components/Editor';

export default function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {selectedTemplate ? (
        <Editor 
          templateId={selectedTemplate} 
          onBack={() => setSelectedTemplate(null)} 
        />
      ) : (
        <Home onSelectTemplate={setSelectedTemplate} />
      )}
    </div>
  );
}

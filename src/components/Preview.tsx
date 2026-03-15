import React from 'react';
import { ResumeData } from '../types';
import Template1 from './templates/Template1';
import Template2 from './templates/Template2';
import Template3 from './templates/Template3';
import Template4 from './templates/Template4';
import Template5 from './templates/Template5';
import Template6 from './templates/Template6';
import Template7 from './templates/Template7';
import Template8 from './templates/Template8';

interface PreviewProps {
  templateId: string;
  data: ResumeData;
}

export default function Preview({ templateId, data }: PreviewProps) {
  switch (templateId) {
    case 'modern-blue':
      return <Template1 data={data} />;
    case 'creative-green':
      return <Template2 data={data} />;
    case 'pro-dark':
      return <Template3 data={data} />;
    case 'elegant-purple':
      return <Template4 data={data} />;
    case 'minimal-red':
      return <Template5 data={data} />;
    case 'corp-orange':
      return <Template6 data={data} />;
    case 'classic-bw':
      return <Template7 data={data} />;
    case 'vibrant-gradient':
      return <Template8 data={data} />;
    default:
      return <Template1 data={data} />;
  }
}

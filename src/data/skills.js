import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiMysql,
  SiVite,
  SiJquery,
  SiCanva,
  SiApache,
} from 'react-icons/si';

import {
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaPhp,
  FaPaintBrush,
  FaRobot,
} from 'react-icons/fa';

import { VscCode } from 'react-icons/vsc';

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    skills: [
      { name: 'HTML', level: 95, icon: FaHtml5, color: '#e34f26' },
      { name: 'CSS', level: 90, icon: FaCss3Alt, color: '#1572b6' },
      { name: 'JavaScript', level: 70, icon: SiJavascript, color: '#f7df1e' },
      { name: 'React', level: 75, icon: SiReact, color: '#61dafb' },
      { name: 'Bootstrap', level: 95, icon: SiBootstrap, color: '#7952b3' },
      { name: 'Tailwind CSS', level: 88, icon: SiTailwindcss, color: '#06b6d4' },
      { name: 'jQuery', level: 85, icon: SiJquery, color: '#0769ad' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    skills: [
            { name: 'MySQL', level: 85, icon: SiMysql, color: '#4479a1' },
      { name: 'PHP', level: 80, icon: FaPhp, color: '#777bb4' },
      { name: 'Node.js', level: 50, icon: SiNodedotjs, color: '#339933' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    skills: [
      { name: 'VS Code', level: 95, icon: VscCode, color: '#007acc' },
      { name: 'Cursor AI', level: 90, icon: FaRobot, color: '#ffffff' },
      { name: 'GitHub', level: 90, icon: FaGithub, color: '#ffffff' },
      { name: 'Vite', level: 80, icon: SiVite, color: '#646cff' },
      { name: 'XAMPP', level: 85, icon: SiApache, color: '#fb7a24' },
    ],
  },
  {
    id: 'uiux',
    title: 'UI/UX',
    skills: [
      { name: 'Canva', level: 90, icon: SiCanva, color: '#00c4cc' },
      { name: 'Photoshop', level: 80, icon: FaPaintBrush, color: '#31a8ff' },
    ],
  },
];
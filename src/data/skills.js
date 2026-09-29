import {
  Code2, Database, Globe, Wrench, Server, Smartphone,
} from 'lucide-react';

const skills = [
  {
    categoria: 'Lenguajes',
    icon: Code2,
    items: [
      { nombre: 'Java', nivel: 'Avanzado' },
      { nombre: 'JavaScript', nivel: 'Intermedio' },
      { nombre: 'Python', nivel: 'Intermedio' },
      { nombre: 'SQL', nivel: 'Intermedio' },
      { nombre: 'Kotlin', nivel: 'Básico' },
      { nombre: 'PHP', nivel: 'Intermedio' },
    ],
  },
  {
    categoria: 'Frontend',
    icon: Globe,
    items: [
      { nombre: 'HTML', nivel: 'Avanzado' },
      { nombre: 'CSS', nivel: 'Avanzado' },
      { nombre: 'JavaScript', nivel: 'Intermedio' },
      { nombre: 'Flutter', nivel: 'Intermedio' },
      { nombre: 'Dart', nivel: 'Intermedio' },
    ],
  },
  {
    categoria: 'Backend & Datos',
    icon: Database,
    items: [
      { nombre: 'Java', nivel: 'Avanzado' },
      { nombre: 'PHP', nivel: 'Intermedio' },
      { nombre: 'MySQL', nivel: 'Intermedio' },
      { nombre: 'MariaDB', nivel: 'Intermedio' },
      { nombre: 'PostgreSQL', nivel: 'Intermedio' },
      { nombre: 'Supabase', nivel: 'Básico' },
    ],
  },
  {
    categoria: 'Herramientas',
    icon: Wrench,
    items: [
      { nombre: 'Git', nivel: 'Intermedio' },
      { nombre: 'GitHub', nivel: 'Intermedio' },
      { nombre: 'VS Code', nivel: 'Avanzado' },
      { nombre: 'IntelliJ IDEA', nivel: 'Intermedio' },
      { nombre: 'Android Studio', nivel: 'Intermedio' },
      { nombre: 'PHPStorm', nivel: 'Básico' },
    ],
  },
  {
    categoria: 'Otros',
    icon: Server,
    items: [
      { nombre: 'APIs', nivel: 'Intermedio' },
      { nombre: 'POO', nivel: 'Avanzado' },
      { nombre: 'Linux', nivel: 'Básico' },
      { nombre: 'Responsive Design', nivel: 'Intermedio' },
      { nombre: 'Android', nivel: 'Intermedio' },
      { nombre: 'Despliegue', nivel: 'Básico' },
    ],
  },
];

export default skills;

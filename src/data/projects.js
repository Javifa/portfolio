import {
  Smartphone,
  Globe,
  Database,
  Scan,
  Users,
  Package,
  LayoutDashboard,
  Code2,
  Map,
  CalendarDays,
  Train,
  Hotel,
  Utensils,
  ClipboardList,
} from 'lucide-react';

const projects = [
  {
    id: 'hogentia',
    nombre: 'Hogentia',
    descripcion:
      'Aplicación multiplataforma para la gestión integral del hogar. Incluye autenticación de usuarios, gestión de habitaciones y productos, control de stock y escaneo de tickets mediante OCR. Desarrollada con Flutter y desplegada en versión web.',
    descripcionCorta: 'Gestión integral del hogar con Flutter, OCR y Supabase.',
    tecnologias: ['Flutter', 'Dart', 'Supabase', 'Google ML Kit', 'DigitalOcean'],
    caracteristicas: [
      { icon: Users, texto: 'Autenticación de usuarios' },
      { icon: LayoutDashboard, texto: 'Gestión de habitaciones' },
      { icon: Package, texto: 'Control de stock y productos' },
      { icon: Scan, texto: 'Escaneo de tickets (OCR)' },
      { icon: Database, texto: 'Base de datos con Supabase' },
      { icon: Globe, texto: 'Versión web desplegada' },
    ],
    imagen: '/hogentia.jpg',
    github: 'https://github.com/javierfausti/hogentia',
    demo: '#',
    destacado: true,
    categoria: 'personal',
  },
  {
    id: 'china-2026',
    nombre: 'China 2026 — Travel Planner',
    descripcion:
      'Web interactiva para planificar un viaje de 15 días por China. Incluye timeline visual con itinerario día a día, mapa interactivo con Leaflet, gestión de reservas (hoteles, trenes, entradas), sistema de notas por ciudad, dashboard de presupuesto con gráficos y panel de progreso. Los datos se persisten automáticamente.',
    descripcionCorta:
      'Web interactiva para organizar un viaje a China con mapa, itinerario y gestión de reservas.',
    tecnologias: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Leaflet',
      'Recharts',
      'Supabase',
      'Framer Motion',
    ],
    caracteristicas: [
      { icon: Map, texto: 'Mapa interactivo de la ruta' },
      { icon: CalendarDays, texto: 'Itinerario día a día' },
      { icon: Train, texto: 'Gestión de transportes' },
      { icon: Hotel, texto: 'Reservas de hoteles' },
      { icon: Utensils, texto: 'Restaurantes y lugares' },
      { icon: ClipboardList, texto: 'Notas y checklist por ciudad' },
    ],
    imagen: '/china-travel.jpg',
    github: '#',
    demo: '#',
    destacado: true,
    categoria: 'personal',
  },
];

export default projects;

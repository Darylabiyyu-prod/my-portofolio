export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Contact', href: '#contact' },
] as const

export const email = 'darylabiyyu666@gmail.com'

export const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daryl-risma-abiyyu' },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/eoflf_?dlrf=MWhubDNjd3c0a3cxMA%3D%3D&utm_source=qr',
  },
  { label: 'Email', 
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=darylabiyyu666@gmail.com' } 
] as const

export const location = 'Wonosobo, Indonesia'

export interface Project {
  title: string
  description: string
  techStack: string[]
  liveUrl?: string
  githubUrl?: string
  image: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Midori Ritual',
    description:
      'A luxury skincare landing page focusing on high-quality aesthetics, custom 1.6s Lenis smooth scrolling, and Apple-inspired UI design.',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lenis'],
    liveUrl: 'https://midori-ritual.vercel.app',
    githubUrl: 'https://github.com/Darylabiyyu-prod/midori-ritual',
    image: 'public/projects/midori-preview.png',
    featured: true,
  },
]



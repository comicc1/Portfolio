'use client';

import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Kanban Board',
      description:
        'A collaborative task management board with drag-and-drop functionality. Organize your workflow with intuitive card management and status tracking.',
      tags: ['React', 'JavaScript', 'UI/UX'],
      link: 'https://github.com/KenNoschese/kanban',
      github: 'https://github.com/KenNoschese/kanban',
    },
    {
      title: 'Banking App',
      description:
        'A comprehensive banking application featuring a robust backend and modern mobile UI. Complete with user authentication, account management, and transaction handling.',
      tags: ['Full Stack', 'Mobile App', 'Backend'],
      link: 'https://github.com/comicc1/Oop',
      github: 'https://github.com/comicc1/Oop',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'A modern e-commerce solution with product catalog, shopping cart, and checkout system. Designed for seamless user experience and easy product discovery.',
      tags: ['React', 'Payment Integration', 'Database'],
      link: null,
      github: null,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-16">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-foreground/70 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-6 border-t border-border">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                    >
                      View Project
                      <ExternalLink size={18} />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-muted-foreground font-semibold cursor-not-allowed">
                      View Project
                      <ExternalLink size={18} />
                    </div>
                  )}
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                    >
                      Code
                      <Github size={18} />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-muted-foreground font-semibold cursor-not-allowed">
                      Code
                      <Github size={18} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

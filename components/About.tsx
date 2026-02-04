'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-background px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-foreground/80 leading-relaxed">
            <p>
              I'm a second-year student at Ateneo de Davao University, where I'm diving deep into 
              learning and exploring my passions. Currently, I'm focused on building a strong foundation 
              in technology and creative problem-solving.
            </p>
            <p>
              My interests span across web development, user experience design, and software engineering. 
              I believe in the power of technology to create meaningful impact and am committed to 
              continuous learning and growth.
            </p>
            <p>
              When I'm not studying or coding, you can find me exploring new technologies, 
              collaborating with peers on projects, or simply enjoying the learning journey that 
              comes with being a student in today's digital world.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-primary mb-4">Skills & Interests</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Web Development & Frontend Technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>User Experience & Interface Design</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Problem Solving & Critical Thinking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Collaboration & Team Communication</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-primary mb-4">Education</h3>
              <div className="space-y-2">
                <p className="font-semibold text-foreground">
                  Ateneo de Davao University
                </p>
                <p className="text-sm text-foreground/70">
                  2nd Year Student
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

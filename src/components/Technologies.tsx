import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current?.children || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // Categories animation
      gsap.fromTo(
        categoriesRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: categoriesRef.current,
            start: "top 80%",
          },
        }
      );

      // Tech stack animation
      gsap.fromTo(
        stackRef.current?.children || [],
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.05,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: stackRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const techCategories = [
    {
      title: "Frontend",
      technologies: [
        { name: "React", emoji: "⚛️" },
        { name: "HTML5", emoji: "🌐" },
        { name: "CSS3", emoji: "🎨" },
        { name: "JavaScript", emoji: "🟨" },
        { name: "Tailwind", emoji: "💨" },
        { name: "Bootstrap", emoji: "🅱️" },
      ],
    },
    {
      title: "Backend",
      technologies: [
        { name: "Node.js", emoji: "🟢" },
        { name: "Express.js", emoji: "🚀" },
        { name: "Python", emoji: "🐍" },
        { name: "Java", emoji: "☕" },
        { name: "REST API", emoji: "🔗" },
      ],
    },
    {
      title: "Databases",
      technologies: [
        { name: "MongoDB", emoji: "🍃" },
        { name: "MySQL", emoji: "🐬" },
        { name: "PostgreSQL", emoji: "🐘" },
      ],
    },
    {
      title: "AI/ML",
      technologies: [
        { name: "OpenCV", emoji: "👁️" },
        { name: "MediaPipe", emoji: "🤖" },
        { name: "TensorFlow", emoji: "🧠" },
        { name: "Computer Vision", emoji: "📷" },
      ],
    },
    {
      title: "DevOps",
      technologies: [
        { name: "Docker", emoji: "🐳" },
        { name: "AWS", emoji: "☁️" },
        { name: "Git", emoji: "📚" },
        { name: "Vercel", emoji: "▲" },
        { name: "CI/CD", emoji: "🔄" },
      ],
    },
    {
      title: "Tools",
      technologies: [
        { name: "Postman", emoji: "📮" },
        { name: "VS Code", emoji: "💻" },
        { name: "GitHub", emoji: "🐙" },
        { name: "Figma", emoji: "🎯" },
      ],
    },
  ];

  const mernStack = [
    { name: "MongoDB", emoji: "🍃", description: "Database" },
    { name: "Express.js", emoji: "🚀", description: "Backend" },
    { name: "React", emoji: "⚛️", description: "Frontend" },
    { name: "Node.js", emoji: "🟢", description: "Runtime" },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-muted">
      <div className="w-full px-4 md:px-6 max-w-7xl mx-auto">
        <div ref={headingRef} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Technologies & Tools We Master
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            We use modern technologies to build fast, scalable solutions.
          </p>
        </div>

        <div ref={categoriesRef} className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-4 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all hover:scale-105 duration-300"
            >
              <h3 className="text-lg font-bold text-foreground mb-3">{category.title}</h3>
              <div className="grid grid-cols-1 gap-2">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="flex items-center gap-2 p-1.5 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <span className="text-lg">{tech.emoji}</span>
                    <span className="text-xs font-medium text-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Our Preferred Tech Stack</h3>
            <p className="text-muted-foreground">
              The MERN stack combined with modern AI technologies for maximum impact
            </p>
          </div>

          <div ref={stackRef} className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
            {mernStack.map((tech, index) => (
              <div
                key={index}
                className="p-4 bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all hover:scale-105 duration-300 text-center"
              >
                <div className="text-3xl mb-2">{tech.emoji}</div>
                <h4 className="font-bold text-foreground mb-1 text-sm">{tech.name}</h4>
                <p className="text-xs text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center p-6 bg-gradient-to-br from-accent/5 to-secondary/5 rounded-2xl border border-accent/10">
            <h4 className="text-lg font-semibold text-foreground mb-3">Need a Custom Tech Stack?</h4>
            <p className="text-sm text-muted-foreground mb-4">
              We adapt to your requirements and work with any technology.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              Discuss Your Tech Needs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;

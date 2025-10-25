import { useEffect, useRef } from "react";
import { Shield, Lightbulb, Smile, Heart } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current?.children || [],
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 60, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const values = [
    {
      icon: Shield,
      title: "Honest Work",
      description: "We keep our promises and deliver what we say.",
    },
    {
      icon: Lightbulb,
      title: "Smart Solutions",
      description: "We find better ways to solve your problems.",
    },
    {
      icon: Smile,
      title: "Simple Ideas",
      description: "We keep things easy to understand and use.",
    },
    {
      icon: Heart,
      title: "Help You Grow",
      description: "We care about your success and growth.",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 bg-muted">
      <div className="w-full px-4 md:px-6 max-w-7xl mx-auto">
        <div ref={headingRef} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            About Us
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We help businesses grow online with simple websites, smart marketing, and honest support.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {values.map((value) => (
            <div
              key={value.title}
              className="group p-6 bg-card rounded-2xl shadow-card hover:shadow-card-hover transition-all hover:scale-105"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-accent/10 rounded-xl group-hover:bg-accent/20 transition-colors group-hover:rotate-6 transition-transform duration-300">
                  <value.icon className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

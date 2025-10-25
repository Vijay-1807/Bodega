import { useEffect, useRef } from "react";
import { Code, TrendingUp, Search, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current?.children || [],
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );

      // Service cards animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, x: -50, rotateY: -15 },
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.9,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Clean, mobile-friendly websites that load fast and are easy to use.",
      features: [
        "WordPress development",
        "Shopify websites",
        "MERN stack apps",
        "Mobile responsive design",
      ],
      gradient: "from-primary to-primary/80",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Smart ads, SEO, and content to help your brand grow online.",
      features: [
        "Social Media Strategy",
        "Content Creation",
        "Community Management",
        "Ad Campaigns",
      ],
      gradient: "from-secondary to-secondary/80",
    },
    {
      icon: Search,
      title: "SEO Service",
      description: "Help your website show up on Google and reach the right people.",
      features: [
        "Technical SEO",
        "Local SEO",
        "E-commerce SEO",
        "Keyword Research",
      ],
      gradient: "from-accent to-accent/80",
    },
    {
      icon: MessageSquare,
      title: "SMS Marketing",
      description: "Connect with customers through SMS and WhatsApp messages.",
      features: [
        "Bulk SMS campaigns",
        "WhatsApp Bot",
        "Messenger Marketing",
        "Auto-Reply systems",
      ],
      gradient: "from-primary to-accent",
    },
  ];

  return (
    <section ref={sectionRef} id="services" className="py-20 md:py-32 bg-background">
      <div className="w-full px-4 md:px-6 max-w-7xl mx-auto">
        <div ref={headingRef} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Complete digital solutions for your business
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-card hover:shadow-card-hover transition-all hover:scale-105"
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
              
              <div className="relative p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className={`flex-shrink-0 p-3 bg-gradient-to-br ${service.gradient} rounded-xl shadow-glow`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-1 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="h-1 w-1 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="ghost" 
                  size="sm"
                  className="group/btn w-full justify-between hover:bg-accent/10 text-xs"
                >
                  Learn More
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

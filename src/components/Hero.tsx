import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Badge animation
      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, scale: 0.8, y: -20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          ease: "back.out(2)",
        }
      );

      // Title animation with bounce effect
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.5,
          ease: "power2.out",
        }
      );

      // Description animation
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.7,
          ease: "power2.out",
        }
      );

      // CTA buttons animation
      gsap.fromTo(
        ctaRef.current?.children || [],
        { opacity: 0, y: 20, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: 0.9,
          stagger: 0.15,
          ease: "back.out(1.4)",
        }
      );

      // Stats animation with elastic effect
      gsap.fromTo(
        statsRef.current?.children || [],
        { opacity: 0, scale: 0.7, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          delay: 1.1,
          stagger: 0.1,
          ease: "elastic.out(1, 0.6)",
        }
      );

      // Floating animation for decorative elements
      gsap.to(".float-element", {
        y: -20,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.4,
      });

      // Rotate animation for icons
      gsap.to(".rotate-icon", {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20 w-full">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="float-element absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="float-element absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="float-element absolute top-1/2 left-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
        <Sparkles className="rotate-icon float-element absolute top-32 right-1/4 w-8 h-8 text-accent/40" />
        <Zap className="float-element absolute bottom-32 left-1/4 w-10 h-10 text-secondary/40" />
        <TrendingUp className="rotate-icon float-element absolute top-1/3 right-1/3 w-6 h-6 text-accent/30" />
      </div>

      {/* Content */}
      <div className="w-full relative z-10 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div ref={badgeRef} className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full text-accent-foreground mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Your Brand, Our Strategy</span>
          </div>
          
          <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
            BOdega Tech Solutions
          </h1>
          
          <p ref={subtitleRef} className="text-lg sm:text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Grow Online with <span className="text-secondary font-semibold">BOdega</span>
          </p>
          
          <p ref={descRef} className="text-base sm:text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto px-4">
            We help businesses grow online with beautiful websites, smart marketing, and professional support. From web development to digital marketing, SEO, and SMS campaigns—we make digital tools feel friendly and helpful.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              variant="hero" 
              size="lg"
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Services
            </Button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 max-w-2xl mx-auto px-4">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">2+</div>
              <div className="text-xs sm:text-sm text-primary-foreground/70">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">10+</div>
              <div className="text-xs sm:text-sm text-primary-foreground/70">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">100%</div>
              <div className="text-xs sm:text-sm text-primary-foreground/70">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

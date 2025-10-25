import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Clients = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.fromTo(
        headingRef.current?.children || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
        }
      );

      // Client cards grid animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, scale: 0.8, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const clients = [
    {
      name: "Nava Vastraa",
      location: "Guntur",
      category: "Women's fashion store",
      image: "/navvastra guntur.jpg",
      website: "https://www.instagram.com/nava_vastraa_guntur?igsh=MTRmaTJzcHdiN3Y1Yg==",
    },
    {
      name: "Nava Vastraa",
      location: "Tirupati", 
      category: "Women's fashion store",
      image: "/nav vastra tirupathi.jpg",
      website: "https://www.instagram.com/nava_vastraa?igsh=cWd1c3o0MnA3dzdt",
    },
    {
      name: "MAQ BI Multicuisine Restaurant",
      location: "Guntur",
      category: "A vibrant multicuisine restaurant",
      image: "/maqbi.jpg",
      website: "https://www.instagram.com/maq_bi?igsh=MXQ3b3VlYmgzdnZ1bA==",
    },
    {
      name: "Isha Designs & Constructions",
      location: "Guntur",
      category: "Elegant spaces crafted",
      subcategory: "Architectures",
      image: "/isha designs.jpg",
      website: "https://www.instagram.com/isha_designs_constructions?igsh=bDAybmpxeXljam1u",
    },
    {
      name: "Ismail Biryani",
      location: "Premium Restaurant",
      category: "Authentic Cuisine",
      image: "/ismail biryani.jpg",
      website: "https://www.instagram.com/ismailbiryani.india?igsh=cDJydHU5YWZ0Zm1o",
    },
    {
      name: "Huts & Trees",
      location: "Eco Resort",
      category: "Hospitality",
      image: "/huts and trees.jpg",
      website: "https://www.instagram.com/huts_and_trees?igsh=MTN0MnlnaWJheDNjOA==",
    },
    {
      name: "Sakhi Matchings",
      location: "Premium Boutique",
      category: "Designer wear",
      image: "/sakhi matching.jpg",
      website: "https://www.instagram.com/sakhi_matchings?igsh=eHpoOGtvcWdrcDJj",
    },
    {
      name: "Sakhi - The House of Kanchi Weaves",
      location: "Traditional Textiles",
      category: "Traditional textiles",
      image: "/sakhithehouseofkanchiwraves.jpg",
      website: "https://www.instagram.com/sakhithehouseofkanchiweaves?igsh=MWk1OXB6bjBrcTV2Mg==",
    },
    {
      name: "Village Kitchen Flavors",
      location: "Authentic Cuisine",
      category: "Traditional Food",
      image: "/village kitchen.jpg",
      website: "https://www.instagram.com/villagekitchen_flavors?igsh=MTMzNHU2czdzeWhjeQ==",
    },
  ];

  return (
    <section ref={sectionRef} id="clients" className="py-20 md:py-32 bg-muted">
      <div className="w-full px-4 md:px-6 max-w-7xl mx-auto">
        <div ref={headingRef} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Our Clients
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Trusted by businesses across diverse industries
          </p>
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4 w-full">
          <div className="flex gap-4 min-w-max">
            {clients.map((client, index) => (
              <a
                key={`mobile-${client.name}-${index}`}
                href={client.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105 cursor-pointer flex-shrink-0 w-80"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={client.image} 
                    alt={`${client.name} - ${client.category}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-white transition-colors duration-300">
                    {client.name}
                  </h3>
                    <p className="text-sm text-white/90 mb-1 font-medium">
                      {client.category}
                    </p>
                    {client.subcategory && (
                      <p className="text-xs text-white/80 mb-1">
                        {client.subcategory}
                      </p>
                    )}
                    <p className="text-xs text-white/70 flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {client.location}
                    </p>
                  </div>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Desktop Grid */}
        <div ref={cardsRef} className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {clients.map((client, index) => (
            <a
              key={`${client.name}-${index}`}
              href={client.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              {/* Landscape Image */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={client.image} 
                  alt={`${client.name} - ${client.category}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                    {client.name}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 mb-1 font-medium">
                    {client.category}
                  </p>
                  {client.subcategory && (
                    <p className="text-xs md:text-sm text-white/80 mb-2">
                      {client.subcategory}
                    </p>
                  )}
                  <p className="text-xs md:text-sm text-white/70 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {client.location}
                  </p>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;

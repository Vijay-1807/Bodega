const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="w-full px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">BOdega Tech Solutions</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Powerful, Scalable, Customized Development Solutions. 2+ years of proven expertise delivering innovative tech solutions worldwide.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://bodega.software" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  bodega.software
                </a>
              </li>
              <li>
                <a href="https://bodega.works" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  bodega.works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a 
                  href="mailto:connect@bodega.software" 
                  className="hover:text-primary-foreground transition-colors"
                >
                  connect@bodega.software
                </a>
              </li>
              <li>
                <a 
                  href="tel:+916304528287" 
                  className="hover:text-primary-foreground transition-colors"
                >
                  Mobile: 63045 28287
                </a>
              </li>
              <li>Lam Main Center, Amaravati Road</li>
              <li>Guntur, Andhra Pradesh - 522034</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 BOdega Tech Solutions. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/40 mt-2">
            Based in India | Serving Globally
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

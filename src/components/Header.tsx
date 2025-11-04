import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import f5Logo from "@/assets/f5-logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      
      // Add scrolled class
      setIsScrolled(currentScroll > 50);
      
      // Hide/show header
      if (currentScroll > lastScroll && currentScroll > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = 100;
      const targetPosition = section.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-[hsl(var(--luxury-black))]/95 shadow-2xl" : "bg-[hsl(var(--luxury-black))]/80"
        } backdrop-blur-xl border-b border-white/8 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-[100px]">
            {/* Logo */}
            <div className="flex items-center">
              <img src={f5Logo} alt="f5 logo" className="h-14 w-auto" width="140" height="56" loading="eager" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("sistema")}
                className="text-[hsl(var(--text-secondary))] hover:text-white transition-colors font-medium tracking-wide relative group"
              >
                O Sistema
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => scrollToSection("resultados")}
                className="text-[hsl(var(--text-secondary))] hover:text-white transition-colors font-medium tracking-wide relative group"
              >
                Resultados
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => scrollToSection("diferenciais")}
                className="text-[hsl(var(--text-secondary))] hover:text-white transition-colors font-medium tracking-wide relative group"
              >
                Diferenciais
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="text-[hsl(var(--text-secondary))] hover:text-white transition-colors font-medium tracking-wide relative group"
              >
                Contato
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] group-hover:w-full transition-all duration-300" />
              </button>
            </nav>

            {/* CTA Button + Mobile Menu */}
            <div className="flex items-center gap-4">
              <Button
                onClick={() => scrollToSection("contato")}
                className="hidden md:inline-flex bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] hover:shadow-[0_8px_30px_hsl(var(--f5-orange)/0.4)] transition-all duration-300 hover:-translate-y-0.5 font-semibold uppercase tracking-wider"
              >
                Agendar Consultoria
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-[100px] left-0 right-0 bg-[hsl(var(--luxury-black))]/98 backdrop-blur-xl border-b border-white/8 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          <button
            onClick={() => scrollToSection("sistema")}
            className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--f5-orange))] transition-colors text-left py-3 px-4 rounded-lg hover:bg-[hsl(var(--f5-orange))]/10"
          >
            O Sistema
          </button>
          <button
            onClick={() => scrollToSection("resultados")}
            className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--f5-orange))] transition-colors text-left py-3 px-4 rounded-lg hover:bg-[hsl(var(--f5-orange))]/10"
          >
            Resultados
          </button>
          <button
            onClick={() => scrollToSection("diferenciais")}
            className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--f5-orange))] transition-colors text-left py-3 px-4 rounded-lg hover:bg-[hsl(var(--f5-orange))]/10"
          >
            Diferenciais
          </button>
          <button
            onClick={() => scrollToSection("contato")}
            className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--f5-orange))] transition-colors text-left py-3 px-4 rounded-lg hover:bg-[hsl(var(--f5-orange))]/10"
          >
            Contato
          </button>
          <Button
            onClick={() => scrollToSection("contato")}
            className="w-full bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] font-semibold uppercase tracking-wider"
          >
            Agendar Sessão Estratégica
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const HeroLuxury = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contato");
    if (formSection) {
      const headerHeight = 100;
      const targetPosition = formSection.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68dde6f34641b9b22f3e764d/v4/player.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-[180px] pb-24 overflow-hidden">
      {/* Background with stronger gradient - Original style */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e0a] via-[#2d1510] to-[#1a0e0a]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--f5-orange))]/20 via-transparent to-transparent" />
        
        {/* Enhanced floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] rounded-full bg-[hsl(var(--f5-orange))]/35 blur-[100px] animate-float" style={{ animationDelay: "0s" }} />
          <div className="absolute top-[60%] right-[10%] w-[400px] h-[400px] rounded-full bg-[hsl(var(--f5-orange))]/35 blur-[100px] animate-float" style={{ animationDelay: "5s" }} />
          <div className="absolute bottom-[10%] left-[50%] w-[400px] h-[400px] rounded-full bg-[hsl(var(--f5-orange))]/35 blur-[100px] animate-float" style={{ animationDelay: "10s" }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Content Container */}
        <div className="max-w-6xl mx-auto">
          {/* Headline & Text - Original Copy */}
          <div className="text-center animate-fade-in-up mb-16">
            <h1 className="mb-8">
              <span className="block text-sm md:text-base font-medium text-white uppercase tracking-[2px] mb-4">
                A agência especializada em entregar o que sua clínica mais precisa:
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-[hsl(var(--f5-orange))] via-orange-400 to-[hsl(var(--f5-orange-dark))] bg-clip-text text-transparent mb-4 drop-shadow-[0_0_30px_rgba(255,99,71,0.5)]">
                VENDER MAIS
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white max-w-4xl mx-auto leading-relaxed">
              Transformamos clínicas odontológicas que faturam <strong className="text-white font-bold">R$30-50k/mês</strong> em operações de <strong className="text-[hsl(var(--f5-orange))] font-bold">R$250k+</strong> — com sistema completo de vendas: do lead qualificado até o fechamento de alto ticket.
            </p>
          </div>

          {/* Video Container */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <div 
                dangerouslySetInnerHTML={{
                  __html: '<vturb-smartplayer id="vid-68dde6f34641b9b22f3e764d" style="display: block; margin: 0 auto; width: 100%;"></vturb-smartplayer>'
                }}
              />
            </div>

            {/* Floating Metrics - All Screens */}
            <div>
              {/* Metric 1 - Desktop Position */}
              <div className="hidden lg:block absolute top-[10%] left-[-120px] animate-float">
                <div className="backdrop-blur-md bg-white/12 border border-white/18 rounded-2xl p-4 min-w-[180px] shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                  <div className="text-3xl font-extrabold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                    +3.000
                  </div>
                  <div className="text-sm text-[hsl(var(--text-secondary))]">Clínicas Atendidas</div>
                </div>
              </div>
              
              {/* Metric 1 - Mobile Position */}
              <div className="lg:hidden absolute top-[5%] left-[5%] animate-float">
                <div className="backdrop-blur-md bg-white/12 border border-white/18 rounded-xl p-3 min-w-[110px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300">
                  <div className="text-xl font-extrabold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                    +3.000
                  </div>
                  <div className="text-[10px] text-[hsl(var(--text-secondary))] leading-tight">Clínicas Atendidas</div>
                </div>
              </div>

              {/* Metric 2 - Featured - Desktop Position */}
              <div className="hidden lg:block absolute top-[40%] right-[-120px] animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="backdrop-blur-md bg-white/18 border border-white/20 rounded-2xl p-4 min-w-[180px] shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_44px_hsl(var(--f5-orange)/0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                  <div className="text-3xl font-extrabold bg-gradient-to-br from-[hsl(var(--f5-orange))] to-orange-300 bg-clip-text text-transparent">
                    90x
                  </div>
                  <div className="text-sm text-white">ROI Recorde</div>
                </div>
              </div>
              
              {/* Metric 2 - Mobile Position */}
              <div className="lg:hidden absolute top-[5%] right-[5%] animate-float" style={{ animationDelay: "1.5s" }}>
                <div className="backdrop-blur-md bg-white/18 border border-white/20 rounded-xl p-3 min-w-[90px] shadow-[0_0_30px_hsl(var(--f5-orange)/0.4)] hover:scale-105 transition-all duration-300">
                  <div className="text-xl font-extrabold bg-gradient-to-br from-[hsl(var(--f5-orange))] to-orange-300 bg-clip-text text-transparent">
                    90x
                  </div>
                  <div className="text-[10px] text-white leading-tight">ROI Recorde</div>
                </div>
              </div>

              {/* Metric 3 - Desktop Position */}
              <div className="hidden lg:block absolute bottom-[10%] left-[-100px] animate-float" style={{ animationDelay: "3s" }}>
                <div className="backdrop-blur-md bg-white/12 border border-white/18 rounded-2xl p-4 min-w-[180px] shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300">
                  <div className="text-3xl font-extrabold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                    70%
                  </div>
                  <div className="text-sm text-[hsl(var(--text-secondary))]">Especialização em Saúde</div>
                </div>
              </div>
              
              {/* Metric 3 - Mobile Position */}
              <div className="lg:hidden absolute bottom-[8%] left-[50%] -translate-x-1/2 animate-float" style={{ animationDelay: "3s" }}>
                <div className="backdrop-blur-md bg-white/12 border border-white/18 rounded-xl p-3 min-w-[100px] shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300">
                  <div className="text-xl font-extrabold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                    70%
                  </div>
                  <div className="text-[10px] text-[hsl(var(--text-secondary))] leading-tight">Especialização Saúde</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center px-4">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] hover:shadow-[0_8px_30px_hsl(var(--f5-orange)/0.5)] transition-all duration-300 hover:-translate-y-1 text-sm md:text-lg font-bold uppercase tracking-wide md:tracking-wider px-4 md:px-8 py-4 md:py-7 w-full md:w-auto"
            >
              <span className="block md:inline">GARANTIR MINHA VAGA</span>
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 inline-block" />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroLuxury;

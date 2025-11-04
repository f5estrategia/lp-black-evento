import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Import logos
import googlePartner from "@/assets/black-friday/parceiros/google-partner.png";
import metaPartner from "@/assets/black-friday/parceiros/meta-partner.png";
import rdStationPartner from "@/assets/black-friday/parceiros/rd-station-partner.png";


// Import banners
import heroBannerDesktop from "@/assets/banner-black-friday-evento-web.jpg";
import heroBannerMobile from "@/assets/banner-black-friday-evento-mobile.jpg";

const HeroBlackFriday = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contato");
    if (formSection) {
      const headerHeight = 100;
      const targetPosition = formSection.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen pt-28 md:pt-[180px] pb-12 md:pb-24 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1a0e0a] to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--f5-orange))]/20 via-transparent to-transparent" />

        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-[hsl(var(--f5-orange))]/35 blur-[80px] md:blur-[100px] animate-float" style={{ animationDelay: "0s" }} />
          <div className="absolute top-[60%] right-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-[hsl(var(--f5-orange))]/35 blur-[80px] md:blur-[100px] animate-float" style={{ animationDelay: "5s" }} />
          <div className="absolute bottom-[10%] left-[50%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-[hsl(var(--f5-orange))]/35 blur-[80px] md:blur-[100px] animate-float" style={{ animationDelay: "10s" }} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Partner Logos - Mobile Optimized */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-6 mb-8 md:mb-12 opacity-90 animate-fade-in-up">
            <span className="text-white/70 text-xs md:text-sm font-medium">Parceiros Oficiais:</span>
            <div className="flex flex-wrap gap-4 md:gap-6 items-center justify-center">
              <img
                src={googlePartner}
                alt="Google Partner"
                className="h-6 md:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={metaPartner}
                alt="Meta Partner"
                className="h-6 md:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src={rdStationPartner}
                alt="RD Station Partner"
                className="h-6 md:h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Headline - Mobile Optimized */}
          <div className="text-center animate-fade-in-up mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight px-2">
              O Evento Que Vai Mudar Seu{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--f5-orange))] via-orange-400 to-[hsl(var(--f5-orange-dark))] bg-clip-text text-transparent">
                Faturamento
              </span>{" "}
              Ainda em 2025
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-[#EFEFEF] max-w-4xl mx-auto leading-relaxed px-4">
              Estratégias avançadas de crescimento empresarial com Fernando Machado, CEO da F5 Estratégia
            </p>
          </div>

          {/* Event Banner - Responsive */}
          <div className="max-w-5xl mx-auto mb-8 md:mb-12 px-2 animate-fade-in-up">
            {/* Desktop Banner */}
            <div className="hidden md:block">
              <img
                src={heroBannerDesktop}
                alt="Black Friday - 13 de Novembro às 19h - Talk com Fernando Machado, CEO F5 Estratégia"
                className="w-full h-auto rounded-2xl shadow-2xl border border-white/10 hover:shadow-[0_20px_60px_hsl(var(--f5-orange)/0.3)] transition-all duration-300"
                loading="eager"
              />
            </div>

            {/* Mobile Banner */}
            <div className="md:hidden">
              <img
                src={heroBannerMobile}
                alt="Black Friday - 13 de Novembro às 19h - Talk com Fernando Machado, CEO F5 Estratégia"
                className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
                loading="eager"
              />
            </div>
          </div>

          {/* Floating Metrics - Glassmorphism Cards */}
          <div className="relative max-w-3xl mx-auto mb-8 md:mb-12 px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Metric 1 */}
              <div className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 rounded-2xl p-5 md:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-float text-center overflow-hidden">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-2">
                    +3.000
                  </div>
                  <div className="text-xs md:text-sm text-white/70 font-medium uppercase tracking-wider">Projetos</div>
                </div>
              </div>

              {/* Metric 2 - Featured (Orange Glow) */}
              <div className="group relative backdrop-blur-xl bg-gradient-to-br from-[hsl(var(--f5-orange))]/20 via-white/10 to-[hsl(var(--f5-orange))]/20 border border-[hsl(var(--f5-orange))]/50 rounded-2xl p-5 md:p-7 shadow-[0_8px_32px_0_rgba(254,91,4,0.4)] hover:shadow-[0_20px_60px_rgba(254,91,4,0.6)] hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-float text-center overflow-hidden" style={{ animationDelay: "1.5s" }}>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[hsl(var(--f5-orange))]/20 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-[hsl(var(--f5-orange))] via-orange-400 to-orange-300 bg-clip-text text-transparent mb-2">
                    900%
                  </div>
                  <div className="text-xs md:text-sm text-white font-semibold uppercase tracking-wider">ROI Comprovado</div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/10 border border-white/20 rounded-2xl p-5 md:p-7 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_20px_60px_rgba(255,255,255,0.15)] hover:scale-105 hover:-translate-y-2 transition-all duration-500 animate-float text-center overflow-hidden" style={{ animationDelay: "3s" }}>
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 group-hover:translate-x-full transition-transform duration-1000" />
                <div className="relative z-10">
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-2">
                    +50mi
                  </div>
                  <div className="text-xs md:text-sm text-white/70 font-medium uppercase tracking-wider">Investidos em Mídia</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button - Mobile Optimized */}
          <div className="text-center px-4">
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] hover:shadow-[0_8px_30px_hsl(var(--f5-orange)/0.5)] transition-all duration-300 hover:-translate-y-1 text-sm md:text-lg font-bold uppercase tracking-wide md:tracking-wider px-6 md:px-8 py-5 md:py-7 w-full md:w-auto animate-pulse-subtle"
            >
              <span className="hidden md:inline">GARANTIR MINHA VAGA GRATUITA</span>
              <span className="md:hidden">GARANTIR VAGA GRATUITA</span>
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 inline-block" />
            </Button>

            <div className="mt-3 md:mt-4 flex items-center justify-center gap-2 text-xs md:text-sm text-white/60">
              <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Seus dados estão 100% seguros</span>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default HeroBlackFriday;

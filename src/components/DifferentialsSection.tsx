import { Briefcase, Megaphone, DollarSign, Wrench, Video } from "lucide-react";
import fernandoMachado from "@/assets/fernando-machado-ceo.png";
import f5LogoWhite from "@/assets/f5-logo-white.png";
import primeLogo from "@/assets/prime-logo.png";

const DifferentialsSection = () => {
  return (
    <section id="diferenciais" className="py-24 bg-gradient-to-b from-[hsl(var(--luxury-dark))] to-[hsl(var(--luxury-black))] relative overflow-hidden">
      {/* Background with gradient - Like Hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e0a] via-[#2d1510] to-[#1a0e0a] opacity-70" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] right-[20%] w-[450px] h-[450px] rounded-full bg-[hsl(var(--f5-orange))]/20 blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-white to-[hsl(var(--text-secondary))] bg-clip-text text-transparent mb-4 md:mb-6">
            Não somos uma agência generalista. Somos especialistas no seu mercado.
          </h2>
          <p className="text-base md:text-lg text-[hsl(var(--text-secondary))] leading-relaxed">
            70% dos nossos clientes são clínicas. Nós não apenas entendemos o seu negócio, nós o vivemos. Fazemos parte do maior ecossistema para odontologia do Brasil, com empresas de consultoria, vendas e até construção de clínicas. Nós sabemos o jogo que você está jogando.
          </p>
        </div>

        {/* Ecosystem Visual - Responsivo */}
        <div className="flex justify-center items-center my-16 md:my-24 relative min-h-[400px] md:min-h-[600px]">
          {/* Center Logos */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-3 md:gap-4">
            <img src={f5LogoWhite} alt="f5 estratégia" className="h-8 md:h-12 w-auto drop-shadow-[0_0_20px_hsl(var(--f5-orange)/0.6)]" width="96" height="32" loading="lazy" />
            <div className="h-px w-12 md:w-16 bg-[hsl(var(--f5-orange))]/40" />
            <img src={primeLogo} alt="Prime Franchising Solutions" className="h-8 md:h-12 w-auto drop-shadow-[0_0_20px_hsl(var(--f5-orange)/0.4)]" width="96" height="32" loading="lazy" />
          </div>

          {/* Orbiting Items - Positioned in a circle */}
          <div className="relative w-full max-w-[400px] h-[400px] md:max-w-[700px] md:h-[700px]">
            {/* Item 1 - Top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 backdrop-blur-md bg-black/50 border-2 border-[hsl(var(--f5-orange))] rounded-2xl flex flex-col items-center justify-center gap-1 md:gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_hsl(var(--f5-orange)/0.4)] group animate-float">
              <Briefcase className="w-6 h-6 md:w-10 md:h-10 text-[hsl(var(--f5-orange))] transition-colors" />
              <span className="text-xs md:text-sm text-white font-medium">Consultoria</span>
            </div>

            {/* Item 2 - Top Right */}
            <div className="absolute top-[15%] right-[5%] md:right-[10%] w-24 h-24 md:w-32 md:h-32 backdrop-blur-md bg-black/50 border-2 border-[hsl(var(--f5-orange))] rounded-2xl flex flex-col items-center justify-center gap-1 md:gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_hsl(var(--f5-orange)/0.4)] group animate-float" style={{ animationDelay: "1.2s" }}>
              <Megaphone className="w-6 h-6 md:w-10 md:h-10 text-[hsl(var(--f5-orange))] transition-colors" />
              <span className="text-xs md:text-sm text-white font-medium">Marketing</span>
            </div>

            {/* Item 3 - Bottom Right */}
            <div className="absolute bottom-[15%] right-[5%] md:right-[10%] w-24 h-24 md:w-32 md:h-32 backdrop-blur-md bg-black/50 border-2 border-[hsl(var(--f5-orange))] rounded-2xl flex flex-col items-center justify-center gap-1 md:gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_hsl(var(--f5-orange)/0.4)] group animate-float" style={{ animationDelay: "2.4s" }}>
              <DollarSign className="w-6 h-6 md:w-10 md:h-10 text-[hsl(var(--f5-orange))] transition-colors" />
              <span className="text-xs md:text-sm text-white font-medium">Vendas</span>
            </div>

            {/* Item 4 - Bottom Left */}
            <div className="absolute bottom-[15%] left-[5%] md:left-[10%] w-24 h-24 md:w-32 md:h-32 backdrop-blur-md bg-black/50 border-2 border-[hsl(var(--f5-orange))] rounded-2xl flex flex-col items-center justify-center gap-1 md:gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_hsl(var(--f5-orange)/0.4)] group animate-float" style={{ animationDelay: "3.6s" }}>
              <Wrench className="w-6 h-6 md:w-10 md:h-10 text-[hsl(var(--f5-orange))] transition-colors" />
              <span className="text-xs md:text-sm text-white font-medium text-center">Infraestrutura</span>
            </div>

            {/* Item 5 - Top Left */}
            <div className="absolute top-[15%] left-[5%] md:left-[10%] w-24 h-24 md:w-32 md:h-32 backdrop-blur-md bg-black/50 border-2 border-[hsl(var(--f5-orange))] rounded-2xl flex flex-col items-center justify-center gap-1 md:gap-2 shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_hsl(var(--f5-orange)/0.4)] group animate-float" style={{ animationDelay: "4.8s" }}>
              <Video className="w-6 h-6 md:w-10 md:h-10 text-[hsl(var(--f5-orange))] transition-colors" />
              <span className="text-xs md:text-sm text-white font-medium">Audiovisual</span>
            </div>
          </div>
        </div>

        {/* CEO Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mt-24 max-w-5xl mx-auto">
          <div className="relative">
            <div className="relative rounded-3xl overflow-visible shadow-2xl border border-white/10">
              <img
                src={fernandoMachado}
                alt="Fernando Machado - CEO"
                className="w-full h-auto object-cover rounded-3xl"
                width="600"
                height="800"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--luxury-black))]/60 via-transparent to-transparent rounded-3xl" />
              
              {/* Floating Cards - Desktop */}
              <div className="hidden md:block">
                {/* Card 1 - Top Left - Outside */}
                <div className="absolute top-[15%] left-[-100px] animate-float z-20">
                  <div className="backdrop-blur-md bg-white/12 border border-white/18 rounded-2xl p-4 min-w-[140px] shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:scale-105 transition-all duration-300">
                    <div className="text-3xl font-extrabold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                      15+
                    </div>
                    <div className="text-xs text-[hsl(var(--text-secondary))]">anos de experiência</div>
                  </div>
                </div>
                
                {/* Card 2 - Bottom Right - Inside */}
                <div className="absolute bottom-[8%] right-[6%] animate-float z-10" style={{ animationDelay: "1.5s" }}>
                  <div className="backdrop-blur-md bg-[hsl(var(--f5-orange))]/90 border border-[hsl(var(--f5-orange))] rounded-2xl p-4 min-w-[140px] shadow-[0_24px_80px_rgba(0,0,0,0.5),0_0_44px_hsl(var(--f5-orange)/0.6)]">
                    <div className="text-3xl font-extrabold text-white">
                      +3.000
                    </div>
                    <div className="text-xs text-white/90">clínicas atendidas</div>
                  </div>
                </div>
              </div>

              {/* Floating Cards - Mobile */}
              <div className="md:hidden">
                {/* Card 1 - Top Left - Inside */}
                <div className="absolute top-[6%] left-[6%] animate-float z-10">
                  <div className="backdrop-blur-md bg-white/12 border border-white/18 rounded-xl p-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
                    <div className="text-xl font-extrabold bg-gradient-to-br from-white to-gray-200 bg-clip-text text-transparent">
                      15+
                    </div>
                    <div className="text-[10px] text-[hsl(var(--text-secondary))] leading-tight">anos de experiência</div>
                  </div>
                </div>
                
                {/* Card 2 - Bottom Right - Inside */}
                <div className="absolute bottom-[6%] right-[6%] animate-float z-10" style={{ animationDelay: "1.5s" }}>
                  <div className="backdrop-blur-md bg-[hsl(var(--f5-orange))]/90 border border-[hsl(var(--f5-orange))] rounded-xl p-3 shadow-[0_0_30px_hsl(var(--f5-orange)/0.6)]">
                    <div className="text-xl font-extrabold text-white">
                      +3.000
                    </div>
                    <div className="text-[10px] text-white/90 leading-tight">clínicas atendidas</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white mb-2">Fernando Machado</h3>
            <span className="inline-block text-[hsl(var(--f5-orange))] font-semibold mb-6 uppercase tracking-wide text-sm">
              CEO & Fundador
            </span>
            <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed mb-8">
              "Construímos o maior ecossistema de soluções para clínicas do Brasil. Nossa missão é simples: fazer sua clínica vender mais, com previsibilidade e escalabilidade."
            </p>

            {/* CTA Button */}
            <button
              onClick={() => {
                const formSection = document.getElementById("contato");
                if (formSection) {
                  const headerHeight = 100;
                  const targetPosition = formSection.offsetTop - headerHeight - 20;
                  window.scrollTo({ top: targetPosition, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base uppercase tracking-wider shadow-[0_8px_30px_hsl(var(--f5-orange)/0.4)] hover:shadow-[0_12px_40px_hsl(var(--f5-orange)/0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              Quero Participar
              <svg className="w-4 h-4 md:w-5 md:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;

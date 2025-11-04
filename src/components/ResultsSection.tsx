import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import viviaOdontoImage from "@/assets/vivia-odonto.webp";
import oralUnicVilaMarianaImage from "@/assets/oral-unic-vila-mariana-2.webp";
import oralUnicJoaoPessoaImage from "@/assets/oral-unic-joao-pessoa.webp";

const ResultsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1
  });

  const [emblaCasesRef, emblaCasesApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollCasesPrev = useCallback(() => {
    if (emblaCasesApi) emblaCasesApi.scrollPrev();
  }, [emblaCasesApi]);

  const scrollCasesNext = useCallback(() => {
    if (emblaCasesApi) emblaCasesApi.scrollNext();
  }, [emblaCasesApi]);

  const scrollToForm = () => {
    const formSection = document.getElementById("contato");
    if (formSection) {
      const headerHeight = 100;
      const targetPosition = formSection.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <section id="resultados" className="py-24 bg-[hsl(var(--luxury-black))] relative overflow-hidden">
      {/* Background with gradient - Like Hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e0a] via-[#2d1510] to-[#1a0e0a]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(var(--f5-orange))]/10 to-transparent" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[40%] left-[5%] w-[400px] h-[400px] rounded-full bg-[hsl(var(--f5-orange))]/25 blur-[120px] animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] rounded-full bg-[hsl(var(--f5-orange))]/20 blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4">
            Você Quer Promessas ou Quer Provas?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-[hsl(var(--text-secondary))] max-w-3xl mx-auto px-4">
            Veja os números reais de clínicas que escolheram resultados ao invés de discursos.
          </p>
        </div>

        {/* Results Grid - TIER 1 CASES */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* #1 - VIVA ODONTOLOGIA */}
          <div className="md:col-span-2 bg-gradient-to-br from-[hsl(var(--luxury-dark))] to-[hsl(var(--f5-orange))]/5 border border-[hsl(var(--f5-orange))] rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="relative h-64 bg-[hsl(var(--luxury-gray))] overflow-hidden">
              <img
                src={viviaOdontoImage}
                alt="Viva Odontologia"
                className="w-full h-full object-cover opacity-70 hover:scale-110 hover:opacity-90 transition-all duration-500"
                width="800"
                height="256"
                loading="lazy"
              />
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-6">VIVA ODONTOLOGIA</h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase tracking-wide mb-2">Investimento</span>
                  <span className="block text-lg font-bold text-white">R$ 124.294</span>
                </div>

                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase tracking-wide mb-2">Faturamento</span>
                  <span className="block text-lg font-bold text-[hsl(var(--f5-orange))]">R$ 3,8 MI</span>
                </div>

                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase tracking-wide mb-2">ROAS</span>
                  <span className="block text-lg font-bold text-[hsl(var(--f5-orange))]">27,11x</span>
                </div>

                <div className="text-center p-4 bg-white/5 rounded-xl">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase tracking-wide mb-2">Período</span>
                  <span className="block text-lg font-bold text-white">10 meses</span>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] text-lg leading-relaxed">
                De R$124 mil investidos para <strong className="text-white">R$3,8 MILHÕES</strong> em vendas. Sistema completo de vendas multiplicou resultado em 27x.
              </p>
            </div>
          </div>

          {/* #2 - ORAL UNIC VILA MARIANA */}
          <div className="bg-gradient-to-br from-[hsl(var(--luxury-dark))] to-[hsl(var(--f5-orange))]/5 border border-[hsl(var(--f5-orange))] rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="relative h-48 bg-[hsl(var(--luxury-gray))] overflow-hidden">
              <img
                src={oralUnicVilaMarianaImage}
                alt="Oral Unic Vila Mariana"
                className="w-full h-full object-cover opacity-70 hover:scale-110 hover:opacity-90 transition-all duration-500"
                width="600"
                height="192"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                🏆
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">ORAL UNIC VILA MARIANA</h3>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase mb-1">Vendas</span>
                  <span className="block text-sm font-bold text-[hsl(var(--f5-orange))]">R$ 2 MI+</span>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase mb-1">Período</span>
                  <span className="block text-sm font-bold text-white">14 meses</span>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] mb-2 leading-relaxed">
                Mais de <strong className="text-white">R$2 milhões em vendas</strong> em 14 meses. Crescimento consistente e escalável.
              </p>
              <div className="text-xs text-[hsl(var(--text-muted))]">Ticket médio: R$12.500 | Comparecimento: 80%</div>
            </div>
          </div>

          {/* #3 - ORAL UNIC JOÃO PESSOA */}
          <div className="bg-gradient-to-br from-[hsl(var(--luxury-dark))] to-[hsl(var(--f5-orange))]/5 border border-[hsl(var(--f5-orange))] rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
            <div className="relative h-48 bg-[hsl(var(--luxury-gray))] overflow-hidden">
              <img
                src={oralUnicJoaoPessoaImage}
                alt="Oral Unic João Pessoa"
                className="w-full h-full object-cover opacity-70 hover:scale-110 hover:opacity-90 transition-all duration-500"
                width="600"
                height="192"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                🏆
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">ORAL UNIC JOÃO PESSOA</h3>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase mb-1">Vendas</span>
                  <span className="block text-sm font-bold text-[hsl(var(--f5-orange))]">R$ 820 mil</span>
                </div>
                <div className="text-center p-3 bg-white/5 rounded-lg">
                  <span className="block text-xs text-[hsl(var(--text-muted))] uppercase mb-1">ROAS</span>
                  <span className="block text-lg font-bold text-[hsl(var(--f5-orange))]">27x</span>
                </div>
              </div>

              <p className="text-[hsl(var(--text-secondary))] mb-2 leading-relaxed">
                <strong className="text-white">R$820 mil efetivados</strong> com ROAS de 27x. Taxa de conversão de 43% com CPL de apenas R$18,34.
              </p>
              <div className="text-xs text-[hsl(var(--text-muted))]">Período: 8 meses</div>
            </div>
          </div>
        </div>

        {/* TIER 2 - CASES DE APOIO - Slider Sofisticado em Todas as Telas */}
        <div className="relative mb-16 max-w-7xl mx-auto">
          <div className="overflow-hidden px-4 md:px-8" ref={emblaCasesRef}>
            <div className="flex gap-5 md:gap-6">
              {[
                { name: "ORAL UNIC NATAL", metric: "Vendas", value: "R$ 800k+", desc: 'R$42 mil se transformaram em <span class="text-white font-semibold">R$800 mil</span>. Crescimento previsível mês após mês.', period: "Período: 12 meses" },
                { name: "ORAL UNIC IBIRAMA", metric: "ROAS", value: "64,65x", desc: '<span class="text-white font-semibold">52 vendas em 30 dias</span>. R$352 mil faturados. Ticket médio de R$6.774.' },
                { name: "ORAL UNIC PRES. PRUDENTE", metric: "ROAS", value: "28x", desc: '<span class="text-white font-semibold">R$93.100 efetivados</span> em apenas 18 dias. Velocidade e conversão.' },
                { name: "INNOVARE SORRISOS", metric: "Vendas", value: "R$ 105k", desc: 'Mais de <span class="text-white font-semibold">R$105 mil em vendas</span> em 30 dias. Crescimento acelerado.' },
                { name: "CLINIC DENTE", metric: "Vendas", value: "R$ 103k", desc: '<span class="text-white font-semibold">R$103.160 em vendas</span> com tráfego pago em apenas 1 mês.' },
                { name: "SERIDÓ MED", metric: "Receita", value: "R$ 100k", desc: '<span class="text-white font-semibold">R$100 mil em receita</span> com investimento de apenas R$3.256 em 1 mês.' },
                { name: "ODONTO EXCELLENCE", metric: "CPL", value: "R$ 24", desc: 'CPL reduzido de <span class="text-white font-semibold">R$150 para R$24</span> em menos de 30 dias.' },
                { name: "ORAL UNIC SERTÃOZINHO", metric: "CPL", value: "R$ 5,54", desc: 'CPL reduzido de <span class="text-white font-semibold">R$65 para R$5,54</span> em menos de 24h.' }
              ].map((item, index) => (
                <div key={index} className="flex-[0_0_90%] sm:flex-[0_0_70%] md:flex-[0_0_45%] lg:flex-[0_0_30%] xl:flex-[0_0_23%] min-w-0">
                  <div className="group bg-gradient-to-br from-[hsl(var(--luxury-dark))] to-[hsl(var(--luxury-black))] border border-white/8 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-[hsl(var(--f5-orange))]/50 transition-all duration-500 hover:shadow-[0_20px_60px_hsl(var(--f5-orange)/0.3)] h-full">
                    <div className="p-6 space-y-5 h-full flex flex-col">
                      <h4 className="text-base font-bold text-white tracking-tight">{item.name}</h4>
                      <div className="relative flex-grow-0">
                        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl blur-sm opacity-50 group-hover:opacity-70 transition-opacity"></div>
                        <div className="relative bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] rounded-2xl p-4 border border-[hsl(var(--f5-orange))]/20">
                          <div className="text-[10px] font-bold text-white/80 uppercase tracking-[3px] mb-1">{item.metric}</div>
                          <div className="text-3xl font-black text-white">{item.value}</div>
                        </div>
                      </div>
                      <p className="text-[hsl(var(--text-secondary))] text-sm leading-relaxed flex-grow" dangerouslySetInnerHTML={{ __html: item.desc }} />
                      {item.period && <div className="text-xs text-[hsl(var(--text-muted))] pt-2 border-t border-white/5 flex-grow-0">{item.period}</div>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Sofisticados */}
          <button
            onClick={scrollCasesPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-4 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] hover:shadow-[0_0_30px_hsl(var(--f5-orange)/0.6)] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 border-2 border-white/10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollCasesNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-4 w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] hover:shadow-[0_0_30px_hsl(var(--f5-orange)/0.6)] text-white flex items-center justify-center transition-all duration-300 hover:scale-110 z-10 border-2 border-white/10"
            aria-label="Próximo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Não é Sobre Nós. É Sobre Quem Confia em Nós.
            </h3>
            <p className="text-lg text-[hsl(var(--text-secondary))] max-w-2xl mx-auto">
              Veja o que os donos de clínicas que já transformaram seus resultados têm a dizer
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative max-w-5xl mx-auto px-4 md:px-8">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4 md:gap-6">
                {/* Video 1 */}
                <div className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-16px)] min-w-0">
                  <div className="w-full rounded-2xl overflow-hidden bg-[hsl(var(--luxury-dark))] shadow-xl">
                    <div style={{ position: 'relative', paddingBottom: '177.77%' }}>
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7e3478ea58bfe7173c5b5/v4/embed.html"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Video 2 */}
                <div className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-16px)] min-w-0">
                  <div className="w-full rounded-2xl overflow-hidden bg-[hsl(var(--luxury-dark))] shadow-xl">
                    <div style={{ position: 'relative', paddingBottom: '177.77%' }}>
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7dee38ea58bfe7173c072/v4/embed.html"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Video 3 */}
                <div className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-16px)] min-w-0">
                  <div className="w-full rounded-2xl overflow-hidden bg-[hsl(var(--luxury-dark))] shadow-xl">
                    <div style={{ position: 'relative', paddingBottom: '177.77%' }}>
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7d9cbc9a120c812a9e6a7/v4/embed.html"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Video 4 */}
                <div className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-16px)] min-w-0">
                  <div className="w-full rounded-2xl overflow-hidden bg-[hsl(var(--luxury-dark))] shadow-xl">
                    <div style={{ position: 'relative', paddingBottom: '177.77%' }}>
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7d9ef21b0a6afaf4cc36c/v4/embed.html"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Video 5 */}
                <div className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-16px)] min-w-0">
                  <div className="w-full rounded-2xl overflow-hidden bg-[hsl(var(--luxury-dark))] shadow-xl">
                    <div style={{ position: 'relative', paddingBottom: '177.77%' }}>
                      <iframe 
                        frameBorder="0" 
                        allowFullScreen 
                        src="https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7df118ea58bfe7173c0b0/v4/embed.html"
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                        referrerPolicy="origin"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[hsl(var(--f5-orange))] hover:bg-[hsl(var(--f5-orange-dark))] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[hsl(var(--f5-orange))] hover:bg-[hsl(var(--f5-orange-dark))] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 px-4">
          <Button
            onClick={scrollToForm}
            size="lg"
            className="bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] hover:shadow-[0_8px_30px_hsl(var(--f5-orange)/0.5)] transition-all duration-300 hover:-translate-y-1 text-sm md:text-lg font-bold uppercase tracking-wide md:tracking-wider px-6 md:px-8 py-5 md:py-7 w-full md:w-auto"
          >
            <span className="block md:inline">QUERO RESULTADOS ASSIM</span>
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 inline-block" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
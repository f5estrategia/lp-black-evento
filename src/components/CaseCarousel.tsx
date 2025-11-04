import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import images
import oralUnicIbirama from "@/assets/black-friday/cases/oral-unic-ibirama.webp";
import oralUnicVilasMariana from "@/assets/black-friday/cases/oral-unic-vila-mariana.webp";
import centroSorrisoArapongas from "@/assets/black-friday/cases/centro-do-sorriso-arapongas.webp";

const CaseCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const cases = [
    {
      id: 1,
      image: oralUnicIbirama,
      nome: "Oral Unic Ibirama",
      localizacao: "Santa Catarina",
      metrica: "64,65x",
      label: "ROAS",
      descricao: "Cada R$1 investido retornou R$64,65",
      destaque: "Inauguração Explosiva - R$ 352k em faturamento no 1º mês"
    },
    {
      id: 2,
      image: oralUnicVilasMariana,
      nome: "Oral Unic Vila Mariana",
      localizacao: "São Paulo - SP",
      metrica: "19,81x",
      label: "ROAS",
      descricao: "Cada R$1 investido retornou R$19,81",
      destaque: "19,81x ROAS - Virada de jogo completa"
    },
    {
      id: 3,
      image: centroSorrisoArapongas,
      nome: "Centro do Sorriso Arapongas",
      localizacao: "Paraná",
      metrica: "33x",
      label: "ROAS",
      descricao: "R$ 101k faturamento com investimento de R$ 3k",
      destaque: "9 vendas no primeiro mês"
    }
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1a0e0a] to-[#0A0A0A]">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] right-[15%] w-[200px] md:w-[300px] h-[200px] md:h-[300px] rounded-full bg-[hsl(var(--f5-orange))]/20 blur-[80px] md:blur-[100px] animate-float" />
        <div className="absolute bottom-[20%] left-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-[hsl(var(--f5-orange))]/15 blur-[100px] md:blur-[120px] animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Title */}
        <div className="text-center mb-10 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-6 px-2">
            Resultados{" "}
            <span className="bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] bg-clip-text text-transparent">
              Comprovados
            </span>
          </h2>
          <p className="text-base md:text-lg text-[#EFEFEF] max-w-3xl mx-auto px-4">
            Conheça as clínicas que transformaram seus resultados com nossas estratégias
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 md:gap-6">
              {cases.map((case_item) => (
                <div
                  key={case_item.id}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <div className="group relative h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl overflow-visible hover:shadow-[0_20px_60px_rgba(254,91,4,0.3)] hover:border-[hsl(var(--f5-orange))]/40 transition-all duration-500 pb-6">
                    {/* Image Container */}
                    <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden rounded-t-xl md:rounded-t-2xl">
                      <img
                        src={case_item.image}
                        alt={case_item.nome}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-[#0A0A0A]/20 to-transparent" />

                      {/* Floating Metric Badge - Top Right Corner Inside Photo */}
                      <div className="absolute top-4 right-4 backdrop-blur-xl bg-gradient-to-br from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] text-white px-4 md:px-5 py-2.5 md:py-3 rounded-xl shadow-[0_8px_32px_rgba(254,91,4,0.6)] border border-white/30 group-hover:scale-110 group-hover:shadow-[0_12px_48px_rgba(254,91,4,0.8)] transition-all duration-300">
                        <div className="text-2xl md:text-3xl font-extrabold leading-none mb-0.5">
                          {case_item.metrica}
                        </div>
                        <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider opacity-95">
                          {case_item.label}
                        </div>
                      </div>
                    </div>

                    {/* Content - Below Image */}
                    <div className="p-5 md:p-6">
                      {/* Nome da clínica */}
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {case_item.nome}
                      </h3>
                      <p className="text-xs md:text-sm text-white/60 mb-3 md:mb-4">
                        📍 {case_item.localizacao}
                      </p>

                      {/* Destaque */}
                      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border-l-4 border-[hsl(var(--f5-orange))] rounded-r-lg p-3 md:p-4 mb-3 md:mb-4">
                        <p className="text-sm md:text-base text-white font-medium">
                          {case_item.destaque}
                        </p>
                      </div>

                      {/* Descrição da métrica */}
                      <p className="text-xs md:text-sm text-white/70">
                        {case_item.descricao}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Desktop */}
          <div className="hidden md:flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 disabled:opacity-30"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {cases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === selectedIndex
                      ? "bg-[hsl(var(--f5-orange))] w-8"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 disabled:opacity-30"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </Button>
          </div>

          {/* Dots - Mobile */}
          <div className="flex md:hidden justify-center gap-2 mt-6">
            {cases.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === selectedIndex
                    ? "bg-[hsl(var(--f5-orange))] w-8"
                    : "bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Common Points */}
        <div className="mt-12 md:mt-16 max-w-4xl mx-auto bg-gradient-to-br from-[hsl(var(--f5-orange))]/10 to-transparent border border-[hsl(var(--f5-orange))]/30 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[hsl(var(--f5-orange))]/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-[hsl(var(--f5-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
              O que esses cases têm em comum?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
            {[
              "Estratégia personalizada para cada realidade",
              "Uso inteligente de tráfego pago (Google + Meta)",
              "CRM organizado para zero vazamento",
              "Equipe treinada para converter leads",
              "Acompanhamento próximo da f5",
              "Resultados mensuráveis e comprovados"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[hsl(var(--f5-orange))]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 md:w-4 md:h-4 text-[hsl(var(--f5-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm md:text-base text-white">{item}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-[hsl(var(--f5-orange))]">
              E essa mesma metodologia será revelada na live de Black Friday!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseCarousel;

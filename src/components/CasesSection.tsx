import { Building2, TrendingUp, DollarSign, Award, BarChart, Target, Lightbulb } from "lucide-react";

const CasesSection = () => {
  const cases = [
    {
      id: 1,
      nome: "Oral Unic Ibirama",
      subtitulo: "Inauguração Explosiva",
      localizacao: "Santa Catarina",
      badge: "CASE DESTAQUE",
      badgeColor: "bg-[hsl(var(--f5-orange))]",
      investimento: "R$ 5.386,79",
      periodo: "35 dias",
      resultados: [
        { numero: "146", label: "Leads gerados", destaque: false },
        { numero: "52", label: "Vendas concretizadas", destaque: true },
        { numero: "R$ 352.250", label: "Faturamento", destaque: true },
        { numero: "64,65x", label: "ROAS", destaque: true },
      ],
      depoimento: "A estratégia da f5 foi decisiva para consolidar nossa clínica no mercado desde o primeiro mês. Resultados acima de todas as expectativas.",
    },
    {
      id: 2,
      nome: "Oral Unic Vila Mariana",
      subtitulo: "Virada de Jogo",
      localizacao: "São Paulo - SP",
      badge: "TOP 3 NACIONAL",
      badgeColor: "bg-[#D4AF37]",
      resultados: [
        { numero: "19,81x", label: "ROI", destaque: true },
        { numero: "Top 3", label: "Ranking Nacional", destaque: true },
        { numero: "667,8", label: "Pontos", destaque: false },
        { numero: "Recorde", label: "Faturamento", destaque: false },
      ],
      depoimento: "A f5 não apenas gerou leads, mas garantiu que esses contatos tivessem alto potencial de conversão. O planejamento mudou completamente o rumo do nosso negócio.",
    },
    {
      id: 3,
      nome: "Centro do Sorriso Arapongas",
      subtitulo: "Conversão Rápida",
      localizacao: "Paraná",
      badge: "CONVERSÃO EXPRESSA",
      badgeColor: "bg-green-600",
      investimento: "R$ 3.070",
      periodo: "Ano completo",
      resultados: [
        { numero: "R$ 101.327", label: "Faturamento gerado", destaque: true },
        { numero: "33x", label: "ROAS", destaque: true },
        { numero: "9", label: "Vendas no primeiro mês", destaque: false },
        { numero: "114", label: "Leads gerados", destaque: false },
      ],
      depoimento: "O grande diferencial foi o engajamento da f5 desde o primeiro contato. O suporte no CRM e as ferramentas empregadas nos deram segurança para converter cada lead.",
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1a0e0a] to-[#0A0A0A]">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[15%] w-[300px] h-[300px] rounded-full bg-[hsl(var(--f5-orange))]/20 blur-[100px] animate-float" />
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-[hsl(var(--f5-orange))]/15 blur-[120px] animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Title */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Por Que{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] bg-clip-text text-transparent">
                +3.000 Clínicas
              </span>{" "}
              Confiam na f5 Estratégia
            </h2>

            {/* Authority Numbers */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <Building2 className="w-8 h-8 text-[hsl(var(--f5-orange))] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">3.000+</div>
                <div className="text-sm text-white/60">Clínicas Atendidas</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <svg className="w-8 h-8 text-[hsl(var(--f5-orange))] mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-white/60">Marcas Odontológicas</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <TrendingUp className="w-8 h-8 text-[hsl(var(--f5-orange))] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">900%</div>
                <div className="text-sm text-white/60">ROI Comprovado</div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <DollarSign className="w-8 h-8 text-[hsl(var(--f5-orange))] mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">60%</div>
                <div className="text-sm text-white/60">Redução no CAC</div>
              </div>
            </div>
          </div>

          {/* Cases */}
          <div className="space-y-8 mb-16">
            {cases.map((case_item, index) => (
              <div
                key={case_item.id}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border-2 border-gradient-to-r from-[hsl(var(--f5-orange))] to-[#D4AF37] rounded-2xl p-8 hover:shadow-[0_20px_60px_rgba(254,91,4,0.3)] hover:-translate-y-2 transition-all duration-500"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between mb-6 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl md:text-3xl font-bold text-white">{case_item.nome}</h3>
                      <span className={`${case_item.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider`}>
                        {case_item.badge}
                      </span>
                    </div>
                    <p className="text-lg text-[hsl(var(--f5-orange))] font-semibold">{case_item.subtitulo}</p>
                    <p className="text-sm text-white/60">{case_item.localizacao}</p>
                  </div>

                  {case_item.investimento && (
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3">
                      <div className="text-xs text-white/60 mb-1">Investimento ({case_item.periodo})</div>
                      <div className="text-xl font-bold text-white">{case_item.investimento}</div>
                    </div>
                  )}
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {case_item.resultados.map((resultado, idx) => (
                    <div
                      key={idx}
                      className={`${
                        resultado.destaque
                          ? 'bg-[hsl(var(--f5-orange))]/20 border-[hsl(var(--f5-orange))]/40 shadow-[0_0_20px_hsl(var(--f5-orange)/0.2)]'
                          : 'bg-white/5 border-white/10'
                      } backdrop-blur-sm border rounded-xl p-4 text-center`}
                    >
                      <div
                        className={`text-2xl md:text-3xl font-extrabold mb-1 ${
                          resultado.destaque
                            ? 'bg-gradient-to-r from-[hsl(var(--f5-orange))] to-orange-300 bg-clip-text text-transparent'
                            : 'text-white'
                        }`}
                      >
                        {resultado.numero}
                      </div>
                      <div className="text-xs text-white/70">{resultado.label}</div>
                    </div>
                  ))}
                </div>

                {/* Depoimento */}
                <div className="bg-white/5 backdrop-blur-sm border-l-4 border-[hsl(var(--f5-orange))] rounded-r-xl p-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-8 h-8 text-[hsl(var(--f5-orange))] flex-shrink-0 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                    <p className="text-white/90 italic leading-relaxed">{case_item.depoimento}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Common Points */}
          <div className="bg-gradient-to-br from-[hsl(var(--f5-orange))]/10 to-transparent border border-[hsl(var(--f5-orange))]/30 rounded-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-10 h-10 text-[hsl(var(--f5-orange))]" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">O QUE ESSES CASES TÊM EM COMUM?</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                "Estratégia personalizada para cada realidade",
                "Uso inteligente de tráfego pago (Google + Meta)",
                "CRM organizado para zero vazamento",
                "Equipe treinada para converter leads",
                "Acompanhamento próximo da f5",
                "Resultados mensuráveis e comprovados"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[hsl(var(--f5-orange))]/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-[hsl(var(--f5-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-[hsl(var(--f5-orange))]">
                E essa mesma metodologia será revelada na live de Black Friday!
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CasesSection;

import { Gift, Users, Megaphone, Briefcase } from "lucide-react";

const Solution = () => {
  const pilares = [
    {
      numero: 1,
      nome: "OFERTA IRRESISTÍVEL",
      icone: Gift,
      topicos: [
        "Como estruturar ofertas que vendem sem queimar margem",
        "Precificação estratégica: desconto real vs. desconto percebido",
        "Gatilhos mentais validados (escassez, urgência, prova social)"
      ]
    },
    {
      numero: 2,
      nome: "PÚBLICO CERTO",
      icone: Users,
      topicos: [
        "Base atual, leads antigos ou público frio: quem abordar primeiro?",
        "Segmentação por perfil de cliente e ticket médio",
        "Técnica de reativação de clientes inativos"
      ]
    },
    {
      numero: 3,
      nome: "CANAIS DE DIVULGAÇÃO",
      icone: Megaphone,
      topicos: [
        "Mix ideal: Meta Ads, Google Ads, WhatsApp, e-mail marketing",
        "Orçamento sugerido por porte de empresa",
        "Timing perfeito: quando começar as campanhas"
      ]
    },
    {
      numero: 4,
      nome: "ESTRUTURA COMERCIAL",
      icone: Briefcase,
      topicos: [
        "Como preparar seu time para converter em alto volume",
        "Scripts de vendas específicos para Black Friday",
        "CRM configurado: zero vazamento de leads"
      ]
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-[#0A0A0A]">
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(hsl(var(--f5-orange)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--f5-orange)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Title */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-white to-[hsl(var(--f5-orange))] bg-clip-text text-transparent">
                Neste Evento Exclusivo, Você Vai Descobrir:
              </span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-6">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--f5-orange))]/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-[hsl(var(--f5-orange))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-white">
                Os 4 Pilares de uma Black Friday Empresarial Lucrativa
              </h3>
            </div>
          </div>

          {/* Pilares Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {pilares.map((pilar) => {
              const IconComponent = pilar.icone;
              return (
                <div
                  key={pilar.numero}
                  className="group relative bg-gradient-to-br from-[#0A0A0A] via-[hsl(var(--f5-orange))]/5 to-[#0A0A0A] border-2 border-[hsl(var(--f5-orange))] rounded-xl p-8 hover:shadow-[0_0_30px_hsl(var(--f5-orange)/0.3)] hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[hsl(var(--f5-orange))]/20 flex items-center justify-center border border-[hsl(var(--f5-orange))]/40">
                    <span className="text-2xl font-bold text-[hsl(var(--f5-orange))]">{pilar.numero}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-[hsl(var(--f5-orange))]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-8 h-8 text-[hsl(var(--f5-orange))]" />
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-bold text-white mb-4">{pilar.nome}</h4>

                  {/* Topics */}
                  <ul className="space-y-3">
                    {pilar.topicos.map((topico, index) => (
                      <li key={index} className="flex items-start gap-3 text-[#EFEFEF]">
                        <span className="text-[hsl(var(--f5-orange))] mt-1 flex-shrink-0">✓</span>
                        <span className="text-sm leading-relaxed">{topico}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>


        </div>
      </div>
    </section>
  );
};

export default Solution;

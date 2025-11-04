import { XCircle, TrendingDown, UsersRound, BarChart3 } from "lucide-react";

const PainPointsBlackFriday = () => {
  const painPoints = [
    {
      icon: XCircle,
      title: "Leads que não convertem em clientes",
      description: "Recebe contatos pelos canais digitais, mas poucos realmente fecham negócio?",
    },
    {
      icon: TrendingDown,
      title: "Descontos que destroem sua margem",
      description: "Participa da Black Friday mas no fim do mês descobre que lucrou pouco (ou até perdeu)?",
    },
    {
      icon: UsersRound,
      title: "Equipe despreparada para o alto volume",
      description: "Seu time comercial não tem estrutura adequada e deixa oportunidades escaparem por falta de técnica?",
    },
    {
      icon: BarChart3,
      title: "Sem controle de métricas (CAC, ROI, taxa de conversão)",
      description: "Investe 'no escuro' sem saber exatamente qual campanha está trazendo resultado?",
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#1a0e0a] to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--f5-orange))]/10 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* Title */}
          <div className="text-center mb-16 max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Sua empresa está perdendo faturamento na{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] bg-clip-text text-transparent">
                Black Friday?
              </span>
            </h2>
            <p className="text-lg text-[#EFEFEF]">
              Se você já investe em marketing digital mas ainda enfrenta estes desafios:
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#0A0A0A] via-[rgba(231,76,60,0.05)] to-[#0A0A0A] border-l-4 border-[#E74C3C] rounded-xl p-6 hover:shadow-[0_8px_30px_rgba(231,76,60,0.2)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#E74C3C]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <point.icon className="w-6 h-6 text-[#E74C3C]" />
                  </div>
                  <h3 className="text-lg font-bold text-white pt-2">{point.title}</h3>
                </div>

                {/* Description */}
                <p className="text-[#EFEFEF] text-sm leading-relaxed pl-16">
                  {point.description}
                </p>
              </div>
            ))}
          </div>

          {/* Transition Card */}
          <div className="relative mt-16 animate-fade-in-up">
            <div className="bg-gradient-to-br from-[rgba(231,76,60,0.1)] via-[rgba(254,91,4,0.1)] to-transparent border border-[hsl(var(--f5-orange))]/30 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                O problema não é a Black Friday. É a{" "}
                <span className="text-[hsl(var(--f5-orange))]">ESTRATÉGIA</span>.
              </h3>
              <p className="text-lg text-[#EFEFEF] max-w-3xl mx-auto">
                Enquanto você hesita, seus concorrentes estão dominando o mercado usando as mesmas técnicas que vamos revelar neste evento presencial.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PainPointsBlackFriday;

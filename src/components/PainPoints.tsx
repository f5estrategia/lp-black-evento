import { TrendingDown, UserX, PhoneMissed, BarChart3, Users } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    {
      icon: TrendingDown,
      title: "Investimento sem retorno claro",
      description: "Marketing que não traz resultados mensuráveis e você não sabe onde está o problema.",
    },
    {
      icon: UserX,
      title: "Leads desqualificados",
      description: "Pacientes que só procuram por preço e não valorizam a qualidade do seu trabalho.",
    },
    {
      icon: PhoneMissed,
      title: "Equipe que não converte",
      description: "Recepção que não sabe transformar contatos em agendamentos efetivos.",
    },
    {
      icon: BarChart3,
      title: "Falta de métricas",
      description: "Decisões baseadas em achismo, sem números reais para guiar o crescimento.",
    },
    {
      icon: Users,
      title: "Concorrência agressiva",
      description: "Competidores cada vez mais fortes na sua região, roubando seus pacientes.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[hsl(var(--luxury-black))] relative overflow-hidden">
      {/* Background with gradient - Like Hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e0a] via-[#2d1510] to-[#1a0e0a]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--f5-orange))]/15 via-transparent to-transparent" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[20%] right-[15%] w-[300px] h-[300px] rounded-full bg-[hsl(var(--f5-orange))]/25 blur-[100px] animate-float" style={{ animationDelay: "2s" }} />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-white to-[hsl(var(--text-secondary))] bg-clip-text text-transparent mb-4 md:mb-6">
            Sua clínica está cheia,<br />mas o faturamento não cresce?
          </h2>
          <p className="text-base md:text-lg text-[hsl(var(--text-secondary))]">
            Se você se identifica com algum destes desafios, nós podemos ajudar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-2xl md:rounded-3xl p-4 md:p-8 hover:-translate-y-2 hover:bg-[hsl(var(--luxury-dark-soft))] hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

              <div className="mb-3 md:mb-6 flex justify-center md:justify-start">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-[hsl(var(--f5-orange))]/10 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-[hsl(var(--f5-orange))] group-hover:to-[hsl(var(--f5-orange-dark))] group-hover:scale-110 transition-all duration-300">
                  <point.icon className="w-6 h-6 md:w-8 md:h-8 text-[hsl(var(--f5-orange))] group-hover:text-white transition-colors" />
                </div>
              </div>
              <h3 className="text-base md:text-xl font-bold mb-2 md:mb-3 text-white text-center md:text-left">{point.title}</h3>
              <p className="text-xs md:text-base text-[hsl(var(--text-secondary))] leading-relaxed text-center md:text-left">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16 px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[hsl(var(--luxury-dark))] to-[hsl(var(--luxury-black))] border border-[hsl(var(--f5-orange))]/30 rounded-2xl p-6 md:p-8 shadow-[0_10px_40px_hsl(var(--f5-orange)/0.2)]">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
              Não deixe sua clínica estagnada. Descubra como resolver isso.
            </h3>
            <button
              onClick={() => {
                const formSection = document.getElementById("contato");
                if (formSection) {
                  const headerHeight = 100;
                  const targetPosition = formSection.offsetTop - headerHeight - 20;
                  window.scrollTo({ top: targetPosition, behavior: "smooth" });
                }
              }}
              className="inline-flex items-center justify-center bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg uppercase tracking-wider shadow-[0_8px_30px_hsl(var(--f5-orange)/0.4)] hover:shadow-[0_12px_40px_hsl(var(--f5-orange)/0.6)] hover:-translate-y-1 transition-all duration-300"
            >
              Quero Me Inscrever Gratuitamente
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

export default PainPoints;

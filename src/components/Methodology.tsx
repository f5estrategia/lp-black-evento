import { Target, Award, Rocket, Users, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Methodology = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("contato");
    if (formSection) {
      const headerHeight = 100;
      const targetPosition = formSection.offsetTop - headerHeight - 20;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  const steps = [
    {
      number: "C",
      icon: Target,
      title: "Comunicação",
      description: "Comunicamos com o perfil exato de paciente que sua clínica precisa atrair.",
    },
    {
      number: "H",
      icon: Award,
      title: "Humanização",
      description: "Posicionamos sua clínica como autoridade na sua cidade através de conteúdo estratégico e presença digital dominante.",
    },
    {
      number: "A",
      icon: Rocket,
      title: "Anúncio",
      description: "Criamos anúncios pagos na plataforma que seu cliente consome seus serviços.",
    },
    {
      number: "V",
      icon: Users,
      title: "Vendas",
      description: "Gestão estratégica e oportunidades de vendas para sua equipe para transformar cada lead em fechamento.",
    },
    {
      number: "I",
      icon: BarChart,
      title: "Inteligência de dados",
      description: "Você acompanha o ROI de cada real investido em tempo real, com métricas claras e acionáveis.",
    },
  ];

  return (
    <section id="sistema" className="py-24 bg-gradient-to-b from-[hsl(var(--luxury-black))] to-[hsl(var(--luxury-dark))] relative overflow-hidden">
      {/* Background with gradient - Like Hero */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e0a] via-[#2d1510] to-[#1a0e0a] opacity-60" />
        
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-[30%] left-[10%] w-[350px] h-[350px] rounded-full bg-[hsl(var(--f5-orange))]/30 blur-[100px] animate-float" style={{ animationDelay: "4s" }} />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white to-[hsl(var(--text-secondary))] bg-clip-text text-transparent mb-6">
            Chega de achismo. Nosso Sistema é a Previsibilidade que sua Clínica Precisa
          </h2>
          <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed">
            Aplicamos uma metodologia validada em mais de 3.000 clínicas para criar um motor de crescimento previsível para o seu negócio.
          </p>
        </div>

        {/* System Flow */}
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 relative mb-16">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-10 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--f5-orange))] to-transparent opacity-30" />

          {steps.map((step, index) => (
            <div key={index} className="grid grid-cols-[60px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-6 items-start relative">
              {/* Number */}
              <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] flex items-center justify-center text-white font-extrabold text-xl md:text-2xl shadow-[0_10px_30px_hsl(var(--f5-orange)/0.4)] relative z-10">
                {step.number}
              </div>

              {/* Content */}
              <div className="bg-[hsl(var(--luxury-dark))] border border-white/8 rounded-xl md:rounded-2xl p-4 md:p-6 hover:translate-x-2 hover:bg-[hsl(var(--luxury-dark-soft))] hover:border-[hsl(var(--f5-orange))] hover:shadow-[0_10px_30px_hsl(var(--f5-orange)/0.2)] transition-all duration-300 group relative">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 pr-12">{step.title}</h3>
                <p className="text-sm md:text-base text-[hsl(var(--text-secondary))] leading-relaxed">
                  {step.description}
                </p>
                
                {/* Icon */}
                <div className="absolute top-4 md:top-6 right-4 md:right-6 w-8 h-8 md:w-10 md:h-10 bg-[hsl(var(--f5-orange))]/10 rounded-lg md:rounded-xl flex items-center justify-center">
                  <step.icon className="w-4 h-4 md:w-6 md:h-6 text-[hsl(var(--f5-orange))]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center px-4">
          <Button
            onClick={scrollToForm}
            size="lg"
            variant="outline"
            className="border-2 border-[hsl(var(--f5-orange))] text-white hover:bg-[hsl(var(--f5-orange))] hover:shadow-[0_8px_30px_hsl(var(--f5-orange)/0.4)] transition-all duration-300 hover:-translate-y-1 text-sm md:text-lg font-bold uppercase tracking-wide md:tracking-wider px-4 md:px-8 py-4 md:py-7 w-full md:w-auto"
          >
            <span className="block md:inline">QUERO PARTICIPAR</span>
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 inline-block" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Methodology;

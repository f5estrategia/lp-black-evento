import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Video, GraduationCap, Building, Gift, CreditCard, Calendar, Clock, Users, MapPin, Star, CalendarDays } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      id: "1",
      importante: true,
      icone: HelpCircle,
      pergunta: "A live realmente será gratuita?",
      resposta: "Sim, 100% gratuita. Não há qualquer custo para participar. Nosso objetivo é compartilhar estratégias validadas para que mais clínicas tenham sucesso na Black Friday."
    },
    {
      id: "2",
      importante: true,
      icone: Video,
      pergunta: "Vou receber a gravação depois?",
      resposta: "A gravação ficará disponível por 48 horas após o evento. Porém, recomendamos fortemente participar ao vivo para: fazer perguntas em tempo real, ter acesso prioritário aos bônus, interagir com outros dentistas e receber insights extras que só daremos ao vivo."
    },
    {
      id: "3",
      icone: GraduationCap,
      pergunta: "Preciso ter experiência com marketing digital?",
      resposta: "Não! O conteúdo é pensado para diferentes níveis: se você está começando, aprenderá o básico de forma estruturada; se já investe em tráfego, vai descobrir como otimizar e multiplicar resultados; se já teve resultados ruins, entenderá exatamente onde estava errando."
    },
    {
      id: "4",
      icone: Building,
      pergunta: "Minha clínica é pequena, funciona para mim?",
      resposta: "Com certeza! As estratégias são escaláveis e já foram aplicadas em: consultórios individuais (1 profissional), clínicas médias (2-5 profissionais) e redes grandes (10+ unidades). Você vai aprender a adaptar as táticas ao seu orçamento e estrutura."
    },
    {
      id: "5",
      importante: true,
      icone: Gift,
      pergunta: "Como recebo os materiais bônus?",
      resposta: "O link para download do Mini Treinamento CRC + E-book será disponibilizado durante a transmissão ao vivo para todos os participantes conectados. Por isso é importante estar presente."
    },
    {
      id: "6",
      icone: CreditCard,
      pergunta: "Vou ter que comprar algo depois?",
      resposta: "Não há obrigação alguma. A live é educacional e você pode aplicar tudo por conta própria. No final, haverá uma apresentação opcional de como a f5 pode ajudar quem quiser implementar com apoio especializado, mas é totalmente opcional."
    },
    {
      id: "7",
      icone: Calendar,
      pergunta: "Qual o melhor momento para fazer a Black Friday?",
      resposta: "Esta é justamente uma das estratégias que vamos revelar na live! O timing correto pode aumentar seus resultados em até 3x. Antecipar ou atrasar pode fazer toda a diferença."
    },
    {
      id: "8",
      icone: Clock,
      pergunta: "E se eu perder o horário?",
      resposta: "Você receberá o link da gravação, mas recomendamos MUITO que participe ao vivo porque: daremos insights extras que não estarão na gravação, você poderá tirar dúvidas específicas da sua clínica e o acesso aos bônus é prioritário para quem está ao vivo."
    },
    {
      id: "9",
      icone: Users,
      pergunta: "Posso levar minha equipe?",
      resposta: "Sim, por favor! Aliás, recomendamos fortemente que sua recepcionista/coordenadora comercial participe. As técnicas de CRC (Como Receber e Converter) são fundamentais para quem está na linha de frente do atendimento."
    },
    {
      id: "10",
      icone: MapPin,
      pergunta: "Vocês atendem minha região?",
      resposta: "A f5 atende clínicas em todo o Brasil (e até clientes internacionais). O trabalho é 100% remoto e altamente eficiente. Temos cases de sucesso de Florianópolis a Manaus, de São Paulo a Porto Alegre."
    },
    {
      id: "11",
      icone: Star,
      pergunta: "Por que a f5 é especialista em odontologia?",
      resposta: "São 8 anos focados especificamente no mercado de saúde, sendo 70% dos clientes clínicas odontológicas. Isso significa: conhecemos as dores reais do setor, sabemos o que funciona (e o que não funciona), temos dados de benchmarking precisos e entendemos a jornada do paciente odontológico."
    },
    {
      id: "12",
      icone: CalendarDays,
      pergunta: "Vou aprender sobre outras datas comerciais também?",
      resposta: "A live é focada em Black Friday, mas os 4 Pilares e o Checklist que ensinaremos podem ser adaptados para: Dia das Mães, Dia dos Pais, Dia do Cliente, Fim de ano e qualquer outra campanha sazonal."
    }
  ];

  const IconMap: { [key: string]: any } = {
    HelpCircle,
    Video,
    GraduationCap,
    Building,
    Gift,
    CreditCard,
    Calendar,
    Clock,
    Users,
    MapPin,
    Star,
    CalendarDays
  };

  return (
    <section className="relative py-24 overflow-hidden bg-[#0A0A0A]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--f5-orange)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">

          {/* Title */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-[#EFEFEF]">
              Tire suas dúvidas sobre a live
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => {
              const IconComponent = IconMap[faq.icone.name] || HelpCircle;

              return (
                <AccordionItem
                  key={faq.id}
                  value={faq.id}
                  className="bg-gradient-to-br from-[#0A0A0A] via-[hsl(var(--f5-orange))]/3 to-[#0A0A0A] border border-[hsl(var(--f5-orange))]/15 rounded-xl overflow-hidden hover:border-[hsl(var(--f5-orange))]/40 transition-all duration-300 data-[state=open]:border-[hsl(var(--f5-orange))]/40 data-[state=open]:bg-[hsl(var(--f5-orange))]/8"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-start gap-4 text-left w-full">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[hsl(var(--f5-orange))]/10 flex items-center justify-center group-hover:bg-[hsl(var(--f5-orange))]/20 transition-colors">
                        <IconComponent className="w-5 h-5 text-[hsl(var(--f5-orange))]" />
                      </div>
                      <div className="flex-1 pr-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-white text-base md:text-lg">
                            {faq.pergunta}
                          </span>
                          {faq.importante && (
                            <span className="px-2 py-0.5 bg-[hsl(var(--f5-orange))]/20 border border-[hsl(var(--f5-orange))]/40 rounded-full text-[10px] font-bold text-[hsl(var(--f5-orange))] uppercase tracking-wider">
                              Importante
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="pl-14 text-[#EFEFEF] leading-relaxed">
                      {faq.resposta}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;

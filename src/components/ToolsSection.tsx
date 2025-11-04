import googleAdsIcon from "@/assets/google-ads-icon.png";
import metaIcon from "@/assets/meta-icon.png";
import rdStationIcon from "@/assets/rd-station-icon.png";

const ToolsSection = () => {
  const tools = [
    {
      icon: "google",
      platform: "Google Ads",
      title: "Alta intenção de compra",
      description: "Atingimos clientes no exato momento em que procuram soluções",
      features: [
        "Palavras-chave estratégicas",
        "Segmentação demográfica",
        "Remarketing inteligente",
        "Negativação de palavras",
        "Otimização de leilão"
      ]
    },
    {
      icon: "meta",
      platform: "Meta Ads",
      title: "Facebook e Instagram",
      description: "Campanhas direcionadas para o perfil do seu público",
      features: [
        "Dados demográficos avançados",
        "Interesses e comportamentos",
        "Públicos personalizados",
        "Imagens, vídeos e carrossel",
        "Stories e Reels"
      ]
    },
    {
      icon: "rd",
      platform: "CRM & Funil",
      title: "Novo funil para vendas saudáveis",
      description: "Sistema completo de gestão e recompra de pacientes",
      features: [
        "Tráfego qualificado",
        "Lead tracking",
        "Lead que recompra",
        "Gestão de pacientes",
        "Ciclo contínuo de vendas"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[hsl(var(--luxury-black))] to-[hsl(var(--luxury-black))/95] relative overflow-hidden">
      {/* Background decoration - Enhanced */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[hsl(var(--f5-orange))] rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[hsl(var(--f5-orange))] rounded-full blur-[128px]" />
      </div>
      
      {/* Additional gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a0e0a]/40 via-transparent to-[#2d1510]/40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Nossas <span className="text-[hsl(var(--f5-orange))]">Ferramentas</span>
          </h2>
          <p className="text-base md:text-xl text-white/70 max-w-2xl mx-auto">
            Plataformas estratégicas para resultados mensuráveis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => {
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10 hover:border-[hsl(var(--f5-orange))]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,94,0,0.15)]"
              >
                {/* Icon */}
                <div className="mb-6 relative flex items-center justify-start h-16">
                  {tool.icon === "google" ? (
                    <img src={googleAdsIcon} alt="Google Ads" className="h-14 md:h-16 w-auto object-contain" width="64" height="64" loading="lazy" />
                  ) : tool.icon === "meta" ? (
                    <img src={metaIcon} alt="Meta" className="h-12 md:h-14 w-auto object-contain" width="56" height="56" loading="lazy" />
                  ) : tool.icon === "rd" ? (
                    <img src={rdStationIcon} alt="RD Station" className="h-12 md:h-14 w-auto object-contain" width="56" height="56" loading="lazy" />
                  ) : null}
                </div>

                {/* Platform badge */}
                <div className="inline-block px-4 py-1.5 rounded-full border border-[hsl(var(--f5-orange))]/30 mb-4">
                  <span className="text-[hsl(var(--f5-orange))] font-semibold text-sm">
                    {tool.platform}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {tool.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 mb-6 text-sm leading-relaxed">
                  {tool.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="text-[hsl(var(--f5-orange))] mt-1 flex-shrink-0">▸</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;

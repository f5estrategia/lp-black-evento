import clinicaPremium from "@/assets/clinica-premium.png";
import odontoCompany from "@/assets/odonto-company.png";
import odontoTop from "@/assets/odonto-top.png";
import oralUnique from "@/assets/oral-unique.png";
import redeSorriso from "@/assets/rede-sorriso.png";

const SocialProofBar = () => {
  const logos = [
    { src: odontoCompany, alt: "Odonto Company" },
    { src: oralUnique, alt: "Oral Unique" },
    { src: odontoTop, alt: "Odonto Top" },
    { src: clinicaPremium, alt: "Clínica Premium" },
    { src: redeSorriso, alt: "Rede Sorriso" },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-b from-[#1a0e0a] via-[#0a0504] to-[#1a0e0a] border-t border-b border-white/8 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-center text-[hsl(var(--text-secondary))] text-base md:text-lg font-medium tracking-wide mb-12">
          A confiança das maiores redes e clínicas do Brasil
        </h2>

        {/* Infinite Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] hover:[animation-play-state:paused]">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110"
                  width="150"
                  height="56"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110"
                  width="150"
                  height="56"
                  loading="lazy"
                />
              </div>
            ))}
            {/* Third set for extra smoothness */}
            {logos.map((logo, index) => (
              <div key={`logo-3-${index}`} className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16">
                <img 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-60 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0 hover:scale-110"
                  width="150"
                  height="56"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofBar;

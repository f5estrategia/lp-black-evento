import { useEffect, useRef } from "react";

// Import logos
import oralUnicLogo from "@/assets/black-friday/homologados/oral-unic-logo.png";
import odontoExcellenceLogo from "@/assets/black-friday/homologados/odonto-excellence-logo.png";
import sorrifacilLogo from "@/assets/black-friday/homologados/sorrifacil-logo.png";
import oralBrasilLogo from "@/assets/black-friday/homologados/oral-brasil-logo.png";
import odontotopLogo from "@/assets/black-friday/homologados/odontotop-logo.png";

const HomologatedClinicsBanner = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const clinics = [
    { name: "Oral Unic", logo: oralUnicLogo },
    { name: "Odonto Excellence", logo: odontoExcellenceLogo },
    { name: "SorriFacil", logo: sorrifacilLogo },
    { name: "Oral Brasil", logo: oralBrasilLogo },
    { name: "Odontotop", logo: odontotopLogo },
  ];

  // Duplicate for infinite scroll effect
  const duplicatedClinics = [...clinics, ...clinics, ...clinics];

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;

      // Reset when we've scrolled through one set of logos
      const singleSetWidth = scroller.scrollWidth / 3;
      if (scrollPosition >= singleSetWidth) {
        scrollPosition = 0;
      }

      scroller.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="relative py-8 md:py-12 overflow-hidden bg-gradient-to-b from-[#0A0A0A] via-[#0f0f0f] to-[#0A0A0A] border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-6 md:mb-8">
          <p className="text-xs md:text-sm text-white/50 uppercase tracking-wider font-semibold">
            Homologados por clínicas de sucesso
          </p>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

          {/* Scrolling logos */}
          <div
            ref={scrollerRef}
            className="flex gap-8 md:gap-12 overflow-x-hidden scrollbar-hide"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedClinics.map((clinic, index) => (
              <div
                key={`${clinic.name}-${index}`}
                className="flex-shrink-0 flex items-center justify-center grayscale opacity-40 hover:grayscale-0 hover:opacity-70 transition-all duration-300"
              >
                <img
                  src={clinic.logo}
                  alt={clinic.name}
                  className="h-10 md:h-12 w-auto"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomologatedClinicsBanner;

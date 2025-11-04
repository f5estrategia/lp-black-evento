import { Mail, MapPin } from "lucide-react";
import f5Logo from "@/assets/f5-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--luxury-black))] border-t border-white/8 py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={f5Logo} alt="f5 logo" className="h-12 w-auto" width="120" height="48" loading="lazy" />
              <span className="text-xl font-bold text-white">estratégia</span>
            </div>
            <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
              Especialistas em marketing para clínicas odontológicas, estéticas e de saúde. Transformamos investimento em crescimento previsível.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Soluções</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#sistema" className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--f5-orange))] transition-colors">
                  sistema f5
                </a>
              </li>
              <li>
                <a href="#resultados" className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--f5-orange))] transition-colors">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="text-[hsl(var(--text-secondary))] hover:text-[hsl(var(--f5-orange))] transition-colors">
                  Nosso Ecossistema
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">Contato</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-[hsl(var(--text-secondary))]">
                <Mail className="w-4 h-4 text-[hsl(var(--f5-orange))]" />
                <span>contato@f5estrategia.com</span>
              </li>
              <li className="flex items-center gap-2 text-[hsl(var(--text-secondary))]">
                <MapPin className="w-4 h-4 text-[hsl(var(--f5-orange))]" />
                <span>Florianópolis, SC</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-[hsl(var(--text-muted))] text-center md:text-left">
            <p>© 2025 f5 Estratégia - Aceleradora de Vendas | Todos os direitos reservados</p>
            <p className="text-xs mt-1">Especialistas em Marketing Digital para Clínicas de Saúde</p>
            <p className="text-xs">Florianópolis - SC | Atendimento em todo Brasil</p>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--f5-orange))] transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-[hsl(var(--text-muted))] hover:text-[hsl(var(--f5-orange))] transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

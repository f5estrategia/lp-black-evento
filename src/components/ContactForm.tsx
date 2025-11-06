import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase";
import { toast } from "sonner";
import { Loader2, CheckCircle2, Send } from "lucide-react";

// Import banner and partner logos
import {
  googlePartner,
  metaPartner,
  rdStationPartner,
  heroBannerDesktop,
  heroBannerMobile
} from "./HeroBlackFriday";

// Validation schema
const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefone: z.string()
    .min(10, "Telefone inválido")
    .regex(/^[\d\s\-\(\)]+$/, "Telefone deve conter apenas números")
    .transform(val => val.replace(/\D/g, "")),
  empresa: z.string().min(2, "Nome da empresa deve ter no mínimo 2 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Captura parâmetros UTM da URL
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source') || '';
      const utmMedium = urlParams.get('utm_medium') || '';
      const utmCampaign = urlParams.get('utm_campaign') || '';
      const utmTerm = urlParams.get('utm_term') || '';
      const utmContent = urlParams.get('utm_content') || '';

      // Prepare data for Supabase - estrutura correta da tabela leads_topo
      const leadData = {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        campos_personalizado: {
          empresa: data.empresa,
          source: 'black_evento',
          tipo_evento: 'presencial',
        },
        nome_formulario: 'Black Friday Evento 2025',
        id_formulario: 'black_evento',
        url_conversao: window.location.href,
        data_conversao: new Date().toISOString(),
        // Colunas UTM diretas na tabela
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        utm_term: utmTerm,
        utm_content: utmContent,
      };

      console.log('📤 Enviando para Supabase:', leadData);

      // Insert into Supabase - leads_topo
      const { data: insertedData, error } = await supabase
        .from('leads_topo')
        .insert([leadData])
        .select();

      if (error) {
        console.error('❌ Erro Supabase completo:', {
          message: error.message,
          details: error.details,
          hint: error.hint,
          code: error.code,
          table: 'leads_topo',
          dados_enviados: leadData,
        });
        throw new Error(`Supabase: ${error.message || 'Erro desconhecido'}`);
      }

      console.log('✅ Lead salvo com sucesso:', insertedData);

      // Success
      setIsSuccess(true);
      toast.success("Inscrição confirmada!", {
        description: "Você receberá o link da live por email. Verifique sua caixa de entrada.",
        duration: 5000,
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        reset();
        setIsSuccess(false);
      }, 3000);

    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Erro ao enviar inscrição", {
        description: "Por favor, tente novamente ou entre em contato conosco.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="relative min-h-screen pt-28 md:pt-[140px] pb-12 md:pb-24 overflow-hidden bg-gradient-to-br from-[#0A0A0A] via-[#1a0e0a] to-[#0A0A0A]">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-[hsl(var(--f5-orange))]/35 blur-[80px] md:blur-[100px] animate-float" />
        <div className="absolute top-[60%] right-[10%] w-[200px] md:w-[400px] h-[200px] md:h-[400px] rounded-full bg-[hsl(var(--f5-orange))]/35 blur-[80px] md:blur-[100px] animate-float" style={{ animationDelay: "5s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Main Headline */}
          <div className="text-center animate-fade-in-up mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight px-2">
              O Evento Que Vai Mudar Seu{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--f5-orange))] via-orange-400 to-[hsl(var(--f5-orange-dark))] bg-clip-text text-transparent">
                Faturamento
              </span>{" "}
              Ainda em 2025
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-[#EFEFEF] max-w-4xl mx-auto leading-relaxed px-4 mb-6">
              Estratégias avançadas de crescimento empresarial com Fernando Machado, CEO da F5 Estratégia
            </p>
          </div>

          {/* Mobile Banner - shown only on mobile before form */}
          <div className="md:hidden mb-8 px-2 animate-fade-in-up">
            <img
              src={heroBannerDesktop}
              alt="Black Friday - 13 de Novembro às 19h - Talk com Fernando Machado, CEO F5 Estratégia"
              className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
              loading="eager"
            />
          </div>

          {/* Banner + Form Layout - Desktop side by side, Mobile stacked */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">

            {/* Banner Column - Hidden on mobile, visible on desktop */}
            <div className="hidden md:flex flex-col gap-6 animate-fade-in-up">
              {/* Banner */}
              <img
                src={heroBannerDesktop}
                alt="Black Friday - 13 de Novembro às 19h - Talk com Fernando Machado, CEO F5 Estratégia"
                className="w-full h-auto rounded-xl shadow-2xl border border-white/10"
                loading="eager"
              />

              {/* Partner Badges - Desktop Only */}
              <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6">
                <p className="text-center text-white/70 text-sm mb-4">
                  Parceiros Oficiais:
                </p>
                <div className="flex items-center justify-center gap-6">
                  <img
                    src={googlePartner}
                    alt="Google Partner"
                    className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src={metaPartner}
                    alt="Meta Partner"
                    className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src={rdStationPartner}
                    alt="RD Station Partner"
                    className="h-10 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
            </div>

            {/* Form - Mobile Optimized */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl">

              {/* Form Title - Inside Form Card */}
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3">
                  Garanta Sua Vaga{" "}
                  <span className="bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[#D4AF37] bg-clip-text text-transparent">
                    Gratuita
                  </span>
                </h2>
                <p className="text-sm md:text-base text-[#EFEFEF]">
                  Preencha o formulário. Vagas limitadas!
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* Nome */}
              <div>
                <Label htmlFor="nome" className="text-white font-medium mb-2 block text-sm md:text-base">
                  Nome Completo <span className="text-[hsl(var(--f5-orange))]">*</span>
                </Label>
                <Input
                  id="nome"
                  {...register("nome")}
                  placeholder="Digite seu nome completo"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[hsl(var(--f5-orange))] focus:ring-[hsl(var(--f5-orange))] text-base h-12"
                  disabled={isSubmitting || isSuccess}
                />
                {errors.nome && (
                  <p className="text-red-400 text-xs md:text-sm mt-1">{errors.nome.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-white font-medium mb-2 block text-sm md:text-base">
                  Email <span className="text-[hsl(var(--f5-orange))]">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="seu@email.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[hsl(var(--f5-orange))] focus:ring-[hsl(var(--f5-orange))] text-base h-12"
                  disabled={isSubmitting || isSuccess}
                />
                {errors.email && (
                  <p className="text-red-400 text-xs md:text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* WhatsApp */}
              <div>
                <Label htmlFor="telefone" className="text-white font-medium mb-2 block text-sm md:text-base">
                  WhatsApp <span className="text-[hsl(var(--f5-orange))]">*</span>
                </Label>
                <Input
                  id="telefone"
                  {...register("telefone")}
                  placeholder="(00) 00000-0000"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[hsl(var(--f5-orange))] focus:ring-[hsl(var(--f5-orange))] text-base h-12"
                  disabled={isSubmitting || isSuccess}
                />
                {errors.telefone && (
                  <p className="text-red-400 text-xs md:text-sm mt-1">{errors.telefone.message}</p>
                )}
              </div>

              {/* Empresa */}
              <div>
                <Label htmlFor="empresa" className="text-white font-medium mb-2 block text-sm md:text-base">
                  Nome da Empresa <span className="text-[hsl(var(--f5-orange))]">*</span>
                </Label>
                <Input
                  id="empresa"
                  {...register("empresa")}
                  placeholder="Digite o nome da sua empresa"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-[hsl(var(--f5-orange))] focus:ring-[hsl(var(--f5-orange))] text-base h-12"
                  disabled={isSubmitting || isSuccess}
                />
                {errors.empresa && (
                  <p className="text-red-400 text-xs md:text-sm mt-1">{errors.empresa.message}</p>
                )}
              </div>

              {/* Submit Button - Mobile Optimized */}
              <Button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full bg-gradient-to-r from-[hsl(var(--f5-orange))] to-[hsl(var(--f5-orange-dark))] hover:shadow-[0_8px_30px_hsl(var(--f5-orange)/0.5)] transition-all duration-300 text-base md:text-lg font-bold uppercase tracking-wider py-5 md:py-6 h-auto disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 md:h-5 md:w-5 animate-spin" />
                    <span className="text-sm md:text-base">Processando...</span>
                  </>
                ) : isSuccess ? (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-sm md:text-base">Inscrição Confirmada!</span>
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    <span className="hidden md:inline">Garantir Minha Vaga Gratuita</span>
                    <span className="md:hidden">Garantir Vaga Agora</span>
                  </>
                )}
              </Button>

              {/* Security Notice - Mobile Optimized */}
              <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-white/50 pt-2">
                <svg className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span>Seus dados estão 100% seguros</span>
              </div>

              {/* Partner Badges - Mobile Only */}
              <div className="md:hidden pt-4 border-t border-white/10">
                <p className="text-center text-white/70 text-xs mb-3">
                  Parceiros Oficiais:
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={googlePartner}
                    alt="Google Partner"
                    className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src={metaPartner}
                    alt="Meta Partner"
                    className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src={rdStationPartner}
                    alt="RD Station Partner"
                    className="h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

            </form>
          </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;

import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase environment variables');
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Interface para os dados do lead
interface LeadData {
  nome: string;
  email: string;
  whatsapp: string;
  ip_address?: string | null;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  utm_term?: string | null;
  utm_content?: string | null;
  device_type?: string | null;
  user_agent?: string | null;
  screen_resolution?: string | null;
  language?: string | null;
  page_url?: string | null;
  referrer?: string | null;
}

// Função para validar email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Função para validar WhatsApp (apenas números, mínimo 10 dígitos)
const isValidWhatsApp = (whatsapp: string): boolean => {
  const digitsOnly = whatsapp.replace(/\D/g, '');
  return digitsOnly.length >= 10;
};

export default async function handler(req: any, res: any) {
  // Permitir CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Responder OPTIONS para preflight
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Apenas aceitar POST
  if (req.method !== 'POST') {
    return res.status(405).json({ 
      success: false, 
      error: 'Método não permitido. Use POST.' 
    });
  }

  try {
    const leadData: LeadData = req.body;

    // Validações básicas
    if (!leadData.nome || leadData.nome.trim().length < 2) {
      return res.status(400).json({ 
        success: false, 
        error: 'Nome inválido. Deve ter pelo menos 2 caracteres.' 
      });
    }

    if (!leadData.email || !isValidEmail(leadData.email)) {
      return res.status(400).json({ 
        success: false, 
        error: 'Email inválido.' 
      });
    }

    if (!leadData.whatsapp || !isValidWhatsApp(leadData.whatsapp)) {
      return res.status(400).json({ 
        success: false, 
        error: 'WhatsApp inválido. Deve conter pelo menos 10 dígitos.' 
      });
    }

    // Limpar WhatsApp (apenas números)
    const cleanWhatsApp = leadData.whatsapp.replace(/\D/g, '');

    // Preparar dados para inserção
    const dataToInsert = {
      nome: leadData.nome.trim(),
      email: leadData.email.trim().toLowerCase(),
      whatsapp: cleanWhatsApp,
      ip_address: leadData.ip_address || null,
      utm_source: leadData.utm_source || null,
      utm_medium: leadData.utm_medium || null,
      utm_campaign: leadData.utm_campaign || null,
      utm_term: leadData.utm_term || null,
      utm_content: leadData.utm_content || null,
      device_type: leadData.device_type || null,
      user_agent: leadData.user_agent || null,
      screen_resolution: leadData.screen_resolution || null,
      language: leadData.language || null,
      page_url: leadData.page_url || null,
      referrer: leadData.referrer || null,
      created_at: new Date().toISOString(),
    };

    // Inserir no Supabase
    const { data, error } = await supabase
      .from('leads_topo')
      .insert([dataToInsert])
      .select();

    if (error) {
      console.error('Erro ao inserir no Supabase:', error);
      return res.status(500).json({ 
        success: false, 
        error: 'Erro ao salvar os dados. Tente novamente.' 
      });
    }

    // Log de sucesso
    console.log('Lead inserido com sucesso:', {
      id: data[0]?.id,
      email: dataToInsert.email,
      timestamp: new Date().toISOString()
    });

    // Resposta de sucesso
    return res.status(200).json({ 
      success: true, 
      message: 'Lead cadastrado com sucesso!',
      data: {
        id: data[0]?.id,
        nome: dataToInsert.nome,
        email: dataToInsert.email
      }
    });

  } catch (error: any) {
    console.error('Erro no webhook:', error);
    return res.status(500).json({ 
      success: false, 
      error: 'Erro interno do servidor.' 
    });
  }
}

// Configuração da oferta. Preço, checkout, nomes e contador ficam SÓ aqui, nunca espalhados no HTML.
window.MB_CONFIG = {
  produto: 'Reset de Mobilidade em 8 Minutos',

  // Preço e checkout (Kiwify, produto 95380be0)
  preco: '67',
  precoCentavos: ',00',
  checkout: 'https://pay.kiwify.com.br/05j55l6',

  // Pixel da Utmify (criado na Utmify ligado ao pixel do Facebook da conta CN). Vazio = não carrega.
  utmifyPixelId: '6ae1bba03a0670cb2f428cc1',

  // Valores "avaliado em" (mesmos números da página original), somados automaticamente no total
  itens: [
    { nome: 'Aulas diárias guiadas', valor: 149 },
    { nome: 'Acompanhamento personalizado de 30 dias', valor: 189 },
    { nome: 'Avaliações de mobilidade', valor: 149 },
    { nome: 'Reset do sistema nervoso', valor: 79 },
    { nome: 'Reset específico para joelhos', valor: 39 },
  ],
  bonus: [
    { nome: 'Comunidade exclusiva', valor: 0 },
    { nome: 'Corrija sua caminhada', valor: 69 },
    { nome: 'Nutrição para as articulações', valor: 29 },
    { nome: 'Corrija sua respiração', valor: 49 },
    { nome: 'Rotina matinal de 1 minuto', valor: 38 },
  ],

  especialista: 'Eddie Ron',
  credencial: 'Terapeuta esportivo',
  marca: 'Trust Based Mobility',
  anosExperiencia: '15+',
  alunos: '50 mil+',
  garantiaDias: 30,

  // Contador até a meia-noite. Desligue (false) se não quiser.
  contador: true,
  nomeCampanha: 'PROMOÇÃO DE PRIMAVERA',
};

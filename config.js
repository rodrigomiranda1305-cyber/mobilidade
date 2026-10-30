// Configuração da oferta. Preço, checkout, nomes e contador ficam SÓ aqui, nunca espalhados no HTML.
window.MB_CONFIG = {
  produto: 'Reset de Mobilidade em 8 Minutos',

  // Preço e checkout: vêm da versão da página (MB_VARIANTES, no fim deste arquivo)

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

// Teste de preços (30/10/2026): 4 versões da mesma página, uma por oferta da Kiwify
// (mesmo produto 95380be0, mesma área de membros, mesmo order bump de R$ 9,90).
// /p1/ a /p4/ definem window.MB_VARIANTE antes de carregar este arquivo; a raiz usa a p4.
// O % de desconto é calculado no app.js sobre o valor total (R$ 790), arredondado para baixo.
window.MB_VARIANTES = {
  p1: { preco: '19', precoCentavos: ',90', checkout: 'https://pay.kiwify.com.br/vfhhO9D' },
  p2: { preco: '27', precoCentavos: ',00', checkout: 'https://pay.kiwify.com.br/DuGb7pf' },
  p3: { preco: '37', precoCentavos: ',00', checkout: 'https://pay.kiwify.com.br/opAS3FC' },
  p4: { preco: '49', precoCentavos: ',90', checkout: 'https://pay.kiwify.com.br/NMnyp10' },
};
(function () {
  var nome = window.MB_VARIANTES[window.MB_VARIANTE] ? window.MB_VARIANTE : 'p4';
  var v = window.MB_VARIANTES[nome];
  for (var k in v) window.MB_CONFIG[k] = v[k];
  window.MB_CONFIG.variante = nome;
})();

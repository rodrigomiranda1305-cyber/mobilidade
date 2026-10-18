// Configuração da oferta. Preço, checkout, nomes e contador ficam SÓ aqui, nunca espalhados no HTML.
window.MB_CONFIG = {
  produto: 'Reset de Mobilidade em 8 Minutos',

  // A DEFINIR com o usuário: preço final e checkout
  preco: '67',
  precoCentavos: ',00',
  checkout: '#oferta',

  // Valores "avaliado em" de cada item (somados automaticamente no total)
  itens: [
    { nome: 'Aulas diárias guiadas', valor: 297 },
    { nome: 'Acompanhamento de 30 dias', valor: 397 },
    { nome: 'Avaliações de mobilidade', valor: 297 },
    { nome: 'Reset do sistema nervoso', valor: 147 },
    { nome: 'Reset específico para joelhos', valor: 97 },
  ],
  bonus: [
    { nome: 'Comunidade exclusiva', valor: 0 },
    { nome: 'Corrija sua caminhada', valor: 127 },
    { nome: 'Alimentação para as articulações', valor: 67 },
    { nome: 'Corrija sua respiração', valor: 97 },
    { nome: 'Rotina matinal de 1 minuto', valor: 77 },
  ],

  // A DEFINIR: quem é o rosto da oferta (nome real, formação real)
  especialista: 'Nome do Especialista',
  credencial: 'Fisioterapeuta',
  marca: 'Método Mobilidade Confiante',

  // Números da faixa de autoridade (só usar números verdadeiros)
  anosExperiencia: '15+',
  alunos: '50 mil+',

  garantiaDias: 30,

  // Contador até a meia-noite. Desligue (false) se não houver prazo real.
  contador: true,
  nomeCampanha: 'OFERTA DE LANÇAMENTO',
};

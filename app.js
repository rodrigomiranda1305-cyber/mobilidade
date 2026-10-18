// Preenche a página a partir do config.js: textos, valores, total, contador, carrosséis e animação de entrada
(function () {
  var C = window.MB_CONFIG || {};
  var brl = function (v) { return 'R$ ' + v.toLocaleString('pt-BR'); };
  var todos = function (sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); };

  todos('[data-cfg]').forEach(function (el) {
    var v = C[el.getAttribute('data-cfg')];
    if (v !== undefined && v !== '') el.textContent = v;
  });

  // valores dos itens e bônus
  todos('[data-valor]').forEach(function (el) { var i = C.itens[+el.getAttribute('data-valor')]; el.textContent = brl(i.valor) + ' de valor'; });
  todos('[data-bonus]').forEach(function (el) { var b = C.bonus[+el.getAttribute('data-bonus')]; el.textContent = b.valor ? brl(b.valor) + ' de valor' : 'Acesso grátis'; });

  var soma = function (l) { return l.reduce(function (s, x) { return s + x.valor; }, 0); };
  var total = soma(C.itens) + soma(C.bonus);
  var preco = parseFloat(String(C.preco).replace(',', '.')) || 0;
  todos('[data-total]').forEach(function (el) { el.textContent = brl(total); });
  todos('[data-economia]').forEach(function (el) { el.textContent = brl(Math.round(total - preco)); });

  // lista da caixa de preço
  var lp = document.querySelector('[data-lista-preco]');
  if (lp) {
    var html = C.itens.map(function (i) { return '<li><span>' + i.nome + '</span><b>' + brl(i.valor) + '</b></li>'; }).join('');
    html += '<li><span>Mais ' + C.bonus.length + ' bônus</span><b>' + brl(soma(C.bonus)) + '</b></li>';
    lp.innerHTML = html;
  }

  // links de checkout
  todos('[data-checkout]').forEach(function (a) { if (C.checkout) a.href = C.checkout; });

  // contador até a meia-noite
  var bar = document.querySelector('[data-contador-bar] .rel');
  var box = document.querySelector('[data-contador-box]');
  if (!C.contador) { if (bar) bar.style.display = 'none'; if (box) box.style.display = 'none'; }
  else {
    var pad = function (n) { return (n < 10 ? '0' : '') + n; };
    var tick = function () {
      var agora = new Date(), fim = new Date(agora); fim.setHours(24, 0, 0, 0);
      var s = Math.max(0, Math.floor((fim - agora) / 1000));
      var h = pad(Math.floor(s / 3600)), m = pad(Math.floor(s % 3600 / 60)), ss = pad(s % 60);
      todos('[data-h]').forEach(function (e) { e.textContent = h; });
      todos('[data-m]').forEach(function (e) { e.textContent = m; });
      todos('[data-s]').forEach(function (e) { e.textContent = ss; });
    };
    tick(); setInterval(tick, 1000);
  }

  // pontinhos dos carrosséis
  todos('[data-carrossel]').forEach(function (car) {
    var pts = car.parentNode.querySelector('[data-pontos]');
    if (!pts) return;
    var n = car.children.length;
    pts.innerHTML = new Array(n + 1).join('<i></i>');
    var marca = function () {
      var i = Math.round(car.scrollLeft / (car.children[0].offsetWidth + 14));
      Array.prototype.forEach.call(pts.children, function (p, k) { p.classList.toggle('on', k === Math.min(i, n - 1)); });
    };
    car.addEventListener('scroll', marca, { passive: true }); marca();
  });

  // entrada suave das seções
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('on'); io.unobserve(e.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
    todos('.sec .wrap > *').forEach(function (el) { el.classList.add('surge'); io.observe(el); });
  }
})();

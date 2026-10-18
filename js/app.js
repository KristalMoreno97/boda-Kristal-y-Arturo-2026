/* Lógica de la invitación (animaciones, cuenta regresiva, etc.). Normalmente no hace falta tocarlo. */
(function(){
  const C = CONFIG, $ = id => document.getElementById(id);
  const NS = 'http://www.w3.org/2000/svg';
  const mk = (tag, attrs, parent) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); if (parent) parent.appendChild(e); return e; };

  /* ---------- textos ---------- */
  const fecha = new Date(C.fecha);
  const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
  $('n1').textContent = C.novia; $('n2').textContent = C.novio;
  $('dd').textContent = fecha.getDate(); $('dm').textContent = meses[fecha.getMonth()]; $('dy').textContent = fecha.getFullYear();
  $('seal').textContent = (C.iniciales || (C.novio[0] + '&' + C.novia[0])).toUpperCase();
  $('msg').replaceChildren(
  ...C.mensaje.map(texto => {
    const p = document.createElement('p');
    p.textContent = texto;
    return p;
  })
);
  $('fn').textContent = C.novia + ' & ' + C.novio;
  $('fd').textContent = fecha.getDate() + ' de ' + meses[fecha.getMonth()] + ' de ' + fecha.getFullYear();
  document.title = C.novia + ' & ' + C.novio + ' · Nuestra boda';
  $('foto').src = C.foto;
    if (C.fondo) { $('hero').style.backgroundImage = "url('" + C.fondo + "')"; $('hero').classList.add('photo-bg'); }

  const dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
  const fechaLarga = dias[fecha.getDay()] + ' ' + fecha.getDate() + ' de ' + meses[fecha.getMonth()];
  function lugar(p, o){
    $(p+'L').textContent = o.lugar;
    $(p+'H').textContent = fechaLarga + ' · ' + o.hora;
    $(p+'D').textContent = o.direccion;
    $(p+'M').href = o.mapa || ('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(o.lugar + ' ' + o.direccion));
  }
  lugar('cer', C.ceremonia); lugar('rec', C.recepcion);

  /* ---------- itinerario ---------- */
  if (Array.isArray(C.itinerario) && C.itinerario.length) {
    C.itinerario.forEach((it, i) => {
      const row = document.createElement('div');
      row.className = 'tl-item'; row.style.setProperty('--i', i);
      row.innerHTML = '<div class="tl-time"><b></b><small></small></div><div class="tl-mid"><span class="tl-dot"></span></div><div class="tl-body"><h3></h3><p></p></div>';
      row.querySelector('b').textContent = it.hora || '';
      row.querySelector('small').textContent = it.ampm || '';
      row.querySelector('h3').textContent = it.titulo || '';
      row.querySelector('p').textContent = it.texto || '';
      $('tl').appendChild(row);
    });
  } else { $('tlBox').style.display = 'none'; }

  /* ---------- regalos / sobres ---------- */
  const g = C.regalos;
  if (g) {
    $('giftT1').textContent = g.titulo1 || 'Tu presencia es';
    $('giftT2').textContent = g.titulo2 || 'nuestro regalo';
    $('giftText').textContent = g.texto || '';
    const ac = g.cuenta || {};
    const rows = [['Banco', ac.banco], ['Titular', ac.titular], ['CLABE', ac.clabe, true], ['Tarjeta', ac.tarjeta, true]].filter(r => r[1]);
    if (rows.length) {
      const panel = $('giftPanel');
      rows.forEach(([k, v, copiable]) => {
        const row = document.createElement('div'); row.className = 'gift-row';
        const box = document.createElement('div');
        const lab = document.createElement('small'); lab.textContent = k;
        const val = document.createElement('span'); val.textContent = v;
        box.append(lab, val); row.appendChild(box);
        if (copiable) {
          const b = document.createElement('button'); b.type = 'button'; b.className = 'gift-copy'; b.textContent = 'Copiar';
          b.addEventListener('click', () => {
            const ok = () => { b.textContent = '¡Copiado!'; setTimeout(() => b.textContent = 'Copiar', 1800); };
            try { navigator.clipboard.writeText(v).then(ok, ok); } catch (e) { ok(); }
          });
          row.appendChild(b);
        }
        panel.appendChild(row);
      });
      if (ac.nota) { const n = document.createElement('p'); n.className = 'gift-note'; n.textContent = ac.nota; panel.appendChild(n); }
      $('giftBtn').addEventListener('click', () => {
        const open = panel.hidden; panel.hidden = !open;
        $('giftBtn').setAttribute('aria-expanded', String(open));
        $('giftBtn').textContent = open ? 'Ocultar datos de la cuenta' : 'Ver datos de la cuenta';
      });
    } else { $('giftBtn').style.display = 'none'; }
  } else { $('giftBox').style.display = 'none'; }
  $('dress').textContent = C.vestimenta;
  $('dressEllos').textContent = C.vestimentaEllos || ''; $('dressEllas').textContent = C.vestimentaEllas || '';
  const dc = document.querySelector('.dresscode');
  if (C.colorEllos) dc.style.setProperty('--suit', C.colorEllos);
  if (C.colorEllas) dc.style.setProperty('--gown', C.colorEllas);
  $('dressN').textContent = C.vestimentaNota || ''; if (!C.vestimentaNota) $('dressN').style.display = 'none';
  if (C.whatsapp) $('rsvp').href = 'https://wa.me/' + C.whatsapp + '?text=' + encodeURIComponent(C.whatsappMensaje);
 

  /* ---------- ramas de olivo ---------- */
  // hoja de olivo: larga y angosta, puntiaguda
  const leafD = s => 'M0 0C'+(.22*s)+' '+(-.13*s)+' '+(.7*s)+' '+(-.13*s)+' '+s+' 0C'+(.7*s)+' '+(.13*s)+' '+(.22*s)+' '+(.13*s)+' 0 0Z';
  // aceituna con su rabito
  function fruit(svg, p, ang, side, delay, k){
    const g = mk('g', {class:'fruit', style:'--d:'+delay+'s', transform:'translate('+p.x+' '+p.y+') rotate('+(ang+side*62)+') scale('+(k||1)+')'}, svg);
    mk('path', {d:'M0 0L5 0'}, g);
    mk('ellipse', {cx:8.2, cy:0, rx:3.7, ry:2.5}, g);
  }
  function branch(svg, d, n, size, delay, withFruit){
    const stem = mk('path', {d:d, class:'stem', pathLength:1, style:'--d:'+delay+'s'}, svg);
    const len = stem.getTotalLength();
    for (let i=1;i<=n;i++){
      const t = i/(n+1)*len, p = stem.getPointAtLength(t), q = stem.getPointAtLength(Math.min(len, t+1));
      const ang = Math.atan2(q.y-p.y, q.x-p.x)*180/Math.PI, s = size*(1-.4*i/n), dl = delay + .15 + i/n*1.5;
      [-1,1].forEach(side => mk('path', {
        d:leafD(s), transform:'translate('+p.x+' '+p.y+') rotate('+(ang+side*36)+')', pathLength:1, class:'leaf', style:'--d:'+dl+'s'
      }, svg));
    }
    // hoja final (en la punta)
    const e = stem.getPointAtLength(len), e2 = stem.getPointAtLength(len-1);
    const ea = Math.atan2(e.y-e2.y, e.x-e2.x)*180/Math.PI;
    mk('path', {d:leafD(size*.7), transform:'translate('+e.x+' '+e.y+') rotate('+ea+')', pathLength:1, class:'leaf', style:'--d:'+(delay+1.8)+'s'}, svg);
    if (withFruit) [.30,.52,.74].forEach((f,i) => {
      const t = len*f, p = stem.getPointAtLength(t), q = stem.getPointAtLength(Math.min(len, t+1));
      fruit(svg, p, Math.atan2(q.y-p.y, q.x-p.x)*180/Math.PI, i%2 ? -1 : 1, delay+1.5+i*.3, size/18);
    });
  }

  // corona dorada alrededor del sello (dos ramas de olivo espejo)
  const w = $('wreath');
  branch(w, 'M73.8 156.2 A62 62 0 0 1 78.8 41.7', 10, 18, .2, true);
  branch(w, 'M126.2 156.2 A62 62 0 0 0 121.2 41.7', 10, 18, .2, true);

  /* ---------- mesa: hojas grandes, olivo y gypsophila ---------- */
  const rng = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const f1 = n => n.toFixed(1);
  function bigLeaf(svg, x, y, ang, s, col){
    const g = mk('g', {transform:'translate('+f1(x)+' '+f1(y)+') rotate('+(ang*180/Math.PI).toFixed(1)+')'}, svg);
    mk('path', {d:'M0 0C'+(.25*s)+' '+(-.24*s)+' '+(.72*s)+' '+(-.24*s)+' '+s+' 0C'+(.72*s)+' '+(.24*s)+' '+(.25*s)+' '+(.24*s)+' 0 0Z', fill:col}, g);
    mk('path', {d:'M0 0L'+s+' 0', stroke:'rgba(255,255,255,.28)', 'stroke-width':1.4, fill:'none'}, g);
  }
  // rama de gypsophila: tallos finitos que se ramifican y terminan en florecitas blancas
  function gyp(svg, x, y, a, l, depth, R, sc){
    const x2 = x+Math.cos(a)*l, y2 = y+Math.sin(a)*l, cx = (x+x2)/2+(R()-.5)*l*.3, cy = (y+y2)/2+(R()-.5)*l*.3;
    mk('path', {d:'M'+f1(x)+' '+f1(y)+'Q'+f1(cx)+' '+f1(cy)+' '+f1(x2)+' '+f1(y2), class:'gstem'}, svg);
    if (depth > 0){
      for (let i=0;i<2;i++){ const t = .4+R()*.5; gyp(svg, x+(x2-x)*t, y+(y2-y)*t, a+(R()<.5?-1:1)*(.35+R()*.7), l*(.5+R()*.2), depth-1, R, sc); }
      gyp(svg, x2, y2, a+(R()-.5)*.6, l*.55, depth-1, R, sc);
    } else {
      const n = 3+Math.floor(R()*3);
      for (let i=0;i<n;i++) mk('circle', {cx:f1(x2+(R()-.5)*10*sc), cy:f1(y2+(R()-.5)*10*sc), r:f1((1.5+R()*1.7)*sc), fill:'url(#flw)'}, svg);
    }
  }
  let sceneW = 0, sceneH = 0;
  function buildScene(){
    const heroEl = $('hero'), W = heroEl.clientWidth, H = heroEl.clientHeight;
    if (!W || !H) return;
    sceneW = W; sceneH = H;
    const back = $('scene'), front = $('sceneFront'), M = Math.min(W,H), X = Math.max(W,H), R = rng(11), sc = Math.max(.8, M/450);
    [back, front].forEach(s => { s.innerHTML = ''; s.setAttribute('viewBox', '0 0 '+W+' '+H); });
    const defs = mk('defs', {}, back), rg = mk('radialGradient', {id:'flw'}, defs);
    mk('stop', {offset:0, 'stop-color':'#fffef8'}, rg); mk('stop', {offset:.7, 'stop-color':'#fbf6e6'}, rg); mk('stop', {offset:1, 'stop-color':'#e6dcbe'}, rg);

    // hojas grandes verdes debajo de todo
    const cols = ['#355a2b','#46703a','#2f4d27','#58803f'];
    [[.02,.62,-.5,1],[0,.92,-.95,1.1],[.1,.08,.75,.9],[.98,.3,Math.PI+.5,1],[.97,.8,Math.PI-.55,1.1],[.55,1.02,-1.5,.85]]
      .forEach((b,i) => bigLeaf(back, b[0]*W, b[1]*H, b[2], Math.min(X*.32, 430)*b[3], cols[i%4]));

    // ramas de olivo que salen de detrás de la invitación
    const size = Math.max(20, Math.min(38, M*.065));
    for (let i=0;i<5;i++){
      const th = i*Math.PI*2/5 + R()*.5, cx = W/2, cy = H/2, ux = Math.cos(th), uy = Math.sin(th), px = -uy, py = ux;
      const sx = cx+ux*.16*X, sy = cy+uy*.16*X, ex = cx+ux*.66*X, ey = cy+uy*.66*X, o = (R()-.5)*.3*X;
      const d = 'M'+f1(sx)+' '+f1(sy)+' C '+f1(sx+(ex-sx)*.35+px*o)+' '+f1(sy+(ey-sy)*.35+py*o)+', '+f1(sx+(ex-sx)*.7-px*o)+' '+f1(sy+(ey-sy)*.7-py*o)+', '+f1(ex)+' '+f1(ey);
      branch(back, d, Math.max(10, Math.round(Math.hypot(ex-sx, ey-sy)*1.05/(size*.85))), size, 0, true);
    }

    // gypsophila regada por la mesa
    for (let i=0;i<14;i++){
      let x, y, tries = 0;
      do { x = R()*W; y = R()*H; tries++; } while (Math.abs(x/W-.5) < .25 && Math.abs(y/H-.5) < .25 && tries < 12);
      gyp(back, x, y, Math.atan2(y-H/2, x-W/2)+(R()-.5)*1.6, M*(.16+R()*.1), 3, R, sc);
    }

    // unas ramitas por encima, rozando las esquinas de la invitación
    const cd = $('card'), cw = cd.offsetWidth, ch = cd.offsetHeight, hr = heroEl.getBoundingClientRect(), cr = cd.getBoundingClientRect();
    const ccx = cr.left-hr.left+cr.width/2, ccy = cr.top-hr.top+cr.height/2, T = (cd.classList.contains('open') ? -2 : -9)*Math.PI/180;
    const corner = (sx, sy) => [ccx + sx*cw/2*Math.cos(T) - sy*ch/2*Math.sin(T), ccy + sx*cw/2*Math.sin(T) + sy*ch/2*Math.cos(T)];
    const bl = corner(-.82, .96), tr = corner(.82, -.96), br = corner(.92, .9);
    gyp(front, bl[0], bl[1], 2.5, M*.2, 3, R, sc);
    gyp(front, tr[0], tr[1], -1.0, M*.2, 3, R, sc);
    gyp(front, br[0], br[1], .9, M*.18, 3, R, sc);
  }

  /* ---------- abrir ---------- */
  const card = $('card'), hero = $('hero'), audio = $('audio'), mbtn = $('musicBtn');
  function abrir(){
    if (card.classList.contains('open')) return;
    card.classList.add('open'); hero.classList.add('opened');
    card.removeAttribute('aria-label');
    setTimeout(() => document.body.classList.add('unlocked'), 2200);
    if (audio.src && mbtn.classList.contains('show')) audio.play().then(() => mbtn.textContent = '♪').catch(()=>{});
  }
  card.addEventListener('click', abrir);
  card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); abrir(); } });

  /* ---------- música (opcional) ---------- */
  audio.src = C.musica;
  audio.addEventListener('loadedmetadata', () => { mbtn.classList.add('show'); });
  audio.addEventListener('error', () => { mbtn.classList.remove('show'); });
  mbtn.addEventListener('click', () => {
    if (audio.paused) { audio.play(); mbtn.textContent = '♪'; mbtn.style.opacity = 1; }
    else { audio.pause(); mbtn.style.opacity = .5; }
  });

  /* ---------- cuenta regresiva ---------- */
  function tick(){
    let ms = fecha - new Date();
    if (ms < 0) ms = 0;
    const s = Math.floor(ms/1000);
    $('cd').textContent = Math.floor(s/86400);
    $('ch').textContent = Math.floor(s%86400/3600);
    $('cm').textContent = Math.floor(s%3600/60);
    $('cs').textContent = s%60;
  }
  tick(); setInterval(tick, 1000);

  /* ---------- aparecer al hacer scroll ---------- */
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), {threshold:.15});
  document.querySelectorAll('.section, .tl-item').forEach(s => io.observe(s));

  /* ---------- armar la escena de la mesa ---------- */
  buildScene();
  let rt;
  addEventListener('resize', () => {
    clearTimeout(rt);
    rt = setTimeout(() => { if (Math.abs(hero.clientWidth - sceneW) > 2 || Math.abs(hero.clientHeight - sceneH) > 80) buildScene(); }, 250);
  });

    /* ---- confirmación (RSVP) ---- */
  (function () {
    const c = CONFIG.confirmacion;
    if (!c) return;

    document.getElementById('rsvpEyebrow').textContent = c.eyebrow;
    document.getElementById('rsvpTitulo').innerHTML = `${c.titulo1}<br><em>${c.titulo2}</em>`;
    document.getElementById('rsvpTexto').textContent = c.texto;
    document.getElementById('rsvpSaludo').textContent = c.saludo;

    const sel = document.getElementById('rsvpPersonas');
    const box = document.getElementById('rsvpPersonasBox');
    const acBox = document.getElementById('rsvpAcompBox');

    // mostrar nombres de acompañantes si son más de 1
   const updAcomp = () => { if (acBox) acBox.style.display = Number(sel.value) > 1 ? '' : 'none'; };
    sel.addEventListener('input', updAcomp);
    updAcomp();

    // ocultar "cuántos" si no asiste
    document.querySelectorAll('input[name="asiste"]').forEach(r =>
      r.addEventListener('change', () => {
        const si = document.querySelector('input[name="asiste"]:checked').value === 'si';
        box.style.display = si ? '' : 'none';
      })
    );

    // enviar por WhatsApp
    document.getElementById('rsvpForm').addEventListener('submit', e => {
      e.preventDefault();
      if (!CONFIG.whatsapp) {
        alert('Falta configurar el número de WhatsApp en config.js');
        return;
      }

      const nombre = document.getElementById('rsvpNombre').value.trim();
      const asiste = document.querySelector('input[name="asiste"]:checked').value;
      const n = Number(sel.value);
      const acompEl = document.getElementById('rsvpAcomp');
const acomp = acompEl ? acompEl.value.trim() : '';
      const msg = document.getElementById('rsvpMensaje').value.trim();

      if (asiste === 'si' && (!Number.isInteger(n) || n < 1)) {
        alert('Escribe cuántas personas serán (mínimo 1).');
        return;
      }

      let texto = asiste === 'si'
        ? CONFIG.whatsappMensaje
        : '¡Hola! Lamentablemente no podré asistir a la boda.';
      texto += `\n\n👤 Nombre: ${nombre}`;
      if (asiste === 'si') {
        texto += `\n✅ Asistiré\n👥 Personas: ${n}`;
        if (n > 1 && acomp) texto += `\n🧑‍🤝‍🧑 Acompañantes: ${acomp}`;
      } else {
        texto += `\n❌ No podré asistir`;
      }
      if (msg) texto += `\n💌 Mensaje: ${msg}`;

      window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}`, '_blank');
    });
  })();
})();
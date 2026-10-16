import './style.css'

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="brand" href="#inicio" aria-label="A.M Servicios Eléctricos, inicio">
      <img src="${import.meta.env.BASE_URL}img/logo-am.png" alt="A.M Electricista">
      <span class="brand-name">servicios<br><strong>eléctricos</strong></span>
    </a>
    <nav class="main-nav" aria-label="Navegación principal">
      <a href="#servicios">Servicios</a>
      <a href="#trabajos">Trabajos</a>
      <a href="#cobertura">Cobertura</a>
    </nav>
    <a class="header-contact" href="#contacto"><i aria-hidden="true"></i><span class="contact-label">Contactanos</span><span class="contact-arrow" aria-label="Teléfono"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/><path d="M14.05 2.95a8 8 0 0 1 7 7M14.05 6.95a4 4 0 0 1 3 3"/></svg></span></a>
    <button class="menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false">☰</button>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-copy">
        <p class="eyebrow"><span class="eyebrow-dot"></span> A.M Servicios Eléctricos</p>
        <h1>Instalaciones eléctricas<br><em>que funcionan de verdad.</em></h1>
        <p class="hero-text">Obras, reformas y mantenimiento eléctrico para hogares, comercios e industrias. Seguridad y prolijidad en cada conexión.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#contacto">Pedir presupuesto <span>↗</span></a>
          <a class="text-link" href="#servicios">Ver servicios <span>↓</span></a>
        </div>
      </div>
    </section>

    <section class="trust-strip" aria-label="Datos destacados">
      <div><strong>10+</strong><span>años de experiencia</span></div>
      <div><strong>100%</strong><span>compromiso en obra</span></div>
      <div><strong>24h</strong><span>respuesta inicial</span></div>
      <p>Un equipo preparado<br>para tu próximo proyecto.</p>
    </section>

    <section class="sector-section section services-combined" id="servicios">
      <div class="section-heading"><p class="eyebrow">A.M Servicios Eléctricos</p><h2>Soluciones eléctricas<br><em>para cada proyecto.</em></h2><p class="combined-intro">Nos ocupamos de que cada instalación sea segura, prolija y funcional, desde la primera consulta hasta el último detalle de la obra.</p></div>
      <div class="sector-grid">
        <article class="sector-card"><span class="sector-number">01</span><div class="sector-icon">▦</div><h3>Industria</h3><p>Instalaciones, mantenimiento, tableros y canalizaciones para que tu operación no se detenga.</p></article>
        <article class="sector-card"><span class="sector-number">02</span><div class="sector-icon">⌂</div><h3>Comercio</h3><p>Iluminación, fuerza motriz, cableado y soluciones eléctricas para locales y oficinas.</p></article>
        <article class="sector-card"><span class="sector-number">03</span><div class="sector-icon">⌁</div><h3>Hogar</h3><p>Obras nuevas, reformas, reparaciones y puesta a tierra con el cuidado que tu casa merece.</p></article>
      </div>
    </section>

    <section class="work section" id="trabajos">
      <div class="work-heading"><div><p class="eyebrow">Hecho por A.M</p><h2>Algunos trabajos<br><em>que hablan por sí solos.</em></h2></div><a class="text-link" href="https://www.instagram.com/a.m.servicioselectricos/" target="_blank" rel="noreferrer">Ver Instagram <span>↗</span></a></div>
      <div class="work-tabs" role="tablist" aria-label="Categorías de trabajos">
        <button class="work-tab is-active" type="button" data-tab="hogar" role="tab" aria-selected="true">Hogar</button>
        <button class="work-tab" type="button" data-tab="comercio" role="tab" aria-selected="false">Comercio</button>
        <button class="work-tab" type="button" data-tab="industria" role="tab" aria-selected="false">Industria</button>
      </div>
      <div class="work-panels">
        <div class="work-grid is-active" data-panel="hogar" role="tabpanel">
          <figure class="work-card"><img src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=900&q=85" alt="Instalación eléctrica en cocina"><figcaption><span>01</span> Hogar</figcaption></figure>
          <figure class="work-card work-card-placeholder"><div class="work-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5-4 4-3-3-4 4"/></svg><span>Foto próximamente</span></div><figcaption><span>02</span> Hogar</figcaption></figure>
          <figure class="work-card work-card-placeholder"><div class="work-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5-4 4-3-3-4 4"/></svg><span>Foto próximamente</span></div><figcaption><span>03</span> Hogar</figcaption></figure>
          <figure class="work-card work-card-placeholder"><div class="work-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5-4 4-3-3-4 4"/></svg><span>Foto próximamente</span></div><figcaption><span>04</span> Hogar</figcaption></figure>
          <figure class="work-card work-card-placeholder"><div class="work-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5-4 4-3-3-4 4"/></svg><span>Foto próximamente</span></div><figcaption><span>05</span> Hogar</figcaption></figure>
          <figure class="work-card work-card-placeholder"><div class="work-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5-4 4-3-3-4 4"/></svg><span>Foto próximamente</span></div><figcaption><span>06</span> Hogar</figcaption></figure>
        </div>
        <div class="work-grid" data-panel="comercio" role="tabpanel" hidden>
          <figure class="work-card"><img src="https://images.unsplash.com/photo-1558008258-3256797b43f3?auto=format&fit=crop&w=900&q=85" alt="Iluminación en un salón comercial"><figcaption><span>01</span> Comercio</figcaption></figure>
          <figure class="work-card work-card-placeholder"><div class="work-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5-4 4-3-3-4 4"/></svg><span>Foto próximamente</span></div><figcaption><span>02</span> Comercio</figcaption></figure>
          <figure class="work-card work-card-placeholder"><div class="work-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5-4 4-3-3-4 4"/></svg><span>Foto próximamente</span></div><figcaption><span>03</span> Comercio</figcaption></figure>
          <figure class="work-card work-card-placeholder"><div class="work-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5-4 4-3-3-4 4"/></svg><span>Foto próximamente</span></div><figcaption><span>04</span> Comercio</figcaption></figure>
          <figure class="work-card work-card-placeholder"><div class="work-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5-4 4-3-3-4 4"/></svg><span>Foto próximamente</span></div><figcaption><span>05</span> Comercio</figcaption></figure>
          <figure class="work-card work-card-placeholder"><div class="work-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5-4 4-3-3-4 4"/></svg><span>Foto próximamente</span></div><figcaption><span>06</span> Comercio</figcaption></figure>
        </div>
        <div class="work-grid" data-panel="industria" role="tabpanel" hidden>
          <figure class="work-card"><img src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=85" alt="Profesional trabajando en electricidad"><figcaption><span>01</span> Industria</figcaption></figure>
          <figure class="work-card work-card-placeholder"><div class="work-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5-4 4-3-3-4 4"/></svg><span>Foto próximamente</span></div><figcaption><span>02</span> Industria</figcaption></figure>
          <figure class="work-card work-card-placeholder"><div class="work-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5-4 4-3-3-4 4"/></svg><span>Foto próximamente</span></div><figcaption><span>03</span> Industria</figcaption></figure>
          <figure class="work-card work-card-placeholder"><div class="work-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5-4 4-3-3-4 4"/></svg><span>Foto próximamente</span></div><figcaption><span>04</span> Industria</figcaption></figure>
          <figure class="work-card work-card-placeholder"><div class="work-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5-4 4-3-3-4 4"/></svg><span>Foto próximamente</span></div><figcaption><span>05</span> Industria</figcaption></figure>
          <figure class="work-card work-card-placeholder"><div class="work-placeholder"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10.5" r="1.5"/><path d="m21 15-5-5-4 4-3-3-4 4"/></svg><span>Foto próximamente</span></div><figcaption><span>06</span> Industria</figcaption></figure>
        </div>
      </div>
    </section>

    <section class="coverage section" id="cobertura">
      <div class="section-heading">
        <p class="eyebrow">Dónde trabajamos</p>
        <h2>Cobertura <em>en CABA, GBA y Zona Oeste.</em></h2>
        <p class="combined-intro">Nos trasladamos a tu domicilio, comercio o industria.<br>Coordinamos día y horario disponibles.</p>
      </div>
      <div class="coverage-body">
        <div class="coverage-info">
          <div class="coverage-item">
            <span class="coverage-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s7-7.58 7-12a7 7 0 1 0-14 0c0 4.42 7 12 7 12Z"/><circle cx="12" cy="10" r="2.5"/></svg></span>
            <div><strong>Zona de cobertura</strong><p>CABA, GBA y Zona Oeste</p></div>
          </div>
          <div class="coverage-item">
            <span class="coverage-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg></span>
            <div><strong>Horarios</strong><p>Lunes a viernes · 9 a 18 hs</p></div>
          </div>
          <div class="coverage-item">
            <span class="coverage-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></span>
            <div><strong>Instagram</strong><p><a href="https://www.instagram.com/a.m.servicioselectricos/" target="_blank" rel="noreferrer">@a.m.servicioselectricos</a></p></div>
          </div>
          <a class="button button-primary" href="https://wa.me/5491166363515?text=Hola%2C%20me%20gustar%C3%ADa%20coordinar%20una%20visita.%20Necesitar%C3%ADa%20ayuda%20con..." target="_blank" rel="noreferrer"><svg class="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.44 3.37 1.28 4.84L2 22l5.35-1.4a9.9 9.9 0 0 0 4.69 1.19h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.17c-.24.68-1.19 1.25-1.95 1.41-.53.11-1.22.2-3.55-.76-2.98-1.23-4.9-4.25-5.05-4.45-.15-.2-1.21-1.6-1.21-3.06 0-1.45.76-2.17 1.03-2.47.27-.29.59-.36.79-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.01.9 2.16.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.29.77 1.27 1.65 2.06 1.14 1.02 2.1 1.34 2.4 1.49.29.15.46.13.63-.08.17-.2.73-.85.92-1.15.19-.29.39-.24.65-.15.27.1 1.7.8 1.99.94.29.15.48.22.55.34.07.13.07.72-.17 1.4Z"/></svg>Coordinar visita <span>↗</span></a>
        </div>
        <div class="coverage-map">
          <iframe src="https://maps.google.com/maps?ll=-34.6037,-58.4516&z=10&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa de cobertura en CABA, GBA y Zona Oeste"></iframe>
        </div>
      </div>
    </section>

    <section class="contact section" id="contacto"><div class="contact-heading"><p class="eyebrow">Hablemos de tu proyecto</p><h2>Una consulta clara<br><em>es un buen comienzo.</em></h2></div><div class="contact-body"><div class="contact-info"><p>Contanos qué necesitás y te orientamos sin compromiso.</p><div class="contact-links"><a href="https://www.instagram.com/a.m.servicioselectricos/" target="_blank" rel="noreferrer"><span class="social-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></span><span><small>Seguinos en</small>Instagram</span><b>↗</b></a><a href="mailto:am.servicioselectricos@gmail.com"><span class="social-icon gmail-icon"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5 12 12l9-6.5v13H3z"/><path d="M3 5.5 12 12l9-6.5"/></svg></span><span><small>Escribinos por</small>Gmail</span><b>↗</b></a></div></div><form class="contact-form"><label>Nombre o empresa<input type="text" name="nombre" required></label><label>Servicio de interés<select name="servicio"><option>Instalación eléctrica</option><option>Iluminación</option><option>Mantenimiento</option><option>Otro</option></select></label><label>Consulta<textarea name="consulta" rows="4" required></textarea></label><button class="button button-primary" type="submit"><svg class="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.71.44 3.37 1.28 4.84L2 22l5.35-1.4a9.9 9.9 0 0 0 4.69 1.19h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.17c-.24.68-1.19 1.25-1.95 1.41-.53.11-1.22.2-3.55-.76-2.98-1.23-4.9-4.25-5.05-4.45-.15-.2-1.21-1.6-1.21-3.06 0-1.45.76-2.17 1.03-2.47.27-.29.59-.36.79-.36.2 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.01.9 2.16.07.15.12.32.02.52-.1.2-.15.32-.29.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.61.17.29.77 1.27 1.65 2.06 1.14 1.02 2.1 1.34 2.4 1.49.29.15.46.13.63-.08.17-.2.73-.85.92-1.15.19-.29.39-.24.65-.15.27.1 1.7.8 1.99.94.29.15.48.22.55.34.07.13.07.72-.17 1.4Z"/></svg>Enviar consulta <span>↗</span></button><p class="form-status" aria-live="polite"></p></form></div></section>
  </main>
  <footer><p>Instalaciones con criterio.</p><a class="brand" href="#inicio"><img src="${import.meta.env.BASE_URL}img/logo-am.png" alt="A.M Electricista"><span class="brand-name">servicios<br><strong>eléctricos</strong></span></a><span>Resultados que duran.</span><small class="footer-year">© 2026 A.M</small></footer>
`

const menuButton = document.querySelector('.menu-toggle')
const navigation = document.querySelector('.main-nav')
const emailLabel = document.querySelector('.gmail-icon + span')
emailLabel.lastChild.textContent = 'Correo electrónico'
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('is-open')
  menuButton.setAttribute('aria-expanded', isOpen)
})

navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('is-open')
  menuButton.setAttribute('aria-expanded', 'false')
}))

const workTabs = document.querySelectorAll('.work-tab')
const workPanels = document.querySelectorAll('.work-grid')
workTabs.forEach((tab) => tab.addEventListener('click', () => {
  const target = tab.dataset.tab
  workTabs.forEach((t) => {
    t.classList.toggle('is-active', t === tab)
    t.setAttribute('aria-selected', t === tab)
  })
  workPanels.forEach((panel) => {
    const isTarget = panel.dataset.panel === target
    panel.classList.toggle('is-active', isTarget)
    panel.hidden = !isTarget
  })
}))

document.querySelector('.contact-form').addEventListener('submit', (event) => {
  event.preventDefault()
  const form = event.currentTarget
  const formData = new FormData(form)
  const message = `Hola A.M, soy ${formData.get('nombre')}. Me interesa consultar por ${formData.get('servicio')}. ${formData.get('consulta')}`
  window.open(`https://wa.me/5491166363515?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  form.querySelector('.form-status').textContent = 'Abrimos WhatsApp con tu consulta lista para enviar.'
  event.currentTarget.reset()
})

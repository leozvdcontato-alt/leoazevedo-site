(()=>{
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (!location.hash) {
    window.scrollTo(0, 0);
    window.addEventListener('load', () => window.scrollTo(0, 0), { once: true });
  }

  const heroTrust=document.querySelector('.hero-trust');
  if(heroTrust){
    heroTrust.innerHTML=`
      <div><strong>Primeiro eu entendo o negócio</strong><span>Depois eu construo a marca</span></div>
      <div><strong>Sem atendimento intermediado</strong><span>Você fala direto comigo</span></div>
      <div><strong>Sem pacote pronto</strong><span>O escopo nasce do problema</span></div>
    `;
    const heroTrustStyle=document.createElement('style');
    heroTrustStyle.textContent=`
      .hero-trust{align-items:stretch}
      .hero-trust div{display:flex;flex-direction:column;justify-content:flex-start;max-width:220px}
      .hero-trust strong{font-family:var(--sans);font-size:14px;line-height:1.35;letter-spacing:0;font-weight:700;color:#f2efe8}
      .hero-trust span{font-size:12px;line-height:1.45;color:#a7ada5;margin-top:6px}
      @media(max-width:640px){
        .hero-trust{grid-template-columns:1fr;gap:0}
        .hero-trust div{max-width:none;padding:14px 0!important;border-right:0!important;border-bottom:1px solid rgba(255,255,255,.12)!important}
        .hero-trust div:first-child{padding-top:0!important}
        .hero-trust div:last-child{border-bottom:0!important;padding-bottom:0!important}
        .hero-trust strong{font-size:13px}
        .hero-trust span{font-size:11px}
      }
    `;
    document.head.appendChild(heroTrustStyle);
  }

  const profileImg=document.querySelector('.about-photo img');
  if(profileImg){
    profileImg.src='/images/perfil.jpg?v=576c2fcf';
    const profileStyle=document.createElement('style');
    profileStyle.textContent=`
      .about{
        position:relative;
        overflow:hidden;
        background:
          radial-gradient(circle at 18% 50%, rgba(49,68,56,.28), transparent 34%),
          linear-gradient(135deg,#0b100e 0%,#121a16 58%,#1d2b24 100%) !important;
        color:#f2efe8;
      }
      .about::after{
        content:'';
        position:absolute;
        inset:0;
        background:linear-gradient(90deg,rgba(0,0,0,.10),transparent 45%,rgba(184,92,56,.045));
        pointer-events:none;
      }
      .about-grid{position:relative;z-index:1}
      .about-copy .section-kicker{color:#c56b47}
      .about-copy h2{color:#f2efe8}
      .about-copy>p{color:#bdb9ae}
      .about-points span{
        color:#d9ddd7 !important;
        background:rgba(49,68,56,.72) !important;
        border-color:rgba(207,197,181,.16) !important;
      }
      .about-photo{
        width:100%;
        max-width:430px;
        aspect-ratio:4/5;
        justify-self:center;
        overflow:hidden;
        border:1px solid rgba(242,239,232,.08);
        box-shadow:0 28px 70px rgba(0,0,0,.34);
        background:#090d0b !important;
      }
      .about-photo img{
        width:100%;
        height:100%;
        object-fit:cover;
        object-position:50% 30%;
        display:block;
      }
      @media(max-width:640px){
        .about-photo{max-width:360px;aspect-ratio:4/5}
        .about-photo img{object-position:50% 28%}
      }
    `;
    document.head.appendChild(profileStyle);
  }

  const finalCtaStyle=document.createElement('style');
  finalCtaStyle.textContent=`
    .final-cta{
      position:relative;
      overflow:hidden;
      background:
        radial-gradient(circle at 50% -10%,rgba(184,92,56,.11),transparent 36%),
        linear-gradient(180deg,#f3efe6 0%,#e8e2d6 100%) !important;
      color:#1d2b24 !important;
      border-top:1px solid #d4ccbf;
    }
    .final-cta::before{
      content:'';
      position:absolute;
      left:50%;
      top:0;
      width:220px;
      height:3px;
      transform:translateX(-50%);
      background:#b85c38;
    }
    .final-cta-inner{position:relative;z-index:1}
    .final-cta .section-kicker{color:#954a31 !important}
    .final-cta h2{color:#162019 !important}
    .final-cta p{color:#5f625b !important}
    .final-note{color:#817c72 !important}
    .final-cta .btn-white{
      background:linear-gradient(135deg,#b85c38,#94462d) !important;
      color:#fff !important;
      box-shadow:0 10px 28px rgba(124,62,39,.20);
    }
    .final-cta .btn-white:hover{
      background:linear-gradient(135deg,#c76844,#a14d32) !important;
      box-shadow:0 13px 32px rgba(124,62,39,.26);
    }
  `;
  document.head.appendChild(finalCtaStyle);

  const phone='5538991247129';
  const base='Olá Leo! Vim pelo seu site e quero conversar sobre um projeto de marca.';
  const qs=new URLSearchParams(location.search);
  const source=qs.get('utm_source');
  const medium=qs.get('utm_medium');
  const campaign=qs.get('utm_campaign');
  const content=qs.get('utm_content');
  const parts=[];
  if(source) parts.push('origem: '+source);
  if(medium) parts.push('mídia: '+medium);
  if(campaign) parts.push('campanha: '+campaign);
  if(content) parts.push('criativo: '+content);
  const tracking=parts.length?'\n\nReferência: '+parts.join(' | '):'';
  const href='https://wa.me/'+phone+'?text='+encodeURIComponent(base+tracking);
  document.querySelectorAll('.js-whatsapp').forEach(el=>{
    el.href=href;
    el.target='_blank';
    el.rel='noopener noreferrer';
    el.addEventListener('click',()=>{
      if(window.va) window.va('event',{name:'WhatsApp Click',data:{placement:el.dataset.cta||'unknown',utm_source:source||'',utm_campaign:campaign||''}});
    });
  });
})();
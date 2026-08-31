(()=>{
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (!location.hash) {
    window.scrollTo(0, 0);
    window.addEventListener('load', () => window.scrollTo(0, 0), { once: true });
  }

  const heroTrust=document.querySelector('.hero-trust');
  if(heroTrust) heroTrust.remove();

  const firstStepList=document.querySelector('.hero-card .check-list');
  if(firstStepList){
    firstStepList.innerHTML=`
      <li><strong>Primeiro eu entendo o negócio</strong><span>Depois eu construo a marca</span></li>
      <li><strong>Sem atendimento intermediado</strong><span>Você fala direto comigo</span></li>
      <li><strong>Sem pacote pronto</strong><span>O escopo nasce do problema</span></li>
    `;
    const firstStepStyle=document.createElement('style');
    firstStepStyle.textContent=`
      .hero-card .check-list{margin:26px 0 28px;border-top:1px solid rgba(22,32,25,.11)}
      .hero-card .check-list li{display:block;margin:0;padding:15px 0;border-bottom:1px solid rgba(22,32,25,.11);color:inherit}
      .hero-card .check-list strong{display:block;font-family:var(--sans);font-size:13px;line-height:1.35;font-weight:700;color:#162019}
      .hero-card .check-list span{display:block;margin-top:4px;font-size:12px;line-height:1.45;color:#716e66}
    `;
    document.head.appendChild(firstStepStyle);
  }

  const profileImg=document.querySelector('.about-photo img');
  if(profileImg){
    profileImg.src='/images/perfil.jpg?v=576c2fcf';
    const profileStyle=document.createElement('style');
    profileStyle.textContent=`
      .about{position:relative;overflow:hidden;background:radial-gradient(circle at 18% 50%, rgba(49,68,56,.28), transparent 34%),linear-gradient(135deg,#0b100e 0%,#121a16 58%,#1d2b24 100%) !important;color:#f2efe8}
      .about::after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.10),transparent 45%,rgba(184,92,56,.045));pointer-events:none}
      .about-grid{position:relative;z-index:1}
      .about-copy .section-kicker{color:#c56b47}
      .about-copy h2{color:#f2efe8}
      .about-copy>p{color:#bdb9ae}
      .about-points span{color:#d9ddd7 !important;background:rgba(49,68,56,.72) !important;border-color:rgba(207,197,181,.16) !important}
      .about-photo{width:100%;max-width:430px;aspect-ratio:4/5;justify-self:center;overflow:hidden;border:1px solid rgba(242,239,232,.08);box-shadow:0 28px 70px rgba(0,0,0,.34);background:#090d0b !important}
      .about-photo img{width:100%;height:100%;object-fit:cover;object-position:50% 30%;display:block}
      @media(max-width:640px){.about-photo{max-width:360px;aspect-ratio:4/5}.about-photo img{object-position:50% 28%}}
    `;
    document.head.appendChild(profileStyle);
  }

  const finalCtaStyle=document.createElement('style');
  finalCtaStyle.textContent=`
    .final-cta{position:relative;overflow:hidden;background:radial-gradient(circle at 50% -10%,rgba(184,92,56,.11),transparent 36%),linear-gradient(180deg,#f3efe6 0%,#e8e2d6 100%) !important;color:#1d2b24 !important;border-top:1px solid #d4ccbf}
    .final-cta::before{content:'';position:absolute;left:50%;top:0;width:220px;height:3px;transform:translateX(-50%);background:#b85c38}
    .final-cta-inner{position:relative;z-index:1}
    .final-cta .section-kicker{color:#954a31 !important}
    .final-cta h2{color:#162019 !important}
    .final-cta p{color:#5f625b !important}
    .final-note{color:#817c72 !important}
    .final-cta .btn-white{background:linear-gradient(135deg,#b85c38,#94462d) !important;color:#fff !important;box-shadow:0 10px 28px rgba(124,62,39,.20)}
    .final-cta .btn-white:hover{background:linear-gradient(135deg,#c76844,#a14d32) !important;box-shadow:0 13px 32px rgba(124,62,39,.26)}
  `;
  document.head.appendChild(finalCtaStyle);

  const iconSvgs=[
    `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h16M12 4v16"/><circle cx="12" cy="12" r="7"/></svg>`,
    `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 17l4-4 3 3 7-8"/><path d="M14 8h5v5"/></svg>`,
    `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="8" cy="12" r="4"/><circle cx="16" cy="12" r="4"/><path d="M12 8v8"/></svg>`
  ];
  document.querySelectorAll('.benefit-card').forEach((card,i)=>{
    const number=card.querySelector(':scope > span');
    if(number && iconSvgs[i]){
      const wrap=document.createElement('div');
      wrap.className='benefit-icon';
      wrap.innerHTML=iconSvgs[i];
      number.replaceWith(wrap);
    }
  });

  const instagramBridge=document.querySelector('.instagram-bridge');
  if(instagramBridge && !instagramBridge.querySelector('.instagram-mark')){
    const mark=document.createElement('span');
    mark.className='instagram-mark';
    mark.innerHTML=`<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.7" r=".8" fill="currentColor" stroke="none"/></svg>`;
    instagramBridge.prepend(mark);
  }

  const socialStyle=document.createElement('style');
  socialStyle.textContent=`
    .benefit-icon{width:36px;height:36px;display:flex;align-items:center;justify-content:center;color:#b85c38;border:1px solid rgba(184,92,56,.28);border-radius:50%;background:rgba(184,92,56,.035)}
    .benefit-card:nth-child(2) .benefit-icon{color:#314438;border-color:rgba(49,68,56,.25);background:rgba(49,68,56,.04)}
    .benefit-icon svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.35;stroke-linecap:round;stroke-linejoin:round}
    .benefit-card h3{margin-top:34px !important}
    .instagram-bridge{justify-content:flex-start !important;position:relative;padding-right:34px !important}
    .instagram-mark{width:38px;height:38px;flex:0 0 38px;display:flex !important;align-items:center;justify-content:center;margin:0 3px 0 0 !important;color:#d47a4a !important;border:1px solid rgba(212,122,74,.32);border-radius:50%;letter-spacing:0 !important}
    .instagram-mark svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:1.45}
    .instagram-bridge>b{position:absolute;right:0;top:50%;transform:translateY(-18%)}
    .instagram-bridge:hover>b{transform:translate(4px,-18%)}
    .footer-column a[href*="instagram.com"]::before{content:'◎';display:inline-block;margin-right:7px;color:#d47a4a;font-size:14px;line-height:1}
    .footer-column a[href*="behance.net"]::before{content:'↗';display:inline-block;margin-right:7px;color:#7f867f;font-size:12px}
    @media(max-width:640px){.benefit-icon{width:34px;height:34px}.instagram-mark{width:36px;height:36px;flex-basis:36px}}
  `;
  document.head.appendChild(socialStyle);

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
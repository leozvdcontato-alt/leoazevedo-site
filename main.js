(()=>{
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (!location.hash) {
    window.scrollTo(0, 0);
    window.addEventListener('load', () => window.scrollTo(0, 0), { once: true });
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
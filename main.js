(()=>{
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  if (!location.hash) {
    window.scrollTo(0, 0);
    window.addEventListener('load', () => window.scrollTo(0, 0), { once: true });
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
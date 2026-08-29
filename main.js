
const cursor=document.getElementById('cursor');
const fine=window.matchMedia('(hover:hover) and (pointer:fine)').matches;
if(cursor&&fine){
  document.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
  document.querySelectorAll('a,button').forEach(el=>{
    el.addEventListener('mouseenter',()=>cursor.classList.add('hover'));
    el.addEventListener('mouseleave',()=>cursor.classList.remove('hover'));
  });
}
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const els=document.querySelectorAll('.reveal');
if(reduced){els.forEach(el=>el.classList.add('visible'))}
else if('IntersectionObserver' in window){
  const obs=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target)}}),{threshold:.08});
  els.forEach(el=>obs.observe(el));
}else{els.forEach(el=>el.classList.add('visible'))}
document.querySelectorAll('[data-track]').forEach(el=>{
  el.addEventListener('click',()=>{if(window.va) window.va('event',{name:'CTA Click',data:{target:el.dataset.track,path:location.pathname}})});
});

// Lightweight gallery lightbox and smooth scrolling
document.addEventListener('DOMContentLoaded', function(){
  // smooth scroll for nav links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href.startsWith('#')){
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({behavior:'smooth',block:'start'});
      }
    })
  })

  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox.querySelector('img');
  const closeBtn = lightbox.querySelector('.close');

  document.querySelectorAll('.gallery-item').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const src = btn.getAttribute('data-src');
      lbImg.src = src;
      lbImg.alt = btn.querySelector('img').alt || '';
      lightbox.setAttribute('aria-hidden','false');
      document.body.style.overflow='hidden';
    })
  })

  function closeLightbox(){
    lightbox.setAttribute('aria-hidden','true');
    lbImg.src = '';
    document.body.style.overflow='';
  }
  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e)=>{ if(e.target===lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape') closeLightbox(); });
});
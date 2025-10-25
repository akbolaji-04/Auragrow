// Mobile navigation toggle for AuraGrow landing page
(function(){
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  if(!toggle || !nav || !header) return;

  function setExpanded(isOpen){
    toggle.setAttribute('aria-expanded', String(isOpen));
    if(isOpen){
      header.classList.add('nav-open');
      nav.querySelectorAll('a')[0]?.focus();
    } else {
      header.classList.remove('nav-open');
    }
  }

  toggle.addEventListener('click', function(e){
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    setExpanded(!isOpen);
  });

  // Close on escape
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape') setExpanded(false);
  });

  // Close when clicking a nav link (mobile)
  nav.addEventListener('click', function(e){
    if(e.target.tagName === 'A' && window.matchMedia('(max-width: 768px)').matches){
      setExpanded(false);
    }
  });

  // Close on outside click
  document.addEventListener('click', function(e){
    if(!header.contains(e.target)) setExpanded(false);
  });
})();

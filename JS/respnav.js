window.addEventListener('scroll', function() {
  
    const respnavbar = document.querySelector('.navbar');
    if(window.scrollY > 50)
    {
      respnavbar.classList.add('scrolled');
    } 
    else
    {
      respnavbar.classList.remove('scrolled');
    }
  
  });
  
      document.querySelector('.menu-toggle').addEventListener('click', function() {
      document.querySelector('.menu-toggle').classList.toggle('active');
      document.querySelector('.nav-links').classList.toggle('active');
        
  });

(function() {

  var sstab = document.querySelector('.ss-tab');
  var wrapper = document.querySelector('.util-menu-wrapper');

  sstab.addEventListener('click', function() {
    
    wrapper.classList.toggle('show-ss-tools');
    wrapper.classList.remove('show-sd-tools');

  });

  var sdtab = document.querySelector('.sd-tab');
  var wrapper = document.querySelector('.util-menu-wrapper');

  sdtab.addEventListener('click', function() {
    
    wrapper.classList.remove('show-ss-tools');
    wrapper.classList.toggle('show-sd-tools');

  });
  
})();
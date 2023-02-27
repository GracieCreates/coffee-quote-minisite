function toggleDarkMode() {
  var body = document.body;
  var header = document.querySelector('.header');
  var footer = document.querySelector('footer');
  
  body.classList.toggle('dark-mode');
  header.classList.toggle('dark-mode');
  footer.classList.toggle('dark-mode');
}
  /*With this code, the dark-mode class will be toggled on both the body and header elements when the dark mode button is clicked. This will change the background color and text color of the header area to match the dark mode styles.*/

const galleryLinks = document.querySelectorAll('.gallery-link');

galleryLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const imagePath = this.dataset.image;
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = '<img src="' + imagePath + '" alt="" />';
        document.body.appendChild(modal);
        modal.addEventListener('click', function() {
            this.parentNode.removeChild(this);
        });
    });
});
  
  
  
  
  
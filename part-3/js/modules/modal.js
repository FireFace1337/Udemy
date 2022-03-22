function modal() {
   // modal


   let modalTrigger = document.querySelectorAll('[data-modal]');
   let modal = document.querySelector('.modal');
   
   modalTrigger.forEach(btn => {
       btn.addEventListener('click', function() {
           modal.classList.add('show');
           modal.classList.remove('hide');
       });
   });
   
   // modalCloseBtn.addEventListener('click', function() {
   //         modal.classList.remove('show');
   //         modal.classList.add('hide');
   // });
   
   function closeModal() {
       modal.classList.add('hide');
       modal.classList.remove('show');
       document.body.style.overflow = '';
   }
   
   function openModal() {
       modal.classList.add('show');
       modal.classList.remove('hide');
       document.body.style.overflow = 'hidden';
   }
   
   modal.addEventListener('click', (e) => {
       if (e.target === modal || e.target.getAttribute('data-close') == '') {
           closeModal();
       }
   });
   
   
   function showModalByScroll() {
       if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
           modal.classList.add('show');
           modal.classList.remove('hide');
           window.removeEventListener('scroll', showModalByScroll);
       }
   }
   
   window.addEventListener('scroll', showModalByScroll);
}

module.exports = modal;
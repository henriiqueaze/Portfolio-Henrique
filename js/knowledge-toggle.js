document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('knowledge-modal');
    const modalIcon = document.getElementById('modal-icon');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const closeBtn = modal.querySelector('.close');

    //===== OPEN MODAL =====================================
    function openModal(btn) {
      const imgEl = btn.querySelector('img');
      modalIcon.src = imgEl.src;
      modalIcon.alt = imgEl.alt;
      modalTitle.textContent = btn.dataset.title;
      modalDesc.textContent = btn.dataset.desc;

      modal.classList.remove('hide');
      modal.classList.add('show');
    }
  
    //===== CLOSE MODAL =====================================
    function closeModal() {
      modal.classList.remove('show');
      modal.classList.add('hide');
      modal.addEventListener('animationend', onAnimationEnd);
    }

    //===== ANIMATION END HANDLER =====================================
    function onAnimationEnd(e) {
      if (e.animationName === 'modalFadeOut') {
        modal.style.display = 'none';
        modal.classList.remove('hide');
        modal.removeEventListener('animationend', onAnimationEnd);
      }
    }

    //===== ATTACH HANDLERS =====================================
    document.querySelectorAll('.icon-item').forEach(btn =>
      btn.addEventListener('click', () => {
        modal.style.display = 'flex';
        openModal(btn);
      })
    );
  
    closeBtn.addEventListener('click', closeModal);
  
    modal.addEventListener('click', e => {
      if (e.target === modal) closeModal();
    });
  });
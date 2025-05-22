document.addEventListener('DOMContentLoaded', () => {
  //===== GET ELEMENTS =====================================
  const checkbox = document.getElementById('sw-checkbox');
  const root = document.documentElement;
  const iconImages = document.querySelectorAll('.icon-item img');
  const contactImages = document.querySelectorAll('#contact img');
  const modalIcon = document.getElementById('modal-icon');

  //===== Update Paths =====================================
  function updateImagePaths(theme) {
    const replacePaths = (img) => {
      let src = img.getAttribute('src');
      if (theme === 'light') {
        src = src
          .replace('dark-theme', 'white-theme')
          .replace('-dark', '-white');
      } else {
        src = src
          .replace('white-theme', 'dark-theme')
          .replace('-white', '-dark');
      }
      img.setAttribute('src', src);
    };

    iconImages.forEach(replacePaths);
    contactImages.forEach(replacePaths);

    if (modalIcon && modalIcon.getAttribute('src')) {
      replacePaths(modalIcon);
    }
  }

  //===== INITIAL SYNC =====================================
  const savedTheme = localStorage.getItem('theme') || 'dark';
  root.dataset.theme = savedTheme;
  checkbox.checked = savedTheme === 'light';
  updateImagePaths(savedTheme);

  //===== THEME SYNC =====================================
  checkbox.addEventListener('change', () => {
    const next = checkbox.checked ? 'light' : 'dark';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
    updateImagePaths(next);
  });
});

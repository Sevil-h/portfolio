const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-lewagon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 100) {
        navbar.classList.add('navbar-lewagon-black');
      } else {
        navbar.classList.remove('navbar-lewagon-black');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };

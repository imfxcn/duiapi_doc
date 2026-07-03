function bindReturnHomeButton() {
  const button = document.querySelector('#topbar-cta-button');
  if (!button || button.dataset.duiapiReturnHomeBound === 'true') {
    return;
  }

  const href = button.getAttribute('href');
  if (href !== 'https://www.duiapi.com') {
    return;
  }

  button.dataset.duiapiReturnHomeBound = 'true';
  button.removeAttribute('target');
  button.removeAttribute('rel');
  button.addEventListener('click', (event) => {
    event.preventDefault();
    window.location.href = href;
  });
}

bindReturnHomeButton();
new MutationObserver(bindReturnHomeButton).observe(document.documentElement, {
  childList: true,
  subtree: true,
});

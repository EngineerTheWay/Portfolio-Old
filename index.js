function toggleMobileMenu() {
    let menu = document.querySelector('.mobile-menu');
    let hamburger = document.querySelector('#hamburger-icon');

    menu.classList.toggle('open');
    hamburger.classList.toggle('open');  
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
  }

  function navigateToURL(url) {
    window.location.href = url;
  }
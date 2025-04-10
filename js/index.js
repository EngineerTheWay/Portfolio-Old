// ** Mobile Menu **
function toggleMobileMenu() {
    let menu = document.querySelector('.mobile-menu');
    let hamburger = document.querySelector('#hamburger-icon');

    menu.classList.toggle('open');
    hamburger.classList.toggle('open');  
}

// ** Modals **
  function openModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

// Function to close the modal
function closeModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

// ** Open URLs on click ** //
function openInNewTab(url) {
  window.open(url, '_blank').focus();
}

function navigateToURL(url) {
  window.location.href = url;
}
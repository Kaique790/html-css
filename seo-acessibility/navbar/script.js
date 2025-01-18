const navbar = document.getElementById('navbar');
const openButton = document.getElementById('open-sidebar-button')

const media = window.matchMedia("(max-width: 700px)");

media.addEventListener('change', (e) =>  updateNavbar(e))

function updateNavbar(e) {
    const isMobile = e.matches
    console.log(isMobile)
    if(isMobile) {
        navbar.setAttribute('inert', '');
    } else {
        navbar.removeAttribute('inert')
    }
}

function openSidebar(e){
    navbar.classList.add('show');
    document.getElementById('overflow').style.display = 'block';
    openButton.setAttribute('aria-expanded', 'true');
    navbar.removeAttribute('inert')
}

function closedSidebar(e){
    navbar.classList.remove('show');
    document.getElementById('overflow').style.display = 'none';
    openButton.setAttribute('aria-expanded', 'false');
    navbar.setAttribute('inert', '');
}

updateNavbar(media);


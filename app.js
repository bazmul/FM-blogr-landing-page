const hamburgerBtn = document.querySelector('.hamburger');
const hamburgerImage = document.querySelector('.hamburger-img');
const mobileNavCont = document.querySelector('.mobile-nav-container');
const liMains = document.querySelectorAll('.li-main')

console.log(hamburgerBtn)

mobileNavCont.toggleAttribute("hidden");


hamburgerBtn.addEventListener('click', function() {
        if (!mobileNavCont.toggleAttribute("hidden")) {
        mobileNavCont.toggleAttribute("hidden");
        hamburgerImage.src = 'images/icon-close.svg'
    } 
    else {
        mobileNavCont.toggleAttribute("hidden");
        hamburgerImage.src = 'images/icon-hamburger.svg'
    }

    mobileNavCont.toggleAttribute("hidden");
})



for (liMain of liMains) {

    liMain.addEventListener('click', function() {
    for (liMain of liMains) {
        liMain.classList.toggle('flip');
    }
})
}

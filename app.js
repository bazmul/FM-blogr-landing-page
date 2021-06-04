const hamburgerBtn = document.querySelector('.hamburger');
const hamburgerImage = document.querySelector('.hamburger-img');
const mobileNavCont = document.querySelector('.mobile-nav-container');
const liMains = document.querySelectorAll('.li-main');
const subMenu = document.querySelectorAll('.submenu');

mobileNavCont.toggleAttribute("hidden");


hamburgerBtn.addEventListener('click', function() {
    reset()
        
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





//default hide submenu's (if removed in HTML):
subMenu.forEach((sub) => {sub.setAttribute("hidden", true)});


// let parentLi = liMain.parentNode.children[1];  //select PARENT of 'li-main' and then select the div submenu

for (liMain of liMains) {
       liMain.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            reset()
        }

        else if (this.classList.contains('active')){
            this.classList.toggle('flip-back');
        }
    
        this.classList.toggle('active')
        this.classList.toggle('flip');
        this.parentNode.children[1].toggleAttribute("hidden");
})
}

function reset() {
    for (liMain of liMains) {
        liMain.classList.remove('active');
        liMain.classList.remove('flip');
        liMain.classList.remove('flip-back');
        liMain.parentNode.children[1].setAttribute("hidden", true);
    }
}



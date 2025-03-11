const nav = document.querySelector('nav');

const navScroll = () => {
    const scrollTop = window.scrollY;
    if(scrollTop >= 200) {
        // nav.style.backgroundColor = 'red';
        nav.classList.add('scroll');
    } else {
        // nav.style.backgroundColor = 'transparent';
        nav.classList.remove('scroll');
    }
}

window.addEventListener('scroll', navScroll);

// modal window
const divModal = document.querySelector('#modal');

const btn = document.querySelectorAll('article a');

const modalContent = document.querySelector('.modal-content');

const close = document.querySelector('.modal-content a');

const articlesH3 = document.querySelectorAll('article h3');

btn.forEach((elem, index) => {

    const country = articlesH3[index].innerText;
    console.log(country);

    elem.addEventListener('click', (e, c = country) => {
        e.preventDefault();
        const modalH4 = document.querySelector('.modal-content h4');
        modalH4.innerText = c;
        divModal.style.display = 'flex';
    });
});

divModal.addEventListener('click', () => {
    divModal.style.display = 'none';
});

modalContent.addEventListener('click', (e) => {
    e.stopPropagation();
}); 

close.addEventListener('click', (e) => {
    e.preventDefault();
    divModal.style.display = 'none';
});

// menu hamburger
const hamburger = document.querySelector('.menu .material-symbols-outlined');
const divSmallMenu = document.querySelector('#techDiv');

hamburger.addEventListener('click', () => {

    divSmallMenu.classList.remove('small-menu-hide');
    divSmallMenu.classList.add('small-menu');

});

const closeSmallMenu = document.querySelector('#techDiv span');
const techDivLinks = document.querySelectorAll('#techDiv a');

const closeSmall = () => {
    divSmallMenu.classList.add('small-menu-hide');
    divSmallMenu.classList.remove('small-menu');
}

techDivLinks.forEach((element) => {
    element.addEventListener('click', closeSmall);
});

closeSmallMenu.addEventListener('click', closeSmall);
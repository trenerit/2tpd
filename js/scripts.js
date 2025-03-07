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

const btn1 = document.querySelector('article a');

btn1.addEventListener('click', () => {

    divModal.style.display = 'flex';

});
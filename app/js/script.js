const hamburger = document.querySelector('#buttonHam');
const header = document.querySelector('.header');

hamburger.addEventListener('click', () => {
    console.log('click hamburger');

    if (header.classList.contains('open')) {
        header.classList.remove('open');
    } else {
        header.classList.add('open');
    }
})
// Button to top function
const btnTop = document.getElementById('button__totop');
const scrollFunction = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnTop.classList.add('visible');
    } else {
        btnTop.classList.remove('visible');
    }
};
window.addEventListener('scroll', scrollFunction);

// Close menu function
const btnMenu = document.querySelectorAll('.menu__item');
const menuTogglerOffFunction = () => {
    document.getElementById('menu__toggler').checked = false
};
[].forEach.call(btnMenu, function (el) {
    el.addEventListener('click', menuTogglerOffFunction)
});

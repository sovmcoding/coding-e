const menu = document.getElementById('check', 'close')
const bar = document.querySelector('.nav-links')


menu.addEventListener('change', () => {
        bar.classList.toggle('open')
    }
    );
console.log("Estoy activo con el contacto")
const btncontact = document.querySelector('.btn___contact')
const close_modal = document.querySelector('#close_modal')
const contact_modal = document.querySelector('.contact_modal')


btncontact.addEventListener('click', (e) => {
    e.preventDefault();
        console.log('diste click a un boton de contacto')
        contactando();
    });

close_modal.addEventListener('click', (e) => {
    e.preventDefault();
    close___modal();
})


function contactando() {
    contact_modal.classList.add('contact_modal--show')
}

function close___modal() {
    contact_modal.classList.remove('contact_modal--show')
}
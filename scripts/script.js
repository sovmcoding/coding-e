console.log("Estoy activo con el contacto")
const btncontact = document.querySelector('.btn___contact')
// const close_modal = document.querySelector('#close_modal')
const contact_modal = document.querySelector('.contact_modal')


btncontact.addEventListener('click', (e) => {
    e.preventDefault();
        console.log('Conctactando desde la Navbar')
        contactando();
    });


function listener(){
    console.log('escuchando el teclado')
    document.addEventListener('keydown', function(event) {
        if(event.key === 'Escape') {
            close___modal();
        }
    })
}
function unlistener(){
    console.log('deje de escuchar el teclado')
    document.removeEventListener('keydown', function(event) {
        if(event.key === 'Escape') {
            close___modal();
        }
    })
}

function contactando() {
    contact_modal.classList.add('contact_modal--show')
    listener()
}

function close___modal() {
    contact_modal.classList.remove('contact_modal--show')
    unlistener();
}
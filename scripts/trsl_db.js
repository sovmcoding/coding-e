console.log("Estoy activo con la traducción")
const langEl = document.querySelector('.btns_translate')
const link = document.querySelectorAll('.link_trans')
const text = document.querySelector('.texto')
const tittle = document.querySelector('.me')


link.forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        // console.log('diste click a un boton de translate')
        langEl.querySelector('.active').classList.remove('active');
        el.classList.add('active');

        const attr = el.getAttribute('language')

        text.textContent = data[attr].texto
        tittle.textContent = data[attr].me

    }); 
});


var data = {
    "spanish":
    {
        "me": "Hola, Soy Samuel",
        "texto": "mi nombre es Samuel, siempre me ha gustado mucho la informatica y desde muy pequeño he adquirido mucho conocimiento sobre este grandioso mundo. Desde que tengo memoria he sentido atracción por el lado de la programación y el como funciona un codigo, la logística y la cantidad de cosas que se pueden llegar a hacer con una linea de comandos. He dejado varias veces el ambito de programar por frustración, pero aquí esta mí mas grande avance hasta el día de hoy, luego de varios intentos, he logrado concluir muchos desiertos que he dejado en el pasado."
    },
    "english":
    {
        "me": "Hi, i'm Samuel",
        "texto": "My name is Samuel. I've always been really into computers, and I've been soaking up knowledge about this amazing world since I was little. As far back as I can remember, I've been drawn to the programming side of things and how code works, the logistics, and all the cool stuff you can do with a command line. I've stepped away from programming a few times out of frustration, but here's my biggest breakthrough yet. After several tries, I've managed to conquer many of the challenges I've faced in the past."
    }
}
const btnGrabar = document.querySelector('#grabar');
const grabaciones = document.querySelector('.grabaciones');
const recognition = new webkitSpeechRecognition();

recognition.lang = 'es-ES';
recognition.continuos = true;

recognition.onresult = event => {
    const grabacion = document.createElement('p');
    for(const result of event.results){
        grabacion.innerText= result[0].transcript;
    }
    grabaciones.append(grabacion);
}


btnGrabar.addEventListener('click', e => {
   recognition.start();
})

//TODO trabar en el diseño
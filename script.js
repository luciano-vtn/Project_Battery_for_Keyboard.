document.body.addEventListener('keyup', (event) => {
    playSound( event.code.toLowerCase() );
});

/* EVENTS SOUNDS "BUTTON" */

document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value;

        if (song !== ''){
            let arraySong = song.split('');

            playComposition(arraySong);
        }
});


/* KEYBOARD EVENTS "SOUNDS" */

function playSound(sound){

    let elementAudio = document.querySelector(`#s_${sound}`);
    let elementKey   = document.querySelector(`div[data-key="${sound}"]`);

        if(elementAudio){
            elementAudio.currentTime = 0; //CONTROLE DE "DELAY" entre o som e o toque do teclado.
            elementAudio.play();
        }

        if(elementKey){
            elementKey.classList.add('active');

                setTimeout(()=>{
                    elementKey.classList.remove('active');
                }, 280);
        }
}

/* "PLAY COMPOSITION FOR BUTTON" */

function playComposition(arraySong) {

    let wait = 0; // CONTROLE do loop 

    for ( let itenSong of arraySong) {

        setTimeout(() => {
            playSound(`key${itenSong}`);
        },wait);

        wait += 250; // CONTROLA O TEMPO DE EXECUÇÃO.
    }
}
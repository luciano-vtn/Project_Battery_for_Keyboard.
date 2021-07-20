document.body.addEventListener('keyup', (event) => {
    playSound( event.code.toLowerCase() );
});

function playSound(sound){

    let elementAudio = document.querySelector(`#s_${sound}`);
        if(elementAudio){
            elementAudio.play();
        }
}
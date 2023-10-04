
export const Modal = {
    wrapper : document.querySelector('.modal-wrapper'),
    message : document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),

    open(){
        Modal.wrapper.classList.add('open')
    },
    close(){
        Modal.wrapper.classList.remove('open')
    }
}


Modal.buttonClose.onclick = () => { // Usat o ON somente quando formos usar apenas em 1 local.
    Modal.close()
} 

window.addEventListener('keydown', handleKeyDown) // Para usar a mesma função em outros locais devemos usar wiundow e adicionar um evento.

function handleKeyDown(event){

        if(event.key === 'Escape'){
        Modal.close()
    }

}



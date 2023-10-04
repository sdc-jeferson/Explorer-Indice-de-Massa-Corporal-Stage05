export const AlertError  = {
    error: document.querySelector('.alert-error'),

    open(){
        AlertError.error.classList.add('open')
    },

    close(){
        AlertError.error.classList.remove('open')
    }
}


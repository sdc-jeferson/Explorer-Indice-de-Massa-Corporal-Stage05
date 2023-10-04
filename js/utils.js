export function calculateIMC(weight, height){
    return (weight/ (height /100)**2).toFixed(2)
}

export function notNumber(value){
    return isNaN(value) ||  value === ' ' || value === ''

    // -->> isNan(value) valida se o que foi digitado não é um número, se for difente de um número, não pode continuar com a aplicação.

    //value === '' --> O jS considera isso como um Número, portanto tbm entra essa caracteristica para que n seja aceito.
}
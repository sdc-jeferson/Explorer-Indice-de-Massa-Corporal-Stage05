import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import {calculateIMC, notNumber } from './utils.js';

const form = document.querySelector('form');  
const inputWeight = document.getElementById('weight');
const inputHeight = document.getElementById('height');

// Desafio -> Fechar a janela de erro ao digitar no campo
// evento é de nome input

inputWeight.oninput = () => AlertError.close();
inputHeight.oninput = () => AlertError.close();


form.onsubmit = (event) => {
    event.preventDefault(); //evite o padrao

    const weight = inputWeight.value; 
    const height = inputHeight.value;

    const weightOrHeightIsnotNumber = notNumber(weight) || notNumber(height);

    if(weightOrHeightIsnotNumber){
        AlertError.open()
        return;
    }
        AlertError.close()
    
   
    const result = calculateIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result){

    const message = `Seu IMC é de ${result}`;

    Modal.open()
    Modal.message.innerText = message;

}








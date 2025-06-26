const form = document.querySelector('#form');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const sumar = document.querySelector('#sumar');
const restar = document.querySelector('#restar');
const dividir = document.querySelector('#dividir');
const multiplicar = document.querySelector('#multiplicar');
const potencia = document.querySelector('#potencia');
const resultado = document.querySelector('#resultado');
const select = document.querySelector('#select');

form.addEventListener('submit', (e) => {

  e.preventDefault();

  const num1Value = parseInt(num1.value);
  const num2Value = parseInt(num2.value);

  if (isNaN(num1Value) || isNaN(num2Value) || !num1Value || !num2Value) {
    resultado.textContent = 'Debes introducir números.';
    return;
  }

  if (select.value === 'sumar') {
    resultado.textContent = `El resultado de la suma es: ${num1Value + num2Value}`;
  }


  if (select.value === 'restar') {
    resultado.textContent = `El resultado de la resta es: ${num1Value - num2Value}`;
    console.log(select.value);
  }



})
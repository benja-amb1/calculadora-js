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

  if (isNaN(num1Value) || isNaN(num2Value) || num1.type === 'text' || num2.type === 'text') {
    resultado.textContent = 'Debes introducir números.';
    return;
  }

  if (select.value === 'sumar') {
    resultado.textContent = `El resultado de la suma es: ${num1Value + num2Value}`;
  }


  if (select.value === 'restar') {
    resultado.textContent = `El resultado de la resta es: ${num1Value - num2Value}`;
  }

  if (select.value === 'dividir') {
    if (num2Value === 0) {
      resultado.textContent = `No se puede dividir por 0`;
      return;
    } else {
      resultado.textContent = `El resultado de la división es: ${num1Value / num2Value}`;
    }
  }

  if (select.value === 'multiplicar') {
    resultado.textContent = `El resultado de la multiplicación es: ${num1Value * num2Value}`;
  }

  if (select.value === 'potencia') {
    resultado.textContent = `El resultado de la potencia es: ${num1Value ** num2Value}`;
  }
})
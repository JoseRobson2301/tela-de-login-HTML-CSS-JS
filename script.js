const form = document.querySelector('form');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (username.value === '' || password.value === '') {
    alert('Por favor preencha todos os campos');
  } else { 
    alert(`Seja Bem-Vindo, ${username.value}!`);
    window.location.href = 'https://color.adobe.com/pt/create/color-wheel'; 
    setTimeout(() => {
      alert(`Cadastro realizado com sucesso: ${email.value}!`);
      window.location.href = 'https://www.google.com/';
    }, 9000);
  }
});

function showAlert() {
  document.getElementById("myAlert").style.display = "block";
}

function closeAlert() {
  document.getElementById("myAlert").style.display = "none";
}

var myElement = document.getElementById("myElement");

function showElement() {
  myElement.style.opacity = "1";
}

function hideElement() {
  myElement.style.opacity = "0";
}

setTimeout(showElement, 200); // Mostra o elemento após 1 segundo
setTimeout(hideElement, 5000); // Esconde o elemento após 4 segundos

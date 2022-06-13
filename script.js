const input = document.querySelectorAll('.input');
const button = document.querySelector('.loginButton')



const handleFocus = ({target}) => {
  const span  = target.previousElementSibling;
  span.classList.add('spanOn')
}

const handleFocusOut = ({target}) =>{
  if(target.value ==''){     
    const span  = target.previousElementSibling;
    span.classList.remove('spanOn')
}
}

const handleChange = (() =>{
  const[username, password] = input;
  if(username.value.length > 1 && password.value.length >= 8) {
    button.removeAttribute('disabled')
  } else {
    button.setAttribute('disabled', '')
  }
})


input.forEach((input) => {
  input.addEventListener('focus', handleFocus)
});
input.forEach((input) => {
  input.addEventListener('focusout', handleFocusOut)
});
input.forEach((input) => {
  input.addEventListener('input', handleChange)
});



function colorButtonOver() {
  button.style.backgroundColor= '#B40404'
}

function colorButtonOut() {
  button.style.backgroundColor= '#CF3C3F'
}

function linksOver(links) {
  links.style.color='#151515'
}

function linksOut(links) {
  links.style.color='#A7A7A7'
}

function facebookOver(face){
  face.style.backgroundColor='#0f5fc7'
}
function facebookOut(face){
  face.style.backgroundColor='#1b77f3'
}

function googleOver(google){
  google.style.backgroundColor='#e2dfdf'
}

function googleOut(google){
  google.style.backgroundColor='#ECECEC'
}

function appleOver(apple){
  apple.style.backgroundColor='#1d1d1d'
}

function appleOut(apple){
  apple.style.backgroundColor='#000000'
}


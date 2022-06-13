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
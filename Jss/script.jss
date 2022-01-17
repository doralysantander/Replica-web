probar.addEventListener('click', e =>{
e.preventDefault()

let begin = document.getElementById('begin')
let learning = document.getElementById('learning')

window.location.replace("#pag-inicio")
probar.setAttribute('class','new_menu')
notes.setAttribute('class','menu')
learning.setAttribute('class','menu')
}) 



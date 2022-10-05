let nombre,apellido,formulario,usuario,email,adress,country

let formulario=document.getElementById('form')

formulario.addEventListener('submit',(e) =>{
    e.preventDefault()
   leerData()
})



function leerData(){
nombre=document.getElementById('firstName').value 
 apellido=document.getElementById('lastName').value
 formulario=document.getElementById('form').value
 usuario=document.getElementById('username').value
 email=document.getElementById('email').value
 adress=document.getElementById('adress').value
 country=document.getElementById('country').value

}
function guardarLocalStorage(nombre,apellido,formulario,usuario,email,adress,country){
    localStorage.setItem('nombre', nombre)
    localStorage.setItem('apellido', apellido)
    localStorage.setItem('formulario',formulario)
    localStorage.setItem('usuario', usuario) 
    localStorage.setItem('email', email)
    localStorage.setItem('adress',adress)
    localStorage.setItem('country', country)
}
function ExtraerData(){
    localStorage.getItem('nombre')
    alert('bienvenido', nom)
}

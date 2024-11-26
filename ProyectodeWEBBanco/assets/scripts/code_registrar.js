const button=document.getElementById('registrar');
//import CryptoJS from "crypto-js";
const CryptoJS = require('crypto-js');
//const key = '4505';
const key = process.env.KEY;


/*const mensaje = "Este es un mensaje secreto";
const clave = "ClaveSecreta123";

// Ciframos el mensaje utilizando AES
const mensajeCifrado = CryptoJS.AES.encrypt(mensaje, clave).toString();

console.log(mensajeCifrado); // Imprime el mensaje cifrado en la consola
*/
button.addEventListener('click',(e)=>{
    e.preventDefault();
    //const url='http://localhost:3000/admins/agregarCliente/';
    const url='https://inverlatfront-com.onrender.com/agregar_Cliente';
    const name=document.getElementById('name');
    const rfc=document.getElementById('RFC');
    const email=document.getElementById('email');
    const password=document.getElementById('password');
    const rol=document.getElementById('role');

    $.ajax({
        url:url,
        type:'POST',
        data:JSON.stringify({
            name:name.value,
            rfc:rfc.value,
            email:email.value,
            password:password.value,
            rol:rol.value,
            status: "Activo"
        }),
        contentType:"application/json",
        dataType:'json',
        success: (response) => {
            name.value='';
            rfc.value='';
            email.value='';
            password.value='';
            rol.value='';
            
            alert('Usuario creado exitosamente');
        },
        error: () => {
            alert('error');
        }
        //terminar edicion
    });

})
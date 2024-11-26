require('crypto-js')
const button = document.getElementById('Actualizar');
const key = process.env.KEY;


button.addEventListener('click',(e)=>{
    e.preventDefault();
    const rfc = document.getElementById('RFC');
   // const name = document.getElementById('name');
    //const email = document.getElementById('email');
    const password = document.getElementById('password');
    //const newRFC = document.getElementById('RFC-new');
    const datos = [rfc.value, datos.value];
    const datosC = [];
    for(i=0; i<2; i++){
        datosC.push(CryptoJS.AES.encrypt(datos[i],key));
    }
    console.log(datosC);
    $.ajax({
        type: "PUT",
        url: "https://inverlatfront-com.onrender.com/actualizar_cliente",
        data: JSON.stringify({
            password: datosC[1],
            rfc:datosC[0]
            //name:name.value,
            //email:email.value,
           
            //newRFC:newRFC.value
        }),
        dataType: "application/json",
        success: function (response) {
            console.log(response);
            alert("Los datos se modificaron exitosamente");
            //name.value='';
            rfc.value='';
            //email.value='';
            password.value='';
            //newRFC.value='';
        }, error:(err)=>{
            console.log(err);
            alert("error al actualizar los datos");
        }
    });

})
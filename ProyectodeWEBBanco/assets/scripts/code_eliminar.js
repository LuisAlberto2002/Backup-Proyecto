const button = document.getElementById('submit');



button.addEventListener('click',(e)=>{
    e.preventDefault();
    const rfc = document.getElementById('RFC');
    const url = "https://inverlatfront-com.onrender.com/eliminarCliente";
    

    $.ajax({
        type: "PUT",
        contentType: "application/json",
        dataType: "json",
        url: url,
        data: JSON.stringify({
            rfc:rfc.value
        }),
        success: function (response) {
            alert("Usuario eliminado exitosamente");
            rfc = '';
        },
        error: (err)=>{
            alert("El usuario no se pudo eliminar");
            console.log(err);
        }
        
    });
});




const button=$('#ingresar')[0];

const url='http://localhost:3000/login';

button.addEventListener('click',function(e){
    e.preventDefault();
    const email=document.getElementById('email');
    const passwd=document.getElementById('password');
    $.ajax({
        url:url,
        type:'POST',
        data:JSON.stringify({
            email:email.value,
            password:passwd.value,
        }),
        contentType:"application/json",
        dataType:'json',
        success: (response) => {
            const token = response.token;
            
            if(response.role=="Administrador"){
                alert("!USUARIO VERIFICADO!");
                
                document.cookie = 'Token=' + token + '; path=/';
                window.open('vistaAdmin.html','_self');  
            }else if(response.role=="cliente"){
                alert("!USUARIO VERIFICADO!");
                window.open('user.html','_self');
            }
        },
        error: (err) => {
            console.log('Error: ',err);
        }
    });
})

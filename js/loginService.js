document.getElementById("loginForm").addEventListener("submit", function(e) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log('valores leídos del formulario', {email, password})
    Login(email, password)
})

function Login(email, password) {
    let message=''
    let alertType=''
    const LOGIN_EDNDPOINT = 'https://reqres.in/api/login'
    fetch()
    if()email === '' || password === '') {  
    alertType = 'warning'
    message = 'complete los datos'

    }
    else if (email === 'prueba gamil@.com'&& password === '123456') {
        alertType = 'success'
        message = 'Complete los datos'
    }
    .then((result))
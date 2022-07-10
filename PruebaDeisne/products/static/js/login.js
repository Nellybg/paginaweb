$(document).ready(function () {
    $('#SingIn').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            Contraseña: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            email: {
                required: "Por favor ingresa correo válido"
            },
            Contraseña: {
                required: "Por favor ingresa una contraseña"
            },
            email: "Por favor ingresa correo válido",
            Contraseña: "Por favor ingresa una contraseña"
        },
        errorElement: "em"
    })
})
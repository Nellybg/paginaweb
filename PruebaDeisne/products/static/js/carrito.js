$(document).ready(function () {
    $('#formCarrito').validate({
        rules: {
            nombre: {
                required: true,
                minlength: 10
            },
            numT: {
                required: true,
                minlength: 12,
                maxlength: 12
            },
            fecha: {
                required: true,
                minlength: 5,
                maxlength: 5
            },
            cvv: {
                required: true,
                minlength: 3,
                maxlength: 3
            }
        },
        messages: {
            nombre: {
                required: "Por favor ingresa tu nombre completo",
                minlength: "Tu nombre debe ser de no menos de 5 carácteres"
            },
            numT: {
                required: "Ingrese el número de su tarjeta",
                minlength: "Ingrese los 12 digitos de su tarjeta",
                maxlength: "Ingrese los 12 digitos de su tarjeta"
            },
            fecha: {
                required: "Ingrese la fecha de caducidad de su tarjeta",
                minlength: "Ingrese mes seguido de / y año",
                maxlength: "Ingrese mes seguido de / y año"
            },
            cvv: {
                required: "Ingrese el cvv de su tarjeta",
                minlength: "Ingrese los 3 digitos del cvv",
                maxlength: "Ingrese los 3 digitos del cvv"
            }
        },
        errorElement: "em"
    })
})
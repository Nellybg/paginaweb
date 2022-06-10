$(document).ready(function () {
    $('#SingUp').validate({
        rules: {
            email: {
                required: true,
                email: true
            },
            contraseña: {
                required: true,
                minlength: 5
            },
            nombre: {
                required: true,
                minlength: 5
            },
            contraseñaRepite: {
                required: true,
                minlength: 5,
                equalTo: "#contraseña"
            },
            rut: {
                required : true
            },
            agree: "required"

        },
        messages: {
            nombre: {
                required: "Por favor ingresa tu nombre completo",
                minlength: "Tu nombre debe ser de no menos de 5 caracteres"
            },
            email: {
                required: "Por favor ingresa correo valido",
                email: "Por favor ingresa correo valido"
            },
            contraseña: {
                required: "Ingresa una contraseña",
                minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud",
            },
            contraseñaRepite: {
                required: "Ingresa una contraseña",
                minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud",
                equalTo: "Por favor ingresa la misma contraseña"
            },
            rut:{
                required: "Ingresa el rut correctamente"
            },
            agree: "Por favor acepta nuestra política"
        },
        errorElement: "em",
        errorPlacement: function (error, element) {
           if (element.prop("type") === "checkbox") {
              error.insertAfter(element.parent("label") );
           } else {
              error.insertAfter(element);
           }
        }
    })
})
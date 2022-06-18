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
                minlength: 2
            },
            contraseñaRepite: {
                required: true,
                equalTo: "#contraseña"
            },
            agree: "required"

        },
        messages: {
            nombre: {
                required: "Por favor ingresa tu nombre completo",
                minlength: "Tu nombre debe ser de no menos de 2 carácteres"
            },
            email: {
                required: "Por favor ingresa correo válido",
                email: "Por favor ingresa correo válido"
            },
            contraseña: {
                required: "Ingresa una contraseña de 5-12 carácteres",
                minlength: "Tu contraseña debe ser de no menos de 5 carácteres de longitud",
            },
            contraseñaRepite: {
                required: "Ingresa una contraseña",
                equalTo: "Por favor ingresa la misma contraseña"
            },
            agree: " Por favor acepta nuestra política"
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
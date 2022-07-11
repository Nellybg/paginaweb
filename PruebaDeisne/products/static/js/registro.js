$(document).ready(function () {
    $('#SingUp').validate({
        rules: {
            pathImagen:{
                required: true
            },
            descripcion:{
                required: true,
                minlength: 2,
                maxlength: 30
            },
            tipo_obra:{
                required: true,
                minlength: 2,
                maxlength: 30
            },
            valor:{
                required: true,
                number: true,
                maxlength: 10
            },
            artista:{
                required: true,
                minlength: 2,
                maxlength: 30
            },
            nombreObra:{
                required: true,
                minlength: 2,
                maxlength: 30
            },
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
            pathImagen:{
                required: "Ingrese ruta de la imagen"
            },
            descripcion:{
                required: "Ingrese descripción del producto",
                minlength: "La descripción debe tener al menos 2 caracteres",
                maxlength: "La descrición no debe exceder de los 30 caracteres"
            },
            tipo_obra:{
                required: "Ingrese el tipo de obra",
                minlength: "Ingrese al menos 2 caracteres",
                maxlength: "El tipo de obra no debe exceder de 30 caracteres"
            },
            valor:{
                required: "Ingrese un monto por favor",
                number: "Solo ingrese números",
                maxlength: "El precio no debe exceder de los 10 digitos"
            },
            artista:{
                required: "Por favor ingresa el nombre del o de la artista",
                minlength: "El nombre del/ la artista debe tener un mínimo de 2 carateres",
                maxlength: "El nombre del/ la artista debe tener un máximo de 30 carateres"
            },
            nombreObra:{
                required: "Por favor ingresa el nombre de la obra",
                minlength: "El nombre de la obra debe tener un mínimo de 2 carateres",
                maxlength: "El nombre de la obra debe tener un máximo de 30 carateres"
            },
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
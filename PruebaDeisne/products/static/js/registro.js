$(document).ready(function () {
    $('#SingUp').validate({
        rules: {
            anno:{
                required: true,
                minlength: 4,
                maxlength: 4,
                number: true
            },
            envio:{
                required: true,
                minlength: 2,
                maxlength: 30
            },
            dimensiones:{
                required: true,
                minlength: 3,
                maxlength: 7
            },
            otros_detalles:{
                required: true,
                minlength: 2,
                maxlength: 30
            },
            tecnica:{
                required: true,
                minlength: 2,
                maxlength: 30
            },
            codigoProducto:{
                required: true,
                number: true,
                minlength: 2,
                maxlength: 5
            },
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
            anno:{
                required: "Ingrese el año de la obra",
                minlength: "Debe tener 4 digitos",
                maxlength: "Debe tener 4 digitos",
                number: "El año debe ser en números"
            },
            envio:{
                required: "Ingrese la agencia de envios",
                minlength: "Debe tener al menos 3 caracteres",
                maxlength: "Debe tener un máximo de 7 caracteres"
            },
            dimensiones:{
                required: "Ingrese las dimensiones",
                minlength: "Debe tener al menos 3 caracteres",
                maxlength: "Debe tener un máximo de 7 caracteres"
            },
            otros_detalles:{
                required: "Ingrese los detalles",
                minlength: "Debe tener al menos 5 caracteres",
                maxlength: "Debe tener un máximo de 30 caracteres"
            },
            tecnica:{
                required: "Ingrese la técnica de la obra",
                minlength: "Debe tener al menos 5 caracteres",
                maxlength: "Debe tener un máximo de 30 caracteres"
            },
            codigoProducto:{
                required: "Ingrese código de producto",
                number: "El código tiene que ser numerico",
                minlength: "El código debe tener al menos 2 digitos",
                maxlength: "El código debe tener un máximo de 5 digitos"
            },
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
                required: "Ingresa el nombre del o de la artista",
                minlength: "El nombre del/ la artista debe tener un mínimo de 2 carateres",
                maxlength: "El nombre del/ la artista debe tener un máximo de 30 carateres"
            },
            nombreObra:{
                required: "Ingresa el nombre de la obra",
                minlength: "El nombre de la obra debe tener un mínimo de 2 carateres",
                maxlength: "El nombre de la obra debe tener un máximo de 30 carateres"
            },
            nombre: {
                required: "Por favor ingresa tu nombre completo",
                minlength: "Tu nombre debe ser de no menos de 2 carácteres"
            },
            email: {
                required: "Ingresa correo válido",
                email: "Ingresa correo válido"
            },
            contraseña: {
                required: "Ingresa una contraseña de 5-12 carácteres",
                minlength: "Tu contraseña debe ser de no menos de 5 carácteres de longitud",
            },
            contraseñaRepite: {
                required: "Ingresa una contraseña",
                equalTo: "Ingresa la misma contraseña"
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
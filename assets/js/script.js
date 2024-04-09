
$(document).ready(function(){/*  todas las funciones comenzarán luego de que la página esté cargada */
    
    /* Tooltip */



    $("#enviarCorreo").click(function(){ /* al hacer click en el boton de id #enviarCorreo, aparece la alerta */
        alert("El correo fue enviado correctamente...");
    });

    /* Cambiar color del texto */
    $("#ingredientes").on("dblclick", function(){/* cambia el color de #ingredientes  al hacer doble click*/
        $(this).css({"color":"red"})
    });
    $("#preparacion").on("dblclick", function(){ /* cambia el color de #preparacion  al hacer doble click*/
        $(this).css({"color":"red"})
    });
/* Toggle */
    $(".card-title").click(function(){/* al hacer click en el título de la card */
        $(".card-text").toggle(); /* desaparece el card-text */
    });

        /* Tooltip de Jquery */
    $( function() { /* si colocamos title="texto" en alguna etiqueta, el texto se mostrará cómo tooltip */
        $( document ).tooltip();
    } );
});
$(document).ready(function () {
    // Si pulsamos tecla en un Input
    $("input").keydown(function (e) {
        // Capturamos qué telca ha sido
        var keyCode = e.which;
        // Si la tecla es el Intro/Enter
        if (keyCode == 13) {
            // Evitamos que se ejecute eventos
            event.preventDefault();
            // Devolvemos falso
            return false;
        }
    });

});
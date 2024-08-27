//Alertas de clic con input vacio.

function emptyInputAlerts(icon, message1, message2) {
    Swal.fire({
        timer: 3000,
        timerProgressBar: true,
        allowEscapeKey:true,
        allowOutsideClick: true,
        Animation: true,
        icon: `${icon}`,
        title: `${message1}`,
        html: `<span class="modalText">${message2}</span>`,
        confirmButtonText: "Aceptar",
        customClass: {
            title: "modalTitle",
            text: "modalText",
            confirmButton: "modalBtn",
        }
    });
}

//Alertas de encritado / desencriptado / copiado completo.
function encryptionAlerts(icon, message1, message2) {
    Swal.fire ({
        timer: 3000,
        timerProgressBar: true,
        allowEscapeKey:true,
        allowOutsideClick: true,
        icon: `${icon}`,
        title: `${message1}`,
        html: `<span class="modalText">${message2}</span>`,
        confirmButtonText: "Aceptar",
        customClass: {
            title: "modalTitle",
            text: "modalText",
            confirmButton: "modalBtn",
        },
    })
}
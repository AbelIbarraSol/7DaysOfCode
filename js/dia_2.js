function submit__Day2() {
    let input_Name = document.getElementById("input-Name").value;
    let input_Age = document.getElementById("input-Age").value;
    let input_Lang = document.getElementById("input-Lang").value;
    let btnSubmit = document.getElementById("btn-Submit");

    let contentMessage = document.getElementById("message-content");
    let contentButtons = document.querySelector(".day-2__button-content");

    contentMessage.innerHTML = "";

    if (input_Name === "") {
        alert('Tienes que ingresar tu nombre');
        return;
    }

    if (input_Age === "") {
        alert('Tienes que ingresar tu edad');
        return;
    }

    if (input_Lang === "") {
        alert('Tienes que ingresar el lenguaje de programación que estás estudiando');
        return;
    }

    // Crear elemento mensaje
    let message = document.createElement("h3");
    message.textContent = `Hola ${input_Name}, tienes ${input_Age} años y ya estás aprendiendo ${input_Lang}!`;
    message.classList.add("day-2__text");

    // Crear elemento botón limpiar
    let cleanContent = document.createElement("button");
    cleanContent.textContent = "Limpiar";
    cleanContent.classList.add("day-2__button", "day-2__button--clean");

    // Asignar evento on click al botón limpiar
    cleanContent.onclick = () => {
        cleanElements(cleanContent); // pasar botón como argumento
    }

    // Insertar elemento hijo en contenedor padre
    contentMessage.appendChild(message);
    contentButtons.appendChild(cleanContent);

    // Deshabilitar el botón "Enviar"
    btnSubmit.disabled = true;
}

function cleanElements(cleanButton) {
    document.getElementById("input-Name").value = "";
    document.getElementById("input-Age").value = "";
    document.getElementById("input-Lang").value = "";
    document.getElementById("message-content").innerHTML = "";
    // Eliminar el botón "Limpiar" del DOM
    cleanButton.remove();

    // Habilitar el botón "Enviar"
    document.getElementById("btn-Submit").disabled = false;
}

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

    // Ejercicio Opcional

    let message_2 = document.createElement("h3");
    message_2.textContent = `¿Te gusta estudiar ${input_Lang}?`;
    

    let btnYes = document.createElement("button");
    btnYes.textContent = 'Si';

    let btnNo = document.createElement("button");
    btnNo.textContent = 'No';

    btnYes.onclick = () => {
        answer(contentMessage, 1);
    }

    btnNo.onclick = () => {
        answer(contentMessage, 2);
    }
    


    // Insertar elemento hijo en contenedor padre
    contentMessage.appendChild(message);
    contentButtons.appendChild(cleanContent);
    contentMessage.appendChild(message_2);
    contentMessage.appendChild(btnYes);
    contentMessage.appendChild(btnNo);
    
    // Deshabilitar el botón "Enviar"
    btnSubmit.disabled = true;
}

function answer(content, n_answer) {
    document.getElementById("message-content").innerHTML = "";
    let message_3 = document.createElement("h3");
    if (n_answer === 1) {
        message_3.textContent = "¡Muy bien! Sigue estudiando y tendrás mucho éxito.";
        content.appendChild(message_3);
    }

    if (n_answer === 2) {
        message_3.textContent = "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";
        content.appendChild(message_3);
    }
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

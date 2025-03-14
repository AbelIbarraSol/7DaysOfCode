function submit() {
    let input_Name = document.getElementById("input-Name").value;
    let input_Age = document.getElementById("input-Age").value;
    let input_Lang = document.getElementById("input-Lang").value;
    let btnSubmit = document.getElementById("btn-Submit");

    let contentButtons = document.querySelector(".day-2__button-content");
    let contentMessage = document.querySelector(".day-2__message--content");

    let message = `Hola ${input_Name}, tienes ${input_Age} años y ya estás aprendiendo ${input_Lang}!`;

    let txtMessageContent = document.createElement("h3");
    txtMessageContent.textContent = message;
    txtMessageContent.classList.add("day-2__message--text");
    contentMessage.style.display = "flex";
    contentMessage.appendChild(txtMessageContent);

    // Crear elementos
    let btnQuestion = document.createElement("button");
    btnQuestion.textContent = "Pregunta";
    btnQuestion.classList.add("day-2__button");
    contentButtons.appendChild(btnQuestion);

    btnQuestion.onclick = () => {
        btnQuestion.remove();
        txtMessageContent.innerHTML = `¿Te gusta estudiar ${input_Lang}?`;

        let btnYes = document.createElement("button");
        btnYes.textContent = 'Si';
        btnYes.classList.add("day-2__button", "day-2__button--answer");

        let btnNo = document.createElement("button");
        btnNo.textContent = 'No';
        btnNo.classList.add("day-2__button", "day-2__button--answer");

        contentButtons.appendChild(btnYes);
        contentButtons.appendChild(btnNo);

        btnYes.onclick = () => {
            answer(1);
            btnYes.remove();
            btnNo.remove();
        }

        btnNo.onclick = () => {
            answer(2);
            btnYes.remove();
            btnNo.remove();
        }
    }


    // Crear botón Reiniciar
    let btnRestart = document.createElement("button");
    btnRestart.textContent = "Reiniciar";
    btnRestart.classList.add("day-2__button", "day-2__button--restart");
    contentButtons.appendChild(btnRestart);

    btnRestart.onclick = () => {
        // Limpiar mensajes y botones
        txtMessageContent.remove();

        if (document.querySelector(".day-2__button")) {
            document.querySelectorAll(".day-2__button").forEach(btn => btn.remove());
        }
        
        // Mostrar botón Enviar
        btnSubmit.style.display = "block";

        // Limpiar los inputs
        document.getElementById("input-Name").value = "";
        document.getElementById("input-Age").value = "";
        document.getElementById("input-Lang").value = "";

        // Ocultar el contenedor de mensajes
        contentMessage.style.display = "none";
    }

    // Deshabilitar el botón "Enviar"
    btnSubmit.style.display = "none";

}

function answer(n_answer) {
    if (n_answer === 1) {
        document.querySelector(".day-2__message--text").innerHTML = "¡Muy bien! Sigue estudiando y tendrás mucho éxito.";
    }

    if (n_answer === 2) {
        document.querySelector(".day-2__message--text").innerHTML = "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";
    }
}

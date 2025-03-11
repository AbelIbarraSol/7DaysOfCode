function submit__Day2() {
    let input_Name = document.getElementById("input-Name").value;
    let input_Age = document.getElementById("input-Age").value;
    let input_Lang = document.getElementById("input-Lang").value;

    let btnSubmit = document.getElementById("btn-Submit");
    let contentButtons = document.querySelector(".day-2__button-content");
    let contentMessage = document.querySelector(".day-2__message--content");

    let message = `Hola ${input_Name}, tienes ${input_Age} años y ya estás aprendiendo ${input_Lang}!`;

    if (input_Name === "") {
        alert("Ingresa tu nombre.");
        return;
    }

    if (input_Age === "") {
        alert("Ingresa tu edad.");
        return;
    }

    if (input_Lang === "") {
        alert("Ingresa el lenguaje que estas estudiando.");
        return;
    }

    let txtMessageContent = document.createElement("h3");
    txtMessageContent.textContent = message;
    txtMessageContent.classList.add("day-2__message--text");

    // Crear elemento botón pregunta
    let btnQuestion = document.createElement("button");
    btnQuestion.textContent = "Pregunta";
    btnQuestion.classList.add("day-2__button");

    btnQuestion.onclick = () => {
        btnQuestion.style.backgroundColor = "var(--primary-color)";
        document.querySelector(".day-2__message--text").innerHTML = `¿Te gusta estudiar ${input_Lang}?`;

        let btnYes = document.createElement("button");
        btnYes.textContent = 'Si';
        btnYes.classList.add("day-2__button","day-2__button--question-yes");

        let btnNo = document.createElement("button");
        btnNo.textContent = 'No';
        btnNo.classList.add("day-2__button","day-2__button--question-no");

        contentMessage.appendChild(btnYes);
        contentMessage.appendChild(btnNo);

        btnYes.onclick = () => {
            answer(1);
            btnYes.remove();
            btnNo.remove();
            btnQuestion.remove()
        }

        btnNo.onclick = () => {
            answer(2);
            btnYes.remove();
            btnNo.remove();
            btnQuestion.remove()
        }

    }

    // Crear elemento botón limpiar
    let cleanContent = document.createElement("button");
    cleanContent.textContent = "Limpiar";
    cleanContent.classList.add("day-2__button", "day-2__button--clean");

    // Asignar evento on click al botón limpiar
    cleanContent.onclick = () => {
        cleanElements(txtMessageContent, cleanContent, btnQuestion); // pasar botón como argumento
    }

    // Insertar elemento hijo en contenedor padre
    contentMessage.appendChild(txtMessageContent);
    contentMessage.style.display = "flex";

    contentButtons.appendChild(cleanContent);
    contentButtons.appendChild(btnQuestion);

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

function cleanElements(txtMessageContent, cleanButton, btnQuestion) {
    document.getElementById("input-Name").value = "";
    document.getElementById("input-Age").value = "";
    document.getElementById("input-Lang").value = "";
    document.querySelector(".day-2__message--content").style.display = "none";
    // Eliminar el botón "Limpiar" y "Pregunta" del DOM
    txtMessageContent.remove();
    cleanButton.remove();
    btnQuestion.remove();
    // Habilitar el botón "Enviar"
    document.getElementById("btn-Submit").style.display = "block";
}

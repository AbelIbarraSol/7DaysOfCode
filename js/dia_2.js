function submit__Day2() {
    let input_Name = document.getElementById("input-Name").value;
    let input_Age = document.getElementById("input-Age").value;
    let input_Lang = document.getElementById("input-Lang").value;

    let btnSubmit = document.getElementById("btn-Submit");
    let contentButtons = document.querySelector(".day-2__button-content");
    let contentMessageOne = document.querySelector(".day-2__message--content-one");
    let contentMessageTwo = document.querySelector(".day-2__message--content-two");

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

    let answer_one = document.createElement("h3");
    answer_one.textContent = message;

    // Crear elemento botón limpiar
    let cleanContent = document.createElement("button");
    cleanContent.textContent = "Limpiar";
    cleanContent.classList.add("day-2__button", "day-2__button--clean");

    // Crear elemento botón pregunta
    let btnQuestion = document.createElement("button");
    btnQuestion.textContent = "Pregunta";
    btnQuestion.classList.add("day-2__button");

    // btnQuestion.onclick = () => {
      

    //     message_2.textContent = `¿Te gusta estudiar ${input_Lang}?`;
        

    //     let btnYes = document.createElement("button");
    //     btnYes.textContent = 'Si';

    //     let btnNo = document.createElement("button");
    //     btnNo.textContent = 'No';

    //     btnYes.onclick = () => {
    //         answer(contentMessage, 1);
    //     }

    //     btnNo.onclick = () => {
    //         answer(contentMessage, 2);
    //     }
    // }

    // Asignar evento on click al botón limpiar
    
    cleanContent.onclick = () => {
        cleanElements(answer_one, cleanContent, btnQuestion); // pasar botón como argumento
    }

    
    


    // Insertar elemento hijo en contenedor padre
    contentMessageOne.appendChild(answer_one);
    contentMessageOne.style.display = "block";

    contentButtons.appendChild(cleanContent);
    contentButtons.appendChild(btnQuestion);
    // contentMessage.appendChild(message_2);
    // contentMessage.appendChild(btnYes);
    // contentMessage.appendChild(btnNo);
    
    // Deshabilitar el botón "Enviar"
    btnSubmit.disabled = true;
}

// function answer(content, n_answer) {
//     document.getElementById("message-content").innerHTML = "";
//     let message_3 = document.createElement("h3");
//     if (n_answer === 1) {
//         message_3.textContent = "¡Muy bien! Sigue estudiando y tendrás mucho éxito.";
//         content.appendChild(message_3);
//     }

//     if (n_answer === 2) {
//         message_3.textContent = "Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";
//         content.appendChild(message_3);
//     }
// }

function cleanElements(answer_one,cleanButton, btnQuestion) {
    document.getElementById("input-Name").value = "";
    document.getElementById("input-Age").value = "";
    document.getElementById("input-Lang").value = "";
    document.querySelector(".day-2__message--content-one").style.display = "none";
    // Eliminar el botón "Limpiar" y "Pregunta" del DOM
    answer_one.remove();
    cleanButton.remove();
    btnQuestion.remove();
    // Habilitar el botón "Enviar"
    document.getElementById("btn-Submit").disabled = false;
}

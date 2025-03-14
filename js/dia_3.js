function dia3() {
    let area = prompt("área de Front-End(1) o área de Back-End?(2)");
    let language;

    if (area == 1) {
        language = prompt('vue o React');
        alert(`Excelente ${language} es un excelente lenguaje de front End`);

    }

    if (area == 2) {
        language = prompt('C# o Java');
        alert(`Excelente ${language} es un excelente lenguaje de Back End`);

    }

    let specialization = prompt(`Especializacion en ${language} (1) o  desarrollo Full Stack (2)`);

    if (specialization == 1) {
        alert(`Genial una especializacion en ${language}`);

    }

    if (specialization == 2) {
        alert(`Genial una especializacion en Full Stack es un gran paso`);
    }

    let i = true;
    while(i == true) {
        let question4 = prompt("¿Hay alguna otra tecnología que te gustaría aprender? si? no?");
        if (question4 == "si" ) {
            let answer4 = prompt('Genial cuentame cual es esa tecnologia');
            alert(`Genial ${answer4} me parece una buena tecnologia para especializarse`);
            i = true;

        } 
        if (question4 == "no" ) {
            alert('Gracias por participar');
            i = false;
        }
    }
}



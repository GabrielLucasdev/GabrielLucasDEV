const texts = ["de Tecnologia", "Front-End", "Back-End", "Web"]; // Palavras que você deseja exibir
const colors = ["#007e70", "#5facde", "#00b5ae", "#5facde"]; // Cores correspondentes
const speed = 120 ;
let index = 0;
let textIndex = 0;
let isDeleting = false;

function type() {
    const currentText = texts[textIndex].slice(0, index);
    const typewriter = document.getElementById('typewriter');
    typewriter.textContent = currentText;
    typewriter.style.color = colors[textIndex];

    if (!isDeleting && index < texts[textIndex].length) {
        index++;
        setTimeout(type, speed);
    } else if (isDeleting && index > 0) {
        index--;
        setTimeout(type, speed);
    } else if (!isDeleting && index === texts[textIndex].length) {
        setTimeout(() => isDeleting = true, 1000);
        setTimeout(type, speed);
    } else if (isDeleting && index === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // Volta para a primeira palavra após a última
        setTimeout(type, speed);
    }
}

type();
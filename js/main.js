const buttonEncriptar = document.getElementById("button-encriptar");
const buttonDesencriptar = document.getElementById("button-desencriptar");
const textArea = document.getElementById("area");
const messageNotFound = document.querySelector(".aside__title");
const insertText = document.querySelector(".aside__paragraph");
const imageCharacter = document.querySelector(".character-image");
const newText = document.getElementById("new-text");
const buttonCopy = document.getElementById("button-copy");
const messageCopied = document.getElementById("message-copied");

let copyMessage = "<p style='color: green'>¡Texto copiado!</p>"

function encriptador() {
    if (/[A-Z]/.test(textArea.value) || /[^A-Za-z0-9_\s]/.test(textArea.value)) {
        Swal.fire({
            position: "top",
            title: "Recuerda! Sin mayúsculas, acentos, ni caracteres especiales.",
            width: "20%",
            icon: "error",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
        })
        newText.innerHTML = "<p style='text-align: center'>Recuerda! Sin mayúsculas, acentos, ni caracteres especiales.</p>"
    }
    else {
        let text = textArea.value;
        newText.innerText = text
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return text;
    }

}

function desencriptador() {
    let text = textArea.value;
    newText.innerText = text
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    return text;
}

function copyClipboard() {
    navigator.clipboard.writeText(newText.innerText)

    messageCopied.innerHTML = copyMessage

    setTimeout(() => {
        messageCopied.style.display = "none"
    }, 2000);

    messageCopied.style.display = "block"

}

function MostrarOcultarTexto() {
    if (textArea.value !== "") {
        messageNotFound.style.display = "none";
        insertText.style.display = "none";
        imageCharacter.style.display = "none";
        newText.style.display = "block";
        newText.textContent = textArea.value;
        buttonCopy.style.display = "block";
    } else {
        messageNotFound.style.display = "block";
        insertText.style.display = "block";
        imageCharacter.style.display = "block";
        newText.style.display = "none";
        buttonCopy.style.display = "none";
    }

}

buttonEncriptar.addEventListener('click', () => {
    MostrarOcultarTexto()
    encriptador()
    textArea.value = ""
})

buttonDesencriptar.addEventListener('click', () => {
    MostrarOcultarTexto()
    desencriptador()
    textArea.value = ""
})

buttonCopy.addEventListener('click', () => {
    copyClipboard()
})

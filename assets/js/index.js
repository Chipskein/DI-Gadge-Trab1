const form = document.getElementById("painel-form")
form.onsubmit = (e) => e.preventDefault();

const tituloInput = document.getElementById("titulo-input")
tituloInput.onchange = (event) => {
    const input = event.target
    const value = input.value
    changeTitulo(value)
}
tituloInput.value = document.getElementById("card-hello").innerText

const tituloSizeInput = document.getElementById("titulo-size-input")
tituloSizeInput.value = parseInt(getComputedStyle(document.getElementById("card-hello")).fontSize.replace("px", ""))
tituloSizeInput.onchange = (event) => {
    const input = event.target
    const value = input.value
    changeTituloSize(value)
}


const textoSizeInput = document.getElementById("texto-size-input")
textoSizeInput.value = parseInt(getComputedStyle(document.getElementById("card-text")).fontSize.replace("px", ""))
textoSizeInput.onchange = (event) => {
    const input = event.target
    const value = input.value
    changeTextoSize(value)
}

const textoInput = document.getElementById("texto-input")
textoInput.onchange = (event) => {
    const input = event.target
    const value = input.value
    changeTexto(value)
}
textoInput.value = document.getElementById("card-text").innerText

const bordaSizeInput = document.getElementById("borda-size-input")
bordaSizeInput.value = parseInt(getComputedStyle(document.getElementById("graficos")).borderWidth.replace("px", ""))
bordaSizeInput.onchange = (event) => {
    const input = event.target
    const value = input.value
    changeBorderSize(value)
}

const borderColorInput = document.getElementById("border-color-input")
borderColorInput.value = rgbToHex(...extractRGB(getComputedStyle(document.getElementById("graficos")).borderColor))
borderColorInput.onchange = (event) => {
    const input = event.target
    const color = input.value
    changeBorderColor(color)
}

const foregroundColor = document.getElementById("input-color-fg")
foregroundColor.value = rgbToHex(...extractRGB(getComputedStyle(document.getElementById("graficos")).color))
foregroundColor.onchange = (event) => {
    const input = event.target
    const color = input.value
    changeForegroundColor(color)
}

const backgroundColor = document.getElementById("input-color-bg")
backgroundColor.value = rgbToHex(...extractRGB(getComputedStyle(document.getElementById("graficos")).backgroundColor))
backgroundColor.onchange = (event) => {
    const input = event.target
    const color = input.value
    changeBackgroundColor(color)
}

const imageInput = document.getElementById("image-input")
imageInput.onchange = changeImage

const larguraInput = document.getElementById("width-size-input")
larguraInput.value = parseInt(getComputedStyle(document.getElementById("graficos")).width.replace("px", ""))
larguraInput.onchange = (event) => {
    const input = event.target
    const value = input.value
    changeLargura(value)
}

const alturaInput = document.getElementById("height-size-input")
alturaInput.value = parseInt(getComputedStyle(document.getElementById("graficos")).height.replace("px", ""))
alturaInput.onchange = (event) => {
    const input = event.target
    const value = input.value
    changeAltura(value)
}




function changeBorderSize(size) {
    console.log("changeBorderSize", size)
    const border = document.getElementById("graficos")
    border.style.borderWidth = `${size}px`
}
function changeBorderColor(color) {
    console.log("changeBorderColor", color)
    const border = document.getElementById("graficos")
    border.style.borderColor = color
}
function changeTextoSize(size) {
    console.log("changeTextoSize", size)
    const texto = document.getElementById("card-text")
    texto.style.fontSize = `${size}px`
}

function changeTexto(txt) {
    console.log("changeTexto", txt)
    const texto = document.getElementById("card-text")
    texto.innerText = txt
}
function changeTextoSize(size) {
    console.log("changeTextoSize", size)
    const texto = document.getElementById("card-text")
    texto.style.fontSize = `${size}px`
}
function changeTituloSize(size) {
    console.log("changeTituloSize", size)
    const texto = document.getElementById("card-hello")
    texto.style.fontSize = `${size}px`
}

function changeTitulo(txt) {
    console.log("changeTitulo", txt)
    const texto = document.getElementById("card-hello")
    texto.innerText = txt
}
function changeBackgroundColor(color) {
    console.log("changeBackgroundColor", color)
    const card = document.getElementById("graficos")
    card.style.backgroundColor = color

}
function changeForegroundColor(color) {
    console.log("changeForegroundColor", color)
    const card = document.getElementById("graficos")
    card.style.color = color
}

function changeImage(event) {
    const target = event.target
    const { files } = target
    const [file] = files
    if (file) {
         const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"];
         if (!validImageTypes.includes(file.type)) {
             alert("Faça upload de uma imagem válida (JPEG, PNG, GIF, or WEBP).");
             return;
         }
        const reader = new FileReader();
        reader.onload = function (e) {
            const imagePreview = document.getElementById("card-image");
            imagePreview.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}
function changeLargura(value) {
    console.log("changeLargura", value)
    const card = document.getElementById("graficos")
    card.style.width = `${value}px`
}
function changeAltura(value) {
    console.log("changeAltura", value)
    const card = document.getElementById("graficos")
    card.style.height = `${value}px`
}
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}
function extractRGB(rgbString) {
    const [r, g, b] = rgbString.replace("rgb", "").replace("(", "").replace(")", "").split(",")
    return [parseInt(r), parseInt(g), parseInt(b)]
}


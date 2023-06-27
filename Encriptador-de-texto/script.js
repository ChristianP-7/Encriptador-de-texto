 const textArea=document.querySelector(".text-area");
 const resultado=document.querySelector(".resultado");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    resultado.value = textoEncriptado
    textArea.value = "";
    resultado.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo=[["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    resultado.value = textoDesencriptado
    textArea.value = "";
    resultado.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo=[["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][0])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringDesencriptado
}

function copiarAlPortapapeles(){
    navigator.clipboard.writeText(resultado.value);
}
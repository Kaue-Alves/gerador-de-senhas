const letrasMin = "abcdefghijklmnopqrstuvwxyz"
const letrasMai = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const caracteres = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

function gerarSenha(tamanho = 0) {
    
    try {
        if (typeof tamanho !== "number" || tamanho <= 0) {
            throw new Error("O tamanho da senha precisa ser um número maior que zero.")
        } else {
            console.log("pega aí o tamanho" + tamanho);
        }
    } catch(error) {
        console.error(error.message)
        return
    }
}

module.exports = { gerarSenha }
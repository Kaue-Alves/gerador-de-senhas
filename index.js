const gerador = require("./src/caracteres")
const msg = 
`
GERADOR DE SENHAS ALEATÓRIAS

1 - Gerar senha aleatória
2 - Validar senha
3 - Sair

Digite o número da opção que deseja realizar

=>`

let i = true
while(i) {
    let op = Number(prompt(msg))
    switch(op){
        case 1:

            break
        case 2:

            break
        case 3:
            console.log("Saindo...")
            i = false
            break
        default:
            console.log("Opção inválida. Tente novamente.")
            break
    }
}
// let tamanho = Number(prompt("Digite o tamanho da senha: "))
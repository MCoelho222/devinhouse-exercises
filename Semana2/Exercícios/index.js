var nome = document.getElementById('name')
var email = document.getElementById('email')
var birth = document.querySelector('#birthdate')
var work = document.getElementById('work')
var formulario = document.getElementsByTagName('form')

function clicar() {
    window.alert(`Bem-vindo (a), ${nome.value}!\nEnviaremos avisos e promoções exclusivas neste e-mail.\nAVISO: Após clicar em OK, não clique no mouse novamente, apenas digite seu e-mail.`)
}
email.addEventListener('click', clicar)

function clicarb() {
    var birthemj = String.fromCodePoint(0x1F973)
    window.alert(`Enviaremos promoções exclusivas para você nesta data.${birthemj}\nAVISO: Após clicar em OK, não clique no mouse novamente, apenas digite seu e-mail.`)
}
birth.addEventListener('click', clicarb)

function clicarc() {
    window.alert(`Digite sua ocupação principal, seja qual for.\nUsaremos esta informação para melhorar sua experiência durante o curso.`)
}
work.addEventListener('click', clicarc)

function obrigado() {
    var conf = window.confirm('Os dados estão corretos?')
    var emj = String.fromCodePoint(0x1F44C);
    if (conf) {
        window.alert(`Parabéns ${nome.value}, inscrição confirmada!\nEnviaremos e-mails de avisos, nos vemos lá...\nMuito obrigado ${emj}`)
    }
    
}
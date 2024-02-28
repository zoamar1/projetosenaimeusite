var nomeGlobal;
var mensagemGlobal;

function conferirMesagemWhatsApp(){
    var nome = document.getElementById("nome").value;
    var mensagem = document.getElementById("mensagem").value;

    nomeGlobal = nome;
    mensagemGlobal = mensagem;

    document.getElementById("confNome").textContent = nome;
    document.getElementById("confMsg").textContent = mensagem;
}

function enviar(){
    var numeroTelefone = "5541992148567";
    console.log(nomeGlobal, mensagemGlobal)
    var linkWhatsApp = 
    "https://wa.me/" + 
    numeroTelefone + 
    "?text=Olá meu nome é: " + 
    nomeGlobal + 
    "/Minha Mensagem é: " + 
    mensagemGlobal;

    window.open(linkWhatsApp, "_blank")
}
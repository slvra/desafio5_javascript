
let check;

class contato {
    constructor(nome, email, telefone, contato, mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.contato = contato;
        this.mensagem = mensagem;
    }
}

function Post(form) {
    // console.log('chamou post');

  check = new contato(form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value,
            form.elements.namedItem("mensagem").value);

            console.log(check);

            document.getElementById("consolidacao").style.display = "block"; // mostrar a div dos dados digitados

            document.getElementById("nome").innerHTML = check.nome;
            document.getElementById("email").innerHTML = check.email;
            document.getElementById("telefone").innerHTML = check.telefone;
            document.getElementById("contato").innerHTML = check.contato;
            document.getElementById("texto1").innerHTML = check.mensagem;
}

function Enviar() {

    // var nome = document.getElementById("nomeid");

    if (check.nome != "") {
        alert('Obrigado sr(a) ' + check.nome + ' os seus dados foram encaminhados com sucesso');
            window.location.reload();
    }

}
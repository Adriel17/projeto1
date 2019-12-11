

function verificar(){
    var lista = ["vinicius@gmail.com", "adriel@gmail.com"];
    var pass = ["vb729401", "adriel1711"];
    var email = $("#email").val();
    var senha = $("#senha").val();



    if(email == lista[0] && senha == pass[0]){
        window.location.href = "arquivos.html";
    } else if(email == lista[1] && senha == pass[1]) {
        window.location.href = "arquivos1.html";
    } else {
        $('#aviso').html("<p class='red-text text-accent-2'>Dados incorretos. Verifique seu email e senha!</p>");
    }
    
    /*var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    var check=/@[w-]+./;
    var checkend=/.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
    else {return window.location.href = "inicial.html";}*/
}




function verificar(){
    var email = $("#email").val();
    var senha = $("#senha").val();
    
    console.log(email);
    var lista = ["vinicius@gmail.com", "adriel@hotmail.com"];
    var pass = ["vb729401", "adriel4578"];

     
    var email1 = $('#cdemail').val();
    var senha1 = $("#cdsenha").val();
    console.log(email1);

    lista.push(email1);
    pass.push(senha1);
   


    if(email == lista[0] && senha == pass[0]){
        window.location.href = "arquivos.html";
    } else if(email == lista[2] && senha[2] == pass[2]) {
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




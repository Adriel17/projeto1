
function verificar(){
    var email = $("#email").val();
    console.log(email);
    var lista = ["vinicius@gmail.com", "adriel@hotmail.com"];
    for(i = 0; i < lista.length - 1; i++){
    if(email == lista[0]){
        window.location.href = "arquivos.html";
    } else{
        console.log("false");
    }
}
    
    /*var exclude=/[^@-.w]|^[_@.-]|[._-]{2}|[@.]{2}|(@)[^@]*1/;
    var check=/@[w-]+./;
    var checkend=/.[a-zA-Z]{2,3}$/;
    if(((email.search(exclude) != -1)||(email.search(check)) == -1)||(email.search(checkend) == -1)){return false;}
    else {return window.location.href = "inicial.html";}*/
}


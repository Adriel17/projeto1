$(document).ready(function(){

$("#asd").click(()=>{

var nome = $("#Nome").val();
var sobre = $("#sobrenomeC").val();

if (nome!="" && sobre!=""){
	if ($("#b11").is(':checked')) {
		if ($("#b22").is(':checked')) {
			$("#card").css("display", "block");
			$("#resultado").empty();
			$("#resultado").append("<h4 class='green-text text-darken-1'>Você não é pai de "+nome+" "+sobre+"</h4>");
		}else if ($("#b21").is(':checked')) {
			$("#card").css("display", "block");
			$("#resultado").empty();
			$("#resultado").append("<h4 class='amber-text text-darken-3'>Você é o pai de "+nome+" "+sobre+"<h4>");
		}
}else if ($("#b12").is(':checked')) {
	$("#card").css("display", "block");
	$("#resultado").empty();
	$("#resultado").append("<h4 class='green-text text-darken-1'>Você não é pai de "+nome+" "+sobre+"</h4>");
}}else{		$("#card").css("display", "block");
			$("#resultado").empty();
			$("#resultado").append("<h4 class='red-text text-accent-4'>Preencha os campos requeridos!</h4>");
			}
			}
		)
	}
)


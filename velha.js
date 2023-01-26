
var vez = 1;
var casas = $(".casa");
var x = "<img src=X.png>";
var o = "<img src=O.png>";

function reset(){
    $(".casa").html("");
    $("#jogador1").html("");
    $("#jogador2").html("");
    $("#nomes").val("");
    $("#botao").removeAttr('disabled');
    $("#jogador").html("JOGADOR(A) 1");
    vez = 1;
}

$("#botao").click(function(){
    if($("#nomes").val()== "" && $("#jogador1").html() ==""){
        alert("Digite um nome.");
        $("#nomes").css("borderColor", "red");
    } else if ($("#nomes").val()!= "" && $("#jogador1").html() ==""){
        nome1 = $("#nomes").val();
        $("#jogador1").html("<img class= sinal src=green.png>" + nome1.toUpperCase());
        $("#nomes").val("");
        $("#nomes").css("borderColor", "initial");
        $("#jogador").html("JOGADOR(A) 2");
    } else if ($("#nomes").val() == "" && $("#jogador1").html() != ""){
        alert("Digite o segundo nome.");
        $("#nomes").css("borderColor", "red");
    } else if ($("#nomes").val() != "" && $("#jogador1").html() != ""){
        nome2 = $("#nomes").val();
        $("#jogador2").html("<img class= sinal src=red.png>" + nome2.toUpperCase());
        $("#nomes").val("");
        $("#nomes").css("borderColor", "initial");
        $("#botao").attr("disabled","disabled");
    }
})

$(".casa").click(function(){
 while ($("#jogador1").html() == "" && $("#jogador2").html() == "")
 { alert("Digite os dois nomes antes de iniciar.");
 $(this).html() = "";
 vez = 1;
}
 while ($("#jogador2").html() == "" || $("#jogador1").html() == "" ){ 
 alert("Digite os dois nomes antes de iniciar.");
 $(this).html() = "";
 vez = 1;
 break;
 
 }
})

function velha(){}

$("#botao2").click(reset);

function check_vitoria() {
    if($("#um img").attr("src") == "X.png" && $("#dois img").attr("src") == "X.png" && $("#tres img").attr("src") == "X.png") {
        $("#jogador1").text(nome1.toUpperCase() +" VENCEU!");
        $("#jogador2").text("");
        
        } else if ($("#um img").attr("src") == "O.png" && $("#dois img").attr("src") == "O.png" && $("#tres img").attr("src") == "O.png") {
        $("#jogador1").text("");
        $("#jogador2").text(nome2.toUpperCase() +" VENCEU!");
        
        }
    if($("#quatro img").attr("src") == "X.png" && $("#cinco img").attr("src") == "X.png" && $("#seis img").attr("src") == "X.png") {
        $("#jogador1").text(nome1.toUpperCase() +" VENCEU!");
        $("#jogador2").text("");
        } else if ($("#quatro img").attr("src") == "O.png" && $("#cinco img").attr("src") == "O.png" && $("#seis img").attr("src") == "O.png") {
        $("#jogador1").text("");
        $("#jogador2").text(nome2.toUpperCase() +" VENCEU!");
        }
    if($("#sete img").attr("src") == "X.png" && $("#oito img").attr("src") == "X.png" && $("#nove img").attr("src") == "X.png") {
        $("#jogador1").text(nome1.toUpperCase() +" VENCEU!");
        $("#jogador2").text("");
        } else if ($("#sete img").attr("src") == "O.png" && $("#oito img").attr("src") == "O.png" && $("#nove img").attr("src") == "O.png") {
        $("#jogador1").text("");
        $("#jogador2").text(nome2.toUpperCase() +" VENCEU!");
        }
    if($("#um img").attr("src") == "X.png" && $("#quatro img").attr("src") == "X.png" && $("#sete img").attr("src") == "X.png") {
        $("#jogador1").text(nome1.toUpperCase() +" VENCEU!");
        $("#jogador2").text("");
        } else if ($("#um img").attr("src") == "O.png" && $("#quatro img").attr("src") == "O.png" && $("#sete img").attr("src") == "O.png") {
        $("#jogador1").text("");
        $("#jogador2").text(nome2.toUpperCase() +" VENCEU!");
        }
    if($("#dois img").attr("src") == "X.png" && $("#cinco img").attr("src") == "X.png" && $("#oito img").attr("src") == "X.png") {
        $("#jogador1").text(nome1.toUpperCase() +" VENCEU!");
        $("#jogador2").text("");
        } else if ($("#dois img").attr("src") == "O.png" && $("#cinco img").attr("src") == "O.png" && $("#oito img").attr("src") == "O.png") {
        $("#jogador1").text("");
        $("#jogador2").text(nome2.toUpperCase() +" VENCEU!");
        }
    if($("tres img").attr("src") == "X.png" && $("#seis img").attr("src") == "X.png" && $("#nove img").attr("src") == "X.png") {
        $("#jogador1").text(nome1.toUpperCase() +" VENCEU!");
        $("#jogador2").text("");
        } else if ($("#tres img").attr("src") == "O.png" && $("#seis img").attr("src") == "O.png" && $("#nove img").attr("src") == "O.png") {
        $("#jogador1").text("");
        $("#jogador2").text(nome2.toUpperCase() +" VENCEU!");
        }
    if($("#um img").attr("src") == "X.png" && $("#cinco img").attr("src") == "X.png" && $("#nove img").attr("src") == "X.png") {
        $("#jogador1").text(nome1.toUpperCase() +" VENCEU!");
        $("#jogador2").text("");
        } else if ($("#um img").attr("src") == "O.png" && $("#cinco img").attr("src") == "O.png" && $("#nove img").attr("src") == "O.png") {
        $("#jogador1").text("");
        $("#jogador2").text(nome2.toUpperCase() +" VENCEU!");
        }
    if($("#tres img").attr("src") == "X.png" && $("#cinco img").attr("src") == "X.png" && $("#sete img").attr("src") == "X.png") {
        $("#jogador1").text(nome1.toUpperCase() +" VENCEU!");
        $("#jogador2").text("");
        } else if ($("#tres img").attr("src") == "O.png" && $("#cinco img").attr("src") == "O.png" && $("#sete img").attr("src") == "O.png") {
        $("#jogador1").text("");
        $("#jogador2").text(nome2.toUpperCase() +" VENCEU!");
        }
       if($("#um").html() != "" && $("#dois").html() != "" && $("#tres").html() != "" && 
       $("#quatro").html() != "" && $("#cinco").html() != "" && $("#seis").html() != "" && 
       $("#sete").html() != "" && $("#oito").html() != "" && $("#nove").html() != "" ) {
        $("#jogador1").text("");
        $("#jogador2").text("DEU VELHA!");
       } 

}

$(casas).click(function(){
    if($(this).html() == "") {
    if(vez == 1) {
        vez = 2;
        $("#jogador2").html("<img class= sinal src=green.png>" + nome2.toUpperCase());
        $("#jogador1").html("<img class= sinal src=red.png>" + nome1.toUpperCase());
        $(this).html(x);

         
    } else {
        vez = 1;
        $("#jogador1").html("<img class= sinal src=green.png>" + nome1.toUpperCase());
        $("#jogador2").html("<img class= sinal src=red.png>" + nome2.toUpperCase());
        $(this).html(o);
    }
    } else {
        alert("Escolha outra casa!");
    }
     return check_vitoria()
})




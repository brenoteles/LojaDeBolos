var banners = ["images/570408.jpg", "images/570408.jpg"];
var bannerAtual = 0;
function trocaBanner (){
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('#slides').src = banners[bannerAtual];
}
setInterval(trocaBanner, 5000);


var	input_quantidade =	document.querySelector("#quantidade");
var output_total = document.querySelector("#preco");		
input_quantidade.oninput = function(){
    let preco = input_quantidade.value * 40;
    preco = "R$ " + preco.toFixed(2);
    preco = preco.replace(".", ",");
    output_total.innerHTML = preco;
}	



var input_bolo = document.querySelector("#bolo_requisitado");
var imagem_bolo = document.querySelector("#img_produto_requisitado");
input_bolo.oninput = function(){
    imagem_bolo.src = input_bolo.value
}

var link_bolo = document.querySelectorAll(".link-bolo");
link_bolo.onclick = function(){
    
}
var ul = document.getElementById("ul-bolos-doces");
var requestURL = 'produtos.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send(); 
request.onload = function() {
  var produtos = request.response;
  mostrarProdutos(produtos);
}

function mostrarProdutos(jsonObj){
  let bolo = jsonObj['produtos'] ;

  console.log(bolo[4].nome);

  for(let i = 0; i < Object.keys(bolo).length; i++){
    let li = document.createElement("li");
    let figure = document.createElement("figure");
    let image = document.createElement("IMG");
    let figcaption = document.createElement("figcaption");
    let figurecaptionText = document.createTextNode(bolo[i]['preco']);

    image.className = "img-fluid";
    
    figcaption.appendChild(figurecaptionText);
    image.setAttribute("src", bolo[i].imagem);

    figure.appendChild(image);
    figure.appendChild(figcaption);

    li.appendChild(figure);

    ul.appendChild(li);
  }
}

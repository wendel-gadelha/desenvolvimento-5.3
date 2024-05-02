
let titulo = document.createElement("h1");

titulo.id = "titulo";
titulo.innerText = "Loja de Jogos";


let body = document.querySelector("body");


body.appendChild(titulo);


let produto = document.createElement("div");


produto.innerHTML = `
  <div>
    <h2>UNCHARTED:</h2>
    <img src="https://gmedia.playstation.com/is/image/SIEPDC/uncharted-legacy-of-thieves-screenshot-24-en-10jan22?$1600px$" alt="UNCHARTED">
    <p>UNCHARTED: Coleção Legado dos Ladrões traz UNCHARTED 4: A Thief's End e UNCHARTED: The Lost Legacy remasterizados para PS5™ e PC. Jogue na pele de Nathan e Chloe Frazer em aventuras separadas e acompanhe como eles são obrigados a confrontar o passado e forjar os próprios legados.</p>
    <p>Sony Interactive Entertainment</p>
    
  </div>
`;


body.appendChild(produto)
class NegociacaoController {

  adiciona(event) {

    event.preventDefault();

    let $ = document.querySelector.bind(document);

    let data = $('#data');
    let quantidade = $('#quantidade');
    let valor = $('#valor');

    console.log(data.value);
    console.log(quantidade.value);
    console.log(valor.value);
    
  }
}

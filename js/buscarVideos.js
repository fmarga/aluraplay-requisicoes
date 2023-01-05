import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostraVideos.js";

async function buscarVideo(event) {
  event.preventDefault();
  const dadosBusca = document.querySelector("[data-pesquisa]").value;
  const busca = await conectaApi.buscaVideo(dadosBusca);

  const lista = document.querySelector("[data-lista]");

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  busca.forEach((element) =>
    lista.appendChild(
      constroiCard(
        element.titulo,
        element.descricao,
        element.url,
        element.imagem
      )
    )
  );
}

const botaoPesquisa = document.querySelector("[data-botao-pesquisa]");
botaoPesquisa.addEventListener("click", (event) => buscarVideo(event));

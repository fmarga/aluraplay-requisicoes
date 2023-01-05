async function listaVideos() {
  const conn = await fetch("http://localhost:3000/videos");
  const connConvertida = await conn.json();

  return connConvertida;
}

async function criaVideo(titulo, descricao, url, imagem) {
  const conn = await fetch("http://localhost:300/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem,
    }),
  });

  if (!conn.ok) {
    throw new Error("Não foi possível enviar o vídeo");
  }

  const connConvertida = conn.json();
  return connConvertida;
}

async function buscaVideo(search) {
  const conn = await fetch(`http://localhost:3000/videos?q=${search}`);
  const connConvertida = conn.json();

  return connConvertida;
}

export const conectaApi = {
  listaVideos,
  criaVideo,
  buscaVideo,
};

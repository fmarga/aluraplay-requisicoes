async function listaVideos() {
  const conn = await fetch("http://localhost:3000/videos");
  const connConvertida = await conn.json();

  return connConvertida;
}

export const conectaApi = {
  listaVideos,
};

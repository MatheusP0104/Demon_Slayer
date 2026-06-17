import { mapHashiraFromApi } from '../utils/mapHashiras';

const BASE_URL = 'https://www.demonslayer-api.com/api/v1';

async function parseResponse(res, msg) {
  if (!res.ok) throw new Error(msg);
  return res.json();
}

export async function fetchHashiraList(limit = 20) {
  const listRes = await fetch(`${BASE_URL}/characters?limit=${limit}`);
  const listData = await parseResponse(listRes, 'Não foi possível carregar a lista.');
  
  let dados = [];
  if (Array.isArray(listData)) {
    dados = listData;
  } else if (listData.content && Array.isArray(listData.content)) {
    dados = listData.content;
  } else if (listData.data && Array.isArray(listData.data)) {
    dados = listData.data;
  } else if (listData.results && Array.isArray(listData.results)) {
    dados = listData.results;
  }

  return dados.map(item => mapHashiraFromApi(item));
}

export async function fetchHashiraById(id) {
  try {
    const res = await fetch(`${BASE_URL}/characters/${id}`);
    if (res.ok) {
      const data = await res.json();
      return mapHashiraFromApi(data);
    }
  } catch (error) {
    console.warn("Falha ao buscar ID direto, tentando estratégia de contingência...", error);
  }

  try {
    const listaCompleta = await fetchHashiraList(100);
    const encontrado = listaCompleta.find(h => String(h.id) === String(id));
    if (encontrado) return encontrado;
  } catch (e) {
    console.error("Erro na contingência de busca por ID", e);
  }

  return null;
}
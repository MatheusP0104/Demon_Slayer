import { mapHashiraFromApi, mapDescriptionFromSpecies }
  from '../utils/mapHashiras'

const BASE_URL = 'https://www.demonslayer-api.com/api/v1'

async function parseResponse(res, msg) {
  if (!res.ok) throw new Error(msg)
  return res.json()
}

export async function fetchHashiraList(limit = 20) {
  const listRes  = await fetch(`${BASE_URL}/characters?limit=${limit}`)
  const listData = await parseResponse(
    listRes, 'Não foi possível carregar a lista.'
  )
  return Promise.all(
    listData.results.map(async item => {
      const detRes  = await fetch(item.url)
      const detData = await parseResponse(
        detRes, `Não foi possível carregar ${item.name}.`
      )
      return mapHashiraFromApi(detData)
    })
  )
}

export async function fetchHashiraById(id) {
  const res = await fetch(`${BASE_URL}/characters/${id}`)
  if (res.status === 404) return null
  const data    = await parseResponse(res, 'Não foi possível carregar.')
  const hashira = mapHashiraFromApi(data)

  const speciesRes = await fetch(data.species.url)
  if (speciesRes.ok) {
    const speciesData   = await speciesRes.json()
    hashira.description = mapDescriptionFromSpecies(speciesData)
  }
  return hashira
}

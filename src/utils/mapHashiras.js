export function mapHashiraFromApi(apiData) {
  const capitalize = n => n ? n.charAt(0).toUpperCase() + n.slice(1) : '';

  const imageUrl = 
    apiData.image ?? 
    apiData.imageUrl ?? 
    apiData.img ?? 
    apiData.avatar ?? 
    apiData.thumbnail ??
    'https://via.placeholder.com/160'; 

  return {
    id: apiData.id,
    name: capitalize(apiData.name),
    age: apiData.age ?? 'Desconhecida',
    race: apiData.race ?? 'Humano',
    imageUrl: imageUrl, 
    type: apiData.race ?? 'Caçador', 
    description: apiData.animeHistory ?? 'Sem descrição disponível.' 
  };
}

export function mapDescriptionFromSpecies(speciesData) {
  return speciesData ?? '';
}
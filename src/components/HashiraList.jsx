import HashiraCard from './HashiraCard'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchHashiraList } from '../service/HashirasApi'


function HashiraList() {

  const [hashiras, setHashiras] = useState([])  // comeca vazio
  const [loading,  setLoading]  = useState(true)
  const [error,    setError]    = useState(null)
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
  let cancelled = false

  async function loadHashira() {
    try {
      setLoading(true)
      setError(null)
      const data = await fetchHashiraList(20)
      if (!cancelled) setHashiras(data)
    } catch (err) {
      if (!cancelled) setError(err.message ?? 'Erro ao carregar.')
    } finally {
      if (!cancelled) setLoading(false)
    }
  }

  loadHashira()
  return () => { cancelled = true }
}, [])   // <- [] = roda só na montagem


  const listaFiltrada = hashiras.filter((p) =>
  p.name.toLowerCase().includes(filtro.toLowerCase())
)


  return (
    <section className="busca-container">
    <h2>Caçadores</h2>
     <label htmlFor="busca">
    Buscar por nome:
  </label>

  <input
    id="busca"
    type="search"
    value={filtro}
    onChange={(e) => setFiltro(e.target.value)}
    placeholder="Ex.: char"
  />


{loading && <p>Carregando Hashiras...</p>}

{error && <p role="alert">{error}</p>}

{!loading && !error && listaFiltrada.length === 0 && (
  <p>Nenhum Hashira encontrado.</p>
)}

{!loading && !error && listaFiltrada.length > 0 && (
  <div className="hashira-list">
    {listaFiltrada.map(hashiras => (
      <HashiraCard key={hashiras.id} {...hashiras} />
    ))}
  </div>
)}

    </section>
  )
}

export default HashiraList

import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchHashiraById } from '../service/HashirasApi'



function HashirasDetailPage() {
const { id } = useParams()
const [hashira, setHashira] = useState(null) 
const [loading, setLoading] = useState(true)
const [error,   setError]   = useState(null)

useEffect(() => {
  let cancelled = false

  async function loadHashira() {
    try {
      setLoading(true)
      setError(null)
      setHashira(null)         // limpa antes de buscar novo id
      const data = await fetchHashiraById(id)
      if (!cancelled) setHashira(data)
    } catch (err) {
      if (!cancelled) setError(err.message ?? 'Erro ao carregar.')
    } finally {
      if (!cancelled) setLoading(false)
    }
  }

  loadHashira()
  return () => { cancelled = true }
}, [id])  // <- roda de novo se o id mudar


if (loading)  return <p>Carregando Hashira...</p>
if (error)    return <p role="alert">{error}</p>
if (!hashira) return (
  <>
    <p>Hashira "{id}" não encontrado na API.</p>
    <Link to="/hashira">Voltar ao catálogo</Link>
  </>
)


  return (
    <section className="pokemon-detail" aria-labelledby="detalhe-titulo">
      <Link to="/hashira" className="pokemon-detail__back">
        ← Voltar ao catálogo
      </Link>

      <article className="pokemon-detail__card">
        <div className="pokemon-detail__media">
          <img src={hashira.imageUrl} alt={hashira.name} width={160} height={160} />
        </div>
        <div className="pokemon-detail__body">
          <h2 id="detalhe-titulo">
            #{String(hashira.id).padStart(3, '0')} — {hashira.name}
          </h2>
          <p className="pokemon-detail__type">
            Tipo: <span>{hashira.type}</span>
          </p>
          <p className="pokemon-detail__desc">{hashira.description}</p>
        </div>
      </article>
    </section>
  )
}

export default HashirasDetailPage
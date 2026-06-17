import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchHashiraById } from '../service/HashirasApi';

function HashirasDetailPage() {
  const { id } = useParams();
  const [hashira, setHashira] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function loadHashira() {
      try {
        setLoading(true);
        setError(null);
        setHashira(null);         
        const data = await fetchHashiraById(id);
        if (!cancelled) setHashira(data);
      } catch (err) {
        if (!cancelled) setError(err.message ?? 'Erro ao carregar.');
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadHashira();
    return () => { cancelled = true; };
  }, [id]);  

  if (loading)  return <p>Carregando Hashira...</p>;
  if (error)    return <p role="alert">{error}</p>;
  
  if (!hashira || !hashira.name) return (
    <>
      <p>Hashira "{id}" não encontrado na API.</p>
      <Link to="/hashiras">Voltar ao catálogo</Link>
    </>
  );

  return (
    <section className="hashira-detail" aria-labelledby="detalhe-titulo">
      <Link to="/hashiras" className="hashira-detail__back">
        ← Voltar ao catálogo
      </Link>

      <article className="hashira-detail__card">
        <div className="hashira-detail__media">
          <img src={hashira?.imageUrl} alt={hashira?.name} width={160} height={160} />
        </div>
        <div className="hashira-detail__body">
          <h2 id="detalhe-titulo">
            #{String(hashira?.id).padStart(3, '0')} — {hashira?.name}
          </h2>
          <p className="hashira-detail__type">
            Raça: <span>{hashira?.race ?? hashira?.type}</span>
          </p>
          <p className="hashira-detail__type">
            Idade: <span>{hashira?.age}</span>
          </p>
          <p className="hashira-detail__desc">{hashira?.description}</p>
        </div>
      </article>
    </section>
  );
}

export default HashirasDetailPage;
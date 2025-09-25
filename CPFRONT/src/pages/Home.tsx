import { useState } from "react";
import { news } from "../services/newsService";
import { NewsCard } from "../components/NewsCard";

export default function Home(){
  const [query, setQuery] = useState("");
  const q = query.toLowerCase();
  const filtered = news.filter(n =>
    n.title.toLowerCase().includes(q) ||
    n.content.toLowerCase().includes(q) ||
    n.categories.some(c => c.toLowerCase().includes(q))
  );

  return (
    <div>
      <h1>Bem-vindo!</h1>
      <input
        className="input"
        placeholder="Buscar artigos..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <div className="grid" style={{marginTop:16}}>
        {filtered.length ? filtered.map(n => <NewsCard key={n.id} news={n}/>) : <p>Nenhum artigo encontrado</p>}
      </div>
    </div>
  );
}

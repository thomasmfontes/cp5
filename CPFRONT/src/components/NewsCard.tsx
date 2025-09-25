import { Link } from "react-router-dom";
import type { News } from "../types/News";

export function NewsCard({ news }: { news: News }){
  return (
    <div className="card">
      <img src={news.image} alt={news.title} />
      <h3>{news.title}</h3>
      <div className="meta">{news.date}</div>
      <p>{news.content.substring(0, 50)}...</p>
      <div className="badges">
        {news.categories.map((c, i) => <span key={i} className="badge">{c}</span>)}
      </div>
      <div style={{marginTop:12}}>
        <Link className="btn" to={`/news/${news.id}`}>Ler mais</Link>
      </div>
    </div>
  );
}

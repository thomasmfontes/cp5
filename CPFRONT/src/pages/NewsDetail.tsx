import { useParams, Link } from "react-router-dom";
import { news } from "../services/newsService";

export default function NewsDetail(){
  const { id } = useParams();
  const article = news.find(n => n.id === Number(id));
  if(!article) return <p>Notícia não encontrada</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} style={{width:'100%',height:280,objectFit:'cover',borderRadius:12}} />
      <div className="meta" style={{marginTop:8}}>{article.date}</div>
      <p style={{marginTop:12}}>{article.content}</p>

      <h2 style={{marginTop:24}}>Comentários</h2>
      {article.comments.map(c => (
        <div key={c.id} className="comment">
          <strong>{c.name}</strong>
          <div className="meta">{c.date}</div>
          <div>{c.text}</div>
        </div>
      ))}
      <Link to="/" className="btn" style={{marginTop:12,display:'inline-block'}}>Voltar para Home</Link>
    </div>
  );
}

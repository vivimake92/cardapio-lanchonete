import "./product-card.css";

export function Card({
  name,
  price,
  description,
  featured,
  available,
  image = "/images/sem-foto.svg",
}) {
  return (
    <article className="product-card">
      <img src={image} alt={name} />
      <div className="product-info">
        {featured && <span className="badge">Destaque da casa</span>}
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">R$ {price.toFixed(2).replace(".", ",")}</p>

        {available ? (
          <button type="button">Adicionar</button>
        ) : (
          <span className="tag">Esgotado</span>
        )}
      </div>
    </article>
  );
}

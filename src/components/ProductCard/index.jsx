import "./product-card.css";

export function Card({ name, price, description }) {
  return (
    <article className="product-card">
      <img src="./x-burguer.svg" alt={name} />
      <div className="product-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">R$ {price.toFixed(2).replace(".", ",")}</p>
        <button type="button">Adicionar</button>
      </div>
    </article>
  );
}

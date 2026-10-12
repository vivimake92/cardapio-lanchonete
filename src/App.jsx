import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Card } from "./components/ProductCard";
import { Header } from "./components/Header";

import products from "./data/products";

function App() {
  //const products = [];
  return (
    <>
      {/* <h1>Projeto Inicial React com Vite</h1> */}
      <Header
        name={"Lanchonete da Praça"}
        openingHours={"Todos os dias, das 18 às 23 horas"}
      />

      {products.length == 0 ? (
        <p className="empty">Cardápio em atualização. Volte mais tarde!</p>
      ) : (
        <main className="product-list">
          {products.map((item) => (
            <Card
              key={item.id}
              price={item.price}
              name={item.name}
              description={item.description}
              available={item.available}
              featured={item.featured}
              image={item.image}
            />
          ))}
        </main>
      )}

      {/* <Card
        price={29.4}
        name={"X-Burguer"}
        description={"Pão, hambúrguer de 120 g, queijo e molho da casa."}
      />

      <Card price={9.5} name={"Pepsi Black"} description={"2 litros"} />

      <Card
        price={60.99}
        name={"Combo X-Burguer"}
        description={"Ideal para duas pessoas...depende da sua fome!"}
      /> */}
    </>
  );
}

export default App;

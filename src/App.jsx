import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Card } from "./components/ProductCard";

function App() {
  return (
    <>
      <h1>Projeto Inicial React com Vite</h1>

      {/* {lista.map((item) => {
        <Card
          price={item.price}
          name={item.name}
          description={item.description}
        />;
      })} */}

      <Card
        price={29.4}
        name={"X-Burguer"}
        description={"Pão, hambúrguer de 120 g, queijo e molho da casa."}
      />

      <Card price={9.5} name={"Pepsi Black"} description={"2 litros"} />

      <Card
        price={60.99}
        name={"Combo X-Burguer"}
        description={"Ideal para duas pessoas...depende da sua fome!"}
      />
    </>
  );
}

export default App;

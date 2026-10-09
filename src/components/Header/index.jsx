import "./header.css";

export function Header(props) {
  //const name = props.name;
  //const openingHours = props.openingHours;
  //console.log(props);

  const { name, openingHours } = props;

  return (
    <header className="header">
      <h1>{name}</h1>
      <p>{openingHours}</p>
    </header>
  );
}

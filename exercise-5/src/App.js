import Country from "./components/Country";

const country = [
  {
    Name: "Suomi",
    Capital: "Helsinki",
  },
  {
    Name: "Ruotsi",
    Capital: "Tukholma",
  },
  {
    Name: "Viro",
    Capital: "Tallinna",
  },
];

const App = () => {
  return (
    <div>
      <Country countries={country[0]} />
      <Country countries={country[1]} />
      <Country countries={country[2]} />
    </div>
  );
};

export default App;


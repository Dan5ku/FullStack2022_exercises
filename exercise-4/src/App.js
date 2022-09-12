import GenreList from "./components/GenreList";

const thrillers = [
  {
    title: "Psycho",
    director: "Alfred Hitchcock",
    year: "1960",
  },
  {
    title: "Silence of the Lambs",
    director: "Jonathan Demme",
    year: "1991",
  },
  {
    title: "Eyes Wide Shut",
    director: "Stanley Kubrick",
    year: "1999",
  },
];

const scifi = [
  {
    title: "Metropolis",
    director: "Fritz Lang",
    year: "1927",
  },
  {
    title: "2001: A Space Odyssey",
    director: "Stanley Kubrick",
    year: "1968",
  },
  {
    title: "Robocop",
    director: "Paul Verhoeven",
    year: "1987",
  },
];

const comedy = [
  {
    title: "Luokkakokous",
    director: "Jaska",
    year: "0000",
  },
  {
    title: "Kikkelskokkels",
    director: "Kakkelskikkels",
    year: "6969",
  },
  {
    title: "Fobohop",
    director: "Saint Patrick",
    year: "1997",
  },
];

const App = () => {
  return (
    <div>
      <GenreList movies={thrillers}genreName="Thriller" />
      <GenreList movies={scifi}genreName="Scifi" />
      <GenreList movies={comedy}genreName="Comedy"/>
    </div>
  );
};

export default App;
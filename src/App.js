import "./App.css";
import SearchEngine from "./SearchEngine";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Weather Search Engine </h1>
        <Weather city="Tokyo" />
        <SearchEngine />
      </header>
    </div>
  );
}

export default App;

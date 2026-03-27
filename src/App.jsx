import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Greeting name="Musa" surname="Mohamed"/>
      <Counter />
    </>
  );
}

export default App;

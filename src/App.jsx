import "./App.css";
import Clicker from "./components/Clicker";
import { Tiriye } from "./components/Counter";
import Dashboard from "./components/Dashboard";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Inputer from "./components/Inputer";
import Notification from "./components/Notification";
import ThemeToggle from "./components/ThemeSwitcher";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  return (
    <>
      <ThemeToggle />
      <WelcomeMessage isLoggedIn={true}/>
      <Dashboard isLoggedIn={true} />
      <Header />
      <Notification hasNewMessages={true}/>
      <Greeting name="Musa" surname="Mohamed" />
      <Inputer />
      <Tiriye />
      <Clicker />
    </>
  );
}

export default App;

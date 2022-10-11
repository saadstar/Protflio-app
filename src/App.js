import "./App.css";
import NavBAr from "./components/NavBar";
import Home from "./components/Home";
import { About } from "./components/About";
import { Creative } from "./components/Creative";

function App() {
  return (
    <div>
      <NavBAr />
      <Home />
      <About />
      <Creative />
    </div>
  );
}

export default App;

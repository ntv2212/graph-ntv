import "./App.css";
import { Header } from "./components/Header";
import { Thumbnail } from "./components/Home";

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Thumbnail />
      </main>
    </div>
  );
}

export default App;

import "./App.css";
import { Header } from "./components/Header";
import {
  GeneralInfo,
  Thumbnail,
  CustomDivider,
  SubGraph,
  Web3,
} from "./components/Home";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <Thumbnail />
        <GeneralInfo />
        <CustomDivider />
        <SubGraph />
        <Web3 />
      </main>
    </div>
  );
}

export default App;

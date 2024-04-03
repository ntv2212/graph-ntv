import "./App.css";
import { Header } from "./components/Header";
import {
  GeneralInfo,
  Thumbnail,
  CustomDivider,
  SubGraph,
  Web3,
  HowToUse,
  Global,
  JoinEcosystem,
} from "./components/Home";

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main className="overflow-hidden">
        <Thumbnail />
        <GeneralInfo />
        <CustomDivider />
        <SubGraph />
        <Web3 />
        <CustomDivider />
        <HowToUse />
        <Global />
        <JoinEcosystem />
      </main>
    </div>
  );
}

export default App;

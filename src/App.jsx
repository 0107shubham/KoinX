import Header from "./components/Header";
import TaxHarvesting from "./components/TaxHarvesting";
import Accordion from "./components/Accordion";
import CapitalGainsCards from "./components/CapitalGainsCards";
import HoldingsTable from "./components/HoldingsTable";
import HoldingsProvider from "./components/HoldingsProvider";
import "./App.css";
const App = () => (
  <HoldingsProvider>
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto pt-20 pb-6 px-6 flex flex-col max-w-[1496px] w-full">
        <TaxHarvesting />
        <Accordion />
        <CapitalGainsCards />
        <HoldingsTable />
      </main>
    </div>
  </HoldingsProvider>
);

export default App;

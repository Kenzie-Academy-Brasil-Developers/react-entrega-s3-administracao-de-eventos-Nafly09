import "./App.css";
import { CatalogueProvider } from "./providers/catalogue";
import ProductsList from "./components/Produto/index";

function App() {
  return (
    <div className="App">
      <CatalogueProvider>
        <ProductsList type="catalogue" />
        <ProductsList type="formatura" />
        <ProductsList type="casamento" />
        <ProductsList type="confraternização" />
      </CatalogueProvider>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import CocktailDetailsPage from "./page/CocktailDetailsPage";
import RandomCocktailPage from "./page/RandomCocktailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="cocktails/:id" element={<CocktailDetailsPage />} />
        <Route path="cocktails/random" element={<RandomCocktailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

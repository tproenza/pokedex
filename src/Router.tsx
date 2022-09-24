import { BrowserRouter, Routes, Route } from "react-router-dom";

import { 
  PokemonListView, 
  PokemonDetailView, 
  NotFoundView, 
  OopsView, 
  CreatePokemonView 
} from "./views";

const Router = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonListView />} />
          <Route path="/pokemon/:name" element={<PokemonDetailView />} />
          <Route path="/create" element={<CreatePokemonView />} />
          <Route path="/notFound" element={<NotFoundView />} />
          <Route path="/oops" element={<OopsView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Router;
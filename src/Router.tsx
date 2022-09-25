import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContainer } from "./global.styles";
import { 
  PokemonListView, 
  PokemonDetailView, 
  NotFoundView, 
  OopsView, 
  CreatePokemonView 
} from "./views";

const Router = () => {
  return (
    <AppContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PokemonListView />} />
          <Route path="/pokemon/:name" element={<PokemonDetailView />} />
          <Route path="/create" element={<CreatePokemonView />} />
          <Route path="/notFound" element={<NotFoundView />} />
          <Route path="/oops" element={<OopsView />} />
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default Router;
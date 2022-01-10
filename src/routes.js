import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import {
  AdoptionPets,
  Home,
  Instituion,
  Login,
  Options,
  PasswordRecovery,
  Pet,
  Register,
  RegisteredPets,
  RegisterPet,
  SearchZipCode,
} from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/recuperar-senha" element={<PasswordRecovery />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/menu" element={<Options />} />
        <Route path="/menu/cadastrar-pet" element={<RegisterPet />} />
        <Route path="/menu/pets" element={<RegisteredPets />} />
        <Route path="/pesquisar" element={<SearchZipCode />} />
        <Route path="/pesquisar/pets" element={<AdoptionPets />} />
        <Route path="/pesquisar/pets/pet" element={<Pet />} />
        <Route
          path="/pesquisar/pets/pet/instituicao"
          element={<Instituion />}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

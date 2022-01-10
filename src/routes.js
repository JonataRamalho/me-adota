import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import {
  AdoptionPets,
  Home,
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
        <Route path="/passwordRecovery" element={<PasswordRecovery />} />
        <Route path="/register" element={<Register />} />
        <Route path="/options" element={<Options />} />
        <Route path="/registerPet" element={<RegisterPet />} />
        <Route path="/petsAdoption" element={<RegisteredPets />} />
        <Route path="/search" element={<SearchZipCode />} />
        <Route path="/search/pets" element={<AdoptionPets />} />
        <Route path="/search/pets/pet" element={<Pet />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

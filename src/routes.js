import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import {
  Home,
  Login,
  Options,
  PasswordRecovery,
  Register,
  RegisteredPets,
  RegisterPet,
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
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

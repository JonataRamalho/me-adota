import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import {
  AdoptionPets,
  Home,
  Instituion,
  InstitutionList,
  Login,
  Options,
  PasswordRecovery,
  Pet,
  Register,
  RegisteredPets,
  RegisterPet,
  SearchZipCode,
  Dashboards,
  Adoption,
  Expenses,
  RegisteredPet,
  RegisterExpenses,
  ViewExpenses,
  EditExpenses,
} from "./pages";
import { GeneralProviderProvider } from "./features";

const Routes = () => {
  return (
    <BrowserRouter>
      <GeneralProviderProvider>
        <Switch>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recuperar-senha" element={<PasswordRecovery />} />
          <Route path="/cadastrar" element={<Register />} />

          <Route path="/menu" element={<Options />} />
          <Route path="/menu/cadastrar-pet" element={<RegisterPet />} />

          <Route path="/menu/pets" element={<RegisteredPets />} />
          <Route path="/menu/pets/:idPet" element={<RegisteredPet />} />
          <Route
            path="/menu/pets/:idPet/cadastrar-despesas"
            element={<RegisterExpenses />}
          />
          <Route
            path="/menu/pets/:idPet/visualizar-despesas"
            element={<ViewExpenses />}
          />
          <Route
            path="/menu/pets/:idPet/visualizar-despesas/editar/:idEditar"
            element={<EditExpenses />}
          />

          <Route path="/menu/dashboards" element={<Dashboards />} />
          <Route path="/menu/dashboards/adocao" element={<Adoption />} />
          <Route path="/menu/dashboards/despesas" element={<Expenses />} />

          <Route path="/pesquisar" element={<SearchZipCode />} />
          <Route path="/pesquisar/instituicoes" element={<InstitutionList />} />
          <Route
            path="/pesquisar/instituicoes/:id/pets"
            element={<AdoptionPets />}
          />
          <Route
            path="/pesquisar/instituicoes/:id/pets/:idPet"
            element={<Pet />}
          />
          <Route
            path="/pesquisar/instituicoes/:id/pets/:idPet/:id"
            element={<Instituion />}
          />
        </Switch>
      </GeneralProviderProvider>
    </BrowserRouter>
  );
};

export default Routes;

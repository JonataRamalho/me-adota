import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { Home, Login, PasswordRecovery } from "./pages";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordRecovery" element={<PasswordRecovery />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

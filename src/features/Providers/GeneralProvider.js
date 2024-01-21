import { createContext, useCallback, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

const GeneralProviderContext = createContext({});

const GeneralProviderProvider = ({ children }) => {
  const navigate = useNavigate();
  const dataLogin = localStorage.getItem("@storage_login");

  const [login, setLogin] = useState({
    email: "",
    password: "",
    token: "",
  });

  const [institutionData, setInstitutionData] = useState();
  const [typePet, setTypePet] = useState({ typePet: "" });

  const getInstituion = useCallback(async (email) => {
    try {
      const response = await api.get(
        "/api/institution/username",
        { params: { username: email } },
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      setInstitutionData(JSON.stringify(response.data));
    } catch (error) {
      toast.error("Erro ao buscar instituição!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = JSON.stringify({
      username: login.email,
      password: login.password,
    });

    localStorage.setItem("@storage_login", data);

    try {
      const response = await api.post("/login", data, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "Authorization",
        },
      });

      setLogin({
        ...login,
        token: response.headers.authorization,
      });

      getInstituion(login.email);

      navigate("/menu");
    } catch (err) {
      toast.error("Erro ao realizar login!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const logInAgain = useCallback(async () => {
    const { username, password } = JSON.parse(dataLogin);

    const data = JSON.stringify({
      username: username,
      password: password,
    });

    try {
      const response = await api.post("/login", data, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Request-Headers": "Authorization",
        },
      });

      setLogin({
        ...login,
        token: response.headers.authorization,
      });

      getInstituion(username);
    } catch (err) {
      toast.error("Erro ao realizar login!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [dataLogin, login, getInstituion]);

  const handleTokenToEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/api/forgot_password?username=" + login.email
      );

      if (response.status === 200) {
        toast.success(response.data, {
          position: toast.POSITION.TOP_CENTER,
        });

        setTimeout(() => {
          navigate("/recuperar-senha");
        }, 6000);
      }
    } catch (err) {
      toast.error("Erro ao enviar o token", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  const getAnimalType = (value) => {
    setTypePet(value);

    localStorage.setItem("@storage_typePet", JSON.stringify(value));
  };

  const getAnimalTypeAgain = useCallback(() => {
    const data = localStorage.getItem("@storage_typePet");

    setTypePet(JSON.parse(data));
  }, []);

  useEffect(() => {
    if (login.token.length === 0) {
      logInAgain();
      getAnimalTypeAgain();
    }
  }, [login.token, logInAgain, getAnimalTypeAgain]);

  return (
    <GeneralProviderContext.Provider
      value={{
        login,
        setLogin,
        institutionData,
        handleLogin,
        handleTokenToEmail,
        typePet,
        getAnimalType,
      }}
    >
      {children}
    </GeneralProviderContext.Provider>
  );
};

export { GeneralProviderProvider, GeneralProviderContext };

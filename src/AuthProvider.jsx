import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  const createUser = async (name, email, password, photoUrl) => {
    setLoading(true);

    setLoading(false);
  };

  const signIn = async (email, password) => {
    setLoading(true);

    const res = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/login`,
      {
        email,
        password,
      },
      { validateStatus: false }
    );

    if (res.status === 200) {
      setUser(res.data.user);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("token", JSON.stringify(res.data.token));
      setToken(res.data.token);
      // navigate(location?.state?.redirectTo || "/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Error",
        text: "Invalid email or password. Please try again.",
      });
    }

    setLoading(false);
  };

  const logout = () => {
    setLoading(false);
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    try {
      const json = localStorage.getItem("user");
      if (json) {
        const userDataFromLocalStorage = JSON.parse(json);
        if (userDataFromLocalStorage) {
          setUser(userDataFromLocalStorage);
        }
      }

      const json2 = localStorage.getItem("token");
      if (json2) {
        const userDataFromLocalStorage2 = JSON.parse(json2);
        if (userDataFromLocalStorage2) {
          setToken(userDataFromLocalStorage2);
        }
      }
    } catch (ex) {
      console.log("");
    }
  }, []);

  const authInfo = {
    user,
    token,
    loading,
    createUser,
    signIn,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

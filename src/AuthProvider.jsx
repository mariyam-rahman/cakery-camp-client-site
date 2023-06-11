import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleGoogleSignIn = () => {};

  const createUser = async (name, email, password, photoUrl) => {
    setLoading(true);

    //

    // localStorage.setItem("user", JSON.stringify(res.user));
    // setUser(res.user);
    setLoading(false);
  };

  const signIn = (email, password) => {
    setLoading(true);

    //

    setLoading(false);
    // setUser(res.user);
  };

  const logout = () => {
    setLoading(true);
    setUser(null);
    localStorage.removeItem("user");
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
    handleGoogleSignIn,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

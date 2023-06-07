import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../src/firebase_config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
      .then((res) => {
        const user = res.user;
        console.log("User signed in successfully.", user);

        localStorage.setItem("user", JSON.stringify(res.user));
        setUser(res.user);
        setLoading(false);
        return user;
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const createUser = async (name, email, password, photoUrl) => {
    setLoading(true);
    console.log({ name, password, email, photoUrl });
    const res = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
      photoUrl
    ).then(async (res) => {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photoUrl,
      });
      return res;
    });

    localStorage.setItem("user", JSON.stringify(res.user));
    setUser(res.user);
    setLoading(false);
  };

  const signIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.user));
        setUser(res.user);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  const logout = () => {
    setLoading(true);
    setUser(null);
    localStorage.removeItem("user");
    return signOut(auth);
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

import { useContext, useEffect } from "react";
import { AuthContext } from "../../AuthProvider";
import Admin from "./Admin";
import Instructor from "./Instructor";
import Student from "./Student";
import { useNavigate } from "react-router-dom";

// const Admin = () => {};
// const Instructor = () => {};
// const Student = () => {};

export default function Dashboard() {
  const { signIn, user, logout, token } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/login", { state: { redirectTo: "/dashboard" } });
    }
  }, [user]);

  if (!user) {
    return null;
  }

  return user.role == "admin" ? (
    <Admin />
  ) : user.role == "instructor" ? (
    <Instructor />
  ) : user.role == "student" ? (
    <Student />
  ) : (
    <></>
  );
}

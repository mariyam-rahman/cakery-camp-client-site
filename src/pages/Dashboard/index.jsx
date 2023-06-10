import Admin from "./Admin";
import Instructor from "./Instructor";
import Student from "./Student";

const user = {
  //   role: "admin",
  //   role: "instructor",
  role: "student",
  name: "Lamia",
};

// const Admin = () => {};
// const Instructor = () => {};
// const Student = () => {};

export default function Dashboard() {
  return user.role == "admin" ? (
    <Admin />
  ) : user.role == "instructor" ? (
    <Instructor />
  ) : (
    <Student />
  );
}

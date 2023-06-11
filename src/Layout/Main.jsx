import { Outlet } from "react-router-dom";
import Header from "./../Components/Header";

import Footers from "../Components/Footer";
import AuthProvider from "../AuthProvider";

const Main = () => {
  return (
    <AuthProvider>
      <div>
        <Header></Header>
        <div className="container mx-auto">
          <Outlet></Outlet>
        </div>
        <Footers></Footers>
      </div>
    </AuthProvider>
  );
};

export default Main;

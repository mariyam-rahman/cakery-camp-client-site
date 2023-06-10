import { Outlet } from "react-router-dom";
import Header from "./../Components/Header/Header";

import Footers from "../Components/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footers></Footers>
    </div>
  );
};

export default Main;

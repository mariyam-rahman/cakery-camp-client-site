import { Outlet } from "react-router-dom";
import Header from "./../Components/Header/Header";
import Footer from "./../Components/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;

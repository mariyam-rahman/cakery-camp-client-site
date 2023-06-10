import About from "../../Components/About";
import Faq from "../../Components/Faq";
import Instructor from "./Instructors";
import PopularClasses from "./PopularClasses";
import Banner from "../../Components/banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <PopularClasses></PopularClasses>
      <Instructor></Instructor>
      <Faq></Faq>
    </div>
  );
};

export default Home;

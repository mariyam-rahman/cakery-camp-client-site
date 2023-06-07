import Faq from "../../Components/Faq";
import Instructor from "../../Components/Instructor";
import PopularClasses from "../../Components/PopularClasses";
import Banner from "../../Components/banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularClasses></PopularClasses>
      <Instructor></Instructor>
      <Faq></Faq>
    </div>
  );
};

export default Home;

import img from "../assets/about.jpg";
import img1 from "../assets/icon1.png";
import img2 from "../assets/icon2.png";
import img3 from "../assets/icon3.png";
import img4 from "../assets/icon4.png";

const About = () => {
  return (
    <div className="my-28 ">
      <div className="grid grid-cols-2 items-center ">
        <div className="p-20">
          <h2 className="mb-4 pl-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            About Our Camp
          </h2>
          <p className="p-4 leading-relaxed text-lg">
            Our philosophy is learning through play as we offer a stimulating
            environment for children. Our philosophy is learning through play as
            we offer a stimulating environment for children
          </p>
          <div>
            <div className="flex gap-10 my-6 ">
              <div className="flex items-center gap-4">
                <img src={img1} alt="" className="h-20" />
                <p>Full Day Sessions</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={img4} alt="" className="h-20" />
                <p>Friendly Place</p>
              </div>
            </div>
            <div className="flex  gap-12 my-6">
              <div className="flex items-center gap-6">
                <img src={img3} alt="" className="h-20" />
                <p>Varied Classes</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={img2} alt="" className="h-20" />
                <p>Online Access</p>
              </div>
            </div>
          </div>
        </div>
        <div className="m-0 p-0 text-right">
          <img src={img} alt="" className="rounded-xl mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default About;

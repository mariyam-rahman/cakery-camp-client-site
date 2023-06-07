import { Card } from "flowbite-react";
import img from "../assets/bread.jpg";

const PopularClasses = () => {
  return (
    <div className="my-28">
      <h2 className="text-5xl text-center">Our Popular Classes</h2>
      <div className="grid grid-cols-3 gap-6 p-10">
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={img}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </p>
        </Card>
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={img}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </p>
        </Card>
        <Card
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc={img}
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </p>
        </Card>
      </div>
    </div>
  );
};

export default PopularClasses;

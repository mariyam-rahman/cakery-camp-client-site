import { Button, Card } from "flowbite-react";
import img from "../../assets/panake.jpg";
const Classes = () => {
  return (
    <div>
      <h2 className="text-4xl mb-10 text-center">Total Classes: 4</h2>
      <div className="px-20 grid lg:grid-cols-2 grid-cols-1 gap-10 ">
        <Card className="md:max-w-full" horizontal imgSrc={img}>
          <div className="">
            <div>
              <div className="flex justify-between items-center">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Pan Cake
                </h5>
                <p>Price: $100</p>
              </div>
              <div className="flex justify-between">
                <p className="font-medium">Instructor: Ali Babis</p>
                <p className="font-medium">Available seats: 5</p>
              </div>
              <p className=" py-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam
                nesciunt pariatur laboriosam, qui esse ab voluptatibus.
              </p>
            </div>

            <div className="text-center ">
              <Button>Select</Button>
            </div>
          </div>
        </Card>
        <Card className="md:max-w-full" horizontal imgSrc={img}>
          <div className="flex items-center justify-end">
            <div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pan Cake with fruits and honey
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            <div>
              <Button>Select</Button>
            </div>
          </div>
        </Card>
        <Card className="md:max-w-full" horizontal imgSrc={img}>
          <div className="flex items-center justify-end">
            <div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pan Cake with fruits and honey
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            <div>
              <Button>Select</Button>
            </div>
          </div>
        </Card>
        <Card className="md:max-w-full" horizontal imgSrc={img}>
          <div className="flex items-center justify-end">
            <div>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pan Cake with fruits and honey
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </div>
            <div>
              <Button>Select</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Classes;

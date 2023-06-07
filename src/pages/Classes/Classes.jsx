import { Button, Card } from "flowbite-react";
import img from "../../assets/panake.jpg";
const Classes = () => {
  return (
    <div className="px-20">
      <Card className="md:max-w-full" horizontal imgSrc={img}>
        <div className="flex items-center justify-end">
          <div>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Pan Cake with fruits and honey
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </div>
          <div>
            <Button>Select</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Classes;

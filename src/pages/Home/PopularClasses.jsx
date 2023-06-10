import { Card } from "flowbite-react";
import img from "./../../assets/bread.jpg";

import { useEffect, useState } from "react";
import axios from "axios";

const PopularClasses = () => {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/courses")
      .then((res) => {
        console.log(res);
        setCourses(res.data.courses);
      })
      .catch(() => {
        console.log(err);
      });
  }, []);
  return (
    <div className="my-28">
      <h2 className="text-5xl text-center">Our Popular Classes</h2>
      <div className="grid grid-cols-3 gap-6 p-10">
        {courses.map((e) => (
          <Course title={e.name} details={e.details} />
        ))}
      </div>
    </div>
  );
};

const Course = ({ title, details = "details" }) => {
  return (
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={img}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <p>{title}</p>
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        <p>
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </p>
    </Card>
  );
};

export default PopularClasses;

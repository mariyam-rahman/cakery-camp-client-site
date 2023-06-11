import { Button, Card } from "flowbite-react";
import img from "./../../assets/bread.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/courses`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const popularItems = data.courses.filter(
          (course) => course.category == "popular"
        );
        setCourses(popularItems);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="my-28">
      <h2 className="text-5xl text-center">Our Popular Classes</h2>
      <div className="grid grid-cols-3 gap-6 p-10">
        {courses.map((e) => (
          <Course key={e.id} course={e} />
        ))}
      </div>
      <div
        className=" flex
        justify-center"
      >
        <Link to={"/classes"}>
          <Button>Explore More</Button>
        </Link>
      </div>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <Card
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={course.photoUrl}
    >
      <div className="flex justify-between">
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <p>{course.name}</p>
          </h5>
        </div>
        <div>
          <p>$ {course.price}</p>
        </div>
      </div>
      <p className="text-slate-600">{course.details} </p>
      <div className="flex justify-between">
        <p>Instrutor: {course.instructor.name}</p>
        <p>Available Seat: {course.availableSeats}</p>
      </div>
    </Card>
  );
};

export default PopularClasses;

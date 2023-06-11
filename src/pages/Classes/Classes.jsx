import { Button, Card } from "flowbite-react";
import img from "../../assets/panake.jpg";
import { useEffect, useState } from "react";
const Classes = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCourses(data.courses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h2 className="text-4xl mb-10 text-center">
        Total Classes: {courses.length}
      </h2>
      <div className="px-20 grid lg:grid-cols-2 grid-cols-1 gap-10 ">
        {courses.map((e) => (
          <Course key={e.id} course={e} />
        ))}
      </div>
    </div>
  );
};
const Course = ({ course }) => {
  return (
    <Card className="md:max-w-full" horizontal imgSrc={course.photoUrl}>
      <div className="">
        <div>
          <div className="flex justify-between items-center">
            <h5 className="text-2xl mb-4 font-bold tracking-tight text-gray-900 dark:text-white">
              {course.name}
            </h5>
            <p>${course.price}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-medium"> {course.instructor.name}</p>
            <p className="font-medium">
              Available seats: {course.availableSeats}
            </p>
          </div>
          <p className=" py-2">{course.details}</p>
        </div>

        <div className="text-center ">
          <Button>Select</Button>
        </div>
      </div>
    </Card>
  );
};
export default Classes;

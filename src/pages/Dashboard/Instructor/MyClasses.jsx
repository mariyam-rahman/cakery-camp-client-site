import axios from "axios";
import { Button, Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider";

const MyClasses = () => {
  const [courses, setCourses] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("http://localhost:3000/courses", { params: { userId: user._id } })

      .then((res) => {
        console.log(res);
        setCourses(res.data.courses);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6 ">
          <div className="mx-auto text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              My Classes
            </h2>
            <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
          <div className="">
            <Table striped className="text-center">
              <Table.Head>
                <Table.HeadCell style={{}}>Image</Table.HeadCell>
                <Table.HeadCell>Name</Table.HeadCell>
                <Table.HeadCell>Instructor</Table.HeadCell>

                <Table.HeadCell>
                  Available <br /> seats
                </Table.HeadCell>
                <Table.HeadCell>
                  Total <br /> Enrolled
                </Table.HeadCell>
                <Table.HeadCell>Price</Table.HeadCell>
                <Table.HeadCell>Status</Table.HeadCell>
                <Table.HeadCell> Action</Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {courses.map((course) => (
                  <Course course={course} key={course._id} />
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
};

const Course = ({ course }) => {
  // const [openModal, setOpenModal] = useState();
  // const props = { openModal, setOpenModal };
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell style={{ flex: 2 }}>
        <img src="../../../assets/bread.jpg" alt="" />
      </Table.Cell>

      <Table.Cell>{course.name}</Table.Cell>
      <Table.Cell>
        <div>osama boss</div>
        <div>joe@gmail.com</div>
      </Table.Cell>
      <Table.Cell>20</Table.Cell>
      <Table.Cell>10</Table.Cell>
      <Table.Cell>$100</Table.Cell>
      <Table.Cell>
        <div>denied</div>
        <div>scam course</div>
      </Table.Cell>
      <Table.Cell>
        <Button>Update</Button>
      </Table.Cell>
    </Table.Row>
  );
};

export default MyClasses;

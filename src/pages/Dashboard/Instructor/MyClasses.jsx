import axios from "axios";
import { Button, Modal, Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider";

const MyClasses = () => {
  const [courses, setCourses] = useState([]);
  const { user, token } = useContext(AuthContext);

  const updateCourse = (updatedData = {}) => {
    axios
      .put("http://localhost:3000/courses", updatedData, {
        params: { userId: user._id },
        headers: { Authorization: token },
      })
      .then((res) => {
        setCourses(
          courses.map((e) => {
            if (e._id == res.course._id) {
              return { ...res.data.course };
            } else {
              return e;
            }
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                  <Course
                    course={course}
                    key={course._id}
                    updateCourse={updateCourse}
                  />
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
};

const Course = ({ course, updateCourse }) => {
  const [openModal, setOpenModal] = useState();

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
        <Button
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Update
        </Button>
        <UpdateCourseModal
          show={openModal}
          onClose={() => setOpenModal(false)}
          updateCourse={updateCourse}
        />
      </Table.Cell>
    </Table.Row>
  );
};

const UpdateCourseModal = ({ show, onClose, updateCourse }) => {
  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>Terms of Service</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={updateCourse}>I accept</Button>
        <Button color="gray" onClick={() => {}}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyClasses;

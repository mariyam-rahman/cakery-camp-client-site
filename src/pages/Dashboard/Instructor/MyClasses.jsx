import axios from "axios";
import { Button, Modal, Table } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider";
import Swal from "sweetalert2";

const MyClasses = () => {
  const [courses, setCourses] = useState([]);
  const { user, token } = useContext(AuthContext);

  const updateCourse = (id, updatedData = {}) => {
    axios
      .put(`${import.meta.env.VITE_API_BASE_URL}/course/${id}`, updatedData, {
        params: { userId: user._id },
        headers: { Authorization: token },
      })
      .then((res) => {
        setCourses(
          courses.map((e) => {
            if (e._id == id) {
              return { ...res.data.course };
            } else {
              return e;
            }
          })
        );
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Updated Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/courses`, {
        params: { userId: user._id },
      })
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

      <Table.Cell>{course.availableSeats}</Table.Cell>
      <Table.Cell>{course.totalEnrolled || 0}</Table.Cell>
      <Table.Cell>{course.price}</Table.Cell>
      <Table.Cell>
        <div>{course.status}</div>
        <div>{course.status == "denied" && course.adminFeedback}</div>
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
          course={course}
        />
      </Table.Cell>
    </Table.Row>
  );
};

const UpdateCourseModal = ({ show, onClose, updateCourse, course }) => {
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const availableSeats = form.availableSeats.value;
    const price = form.price.value;
    const photoUrl = form.photoUrl.value;
    const details = form.details.value;

    const updatedValue = {
      name,
      availableSeats,
      price,
      photoUrl,
      details,
    };
    console.log({ updatedValue });

    updateCourse(course._id, updatedValue);
  };

  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>Update Course</Modal.Header>
      <Modal.Body>
        <form action="#" onSubmit={handleUpdate}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Class Name
              </label>
              <input
                defaultValue={course.name}
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type class name"
                required=""
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="instructor"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Instructor
              </label>
              <input
                type="text"
                disabled={true}
                value={course.instructor.name}
                name="instructor"
                id="instructor"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Instructor Name"
                required=""
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                disabled={true}
                value={course.instructor.email}
                type="email"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="instructor@gmail.com"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="category"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Available seats
              </label>
              <input
                defaultValue={course.availableSeats}
                type="number"
                name="availableSeats"
                id="availableSeats"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Ex: 5"
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="item-weight"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Price
              </label>
              <input
                defaultValue={course.price}
                type="text"
                name="price"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$120"
                required=""
              />
            </div>

            <div className="sm:col-span-2">
              <div>
                <label
                  htmlFor="item-weight"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Photo URL
                </label>
                <input
                  defaultValue={course.photoUrl}
                  type="text"
                  name="photoUrl"
                  id="photoUrl"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                  placeholder="https://picsum.photos"
                  required=""
                />
              </div>

              <label
                htmlFor="description"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Description
              </label>
              <textarea
                defaultValue={course.details}
                id="details"
                name="details"
                rows={8}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Description about your class"
              />
            </div>
          </div>
          <div className=" flex justify-center my-6">
            <Button type="submit" className="w-full">
              Update
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default MyClasses;

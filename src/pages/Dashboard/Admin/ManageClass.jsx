import { Button, Dropdown, Modal, Table } from "flowbite-react";
import img from "../../../assets/panake.jpg";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../AuthProvider";
import axios from "axios";
const ManageClass = () => {
  const { user, token } = useContext(AuthContext);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/courses`)
      .then((res) => {
        console.log(res);
        setCourses(res.data.courses);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const changeStatus = (status, courseId) => {
    axios
      .put(
        `${import.meta.env.VITE_API_BASE_URL}/course/${courseId}/status`,
        { status: status },
        { headers: { Authorization: token } }
      )
      .then((res) => {
        setCourses(
          courses.map((e) => {
            if (e._id == courseId) {
              return res.data.course;
            } else {
              return e;
            }
          })
        );
      });
  };

  const sendFeedback = (feedback, courseId) => {
    axios
      .put(
        `${import.meta.env.VITE_API_BASE_URL}/course/${courseId}/status`,
        { adminFeedback: feedback },
        { headers: { Authorization: token } }
      )
      .then((res) => {
        console.log(res);
        setCourses(
          courses.map((e) => {
            if (e._id == courseId) {
              return res.data.course;
            } else {
              return e;
            }
          })
        );
      });
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto lg:py-16 lg:px-6 ">
        <div className="mx-auto text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Manage Classes
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classes from Tailwind
          </p>
        </div>
        <div className="">
          <Table hoverable className="text-center">
            <Table.Head>
              <Table.HeadCell>Image</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Instructor</Table.HeadCell>

              <Table.HeadCell>
                Available <br /> Seats
              </Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>Actions</Table.HeadCell>
              <Table.HeadCell></Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {courses.map((e) => (
                <CourseItem
                  course={e}
                  changeStatus={changeStatus}
                  sendFeedback={sendFeedback}
                />
              ))}
            </Table.Body>
          </Table>
        </div>
      </div>
    </section>
  );
};
const CourseItem = ({ course, changeStatus, sendFeedback }) => {
  const [openModal, setOpenModal] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  // const confirmFeedback = () => {
  //   sendFeedback(feedbackText, course._id);
  // };
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>
        <img src={course.photoUrl} alt="" className="rounded" />
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {course.name}
      </Table.Cell>
      <Table.Cell>
        <div>{course.instructor.name}</div>
        <div>{course.instructor.email}</div>
      </Table.Cell>
      <Table.Cell>{course.availableSeats}</Table.Cell>
      <Table.Cell>$ {course.price}</Table.Cell>
      <Table.Cell>{course.status}</Table.Cell>
      <Table.Cell>
        <Dropdown inline label="Change Status">
          <Dropdown.Item
            onClick={() => {
              changeStatus("approved", course._id);
            }}
          >
            Approved
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              changeStatus("denied", course._id);
            }}
          >
            denied
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              changeStatus("pending", course._id);
            }}
          >
            pending
          </Dropdown.Item>
        </Dropdown>
      </Table.Cell>

      <Table.Cell>
        <Button
          disabled={course.status != "denied"}
          onClick={() => setOpenModal(true)}
        >
          {" "}
          Feedback
        </Button>
        <FeedbackModal
          show={openModal}
          setFeedbackText={setFeedbackText}
          sendFeedback={sendFeedback}
          onClose={() => setOpenModal(false)}
          course={course}
        />
      </Table.Cell>
    </Table.Row>
  );
};

const FeedbackModal = ({
  feedbackText,
  setFeedbackText,
  sendFeedback,
  onClose,
  show,
  course,
}) => {
  return (
    <Modal show={show} onClose={onClose}>
      <Modal.Header>Terms of Service</Modal.Header>
      <Modal.Body>
        <div className="space-y-6">
          <input
            type="text"
            name=""
            id=""
            value={feedbackText}
            onChange={(e) => {
              setFeedbackText(e.target.value);
            }}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            const text = "test feedback";
            sendFeedback(text, course._id);
          }}
        >
          I accept
        </Button>
        <Button color="gray" onClick={() => {}}>
          Decline
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ManageClass;

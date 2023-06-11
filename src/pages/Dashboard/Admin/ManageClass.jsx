import { Button, Dropdown, Table } from "flowbite-react";
import img from "../../../assets/panake.jpg";

const ManageClass = () => {
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
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Available Seat</Table.HeadCell>
              <Table.HeadCell>Price</Table.HeadCell>
              <Table.HeadCell>Status</Table.HeadCell>
              <Table.HeadCell>Actions</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>
                  <img src={img} alt="" />
                </Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  Cheese Pancake
                </Table.Cell>
                <Table.Cell>Bonnie Green</Table.Cell>
                <Table.Cell>Bonnie@gmail.com</Table.Cell>
                <Table.Cell>200+</Table.Cell>
                <Table.Cell>$299</Table.Cell>
                <Table.Cell>pending</Table.Cell>
                <Table.Cell>
                  <Dropdown inline label="Status">
                    <Dropdown.Item>Approve</Dropdown.Item>
                    <Dropdown.Item>Reject</Dropdown.Item>
                  </Dropdown>
                </Table.Cell>
                {/* <Table.Cell>
                  <Button> Approve </Button>
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <Button>Deny</Button>
                </Table.Cell>
                <Table.Cell>
                  {" "}
                  <Button>Feedback</Button>
                </Table.Cell> */}
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </div>
    </section>
  );
};
const ClassTable = () => {
  return (
    <div>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell>
            <img src={img} alt="" />
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Cheese Pancake
          </Table.Cell>
          <Table.Cell>Bonnie Green</Table.Cell>
          <Table.Cell>Bonnie@gmail.com</Table.Cell>
          <Table.Cell>200+</Table.Cell>
          <Table.Cell>$299</Table.Cell>
          <Table.Cell>
            <Dropdown inline label="Status">
              <Dropdown.Item></Dropdown.Item>
              <Dropdown.Item>Pending</Dropdown.Item>
              <Dropdown.Item>Approved</Dropdown.Item>
              <Dropdown.Item>Denied</Dropdown.Item>
            </Dropdown>
          </Table.Cell>
          <Table.Cell>
            <Button> Approve </Button>
          </Table.Cell>
          <Table.Cell>
            {" "}
            <Button>Deny</Button>
          </Table.Cell>
          <Table.Cell>
            {" "}
            <Button>Feedback</Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </div>
  );
};

export default ManageClass;

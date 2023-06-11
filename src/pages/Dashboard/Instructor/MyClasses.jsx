import { Button, Table } from "flowbite-react";

const MyClasses = () => {
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
            <ClassRow></ClassRow>
          </div>
        </div>
      </section>
    </div>
  );
};

const ClassRow = () => {
  return (
    <Table striped className="text-center">
      <Table.Head>
        <Table.HeadCell>Id</Table.HeadCell>
        <Table.HeadCell>Image</Table.HeadCell>
        <Table.HeadCell>Class Name</Table.HeadCell>
        <Table.HeadCell>Instructor</Table.HeadCell>
        <Table.HeadCell>Email</Table.HeadCell>
        <Table.HeadCell>Available seats</Table.HeadCell>
        <Table.HeadCell>Total Enrolled</Table.HeadCell>
        <Table.HeadCell>Price</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell>Feedback</Table.HeadCell>
        <Table.HeadCell> Action</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell>1</Table.Cell>
          <Table.Cell>
            {" "}
            <img src="../../../assets/bread.jpg" alt="" />{" "}
          </Table.Cell>

          <Table.Cell>Red Velvet Cake</Table.Cell>
          <Table.Cell>joe@gmail.com</Table.Cell>
          <Table.Cell>Milky Donut</Table.Cell>
          <Table.Cell>20</Table.Cell>
          <Table.Cell>10</Table.Cell>
          <Table.Cell>$100</Table.Cell>
          <Table.Cell>Denied</Table.Cell>
          <Table.Cell>improve more</Table.Cell>
          <Table.Cell>
            <Button>Update </Button>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default MyClasses;

import { Button, Table } from "flowbite-react";

const ManageUsers = () => {
  return (
    <section className=" mb-28">
      <div className=" text-center mb-8 lg:mb-16">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Manage Users
        </h2>
        <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
          Explore the whole collection of open-source web components and
          elements built with the utility classes from Tailwind
        </p>
      </div>
      <div>
        <UsersTable></UsersTable>
      </div>
    </section>
  );
};

const UsersTable = () => {
  return (
    <Table striped className="">
      <Table.Head>
        <Table.HeadCell>Id</Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Email</Table.HeadCell>
        <Table.HeadCell>Role</Table.HeadCell>
        <Table.HeadCell className="pl-32">Action</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            1
          </Table.Cell>
          <Table.Cell>Lamia Rahman</Table.Cell>
          <Table.Cell>Lamia@gamil.com</Table.Cell>
          <Table.Cell>Instructor</Table.Cell>
          <Table.Cell>
            {/* <Dropdown inline label="Make Admin">
              <Dropdown.Item>Make Instructor</Dropdown.Item>
              <Dropdown.Item>Make Admin</Dropdown.Item>
            </Dropdown> */}
            <div className="flex gap-6">
              <Button>Make Admin</Button>
              <Button>Make Instructor</Button>
            </div>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
};

export default ManageUsers;

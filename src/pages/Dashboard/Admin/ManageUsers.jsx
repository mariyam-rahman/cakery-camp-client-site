import axios from "axios";
import { Button, Table } from "flowbite-react";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../../AuthProvider";

const ManageUsers = () => {
  const { user: me, token } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/users`)
      .then((res) => {
        console.log(res);
        setUsers(res.data.users.filter((e) => e._id != me._id));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const changeUserRole = (id, role) => {
    console.log("change role to " + role);
    axios
      .put(
        `${import.meta.env.VITE_API_BASE_URL}/user/${id}/role`,
        { role: role },
        { headers: { Authorization: token } }
      )
      .then((res) => {
        console.log(res);
        setUsers(
          users.map((user) => {
            if (user._id == id) {
              return res.data.user;
            } else {
              return user;
            }
          })
        );
      });
  };

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
        <Table striped className="">
          <Table.Head>
            <Table.HeadCell>Id</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>Role</Table.HeadCell>
            <Table.HeadCell className="pl-32">Action</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {users.map((user, i) => (
              <UserRow
                user={user}
                index={i + 1}
                key={i}
                changeUserRole={changeUserRole}
              />
            ))}
          </Table.Body>
        </Table>
      </div>
    </section>
  );
};

const UserRow = ({ user, changeUserRole, index }) => {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {index}
      </Table.Cell>
      <Table.Cell>{user.name}</Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
      <Table.Cell>{user.role}</Table.Cell>
      <Table.Cell>
        {/* <Dropdown inline label="Make Admin">
        <Dropdown.Item>Make Instructor</Dropdown.Item>
        <Dropdown.Item>Make Admin</Dropdown.Item>
      </Dropdown> */}
        <div className="flex flex-col gap-1">
          <Button
            disabled={user.role == "admin"}
            onClick={() => {
              changeUserRole(user._id, "admin");
            }}
          >
            Make Admin
          </Button>
          <Button
            onClick={() => {
              changeUserRole(user._id, "instructor");
            }}
            disabled={user.role == "instructor"}
          >
            Make Instructor
          </Button>
        </div>
      </Table.Cell>
    </Table.Row>
  );
};

export default ManageUsers;

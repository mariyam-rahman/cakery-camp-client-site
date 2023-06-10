import { Sidebar } from "flowbite-react";
import { Link, Outlet } from "react-router-dom";
import { HiChartPie } from "react-icons/hi";
import { RiWalletFill } from "react-icons/ri";
import {
  FaBookmark,
  FaPollH,
  FaHistory,
  FaUsers,
  FaUserGraduate,
  FaBookOpen,
  FaHome,
  FaFolderOpen,
  FaClipboardCheck,
  FaUserCheck,
} from "react-icons/fa";
const user = {
  // role: "admin",
  // role: "instructor",
  role: "student",
  name: "Lamia",
};
const Dashboard = () => {
  return (
    <div className="flex " style={{ height: "100vh" }}>
      <div className="">
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Items className="">
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={FaUserCheck}>
                <p>{user.name}</p>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiChartPie}>
                <p>Overview</p>
              </Sidebar.Item>
              {user.role == "admin" ? (
                <>
                  <Sidebar.Item href="#" icon={FaClipboardCheck}>
                    <p>Manage Classes</p>
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={FaUserCheck}>
                    <p>Manage Users</p>
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={FaUsers}>
                    <p>Users</p>
                  </Sidebar.Item>
                </>
              ) : user.role == "instructor" ? (
                <>
                  <Sidebar.Item href="#" icon={FaFolderOpen}>
                    <p>My Classes</p>
                  </Sidebar.Item>
                </>
              ) : (
                <>
                  <Sidebar.Item href="#" icon={FaBookmark}>
                    <p>Selected Classes</p>
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={FaPollH}>
                    <p>Enrolled Site</p>
                  </Sidebar.Item>

                  <Sidebar.Item href="#" icon={RiWalletFill}>
                    <p>Payment</p>
                  </Sidebar.Item>
                  <Sidebar.Item href="#" icon={FaHistory}>
                    <p>Payment History</p>
                  </Sidebar.Item>
                </>
              )}
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item icon={FaHome}>
                <Link to={"/"}>
                  {" "}
                  <p>Home</p>
                </Link>
              </Sidebar.Item>
              <Sidebar.Item icon={FaBookOpen}>
                <Link to={"/classes"}>
                  {" "}
                  <p>Classes</p>
                </Link>
              </Sidebar.Item>
              <Sidebar.Item icon={FaUserGraduate}>
                <Link to={"/instructors"}>
                  <p>Instructors</p>
                </Link>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

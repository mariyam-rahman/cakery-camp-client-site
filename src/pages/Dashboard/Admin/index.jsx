import { Sidebar } from "flowbite-react";

import { HiChartPie } from "react-icons/hi";

import { FaClipboardCheck, FaUserCheck } from "react-icons/fa";
import { useState } from "react";

const Overview = () => "Overview ";
const ManageClasses = () => "ManageClasses ";
const ManageUsers = () => "ManageUsers ";

const Admin = () => {
  const [selectedPanel, setSelectedPanel] = useState(null);

  return (
    <div className="flex gap-10 B" style={{ height: "100vh" }}>
      <div className="">
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Items className="">
            <Sidebar.ItemGroup>
              <Sidebar.Item
                icon={FaUserCheck}
                onClick={() => setSelectedPanel("overview")}
              >
                <p>Lamia</p>
              </Sidebar.Item>
              <Sidebar.Item
                icon={HiChartPie}
                onClick={() => setSelectedPanel("overview")}
              >
                <p>Overview</p>
              </Sidebar.Item>

              <Sidebar.Item
                icon={FaClipboardCheck}
                onClick={() => setSelectedPanel("manageClasses")}
              >
                <p>Manage Classes</p>
              </Sidebar.Item>
              <Sidebar.Item
                icon={FaUserCheck}
                onClick={() => setSelectedPanel("manageUsers")}
              >
                <p>Manage Users</p>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="container mx-auto">
        {selectedPanel == "overview" ? (
          <Overview />
        ) : selectedPanel == "manageClasses" ? (
          <ManageClasses />
        ) : selectedPanel == "manageUsers" ? (
          <ManageUsers />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Admin;

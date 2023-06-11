import { Sidebar } from "flowbite-react";
import { HiChartPie } from "react-icons/hi";
import { FaClipboardCheck, FaUserCheck } from "react-icons/fa";
import { useState } from "react";
import ManageClass from "./ManageClass";
import ManageUsers from "./ManageUsers";

const Admin = () => {
  const [selectedPanel, setSelectedPanel] = useState("manageClasses");

  return (
    <div className="flex gap-10" style={{ minHeight: "100vh" }}>
      <div className="">
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Items className="">
            <Sidebar.ItemGroup>
              <Sidebar.Item
                icon={FaClipboardCheck}
                onClick={() => setSelectedPanel("manageClasses")}
                className={selectedPanel == "manageClasses" && "bg-slate-200"}
              >
                <p>Manage Classes</p>
              </Sidebar.Item>
              <Sidebar.Item
                className={selectedPanel == "manageUsers" && "bg-slate-200"}
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
        {selectedPanel == "manageClasses" ? (
          <ManageClass></ManageClass>
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

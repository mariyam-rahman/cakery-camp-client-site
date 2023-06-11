import { FaFolderOpen, FaFolderPlus } from "react-icons/fa";
import { Sidebar } from "flowbite-react";
import MyClasses from "./MyClasses";
import AddClass from "./AddClass";
import { useState } from "react";
export default function Instructor() {
  const [selectedPanel, setSelectedPanel] = useState(null);

  return (
    <div className="flex gap-10" style={{ minHeight: "100vh" }}>
      <div className="">
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.ItemGroup className="">
            <Sidebar.Item
              href="#"
              icon={FaFolderOpen}
              onClick={() => setSelectedPanel("myClasses")}
            >
              <p>My Classes</p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={FaFolderPlus}
              onClick={() => setSelectedPanel("addClass")}
            >
              <p>Add Class</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar>
      </div>
      <div className="container mx-auto">
        {selectedPanel == "myClasses" ? (
          <MyClasses></MyClasses>
        ) : selectedPanel == "addClass" ? (
          <AddClass></AddClass>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

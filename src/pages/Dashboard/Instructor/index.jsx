import { FaBookmark, FaPollH } from "react-icons/fa";
import { Sidebar } from "flowbite-react";
import MyClasses from "./MyClasses";
import { useState } from "react";
export default function Instructor() {
  const [selectedPanel, setSelectedPanel] = useState(null);

  return (
    <div className="flex gap-10" style={{ height: "100vh" }}>
      <div className="">
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.ItemGroup className="">
            <Sidebar.Item
              href="#"
              icon={FaBookmark}
              onClick={() => setSelectedPanel("selectedClass")}
            >
              <p>Selected Classes</p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={FaPollH}
              onClick={() => setSelectedPanel("myClasses")}
            >
              <p>Enrolled Classes</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar>
      </div>
      <div className="container mx-auto">
        {selectedPanel == "myClasses" && <MyClasses></MyClasses>}
      </div>
    </div>
  );
}

import {
  FaBookmark,
  FaPollH,
  FaHistory,
  // FaUsers,
  // FaUserGraduate,
  // FaBookOpen,
  // FaHome,
  // FaFolderOpen,
  // FaClipboardCheck,
  // FaUserCheck,
} from "react-icons/fa";
import { Sidebar } from "flowbite-react";
// import { Link, Outlet } from "react-router-dom";
// import { HiChartPie } from "react-icons/hi";
import { RiWalletFill } from "react-icons/ri";
// import { Sidebar } from "flowbite-react";
import { useState } from "react";

import SelectedClasses from "./SelectedClasses";
import EnrolledClass from "./EnrolledClass";
import Payments from "./Payment";
import PaymentHistory from "./PayHistory";
// const SelectedClasses = () => "SelectedClasses";
// const Payments = () => "Payments";
// const MyClasses = () => "MyClasses";
// const PaymentHistory = () => "PaymentHistory";

const Student = () => {
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
              onClick={() => setSelectedPanel("enrolledClasses")}
            >
              <p>Enrolled Classes</p>
            </Sidebar.Item>

            <Sidebar.Item
              href="#"
              icon={RiWalletFill}
              onClick={() => setSelectedPanel("payments")}
            >
              <p>Payment</p>
            </Sidebar.Item>
            <Sidebar.Item
              href="#"
              icon={FaHistory}
              onClick={() => setSelectedPanel("paymentHistory")}
            >
              <p>Payment History</p>
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar>
      </div>
      <div className="container mx-auto">
        {selectedPanel == "selectedClass" ? (
          <SelectedClasses />
        ) : selectedPanel == "enrolledClasses" ? (
          <EnrolledClass></EnrolledClass>
        ) : selectedPanel == "payments" ? (
          <Payments />
        ) : selectedPanel == "paymentHistory" ? (
          <PaymentHistory />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Student;

import { useState } from "react";
import Classes from "./Classes/Classes";
import DFooter from "./DFooter";
import DMain from "./DMain";
import DNav from "./DNav";
import DSidebar from "./DSidebar";
import Employee from "./Employee/Employee";
import Notices from "./Notices/Notices";
import Students from "./Students/Students";
import DashboardTeachers from "./Teachers/Teachers";

const Dashboard = () => {
  const [page, setPage] = useState("dashboard");

  const handlePage = (page) => {
    setPage(page);
  };
  return (
    <div>
      <DNav />
      <div className="flex overflow-hidden bg-white pt-16">
        {/* sidebar */}
        <DSidebar handlePage={handlePage} page={page} />
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          {/* main */}
          {(page === "dashboard" && <DMain />) ||
            (page === "teacher" && <DashboardTeachers />) ||
            (page === "employee" && <Employee />) ||
            (page === "student" && <Students />) ||
            (page === "class" && <Classes />) ||
            (page === "notice" && <Notices />)}
          {/* footer */}
          <DFooter />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

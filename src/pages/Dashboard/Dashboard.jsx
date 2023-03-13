import DFooter from "./DFooter";
import DMain from "./DMain";
import DNav from "./DNav";
import DSidebar from "./DSidebar";

const Dashboard = () => {
  return (
    <div>
      <DNav />
      <div className="flex overflow-hidden bg-white pt-16">
        {/* sidebar */}
        <DSidebar />
        <div
          className="bg-gray-900 opacity-50 hidden fixed inset-0 z-10"
          id="sidebarBackdrop"
        ></div>
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          {/* main */}
          <DMain />
          {/* footer */}
          <DFooter />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

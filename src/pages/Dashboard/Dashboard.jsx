import React from "react";
import DCard from "./DCard";
import DDropdown from "./DDropdown";
import DNav from "./DNav";
import DSearch from "./DSearch";
import DTable from "./DTable";
import Sidebar from "./Sidebar";
const cards = [
  {
    name: "All Vehicles",
  },
  {
    name: "New Vehicle Post This week",
  },
  {
    name: "Dealers",
  },

  {
    name: "Customers",
  },
  {
    name: "New Vehicle Post This week",
  },
];

const Dashboard = () => {
  return (
    <div>
      <section className="flex font-roboto">
        {/* sidebar section */}
        <Sidebar />

        {/* nav and main section */}
        <div className="w-full ml-16">
          {/* nav section */}
          <DNav />
          {/* Component Start */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {cards.map((car, idx) => (
              <DCard key={idx} car={car} />
            ))}
          </div>
          <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-5">
            <div className="flex justify-between items-center pb-4">
              {/* <DDropdown /> */}
              <DDropdown />
              <DSearch />
            </div>
            <DTable />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;

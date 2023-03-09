import { Sidebar } from "flowbite-react";
import React from "react";
import { HiChartPie, HiInbox, HiViewBoards } from "react-icons/hi";

const sideMenus = [
  {
    name: "Personal Information",
    value: "personal",
    icon: HiChartPie,
  },
  {
    name: "Educational Qualification",
    value: "education",
    icon: HiInbox,
  },
  {
    name: "Teaching Information",
    value: "teaching",
    icon: HiViewBoards,
  },
];

const SidebarMenu = ({ handleSideMenu, sideMenu }) => {
  return (
    <div>
      <div className="w-fit">
        <Sidebar aria-label="Sidebar with content separator example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              {sideMenus.map((menu, idx) => (
                <Sidebar.Item
                  key={idx}
                  icon={menu.icon}
                  onClick={() => handleSideMenu(`${menu.value}`)}
                  className={
                    sideMenu === menu.value && "bg-teal-300 hover:bg-teal-300"
                  }
                >
                  {menu.name}
                </Sidebar.Item>
              ))}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default SidebarMenu;

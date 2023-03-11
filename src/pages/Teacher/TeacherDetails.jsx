import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/FooterArea/FooterArea";
import Navigation from "../../components/Navbar/Navigation";
import SidebarMenu from "../../components/Tabs/SidebarMenu";
import TableContent from "./TableContent";

const TeacherDetails = () => {
  const { teacherId } = useParams();
  const [sideMenu, setSideMenu] = useState("personal");

  const handleSideMenu = (menu) => {
    setSideMenu(menu);
  };
  return (
    <>
      <Navigation />
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <SidebarMenu
            className="col-span-1"
            handleSideMenu={handleSideMenu}
            sideMenu={sideMenu}
          />
          <div className="col-span-3">
            <div class=" mx-auto bg-white rounded-xl shadow-md overflow-hidden w-full mt-4">
              <div class="md:flex">
                <div class="md:shrink-0">
                  <img
                    class="h-48 w-full object-cover md:h-full "
                    src="https://navbharattimes.indiatimes.com/thumb/85206296/smiling-young-female-teacher-standing-front-blackboard-holding-stranded-board-showing-thumb-up-classroom-85206296.jpg?imgsize=274829&width=540&height=405&resizemode=75"
                    alt="Modern building architecture"
                  />
                </div>
                <div class="w-full">
                  {sideMenu === "personal" && <TableContent />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default TeacherDetails;

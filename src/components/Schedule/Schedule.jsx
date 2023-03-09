import { Tabs } from "flowbite-react";
import React, { useRef, useState } from "react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import SectionHeading from "../Utils/SectionHeading";
import ScheduleItem from "./ScheduleItem";
const scheduleData = [
  {
    id: "1",
    subject: "Mathematic Algebra",
    start: "09:00",
    end: "09:45",
    place: "Math Laboratory",
    teacher: "George Square",
  },
  {
    id: "2",
    subject: "Social Studies",
    start: "09:00",
    end: "09:45",
    place: "Math Laboratory",
    teacher: "George Square",
  },
  {
    id: "3",
    subject: "English Grammar",
    start: "09:00",
    end: "09:45",
    place: "Math Laboratory",
    teacher: "George Square",
  },
  {
    id: "4",
    subject: "Chemistry",
    start: "09:00",
    end: "09:45",
    place: "Math Laboratory",
    teacher: "George Square",
  },
  {
    id: "5",
    subject: "World History",
    start: "09:00",
    end: "09:45",
    place: "Math Laboratory",
    teacher: "George Square",
  },
  {
    id: "6",
    subject: "Islamic History",
    start: "09:00",
    end: "09:45",
    place: "Math Laboratory",
    teacher: "George Square",
  },
  {
    id: "7",
    subject: "Mathematic Algebra",
    start: "09:00",
    end: "09:45",
    place: "Math Laboratory",
    teacher: "George Square",
  },
  {
    id: "8",
    subject: "Mathematic Algebra",
    start: "09:00",
    end: "09:45",
    place: "Math Laboratory",
    teacher: "George Square",
  },
  {
    id: "19",
    subject: "Mathematic Algebra",
    start: "09:00",
    end: "09:45",
    place: "Math Laboratory",
    teacher: "George Square",
  },
  {
    id: "11",
    subject: "Mathematic Algebra",
    start: "09:00",
    end: "09:45",
    place: "Math Laboratory",
    teacher: "George Square",
  },
  {
    id: "12",
    subject: "Mathematic Algebra",
    start: "09:00",
    end: "09:45",
    place: "Math Laboratory",
    teacher: "George Square",
  },
];

const days = [
  {
    name: "Sunday",
    code: 0,
    icon: HiAdjustments,
  },
  {
    name: "Monday",
    code: 1,
    icon: HiClipboardList,
  },
  {
    name: "Tuesday",
    code: 2,
    icon: HiUserCircle,
  },
  {
    name: "Wednesday",
    code: 3,
    icon: MdDashboard,
  },
  {
    name: "Thursday",
    code: 4,
    icon: MdDashboard,
  },
];

const Schedule = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef(null);
  return (
    <div className="lg:container mx-auto">
      <SectionHeading> Days & Classes Schedule</SectionHeading>
      <div className="schedule-menu mx-auto">
        <>
          <Tabs.Group
            aria-label="Default tabs"
            style="default"
            ref={tabsRef}
            onActiveTabChange={(tab) => setActiveTab(tab)}
            className="mx-auto"
          >
            {days.map((day) => (
              <Tabs.Item
                active={activeTab ? true : false}
                title={day.name}
                key={day.code}
                icon={day.icon}
              >
                <div className="grid grid-cols-4 gap-2">
                  {scheduleData.map((item) => (
                    <ScheduleItem item={item} key={item.id} />
                  ))}
                </div>
              </Tabs.Item>
            ))}
          </Tabs.Group>
        </>
      </div>
    </div>
  );
};

export default Schedule;

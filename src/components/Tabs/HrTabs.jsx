import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Teacher from "../../pages/Teacher/Teacher";

export default function HrTab({ item }) {
  const data = [
    {
      label: "All",
      value: "all",
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people
        who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Principal",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people
        who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Vice-Principal",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },

    {
      label: "Asst. Teacher",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
    },

    {
      label: "Department",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];

  return (
    <Tabs id="custom-animation" value="html">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody
        animate={{
          // initial: { y: 250 },
          mount: { y: 0 },
          unmount: { y: 250 },
        }}
      >
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            <div className="grid grid-cols-4 gap-4">
              {item.map((teacher) => (
                <Teacher key={teacher.id} teacher={teacher} />
              ))}
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}

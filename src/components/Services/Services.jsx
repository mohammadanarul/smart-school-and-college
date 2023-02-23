import React from "react";

const serviceData = [
  {
    title: "See the Beatch of Cox's Bazar",
    icon: "",
  },
  {
    title: "See the Beatch of Cox's Bazar",
    icon: "",
  },
  {
    title: "See the Beatch of Cox's Bazar",
    icon: "",
  },
];

const Services = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div class="grid grid-cols-3 gap-4">
          {serviceData.map((item, idx) => (
            <ServiceItem key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

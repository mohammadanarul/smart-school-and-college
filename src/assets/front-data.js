const fromInfo = [
    {
      label: "Your Name",
      placeholder: "Write Your Full Name",
      name: "name",
      require: true,
      type: "text",
    },
    {
      label: "Email Address",
      placeholder: "Your Valid Email",
      name: "email",
      require: true,
      type: "email",
    },
    {
      label: "Phone",
      placeholder: "01XXXXXXXXX",
      name: "phone",
      require: true,
      type: "number",
    },
    {
      label: "Password",
      placeholder: "1234567$",
      name: "password",
      require: true,
      type: "password",
    },
    {
      label: "Gender",
      placeholder: "Male Or Female",
      name: "gender",
      require: true,
      type: "radio",
    },
    {
      label: "Your Religion",
      placeholder: "Islam",
      name: "religion",
      require: true,
      type: "text",
    },
    {
      label: "Date Of Birth",
      placeholder: "12-12-1994",
      name: "date_of_birth",
      require: true,
      type: "date",
    },
    {
      label: "Present Address",
      placeholder: "Holding Number, village, Upozill, District ",
      name: "present_address",
      require: true,
      type: "text",
    },
    {
      label: "Permanent Address",
      placeholder: "Holding Number, village, Upozill, District ",
      name: "permanent_address",
      require: true,
      type: "text",
    },
    {
      label: "Blood Group",
      placeholder: "Blood_group",
      name: "blood_group",
      require: true,
      type: "text",
    },
    {
      label: "Father Name",
      placeholder: "Write Your Father",
      name: "father",
      require: true,
      type: "text",
    },
    {
      label: "Mother Name",
      placeholder: "Write Your",
      name: "mother",
      require: true,
      type: "text",
    },
    {
      label: "Study Group",
      placeholder: "Group Name",
      name: "group",
      type: "select",
      require: true,
      option: [
        { name: "Science", value: "science" },
        { name: "Arts", value: "arts" },
        { name: "Commerce", value: "commerce" },
      ],
    },
  ];


  export {
    fromInfo
};

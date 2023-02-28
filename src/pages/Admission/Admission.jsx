import { Typography } from "@material-tailwind/react";
import { Button, Card, Label, Select, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
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

const Admission = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example"));
  return (
    <div>
      <div className="container mx-auto">
        <Card>
          <Typography variant="h2" className="text-teal-600 py-5">
            Student Admission form
          </Typography>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-4"
          >
            {fromInfo.map((item) => {
              if (item.type === "select") {
                return (
                  // <div className="flex-col flex">
                  //   <Label>{item.label}</Label>
                  //   <select id="select" {...register("gender")}>
                  //     {item.option.map((subItem) => (
                  //       <option value={subItem.value}>{subItem.name}</option>
                  //     ))}
                  //   </select>
                  // </div>
                  <Select {...register(item.name)}>
                    {item.option.map((subItem) => (
                      <option value={subItem.value}>{subItem.name}</option>
                    ))}
                  </Select>
                );
              }
              if (item.type === "radio") {
                return (
                  <fieldset
                    key={item.name}
                    className="flex flex-col gap-4"
                    {...register(`${item.name}`, {
                      required: `${item.require}`,
                    })}
                  >
                    <Label className="font-extrabold">Chose Your Gender</Label>
                    <div className="flex gap-2">
                      <div className="flex items-center gap-2">
                        <input
                          type={item.type}
                          id="male"
                          name={item.name}
                          value="male"
                        />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type={item.type}
                          id="female"
                          name={item.name}
                          value="female"
                        />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </div>
                  </fieldset>
                );
              }
              return (
                <div className="" key={item.name}>
                  <div className="mb-2 block">
                    <Label
                      className="font-extrabold text-gray-800"
                      htmlFor={item.name}
                      value={item.label}
                    />
                  </div>
                  <TextInput
                    id={item.name}
                    type={item.type}
                    required={item.require}
                    placeholder={item.placeholder}
                    className="focus:border-teal-600 active:border-teal-600"
                    {...register(`${item.name}`, {
                      required: `${item.require}`,
                    })}
                  />
                </div>
              );
            })}
            <div className="flex items-center gap-2">
              <Label htmlFor="remember">Remember me</Label>
            </div>
            {/* errors will return when field validation fails  */}
            {errors.exampleRequired && <span>This field is required</span>}

            <Button className="mx-auto" type="submit">
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Admission;

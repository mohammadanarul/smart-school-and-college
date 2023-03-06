import { Typography } from "@material-tailwind/react";
import axios from "axios";
import { Button, Card, Label, Select, TextInput } from "flowbite-react";
import React from "react";
import { useForm } from "react-hook-form";
import { fromInfo } from "../../assets/front-data";

const Admission = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://ssc-api.vercel.app/api/v1/users/student/admission/", data)
      .then((d) => console.log(d))
      .catch((e) => console.log(e.message));
  };

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
                  <Select {...register(item.name)} key={item.name}>
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
                    className="focus:border-teal-600 active:border-teal-600 "
                    {...register(`${item.name}`, {
                      required: `${item.require}`,
                    })}
                  />
                  {errors[`${item.name}`] && (
                    <span>This field is required</span>
                  )}
                </div>
              );
            })}

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

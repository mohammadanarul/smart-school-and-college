import { Button, Card, Typography } from "@material-tailwind/react";
import React from "react";
import { useModal } from "../../../components/Utils/useModal";
import TeacherForm from "./TeacherForm";

const DashboardTeachers = () => {
  const { handleOpen, open, handleClose } = useModal();
  return (
    <div className="pt-8 px-4">
      <Card className="p-5">
        <div className="add_teacher">
          <Button
            onClick={handleOpen}
            className="bg-teal-500 hover:bg-rose-800 hover:text-white duration-500"
            variant="gradient"
          >
            Admit New
          </Button>
          <TeacherForm
            handleClose={handleClose}
            handleOpen={handleOpen}
            open={open}
          />
        </div>
        <Typography className="my-4" variant="h2">
          All Teacher is Here
        </Typography>
      </Card>
    </div>
  );
};

export default DashboardTeachers;

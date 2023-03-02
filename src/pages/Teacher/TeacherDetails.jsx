import React from "react";
import { useParams } from "react-router-dom";
import TeacherDetailsImage from "./TeacherDetails/TeacherDetailsImage";

const TeacherDetails = () => {
  const { teacherId } = useParams();
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-4">
        <TeacherDetailsImage className="col-span-1" />
      </div>
    </div>
  );
};

export default TeacherDetails;

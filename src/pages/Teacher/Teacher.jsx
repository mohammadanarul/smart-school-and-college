import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export default function Teacher({ teacher }) {
  return (
    <Card className="">
      <CardHeader floated={false}>
        <img
          src="https://static9.depositphotos.com/1070812/1091/i/600/depositphotos_10916856-stock-photo-teacher-on-background-of-blackboard.jpg"
          alt="profile-picture"
        />
      </CardHeader>
      <CardBody className="text-center">
        <Typography
          variant="h4"
          as={NavLink}
          to={`/teacher/${teacher.id}`}
          color="blue-gray"
          className="mb-2"
        >
          {teacher.name}
        </Typography>
        <Typography color="blue" className="font-medium" textGradient>
          {teacher.designations}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}

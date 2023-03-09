import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export default function ToperCard({ student }) {
  return (
    <Card className="justify-center">
      <div className=" -mt-16">
        <CardHeader className=" rounded-full  w-40 h-40 m-auto ">
          <img
            src={student.img}
            alt="img-blur-shadow"
            className="h-full w-full  "
          />
        </CardHeader>
      </div>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2 text-gray-600">
          {student.name}
        </Typography>
        <Typography variant="h4" className="uppercase text-teal-600">
          {student.title}
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to "Naviglio" where you can enjoy the main night life in
          Barcelona.
        </Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
        <Typography variant="small">{student.class}</Typography>
        <Typography variant="small" color="gray" className="flex gap-1">
          <i className="fas fa-map-marker-alt fa-sm mt-[3px]" />
          Barcelona, Spain
        </Typography>
      </CardFooter>
    </Card>
  );
}

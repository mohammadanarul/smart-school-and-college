import {
  Avatar,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import { HiAdjustments, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

export default function UserMenu() {
  return (
    <Menu>
      <MenuHandler>
        <Avatar
          src="https://ariful-islam66.web.app/static/media/02.c9ffda0f.png"
          alt="avatar"
          variant="circular"
          className="w-30"
        />
      </MenuHandler>
      <MenuList className="flex flex-col gap-2">
        <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
          <HiUserCircle />
          <div className="flex flex-col gap-1">
            <Typography variant="small" color="gray" className="font-normal">
              Md. Ariful Islam
            </Typography>
          </div>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
          <MdDashboard />
          <div className="flex flex-col gap-1">
            <Typography variant="small" color="gray" className="font-normal">
              Dashboard
            </Typography>
          </div>
        </MenuItem>
        <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
          <HiAdjustments />
          <div className="flex flex-col gap-1">
            <Typography variant="small" color="gray" className="font-normal">
              Setting
            </Typography>
          </div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

export default function Dropdown({ nav }) {
  return (
    <Menu
      animate={{
        mount: { y: 0 },
        unmount: { y: 25 },
      }}
    >
      <MenuHandler>
        <NavLink variant="gradient" className="flex items-center font-bold">
          {nav.name}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 pl-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </NavLink>
      </MenuHandler>
      <MenuList>
        {nav.dropdown.map((item) => (
          <MenuItem key={item.name}>
            <NavLink to={item.path} className={"uppercase font-bold"}>
              {item.name}
            </NavLink>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

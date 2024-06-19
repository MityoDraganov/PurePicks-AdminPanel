import { LayoutDashboard, Users } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "./ui/button";

export const SideBar = () => {
  const { pathname } = useLocation();

  console.log(pathname);

  return (
    <div className="w-[15%] border-r-slate-200 border-r-2 text-lg font-medium  h-full overflow-hidden">
      <div className="pt-4">
        <h2 className="p-0">Pure Picks</h2>
        <p className="text-muted-foreground p-0">admin panel</p>
      </div>
      <div className="flex flex-col gap-4 w-full p-2 pt-6 h-full overflow-hidden">
        <Link
          to="dashboard"
          className="flex gap-4 items-center justify-start w-full pl-[2%]"
        >
          <Button
            variant={"ghost"}
            className={`${
              pathname === "/dashboard"
                ? "bg-blue-200 hover:bg-blue-200 text-blue-900"
                : ""
            } flex gap-4 items-center justify-start  w-full `}
          >
            <LayoutDashboard />
            Dashboard
          </Button>
        </Link>

        <Link to="users">
          <Button
            variant={"ghost"}
            className={`${
              pathname === "/users"
                ? "bg-blue-200 hover:bg-blue-200 text-blue-900"
                : ""
            } flex gap-4 items-center justify-start  w-full `}
          >
            <Users />
            Users
          </Button>
        </Link>
      </div>
    </div>
  );
};

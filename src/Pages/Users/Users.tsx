import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { useEffect, useState } from "react";

import { IUser } from "../../Interfaces/User.interface";
import { UserRow } from "./components/UserTRow";
import { getAllUsers } from "../../api/requests";

export const Users = () => {
  const [users, setUsers] = useState<IUser[]>();

  useEffect(() => {
    (async () => {
      setUsers(await getAllUsers());
    })();
  }, []);

  return (
    <div className="h-full pt-[5%] w-4/5 mx-auto flex flex-col items-center gap-4 ">
      <h2 className="text-3xl font-medium text-left w-full pl-4">Users</h2>

      <Table className="text-left w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Username</TableHead>

            <TableHead>Email</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.map((x) => (
            <UserRow {...x} />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

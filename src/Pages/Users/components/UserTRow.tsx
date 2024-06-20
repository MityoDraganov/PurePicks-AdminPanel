import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../../../components/ui/alert-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../../../components/ui/dropdown-menu";
import { TableCell, TableRow } from "../../../components/ui/table";

import { Button } from "../../../components/ui/button";
import { IUser } from "../../../Interfaces/User.interface";
import { promoteAdmin } from "../../../api/requests";

export const UserRow = (user: IUser) => {
  const promoteAdminHandler = async () => {
    await promoteAdmin(user._id);
  };

  return (
    <TableRow>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>
        {user.type.map((x, index) => (
          <span key={index} className={`${x === "admin" && "text-blue-700 font-semibold"}`}>
            {x.charAt(0).toUpperCase() + x.slice(1)}
            {index < user.type.length - 1 && ", "}
          </span>
        ))}
      </TableCell>

      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="outline">Actions</Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button variant="secondary">Promote to ADMIN</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    You are about to promote user{" "}
                    <span className="font-bold text-black">
                      {user.username}
                    </span>{" "}
                    for role <span className="font-bold text-black">ADMIN</span>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={promoteAdminHandler}>
                    Continue
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

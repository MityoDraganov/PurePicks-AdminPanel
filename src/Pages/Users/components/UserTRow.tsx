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

export const UserRow = (user: IUser) => {
  return (
    <TableRow>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
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
                    You are about to promote user <span className="font-bold text-black">{user.username}</span> for role <span className="font-bold text-black">ADMIN</span>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
};

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../../components/ui/card";

import { AdminLoginData } from "../../Interfaces/User.interface";
import { Button } from "../../components/ui/button";
import { InputGroup } from "../../components/InputGroup";
import adminSvg from "../../assets/admin.svg";
import { login } from "../../api/requests";
import useFormData from "../../hooks/useForm";

export const Login = () => {
  const [authData, setAuthData] = useFormData<AdminLoginData>({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await login(authData);
  };

  return (
    <Card className="flex flex-col gap-4 px-4 pt-10 pb-4 w-3/5 m-auto mt-[10%]">
      <div className="w-[8%] aspect-square m-auto">
        <img src={adminSvg} />
      </div>
      <CardTitle>Login</CardTitle>
      <CardDescription>Pure Picks admin panel</CardDescription>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 h-full text-left"
      >
        <InputGroup
          value={authData.email}
          onChange={setAuthData}
          id="email"
          type="email"
          label="Email"
          placeHolder=""
        />
        <InputGroup
          value={authData.password}
          onChange={setAuthData}
          id="password"
          type="password"
          label="Password"
          placeHolder=""
        />
        <Button className="w-5/12 mr-0 ml-auto">Submit</Button>
      </form>
    </Card>
  );
};

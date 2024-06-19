import { Eye, EyeOff } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

export const InputGroup = ({
  label,
  placeHolder,
  value,
  onChange,
  id,
  type,
  className,
  multiple,
  absoluteLabel,
}: {
  label: string;
  placeHolder: string | undefined;
  value?: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: any;
  type?: string;
  className?: string;
  multiple?: boolean;
  absoluteLabel?: boolean;
}) => {
  const [isPasswordRevealed, setIsPasswordRevealed] = useState<boolean>(false);
  return (
    <div className={`flex flex-col gap-1 relative ${className}`}>
      <Label className={`${absoluteLabel ? "absolute -top-4" : ""}`}>
        {label}
      </Label>
      <div className="relative">
        <Input
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          className={`${!value ? "bg-muted" : ""} w-full ${type === "password" && "pr-20"}`}
          id={id}
          type={isPasswordRevealed ? "text" : type || "text"}
          multiple
        />

        {type === "password" && (
          <Button
            size="icon"
            variant="outline"
            className="absolute top-0 right-0"
            onClick={() => setIsPasswordRevealed(!isPasswordRevealed)}
            type="button"
          >
            {isPasswordRevealed ? <EyeOff /> : <Eye />}
          </Button>
        )}
      </div>
    </div>
  );
};

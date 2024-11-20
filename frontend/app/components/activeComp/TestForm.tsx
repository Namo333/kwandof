import { FC } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface TestFormProps {
  buttonClass?: string;
  buttonText?: string;
  svgColor?: string;
  buttonProps?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const TestForm: FC<TestFormProps> = ({ buttonClass, buttonText, svgColor, buttonProps }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className={buttonClass || 'bg-[#457AE9] text-white px-[30px] rounded-[16px] p-[15px]'} {...buttonProps}>
          {buttonText || "Оставить заявку"}
          <svg
            width="9"
            height="11"
            viewBox="0 0 9 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.2 9.67L4.14 9.75H4.24H5.19143H5.21643L5.23143 9.73L7.93143 6.13L7.95393 6.1L7.93143 6.07L5.23143 2.47L5.21643 2.45H5.19143H4.24H4.14L4.2 2.53L6.8775 6.1L4.2 9.67ZM0.96 9.67L0.9 9.75H1H1.95143H1.97643L1.99143 9.73L4.69143 6.13L4.71393 6.1L4.69143 6.07L1.99143 2.47L1.97643 2.45H1.95143H1H0.9L0.96 2.53L3.6375 6.1L0.96 9.67Z"
              fill={svgColor || 'white'}
            />
          </svg>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TestForm;

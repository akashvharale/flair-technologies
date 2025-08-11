"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import BookADemoForm from "@/components/homePage/BookADemoForm";
import { DialogDescription } from "@radix-ui/react-dialog";

interface EnrollDialogProps {
  formHeading?: string;
  buttonText: string;
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}

export function EnrollDialog({
  formHeading,
  buttonText,
  className,
  size = "lg",
  variant = "default",
}: EnrollDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={size} variant={variant} className={className}>
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className=" bg-gradient-to-br from-slate-50 to-blue-50">
        <DialogDescription></DialogDescription>
        <DialogTitle className="hidden">Book a demo</DialogTitle>
        <BookADemoForm formHeading={formHeading} btnName={buttonText} />
      </DialogContent>
    </Dialog>
  );
}

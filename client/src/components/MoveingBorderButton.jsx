
import React from "react";
import { Button } from "./ui/moving-border";

export function MovingBorderButton({ children, handleClick, className }) {
  return (
    <div>
      <Button
        borderRadius="1rem"
        className={`${className} bg-transparent dark:bg-slate-900 text-white font-bold dark:text-white border-neutral-200 border-none dark:border-slate-800`}
        onClick={handleClick}
      >
        {children}
      </Button>
    </div>
  );
}

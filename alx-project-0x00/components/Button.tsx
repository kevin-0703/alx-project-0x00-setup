import React from "react";
import { ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <button className="rounded-sm rounded-lg rounded-full bg-blue-500 text-white px-3 py-1 text-lg mt-3 sm:">
      {title}
    </button>
  );
};
export default Button;

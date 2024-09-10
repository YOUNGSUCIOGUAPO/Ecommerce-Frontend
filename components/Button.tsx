import React, {ReactNode} from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children:ReactNode,
    className?:string
}

const Button: React.FC<ButtonProps>=({children, className="", ...props}) => (
  <button className={`px-[48px] py-[16px] rounded-[4px] bg-[#db4444]
   text-[#fafafa] text-[16px] font-medium leading-[24px] text-left font-poppins ${className}`}
   {...props}
   >
    {children}
  </button>
);

export default Button;

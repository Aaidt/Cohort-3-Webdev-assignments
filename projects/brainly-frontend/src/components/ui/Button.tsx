import { ReactElement } from "react"


interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick: () => void;
}

const variantStyles = {
    "primary": "bg-[#5047e5] text-white",
    "secondary": "bg-[#e0e6fe] text-[#574ebe]"
}

const defaultStyles = "flex rounded-md p-4 m-2"

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6"
}


export const Button = (props: ButtonProps) => {
    return <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} `}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon}
    </button>
}

import { ReactElement } from "react"


interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: ReactElement,
    endIcon?: ReactElement,
    onClick?: () => void;
}

const variantStyles = {
    "primary": "bg-[#5047e5] text-white",
    "secondary": "bg-[#e0e6fe] text-[#574ebe]"
}

const fixedStyles = "flex rounded-md p-4 m-2 font-normal items-center"

const sizeStyles = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6"
}

const hoverStyle = "hover:"

export const Button = (props: ButtonProps) => {
    return <button onClick={props.onClick} className={`${variantStyles[props.variant]} ${fixedStyles} ${sizeStyles[props.size]} ${hoverStyle}`}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null} {props.text} {props.endIcon}
    </button>
}

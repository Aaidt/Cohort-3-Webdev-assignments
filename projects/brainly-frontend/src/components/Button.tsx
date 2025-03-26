
export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: any,
    endIcon?: any,
    onClick: () => void;
}

const variantStyles = {
    "primary": "bg-[#5047e5] text-white",
    "secondary": "bg-[#e0e6fe] text-[#574ebe]" 
}

export const Button = (props: ButtonProps) => {
    return <button className={variantStyles[props.variant]}>
        {props.text}
    </button>
}
import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: ReactNode;
}

export function Button({ className, children, ...rest }: Props) {
    return (
        <button {...rest} className={`${className} border rounded p-2 bg-primary text-white hover:scale-[98%] transition-all`}>
            {children}
        </button>
    );
}

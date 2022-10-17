import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...rest }: Props) {
    return (
        <input
            className={`${className} border rounded w-full h-8 px-2 outline-none`}
            {...rest}
        />
    );
}

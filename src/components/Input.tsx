import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...rest }: Props) {
    return (
        <input
            className={`${className} text-gray-800 border rounded focus:border-primary w-full h-10 px-2 outline-none`}
            {...rest}
        />
    );
}

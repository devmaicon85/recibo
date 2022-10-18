import { LabelHTMLAttributes, ReactNode } from "react";

interface Props extends LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode;
}
export function Label({ className, children, ...rest }: Props) {
    return (
        <label
            {...rest}
            className={`${className} mr-4 font-bold text-sm truncate min-w-[120px] items-center flex`}
        >
            {children}
        </label>
    );
}

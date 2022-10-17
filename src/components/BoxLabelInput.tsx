import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}
export function BoxLabelInput({ children }: Props) {
    return (
        <div className="flex-col sm:flex-row text-primary print:flex-row flex">
            {children}
        </div>
    );
}

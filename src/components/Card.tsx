import type { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
    className?: string;
    key?: number | string;
}

const Card = ({ children, className, key }: CardProps) => {
   return <div className={`card ${className ?? ""}`} key={key}>{children}</div>;
};

export default Card;
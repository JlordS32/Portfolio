type ButtonProps = {
   children?: React.ReactNode;
   text?: string;
   onClick?: () => void;
   className?: string;
};

const Button = ({
   children,
   text = "Button",
   onClick = () => {},
   className = "btn",
}: ButtonProps) => {
   return (
      <button className={className} onClick={onClick}>
         {children || text}
      </button>
   );
};

export default Button;

type ButtonProps = {
   text?: string;
   onClick?: () => void;
   className?: string;
};

const Button = ({
   text = "Button",
   onClick = () => {},
   className = "btn",
}: ButtonProps) => {
   return (
      <button className={className} onClick={onClick}>
         {text}
      </button>
   );
};

export default Button;

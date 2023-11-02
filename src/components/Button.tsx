import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: any;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button className={`flex items-center justify-center gap-3 rounded-full border ${variant} ${full && "w-full"}`} type={type}>
      {icon && <Image src={icon} alt={title} />}
      <label className="bold-16 cursor-pointer whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;

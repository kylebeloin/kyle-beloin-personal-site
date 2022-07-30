import { ButtonProps } from "../../common/types";
import icons from "../../common/icons";

export default function Button({
  callback,
  onClick,
  icon,
  className,
  style,
  disabled,
  children,
}: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    }
    if (callback) {
      callback();
    }
  };
  return (
    <button
      onClick={handleClick}
      className={className}
      style={style}
      disabled={disabled}
    >
      {/* Close X */}
      {icon && icons(icon)}
      {/* Menu */}
      {children}
    </button>
  );
}

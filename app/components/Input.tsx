import React from "react";
import classnames from "classnames";
interface InputProps {
  name: string;
  id?: string;
  inverted?: boolean;
  error?: boolean;
  success?: boolean;
  type?: "text" | "email" | "password";
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
const Input = ({
  id,
  name,
  inverted,
  error,
  success,
  type = "text",
  placeholder,
  value,
  onChange,
  className,
}: InputProps) => {
  if (!id) id = name + "id";
  const classes = classnames(
    "form-input",
    {
      inverted: inverted,
      error: error,
      success: success,
    },
    className
  );
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classes}
    />
  );
};

export default Input;

import { sizeType } from "../../../size";
import { Box, Label } from "./Layout";
import { forwardRef, useState } from "react";

interface IProp extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "size"> {
  label?: string;
  password?: boolean;
  size: sizeType;
  error?: string;
}

export const Text = forwardRef<HTMLInputElement, IProp>(({ label, error, size, password, ...rest }, ref) => {
  const [show, setShow] = useState(false);

  return (
    <Label size={size} label={label} required={rest.required}>
      <Box
        error={error}
        size={size}
        disabled={rest.disabled}
        readonly={rest.readOnly}
        icon={
          password && {
            name: show ? "Show" : "Hide",
            action: () => setShow((prev) => !prev)
          }
        }
      >
        <input
          ref={ref}
          {...rest}
          className="w-full text-body5 disabled:text-gray-300 disabled:cursor-not-allowed read-only:text-gray-300 read-only:cursor-not-allowed"
          type={password && !show ? "password" : "text"}
          onSubmit={(e) => e.preventDefault()}
        />
      </Box>
    </Label>
  );
});

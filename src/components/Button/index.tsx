import { ButtonProps } from "@mui/material";
import React, { FC } from "react";

export const Button: FC<ButtonProps> = (props) => (
  <button {...props}>{props?.children}</button>
);

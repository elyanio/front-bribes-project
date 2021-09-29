import React from "react";
import { Form, FormControlProps, FormLabel } from "react-bootstrap";

interface Props {
  fieldName?: string;
  htmlFor?: string;
  controlProps?: FormControlProps;
  type?: string;
  id?: string;
  errorElement?: JSX.Element;
  as?: string;
  disabled?: boolean;
}

const PrimaryInput = ({
  errorElement,
  type = "text",
  id = "",
  htmlFor = "",
  fieldName = "",
  controlProps,
  as,
  disabled = false,
}: Props & FormControlProps) => (
  <div className="form-group">
    {fieldName && <FormLabel htmlFor={htmlFor}>{fieldName}</FormLabel>}
    <Form.Control
      disabled={disabled}
      as={as}
      type={type}
      id={id}
      {...controlProps}
    />
    {errorElement && errorElement}
  </div>
);

export default PrimaryInput;

import React, { PropsWithChildren } from "react";
import { Button, ButtonProps } from "react-bootstrap";
import LoadingWrapper from "../LoadingWrapper";

export type PrimaryButtonVariants =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "light"
  | "link";

interface Props {
  loading?: boolean;
  disabled?: boolean;
  variant?: PrimaryButtonVariants;
}

const PrimaryButton = ({
  children,
  loading = false,
  variant = "primary",
  disabled,
  ...otherProps
}: Props & ButtonProps & PropsWithChildren<{}>) => (
  <>
    <Button {...otherProps} variant={variant} disabled={loading || disabled}>
      {children}
      <LoadingWrapper loading={loading}></LoadingWrapper>
    </Button>
  </>
);

export default PrimaryButton;

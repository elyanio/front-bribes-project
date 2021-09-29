import React, { PropsWithChildren } from "react";
import Spinner from "react-bootstrap/Spinner";

const LoadingWrapper = ({
  loading,
  children,
}: PropsWithChildren<{ loading?: boolean }>) => {
  if (loading)
    return (
      <Spinner
        className="ml-2"
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
    );
  return <>{children}</>;
};

export default LoadingWrapper;

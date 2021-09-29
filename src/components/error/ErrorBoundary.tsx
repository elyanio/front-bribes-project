// import ErrorBoundaryComponent from "@vlsergey/react-bootstrap-error-boundary";
import React, { PropsWithChildren, useCallback } from "react";
import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { QueryErrorResetBoundary } from "react-query";
import { useHistory } from "react-router-dom";
import { queryClient } from "../../modules/cache/queryCLient";
import RoutesName from "../../utils/routes";
import RedirectError from "./RedirectError";

const ErrorBoundary: React.FC = ({ children }: PropsWithChildren<{}>) => {
  const { push } = useHistory();

  const backToLogin = useCallback(() => {
    queryClient.clear();
    push(RoutesName["/"]);
  }, [push]);

  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ReactErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <RedirectError
              backToLogin={backToLogin}
              tryAgain={resetErrorBoundary}
            />
          )}
        >
          {children}
        </ReactErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ErrorBoundary;

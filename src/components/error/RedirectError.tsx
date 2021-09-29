import React from "react";
import { String } from "../../utils/string";
import PrimaryButton from "../buttons/PrimaryButton";

interface Props {
  tryAgain?: () => void;
  backToLogin?: () => void;
}
const RedirectError = ({ backToLogin, tryAgain }: Props) => {
  return (
    <div
      id="error-id"
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 style={{ paddingTop: 50 }}>{String.UNKNOWN_ERROR}</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: 70,
          width: "50%",
        }}
      >
        <PrimaryButton onClick={tryAgain}>{String.TRY_AGAIN}</PrimaryButton>
        <PrimaryButton onClick={backToLogin}>
          {String.BACK_MAIN_PAGE}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default RedirectError;

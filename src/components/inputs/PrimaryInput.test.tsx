import { render, screen } from "@testing-library/react";
import { String } from "../../utils/string";
import PrimaryInput from "./PrimaryInput";

describe("Input", () => {
  test("show correct text", () => {
    render(<PrimaryInput fieldName={String.GENERATE_INITIAL_LIST} />);
    const linkElement = screen.getByText(/Generate initial list/i);
    expect(linkElement).toBeInTheDocument();
  });
});

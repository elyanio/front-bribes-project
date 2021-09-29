import { render, screen, fireEvent } from "@testing-library/react";
import { String } from "../../utils/string";
import PrimaryButton from "./PrimaryButton";

describe("Button", () => {
  test("show correct text", () => {
    render(<PrimaryButton>{String.GENERATE_INITIAL_LIST}</PrimaryButton>);
    const linkElement = screen.getByText(/Generate initial list/i);
    expect(linkElement).toBeInTheDocument();
  });
  test("get correct class", () => {
    const { container } = render(
      <PrimaryButton variant="primary">{String.GENERATE_INITIAL_LIST}</PrimaryButton>
    );
    expect(container.firstChild).toHaveClass("btn-primary");
  });
  test("click event", () => {
    const mockCallBack = jest.fn();

    const { container } = render(
      <PrimaryButton onClick={mockCallBack} variant="primary">
        {String.GENERATE_INITIAL_LIST}
      </PrimaryButton>
    );
    const button = container.firstChild;
    fireEvent.click(button as Element);
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});

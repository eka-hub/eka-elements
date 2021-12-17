import React from "react";
import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Toggle from "./Toggle";

describe("Toggle test", () => {
  test("Should have a className", () => {
    const { container } = render(<Toggle className="classname" />);
    const toggle = container.querySelector(".classname");
    expect(toggle).toBeInTheDocument();
  });

  test("Should be active", () => {
    const { container } = render(<Toggle active />);
    const toggle = container.querySelector("input:checked");
    expect(toggle).toBeInTheDocument();
  });

  test("Should be disabled", () => {
    const { container } = render(<Toggle disabled />);
    const toggle = container.querySelector("input[disabled]");
    expect(toggle).toBeInTheDocument();
  });

  test("Should change state and return onChange callback", () => {
    const isOnChange = jest.fn();
    const { container, getByTestId } = render(<Toggle data-testid="button" onChange={isOnChange} />);
    const toggle = container.querySelector("input");
    expect(toggle.checked).toBe(false);
    act(() => {
      userEvent.click(getByTestId("button"));
    });
    expect(toggle.checked).toBe(true);
    expect(isOnChange).toBeCalled();
  });
});

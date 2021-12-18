import React from "react";
import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Radio from "./Radio";

describe("Radio test", () => {
  test("Should have a className", () => {
    const { container } = render(<Radio className="classname" />);
    const radio = container.querySelector(".classname");
    expect(radio).toBeInTheDocument();
  });

  test("Should be active", () => {
    const { container } = render(<Radio active />);
    const radio = container.querySelector("input:checked");
    expect(radio).toBeInTheDocument();
  });

  test("Should be disabled", () => {
    const { container } = render(<Radio disabled />);
    const radio = container.querySelector("input[disabled]");
    expect(radio).toBeInTheDocument();
  });

  test("Should change state and return onChange callback", () => {
    const isOnChange = jest.fn();
    const { container, getByTestId } = render(<Radio data-testid="radio" onChange={isOnChange} />);
    const toggle = container.querySelector("input");
    expect(toggle.checked).toBe(false);
    act(() => {
      userEvent.click(getByTestId("radio"));
    });
    expect(toggle.checked).toBe(true);
    expect(isOnChange).toBeCalled();
  });
});

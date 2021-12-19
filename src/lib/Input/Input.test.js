import React from "react";
import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

const content = "text";

describe("Input test", () => {
  test("Should have an icon", () => {
    const { container } = render(<Input icon="alarm" />);
    const icon = container.querySelector('[data-src="alarm.svg"]');
    expect(icon).toBeInTheDocument();
  });

  test("Should have an title", () => {
    const { container } = render(<Input title={content} />);
    const title = container.querySelector(".title");
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe(content);
  });

  test("Should be disabled and warning", () => {
    const { container } = render(<Input disabled warning />);
    const disabled = container.querySelector("input[disabled]");
    const warning = container.querySelector("label.warning");
    expect(disabled).toBeInTheDocument();
    expect(warning).toBeInTheDocument();
  });

  test("Should change", () => {
    const onChange = jest.fn();
    const { getByTestId } = render(<Input data-testid="input" onChange={onChange} />);
    expect(onChange).not.toHaveBeenCalled();
    act(() => {
      userEvent.type(getByTestId("input"), content);
    });
    expect(onChange).toHaveBeenCalled();
  });
});

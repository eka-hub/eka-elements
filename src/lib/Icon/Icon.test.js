import React from "react";
import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Icon from "./Icon";

describe("Icon test", () => {
  test("Has className", () => {
    const className = "some-class";
    const { container } = render(<Icon icon="alarm" className={className} />);
    expect(container.querySelector(`.${className}`)).toBeInTheDocument();
  });

  test("Should not be in the document", () => {
    const { container } = render(<Icon />);
    const icon = container.querySelector('[data-src="alarm.svg"]');
    expect(icon).not.toBeInTheDocument();
  });

  test("Icon should exists in _icons folder", () => {
    const { container } = render(<Icon icon="not-such-icon" />);
    const icon = container.querySelector('[data-src="not-such-icon.svg"]');
    expect(icon).not.toBeInTheDocument();
  });

  test("Icon is added", () => {
    const { container } = render(<Icon icon="alarm" />);
    const icon = container.querySelector('[data-src="alarm.svg"]');
    expect(icon).toBeInTheDocument();
  });

  test("Should spins", () => {
    const { container } = render(<Icon icon="alarm" spin />);
    const icon = container.querySelector(".spin");
    expect(container).toContainElement(icon);
  });

  test("Can be clickable", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(<Icon icon="alarm" data-testid="icon" onClick={onClick} />);

    expect(onClick).not.toHaveBeenCalled();
    act(() => {
      userEvent.click(getByTestId("icon"));
    });
    expect(onClick).toHaveBeenCalled();
  });
});

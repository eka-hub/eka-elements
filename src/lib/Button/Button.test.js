import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

const content = "text";

describe("Button test", () => {
  test("Should have an icon", () => {
    const { container } = render(<Button icon="alarm" />);
    const icon = container.querySelector('[data-src="alarm.svg"]');
    expect(icon).toBeInTheDocument();
  });

  test("Icon should be at LEFT from the text", () => {
    const { container } = render(<Button icon="alarm">{content}</Button>);
    const icon = container.querySelector('[data-src="alarm.svg"]');
    expect(container.firstChild.childNodes[0]).toContainElement(icon);
    expect(container.firstChild.childNodes[1].textContent).toContain(content);
  });

  test("Icon should be at RIGHT from the text", () => {
    const { container } = render(
      <Button icon="alarm" iconRight>
        {content}
      </Button>
    );
    const icon = container.querySelector('[data-src="alarm.svg"]');
    expect(container.firstChild.childNodes[0].textContent).toContain(content);
    expect(container.firstChild.childNodes[1]).toContainElement(icon);
  });

  test("Should clicks", () => {
    const onClick = jest.fn();
    const { getByTestId } = render(
      <Button data-testid="button" onClick={onClick}>
        {content}
      </Button>
    );

    expect(onClick).not.toHaveBeenCalled();
    userEvent.click(getByTestId("button"));
    expect(onClick).toHaveBeenCalled();
  });
});

import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button test", () => {
  test("Icon is added", () => {
    const result = render(<Button icon="alarm" />);
    const icon = result.container.querySelector('[data-src="alarm.svg"]');
    expect(icon).not.toBeNull();
  });
});

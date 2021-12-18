import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Avatar from "./Avatar";

describe("Avatar test", () => {
  test("Has className", () => {
    const className = "some-class";
    const { container } = render(<Avatar src="http" className={className} />);
    expect(container.querySelector(`.${className}`)).toBeInTheDocument();
  });

  test("Should not be printed if there is no src", () => {
    const { container } = render(<Avatar />);
    expect(container.querySelector(`.avatar`)).not.toBeInTheDocument();
  });

  test("Should have the size", () => {
    const size = 123;
    const { container } = render(<Avatar src="http" size={size} />);
    expect(container.querySelector(`.avatar`)).toHaveStyle(`width: ${size}px`);
    expect(container.querySelector(`.avatar`)).toHaveStyle(`height: ${size}px`);
  });
});

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Block from "./Block";

describe("Block test", () => {
  test("Has content", () => {
    const content = "This is text";
    const { container } = render(<Block>{content}</Block>);
    expect(container.textContent).toContain(content);
  });

  test("Has className", () => {
    const className = "some-class";
    const { container } = render(<Block className={className}></Block>);
    expect(container.querySelector(`.${className}`)).toBeInTheDocument();
  });
});

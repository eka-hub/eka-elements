import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dot from "./Dot";

describe("Dot test", () => {
  test("Has className", () => {
    const className = "some-class";
    const { container } = render(<Dot className={className} />);
    expect(container.querySelector(`.${className}`)).toBeInTheDocument();
  });
  
  test("Should have an active state", () => {
    const { container } = render(<Dot state="active" />);
    expect(container.querySelector(`.active`)).toBeInTheDocument();
  });
});

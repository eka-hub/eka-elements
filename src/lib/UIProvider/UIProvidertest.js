import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dot from "./UIProvider";

describe("Dot test", () => {
  test("Has className", () => {
    const className = "some-class";
    const { container } = render(<Dot className={className}></Dot>);
    expect(container.querySelector(`.${className}`)).toBeInTheDocument();
  });
});

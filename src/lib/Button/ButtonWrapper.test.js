import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import ButtonWrapper from "./ButtonWrapper";

const content = "text";

describe("Button Wrapper test", () => {
  test("Should be a link", () => {
    const link = "/link";
    const { container } = render(
      <MemoryRouter>
        <ButtonWrapper to={link}>{content}</ButtonWrapper>
      </MemoryRouter>
    );
    const button = container.querySelector("a");
    expect(button).toBeInTheDocument();
    expect(button.getAttribute("href")).toBe(link);
    expect(button.textContent).toBe(content);
  });

  test("Should have a target=_blank", () => {
    const link = "/link";
    const { container } = render(
      <MemoryRouter>
        <ButtonWrapper to={link} newTab>{content}</ButtonWrapper>
      </MemoryRouter>
    );
    const button = container.querySelector("a");
    expect(button).toBeInTheDocument();
    expect(button.getAttribute("target")).toBe("_blank");
  });

  test("Should be a button", () => {
    const { container } = render(<ButtonWrapper>{content}</ButtonWrapper>);
    const button = container.querySelector("button");
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe(content);
  });
});

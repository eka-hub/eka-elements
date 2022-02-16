import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MenuItem from "./MenuItem";

import { MemoryRouter } from "react-router-dom";

const content = "text";

describe("MenuItem test", () => {
  test("Should have an icon", () => {
    const { container } = render(
      <MemoryRouter>
        <MenuItem icon="calendar">{content}</MenuItem>
      </MemoryRouter>
    );
    const icon = container.querySelector('[data-src="calendar.svg"]');
    expect(icon).toBeInTheDocument();
  });

  test("Should have an indicator", () => {
    const { container } = render(
      <MemoryRouter>
        <MenuItem icon="calendar" indicate>
          {content}
        </MenuItem>
      </MemoryRouter>
    );
    const indicator = container.querySelector(".indicator");
    expect(indicator).toBeInTheDocument();
  });

  test("Should be a link", () => {
    const { container } = render(
      <MemoryRouter>
        <MenuItem icon="calendar" to="/calendar">
          {content}
        </MenuItem>
      </MemoryRouter>
    );
    const item = container.querySelector("a.menu-item");
    expect(item).toBeInTheDocument();
    expect(item.getAttribute("href")).toBe("/calendar");
  });

  test("Should throw an error due to isRequired props", () => {
    const console_error = jest.spyOn(console, "error").mockImplementation(() => {});
    render(
      <MemoryRouter>
        <MenuItem to="/calendar" active />
      </MemoryRouter>
    );
    expect(console_error).toBeCalled();
  });

  test("Should be an active", () => {
    const { container } = render(
      <MemoryRouter>
        <MenuItem to="/calendar" icon="calendar" active>
          {content}
        </MenuItem>
      </MemoryRouter>
    );
    const item = container.querySelector("a.menu-item");
    expect(item).toHaveClass("menu-item active");
  });

  test("Should be a subactive", () => {
    const { container } = render(
      <MemoryRouter>
        <MenuItem to="/calendar" icon="calendar" subactive>
          {content}
        </MenuItem>
      </MemoryRouter>
    );
    const item = container.querySelector("a.menu-item");
    expect(item).toHaveClass("menu-item sub-active");
  });

  test.todo("Should change location");
});

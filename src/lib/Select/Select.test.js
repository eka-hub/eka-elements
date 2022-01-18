import React from "react";
import { act, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Select from "./Select";

const content = "text";

describe("Select test", () => {
  test("Should have an title", () => {
    const { container } = render(<Select title={content} />);
    const title = container.querySelector(".title");
    expect(title).toBeInTheDocument();
    expect(title.textContent).toBe(content);
  });

  test("Should be disabled and warning", () => {
    const { container } = render(<Select disabled warning />);
    const disabled = container.querySelector("select[disabled]");
    const warning = container.querySelector("label.warning");
    expect(disabled).toBeInTheDocument();
    expect(warning).toBeInTheDocument();
  });

  test("Should change", () => {
    const onChange = jest.fn();
    const { getByTestId, getByRole } = render(
      <Select data-testid="select" onChange={onChange}>
        <option value="1">1</option>
        <option value="2">2</option>
      </Select>
    );
    expect(onChange).not.toHaveBeenCalled();
    act(() => {
      userEvent.selectOptions(getByTestId("select"), ["2"]);
    });

    expect(getByRole("option", { name: "1" }).selected).toBe(false);
    expect(getByRole("option", { name: "2" }).selected).toBe(true);
    expect(onChange).toHaveBeenCalled();
  });

  test("Should select multiple", () => {
    const onChange = jest.fn();
    const { getByTestId, getByRole } = render(
      <Select data-testid="select" multiple onChange={onChange}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </Select>
    );
    expect(onChange).not.toHaveBeenCalled();
    act(() => {
      userEvent.selectOptions(getByTestId("select"), ["2", "4"]);
    });

    expect(getByRole("option", { name: "1" }).selected).toBe(false);
    expect(getByRole("option", { name: "2" }).selected).toBe(true);
    expect(getByRole("option", { name: "3" }).selected).toBe(false);
    expect(getByRole("option", { name: "4" }).selected).toBe(true);
    expect(onChange).toHaveBeenCalled();
  });

  test("Should have a hint", () => {
    const { container } = render(<Select data-testid="input" hint={content} />);
    expect(container.querySelector(".hint").textContent).toContain(content);
  });
});

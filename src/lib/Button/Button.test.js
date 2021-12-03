import React from 'react';
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import Button from "./Button";

describe("Button test", () => {
  test("Icon is added", () => {
    const result = render(<Button icon="alarm" />);
    const icon = result.container.querySelector('[data-src="alarm.svg"]');
    expect(icon).not.toBeNull();
  });

  test('Should clicks', () => {
        const onClick = jest.fn();
        const { getByTestId } = render(<Button data-testid="button" onClick={onClick}>test</Button>);

        expect(onClick).not.toHaveBeenCalled();
        userEvent.click(getByTestId('button'));
        expect(onClick).toHaveBeenCalled();
    })
});

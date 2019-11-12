// Test away
import React from "react";
import Dashboard from "./Dashboard";
import { render } from "@testing-library/react"

test("renders correctly", () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
})

test('check if it shows the default controls and display', () => {
        const { getByText } = render(<Dashboard />);
        getByText(/open/i);
        getByText(/unlocked/i);

        getByText(/lock gate/i);
        getByText(/close gate/i)
});






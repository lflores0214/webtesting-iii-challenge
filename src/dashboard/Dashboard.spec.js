// Test away
import React from "react";
import Dashboard from "./Dashboard";
import { render } from "@testing-library/react"

test("renders correctly", () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
})


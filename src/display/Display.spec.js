// Test away!
import React from "react"
import Display from "./Display";
import { render, cleanup } from "@testing-library/react"
import '@testing-Library/jest-dom/extend-expect'



afterEach(cleanup);

test("renders correctly", () => {
    expect(render(<Display />)).toMatchSnapshot();
})
test('opened and unlocked', () => {
    const { getByText, queryByText } = render(<Display closed={false} locked={false} />);

    const unlocked = getByText(/unlocked/i);
    const open = getByText(/open/i);

    expect(unlocked).toHaveClass('green-led')
    expect(open).toHaveClass('green-led')

});

test('closed and unlocked', () => {
    const { getByText } = render(<Display closed={true} locked={false} />);

    const unlocked = getByText(/unlocked/i);
    const closed = getByText(/closed/i);

    expect(unlocked).toHaveClass('green-led')
    expect(closed).toHaveClass('red-led');

});

test('closed and locked', () => {
    const { getByText } = render(<Display closed={true} locked={true} />);

    const locked = getByText(/locked/i);
    const closed = getByText(/closed/i);

    expect(locked).toHaveClass('red-led')
    expect(closed).toHaveClass('red-led')
})
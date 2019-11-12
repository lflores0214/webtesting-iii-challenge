// Test away!
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";
import { render, fireEvent, cleanup } from "@testing-library/react";

test("renders correctly", () => {
  expect(render(<Controls />)).toMatchSnapshot();
});

test("open and unlocked", () => {
  const toggleClosed = jest.fn();
  const togglelocked = jest.fn();
  const { getByText } = render(
    <Controls
      closed={false}
      locked={false}
      toggleClosed={toggleClosed}
      togglelocked={togglelocked}
    />
  );
  const closeBtn = getByText(/close gate/i);
  const lockBtn = getByText(/lock gate/i);

  // checks if disabled properties
  expect(closeBtn.disabled).toBeFalsy();
  expect(lockBtn.disabled).toBeTruthy();
  fireEvent.click(closeBtn);
  expect(toggleClosed).toBeCalled();
});

test("closed and unlocked", () => {
  const toggleClosed = jest.fn();
  const toggleLocked = jest.fn();

  const { getByText } = render(
    <Controls
      closed={true}
      locked={false}
      toggleClosed={toggleClosed}
      toggleLocked={toggleLocked}
    />
  );
  const openBtn = getByText(/open gate/i);
  const lockBtn = getByText(/lock gate/i);

  expect(openBtn.disabled).toBeFalsy();
  expect(lockBtn.disabled).toBeFalsy();
  fireEvent.click(openBtn);
  expect(toggleClosed).toBeCalled();
});

test("closed and locked ", () => {
  const toggleClosed = jest.fn();
  const toggleLocked = jest.fn();

  const { getByText } = render(
    <Controls
      closed={true}
      locked={true}
      toggleClosed={toggleClosed}
      toggleLocked={toggleLocked}
    />
  );
  const openBtn = getByText(/open Gate/i);
  const lockBtn = getByText(/Unlock gate/i);

  expect(openBtn.disabled).toBeTruthy();
  expect(lockBtn.disabled).toBeFalsy();
  fireEvent.click(openBtn);
  expect(toggleClosed).not.toBeCalled();
});

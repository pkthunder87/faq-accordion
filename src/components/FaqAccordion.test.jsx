import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { expect } from "vitest";
import { within } from "@testing-library/dom";

test("accordion displays and hides item header and body content correctly", async () => {
  const user = userEvent.setup();
  render(<App />);

  // Test all accordion headers are displayed
  const itemHeading1 = screen.getByRole("button", {
    name: /What is Frontend Mentor, and how will it help me?/i,
  });

  const itemHeading2 = screen.getByRole("button", {
    name: /Is Frontend Mentor free?/i,
  });

  const itemHeading3 = screen.getByRole("button", {
    name: /Can I use Frontend Mentor projects in my portfolio?/i,
  });

  const itemHeading4 = screen.getByRole("button", {
    name: /How can I get help if I'm stuck on a challenge?/i,
  });

  // displays the 1st accordion item by default
  // USE getByTestId with toHaveClass()
  const itemBody1 = screen
    .getByText(
      /Frontend Mentor offers realistic coding challenges to help developers improve their frontend/i
    )
    .closest("div");

  expect(itemBody1).toHaveClass("show");

  // hides the other accordion items by default
});

test("displays the correct icon for a collapsed and non-collapsed item header", async () => {});

test("displays the correct mouse pointer and highlights on hover", async () => {});

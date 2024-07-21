import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { expect } from "vitest";
import FaqAccordion from "./FaqAccordion";

test("accordion displays and hides item header and body content correctly", async () => {
  const user = userEvent.setup();
  const { container } = render(<FaqAccordion />);

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
  const itemBody1 = screen.getByText(
    /Frontend Mentor offers realistic coding challenges to help developers improve their frontend/i
  ).parentElement;

  expect(itemBody1).toHaveClass("collapse", "show");

  // hides the other accordion items by default
  const itemBody2 = screen.getByText(
    /Yes, Frontend Mentor offers both free and premium coding challenges, /i
  ).parentElement;

  expect(itemBody2).not.toHaveClass("show");

  const itemBody3 = screen.getByText(
    /Yes, you can use projects completed on Frontend Mentor in your portfolio./i
  ).parentElement;

  expect(itemBody3).not.toHaveClass("show");

  const itemBody4 = screen.getByText(
    /The best place to get help is inside Frontend Mentor's Discord community./i
  ).parentElement;

  expect(itemBody4).not.toHaveClass("show");
});

test("displays the correct icon for a collapsed and non-collapsed item header", async () => {
  const user = userEvent.setup();
  render(<FaqAccordion />);
});

test("displays the correct mouse pointer and highlights on hover", async () => {});

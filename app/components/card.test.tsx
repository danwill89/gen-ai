import React from "react";
import { render, getByText } from "@testing-library/react";
import Card from "./card";

describe("Card component", () => {
  it("renders correctly with given name and age", () => {
    const { container } = render(<Card name="John Doe" age={30} />);
    expect(getByText(container, "John Doe")).toBeInTheDocument();
    expect(getByText(container, "30")).toBeInTheDocument();
  });

  it("renders correctly with different name and age", () => {
    const { container } = render(<Card name="Jane Doe" age={28} />);
    expect(getByText(container, "Jane Doe")).toBeInTheDocument();
    expect(getByText(container, "28")).toBeInTheDocument();
  });

  it("renders correctly with another different name and age", () => {
    const { container } = render(<Card name="Alice Smith" age={35} />);
    expect(getByText(container, "Alice Smith")).toBeInTheDocument();
    expect(getByText(container, "35")).toBeInTheDocument();
  });

  it("renders correctly with yet another different name and age", () => {
    const { container } = render(<Card name="Bob Johnson" age={40} />);
    expect(getByText(container, "Bob Johnson")).toBeInTheDocument();
    expect(getByText(container, "40")).toBeInTheDocument();
  });
});

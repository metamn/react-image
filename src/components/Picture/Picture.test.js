import React from "react";
import { render } from "@testing-library/react";
import Picture from "./Picture";

it("has a Picture component", () => {
  const { getByText } = render(<Picture />);
  expect(getByText("Picture")).toBeInTheDocument();
});

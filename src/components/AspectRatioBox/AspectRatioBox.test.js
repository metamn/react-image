import React from "react";
import { render } from "@testing-library/react";
import AspectRatioBox from "./AspectRatioBox";

it("has a AspectRatioBox component", () => {
  const { getByText } = render(<AspectRatioBox />);
  expect(getByText("AspectRatioBox")).toBeInTheDocument();
});

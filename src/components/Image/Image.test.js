import React from "react";
import { render } from "@testing-library/react";
import Image from "./Image";

it("has a Image component", () => {
  const { getByText } = render(<Image />);
  expect(getByText("Image")).toBeInTheDocument();
});

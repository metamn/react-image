import React from "react";
import { render } from "@testing-library/react";
import AspectRatioBox from "./AspectRatioBox";

it("renders nothing when the `children` prop is missing", () => {
  const { queryByRole } = render(<AspectRatioBox />);
  expect(queryByRole("img")).toBeNull();
});

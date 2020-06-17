import React from "react";
import { render } from "@testing-library/react";
import AspectRatioBox, {
  isAspectRatioDefined,
  calculateAspectRatio
} from "./AspectRatioBox";

it("exports a `calculateAspectRatio` function", () => {
  const result = calculateAspectRatio({});
});

it("exports an `isAspectRatioDefined` function", () => {
  const result = isAspectRatioDefined({});
});

it("renders nothing when the the aspect ratio cannot be set", () => {
  const { queryByRole } = render(<AspectRatioBox children="children" />);
  expect(queryByRole("img")).toBeNull();
});

it("renders nothing when the `children` prop is missing", () => {
  const { queryByRole } = render(<AspectRatioBox />);
  expect(queryByRole("img")).toBeNull();
});

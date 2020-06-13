import React from "react";
import { render } from "@testing-library/react";
import Image from "./Image";

it("renders nothing when the URL is null", () => {
  const { queryByText } = render(<Image url={null} />);
  expect(queryByText("Image")).toBeNull();
});

it("renders nothing when the URL is empty", () => {
  const { queryByText } = render(<Image url="" />);
  expect(queryByText("Image")).toBeNull();
});

it("renders nothing when the URL is not an URL", () => {
  const { queryByRole } = render(<Image url="not an url" />);
  expect(queryByRole("img")).toBeNull();
});

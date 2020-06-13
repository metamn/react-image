import React from "react";
import { render } from "@testing-library/react";
import Image from "./Image";

it("renders well an image from the filesystem", () => {
  const { queryByRole } = render(<Image path="logo192.png" />);
  expect(queryByRole("img")).toBeInTheDocument();
});

it("renders well an image from Placeholder.com", () => {
  const { queryByRole } = render(
    <Image url="https://via.placeholder.com/728x90.png" />
  );
  expect(queryByRole("img")).toBeInTheDocument();
});

it("renders nothing when the URL is null", () => {
  const { queryByRole } = render(<Image url={null} />);
  expect(queryByRole("img")).toBeNull();
});

it("renders nothing when the URL is empty", () => {
  const { queryByRole } = render(<Image url="" />);
  expect(queryByRole("img")).toBeNull();
});

it("renders nothing when the URL is not an URL", () => {
  const { queryByRole } = render(<Image url="not an url" />);
  expect(queryByRole("img")).toBeNull();
});

it("renders nothing when the path is null", () => {
  const { queryByRole } = render(<Image path={null} />);
  expect(queryByRole("img")).toBeNull();
});

it("renders nothing when the path is empty", () => {
  const { queryByRole } = render(<Image path="" />);
  expect(queryByRole("img")).toBeNull();
});

it("renders nothing when the path is not a filename", () => {
  const { queryByRole } = render(<Image path="@#not-a-filename.js" />);
  expect(queryByRole("img")).toBeNull();
});

it("renders nothing when both the path and the URL is missing", () => {
  const { queryByRole } = render(<Image />);
  expect(queryByRole("img")).toBeNull();
});

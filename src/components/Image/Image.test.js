import React from "react";
import { render, shallow } from "@testing-library/react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Image from "./Image";

Enzyme.configure({ adapter: new Adapter() });

it("displays the caption", () => {
  const { queryByAltText } = render(
    <Image path="logo192.png" caption="Image caption" />
  );
  expect(queryByAltText("Image caption")).toBeInTheDocument();
});

it("displays a default caption if the caption is missing", () => {
  const { queryByAltText } = render(<Image path="logo192.png" />);
  expect(queryByAltText("Image")).toBeInTheDocument();
});

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

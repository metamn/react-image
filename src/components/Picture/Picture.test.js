import React from "react";
import { render } from "@testing-library/react";
import Picture from "./Picture";

it("renders nothing when ...", () => {
  const { queryByRole } = render(<Picture />);
  //expect(queryByRole("img")).toBeNull();
});

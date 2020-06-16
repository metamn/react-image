import React from "react";
import AspectRatioBox from "./AspectRatioBox";
import ApiDoc from "./AspectRatioBox.md";

export default {
  component: AspectRatioBox,
  title: "AspectRatioBox",
  parameters: { notes: ApiDoc }
};

export const Default = () => <AspectRatioBox />;

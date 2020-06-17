import React from "react";
import AspectRatioBox from "./AspectRatioBox";
import ApiDoc from "./AspectRatioBox.md";

export default {
  component: AspectRatioBox,
  title: "AspectRatioBox",
  parameters: { notes: ApiDoc }
};

export const Default = () => <AspectRatioBox />;
export const WithChildren = () => <AspectRatioBox children="Children" />;
export const WithAspectRatio = () => <AspectRatioBox aspectRatio={9 / 16} />;

export const WithChildrenAndAspectRatio = () => (
  <AspectRatioBox children="Children" aspectRatio={9 / 16} />
);

export const WithBackgroundColor = () => (
  <AspectRatioBox
    children="Children"
    aspectRatio={9 / 16}
    backgroundColor="red"
  />
);

export const WithWidth = () => (
  <AspectRatioBox
    children="Children"
    aspectRatio={9 / 16}
    backgroundColor="red"
    width={300}
  />
);

export const WithChildrenStyled = () => (
  <AspectRatioBox
    children="Children"
    aspectRatio={9 / 16}
    backgroundColor="red"
    width={300}
    childrenStyle={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}
  />
);

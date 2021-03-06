import React from "react";
import ImageResponsive from "./ImageResponsive";
import ApiDoc from "./ImageResponsive.md";

export default {
  component: ImageResponsive,
  title: "ImageResponsive",
  parameters: { notes: ApiDoc }
};

export const Default = () => <ImageResponsive />;

export const WithDefinedAspectRatio = () => (
  <ImageResponsive
    url="https://via.placeholder.com/480x270.png?text=480x270"
    aspectRatio={270 / 480}
    srcSet="https://via.placeholder.com/320x180.png?text=320x180 320w, https://via.placeholder.com/640x360.png?text=640x360 640w, https://via.placeholder.com/1280x720.png?text=1280x720 1280w"
    sizes="(max-width: 639px) 320px, (max-width: 1279px) 640px, 1280px"
    boxStyle={{ backgroundColor: "red" }}
  />
);

export const WithWidthAndHeight = () => (
  <ImageResponsive
    url="https://via.placeholder.com/480x270.png?text=480x270"
    width={480}
    height={270}
    srcSet="https://via.placeholder.com/320x180.png?text=320x180 320w, https://via.placeholder.com/640x360.png?text=640x360 640w, https://via.placeholder.com/1280x720.png?text=1280x720 1280w"
    sizes="(max-width: 639px) 320px, (max-width: 1279px) 640px, 1280px"
    boxStyle={{
      backgroundColor: "red"
    }}
  />
);

export const AspectRatioBoxIsSized = () => (
  <ImageResponsive
    url="https://via.placeholder.com/480x270.png?text=480x270"
    aspectRatio={270 / 480}
    srcSet="https://via.placeholder.com/320x180.png?text=320x180 320w, https://via.placeholder.com/640x360.png?text=640x360 640w, https://via.placeholder.com/1280x720.png?text=1280x720 1280w"
    sizes="(max-width: 639px) 320px, (max-width: 1279px) 640px, 1280px"
    boxStyle={{
      backgroundColor: "red",
      padding: 1,
      width: 320,
      ["@media (min-width: 640px)"]: {
        width: 640
      },
      ["@media (min-width: 1280px)"]: {
        width: 1280
      }
    }}
  />
);

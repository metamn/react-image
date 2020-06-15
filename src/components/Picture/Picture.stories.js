import React from "react";
import Picture from "./Picture";
import ApiDoc from "./Picture.md";

export default {
  component: Picture,
  title: "Picture",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Picture />;

export const DifferentImagesOnPortraitAndLandscape = () => (
  <Picture
    sources={[
      {
        media: "(min-width: 1600px)",
        srcSet:
          "http://metamn.io/beat/assets/images/bohen-landscape_desktop.png, http://metamn.io/beat/assets/images/bohen-landscape_desktop2x.png 2x"
      },
      {
        media: "(min-width: 1024px)",
        srcSet:
          "http://metamn.io/beat/assets/images/bohen-landscape_laptop.png, http://metamn.io/beat/assets/images/bohen-landscape_laptop2x.png 2x"
      },
      {
        media: "(min-width: 600px)",
        srcSet:
          "http://metamn.io/beat/assets/images/bohen-portrait_tablet.png, http://metamn.io/beat/assets/images/bohen-portrait_tablet2x.png 2x"
      },
      {
        media: "(max-width: 599px)",
        srcSet:
          "http://metamn.io/beat/assets/images/bohen-portrait_mobile.png, http://metamn.io/beat/assets/images/bohen-portrait_mobile2x.png 2x"
      }
    ]}
    url="http://metamn.io/beat/assets/images/bohen-landscape_laptop.png"
  />
);

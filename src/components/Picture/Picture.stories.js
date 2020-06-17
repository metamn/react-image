import React from "react";
import Picture from "./Picture";
import ApiDoc from "./Picture.md";

export default {
  component: Picture,
  title: "Picture",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Picture />;

export const AspectRatioSet = () => (
  <Picture
    sources={[
      {
        media: "(min-width: 1600px)",
        srcSet:
          "https://via.placeholder.com/1600x900.png?text=1600x900, https://via.placeholder.com/3200x1800.png?text=3200x1800 (1600x900 2x)",
        aspectRatio: 900 / 1600
      },
      {
        media: "(min-width: 1024px)",
        srcSet:
          "https://via.placeholder.com/1024x768.png?text=1024x768, https://via.placeholder.com/2048x1526.png?text=2048x1526 (1024x768 2x)",
        aspectRatio: 768 / 1024
      },
      {
        media: "(min-width: 600px)",
        srcSet:
          "https://via.placeholder.com/768x1024.png?text=768x1024, https://via.placeholder.com/1526x2048.png?text=1526x2048 (768x1024 2x)",
        aspectRatio: 1024 / 768
      },
      {
        media: "(max-width: 599px)",
        srcSet:
          "https://via.placeholder.com/320x320.png?text=320x320, https://via.placeholder.com/640x640.png?text=640x640 (320x320 2x)",
        aspectRatio: 320 / 320
      }
    ]}
    url="http://metamn.io/beat/assets/images/bohen-landscape_laptop.png"
    aspectRatioBox={{ boxStyle: { backgroundColor: "red" } }}
  />
);

export const AspectRatioNotSet = () => (
  <Picture
    sources={[
      {
        media: "(min-width: 1600px)",
        srcSet:
          "https://via.placeholder.com/1600x900.png?text=1600x900, https://via.placeholder.com/3200x1800.png?text=3200x1800 (1600x900 2x)"
      },
      {
        media: "(min-width: 1024px)",
        srcSet:
          "https://via.placeholder.com/1024x768.png?text=1024x768, https://via.placeholder.com/2048x1526.png?text=2048x1526 (1024x768 2x)"
      },
      {
        media: "(min-width: 600px)",
        srcSet:
          "https://via.placeholder.com/768x1024.png?text=768x1024, https://via.placeholder.com/1526x2048.png?text=1526x2048 (768x1024 2x)"
      },
      {
        media: "(max-width: 599px)",
        srcSet:
          "https://via.placeholder.com/320x320.png?text=320x320, https://via.placeholder.com/640x640.png?text=640x640 (320x320 2x)"
      }
    ]}
    url="http://metamn.io/beat/assets/images/bohen-landscape_laptop.png"
    aspectRatioBox={{ boxStyle: { backgroundColor: "red" } }}
  />
);

export const WidthAndHeightSet = () => (
  <Picture
    sources={[
      {
        media: "(min-width: 1600px)",
        srcSet:
          "https://via.placeholder.com/1600x900.png?text=1600x900, https://via.placeholder.com/3200x1800.png?text=3200x1800 (1600x900 2x)",
        height: 900,
        width: 1600
      },
      {
        media: "(min-width: 1024px)",
        srcSet:
          "https://via.placeholder.com/1024x768.png?text=1024x768, https://via.placeholder.com/2048x1526.png?text=2048x1526 (1024x768 2x)",
        height: 768,
        width: 1024
      },
      {
        media: "(min-width: 600px)",
        srcSet:
          "https://via.placeholder.com/768x1024.png?text=768x1024, https://via.placeholder.com/1526x2048.png?text=1526x2048 (768x1024 2x)",
        height: 1024,
        width: 768
      },
      {
        media: "(max-width: 599px)",
        srcSet:
          "https://via.placeholder.com/320x320.png?text=320x320, https://via.placeholder.com/640x640.png?text=640x640 (320x320 2x)",
        height: 320,
        width: 320
      }
    ]}
    url="http://metamn.io/beat/assets/images/bohen-landscape_laptop.png"
    aspectRatioBox={{ boxStyle: { backgroundColor: "red" } }}
  />
);

export const RealPicturesAspectRatioNotSet = () => (
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
    aspectRatioBox={{ boxStyle: { backgroundColor: "red" } }}
  />
);

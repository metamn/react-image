import React from "react";
import ImageResponsive from "./ImageResponsive";
import ApiDoc from "./ImageResponsive.md";

export default {
  component: ImageResponsive,
  title: "ImageResponsive",
  parameters: { notes: ApiDoc }
};

export const Default = () => <ImageResponsive />;
export const Landscape = () => (
  <ImageResponsive
    srcSet="badass-screenshot-landscape_p9csmu/badass-screenshot-landscape_p9csmu_ar_16_9,c_fill,g_auto__c_scale,w_960.png 960w,
	badass-screenshot-landscape_p9csmu/badass-screenshot-landscape_p9csmu_ar_16_9,c_fill,g_auto__c_scale,w_1722.png 1722w,
	badass-screenshot-landscape_p9csmu/badass-screenshot-landscape_p9csmu_ar_16_9,c_fill,g_auto__c_scale,w_2388.png 2388w,
	badass-screenshot-landscape_p9csmu/badass-screenshot-landscape_p9csmu_ar_16_9,c_fill,g_auto__c_scale,w_3840.png 3840w"
    srcSetWidths={[960, 1722, 2388, 3840]}
    path="badass-screenshot-landscape.png"
    aspectRatio={9 / 16}
  />
);

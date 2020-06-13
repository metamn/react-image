import React from "react";
import Image from "./Image";
import ApiDoc from "./Image.md";

export default {
  component: Image,
  title: "Image",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Image />;
export const UrlIsNull = () => <Image url={null} />;
export const UrlIsEmpty = () => <Image url="" />;
export const UrlIsNotAnUrl = () => <Image url="not url" />;
export const PathIsNull = () => <Image path={null} />;
export const PathIsEmpty = () => <Image path="" />;
export const PathIsNotAPath = () => <Image path="not/a/filename" />;
export const PathAndUrlAreMissing = () => <Image />;

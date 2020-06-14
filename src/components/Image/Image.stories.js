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

export const FromPlaceholderCom = () => (
  <Image url="https://via.placeholder.com/728x90.png" />
);

export const FromFilesystem = () => <Image path="logo192.png" />;
export const AlwaysDisplaysACaption = () => <Image path="logo192.png" />;

export const DisplaysTheCaption = () => (
  <Image path="logo192.png" caption="Image caption" />
);

export const DoesNotOverflowTheParentContainer = () => {
  return (
    <div style={{ width: 100, height: 100, background: "blue" }}>
      <Image path="logo192.png" caption="Image caption" />
    </div>
  );
};

export const DoesNotDistortsTheImage = () => {
  return (
    <div style={{ width: 100, height: 100, background: "blue" }}>
      <Image path="logo192.png" caption="Image caption" height="150" />
    </div>
  );
};

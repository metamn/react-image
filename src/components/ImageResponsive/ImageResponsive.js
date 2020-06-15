import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Image, { ImagePropTypes, ImageDefaultProps } from "../Image";

/**
 * Defines the prop types
 */
const propTypes = {
  /**
   * The basic image props
   */
  ...ImagePropTypes,
  /**
   * A set of image sources
   */
  srcSet: PropTypes.string,
  /**
   * A set of source sizes
   */
  sizes: PropTypes.string
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...ImageDefaultProps,
  srcSet: null,
  sizes: null
};

/**
 * Displays the component
 *
 * - A responsive image is an `<Image />` with `srcSet` and `sizes` set
 * - If `aspectRatio` set the layout won't flick on any viewport
 * - If on different viewports different aspect ratios are needed then the `<Picture />` element should be used
 */
const ImageResponsive = props => {
  /**
   * Perpares safe props for `<Image />`
   * - When an image is responsive setting the `width`, `height` on `src` makes no sense
   */
  const { width, height, ...safeProps } = props;

  return <Image className={clsx("ResponsiveImage")} {...safeProps} />;
};

ImageResponsive.propTypes = propTypes;
ImageResponsive.defaultProps = defaultProps;

export default ImageResponsive;
export {
  propTypes as ImageResponsivePropTypes,
  defaultProps as ImageResponsiveDefaultProps
};

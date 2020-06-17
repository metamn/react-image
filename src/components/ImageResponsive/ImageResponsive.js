/**
 * Displays a responsive image
 * - Supports the resolution switching mechanism with `srcset` and `sizes`
 * - For art direction the `<Picture/>` component should be used
 *
 * @see https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
 */

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
 * - This is a lighweight component.
 * - A responsive image is nothing more than an `<Image />` with `srcSet` and `sizes` set
 */
const ImageResponsive = props => {
  return <Image className={clsx("ResponsiveImage")} {...props} />;
};

ImageResponsive.propTypes = propTypes;
ImageResponsive.defaultProps = defaultProps;

export default ImageResponsive;
export {
  propTypes as ImageResponsivePropTypes,
  defaultProps as ImageResponsiveDefaultProps
};

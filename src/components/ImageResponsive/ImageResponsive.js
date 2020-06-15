import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

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
  sizes: PropTypes.string,
  /**
   * The widths used in the `srcSet`.
   * They will be used cre create responsive image sizes to avoid layot shifts.
   */
  srcSetWidths: PropTypes.arrayOf(PropTypes.string)
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...ImageDefaultProps,
  srcSet: null,
  sizes: null,
  srcSetWidths: null
};

/**
 * Defines basic breakpoints
 * - These should come from the theme and should be adapted to the current site's design
 */
const breakpoints = [320, 768, 1280, 1440];

/**
 * Creates responsive widths and heights for an image.
 * - On each breakpoint the width and height will be set using CSS
 * - Otherwise the layout will shift on image load
 *
 * - Breakpoints:
 *  - An array on numbers like [320, 768, 1280, 1440]
 *  - Every theme / site design has its own breakpoints
 *
 * - ResponsiveWidths:
 *  - An array of numbers like [150, 300, 768, 1024, 1181] or [150, 200, 572]
 *  - They represent the various, responsive widths of an image
 *  - These widths usually comes from the backend. On image upload the backend cretes these responsive images
 *
 * - Returns the following widths on the following breakpoints:
 *  - [320 => 300, 768 => 768, 1280 => 1024, 1440 => 1181]
 *  - [320 => 200, 768 => 572, 1280 => 572, 1440 => 572]
 */
const createResponsiveWidths = props => {
  const { breakpoints } = props;
  let { widths } = props;

  if (!widths || !breakpoints) return null;

  widths.shift();
  const wlength = widths.length;
  const wlast = widths[wlength - 1];
  const normalizedWidths = Object.keys(breakpoints).map((breakpoint, index) =>
    index < wlength ? widths[index] : wlast
  );

  return normalizedWidths;
};

/**
 * Styles the component
 */
const useStyles = makeStyles(theme => ({
  image: props => ({
    backgroundColor: "red"
  })
}));

/**
 * Displays the component
 */
const ImageResponsive = props => {
  const { srcSetWidths } = props;
  const { image } = useStyles();

  /**
   * Creates responsive widths for the various breakpoints
   */
  const responsiveWidths = createResponsiveWidths({
    breakpoints: breakpoints,
    widths: srcSetWidths
  });

  console.log("responsiveWidths:", responsiveWidths);

  return (
    <Image
      className={clsx(image, "ResponsiveImage")}
      {...props}
      responsiveWidths={responsiveWidths}
    />
  );
};

ImageResponsive.propTypes = propTypes;
ImageResponsive.defaultProps = defaultProps;

export default ImageResponsive;
export {
  propTypes as ImageResponsivePropTypes,
  defaultProps as ImageResponsiveDefaultProps
};

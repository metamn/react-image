import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import * as yup from "yup";
import isValid from "is-valid-path";

import AspectRatioBox, {
  AspectRatioBoxPropTypes,
  AspectRatioBoxDefaultProps,
  isAspectRatioDefined
} from "../AspectRatioBox";

/**
 * Defines the prop types
 *
 * @see https://schema.org/image for naming props
 */
const propTypes = {
  /**
   * The URL of the image
   * - Use when the image is served from an URL
   * - Either `url` or `path` has to be set
   */
  url: PropTypes.string,
  /**
   * The path to the image
   * - use when the image is served from the filesystem
   * - Either `url` or `path` has to be set
   */
  path: PropTypes.string,
  /**
   * The image title
   */
  caption: PropTypes.string,
  /**
   * The image dimensions
   */
  width: PropTypes.number,
  height: PropTypes.number,
  /**
   * The image's aspect ratio
   */
  ...AspectRatioBoxPropTypes
};

/**
 * Defines the default props
 */
const defaultProps = {
  url: null,
  path: null,
  caption: null,
  width: null,
  height: null,
  ...AspectRatioBoxDefaultProps
};

/**
 * Defines validation schema for the URL
 */
const schema = yup.object().shape({
  url: yup.string().url()
});

/**
 * Styles the component
 */
const useStyles = makeStyles(theme => ({
  image: {
    /**
     * Do not overflow the parent container
     * @see https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/
     */
    maxWidth: "100%",
    /**
     * Do not distort the image
     * - This introduces layout shifts even when `width` and `height` is set.
     * - Therefore the aspect ratio workaround has to be used all the time.
     * @see https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/
     */
    height: "auto"
  }
}));

/**
 * Displays the component
 */
const Image = props => {
  const {
    url,
    path,
    caption,
    width,
    height,
    aspectRatio,
    responsiveAspectRatios,
    boxStyle,
    childrenStyle,
    ...responsiveProps
  } = props;

  const { image } = useStyles(props);

  /**
   * Checks the source of the image.
   * - Either `url` or `path` should be used to define the source
   */
  const src = url ? url : path ? path : null;

  /**
   * Returns early on an empty or invalid URL or path
   */
  if (!src) return null;
  if (src === url && !schema.isValidSync(props)) return null;
  if (src === path && !isValid(path)) return null;

  /**
   * Creates a default caption, if the caption is missing
   */
  const nonEmptyCaption = caption ? caption : "Image";

  /**
   * Displays the image
   */
  const img = (
    <img
      className={clsx(image, "Image")}
      src={src}
      alt={nonEmptyCaption}
      width={width}
      height={height}
      {...responsiveProps}
    />
  );

  /**
   * Wraps the image into an aspect ratio container
   */
  const imgWithAspectRatioContainer = (
    <AspectRatioBox {...props}>{img}</AspectRatioBox>
  );

  /**
   * Returns either a simple image or one wrapped into an aspect ratio container
   */
  return isAspectRatioDefined(props) ? imgWithAspectRatioContainer : img;
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
export { propTypes as ImagePropTypes, defaultProps as ImageDefaultProps };

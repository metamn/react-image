import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import * as yup from "yup";
import isValid from "is-valid-path";

/**
 * Defines the prop types
 *
 * @see https://schema.org/image for naming props
 */
const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
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
  caption: PropTypes.string,
  /**
   * The image's aspect ratio
   * - formula: height / width
   * @see https://css-tricks.com/aspect-ratio-boxes/#the-math-of-any-possible-aspect-ratio
   */
  aspectRatio: PropTypes.number
};

/**
 * Defines the default props
 */
const defaultProps = {
  width: null,
  height: null,
  url: null,
  path: null,
  caption: null,
  aspectRatio: null
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
  /**
   * Aspect ratio boxes
   * @see https://css-tricks.com/aspect-ratio-boxes/
   */
  container: props => ({
    width: props.width
  }),

  aspectRatioBox: props => ({
    position: "relative",
    height: 0,
    overflow: "hidden",
    paddingTop: `calc(${props.aspectRatio} * 100%)`
  }),

  aspectRatioBoxInside: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  },

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
  const { url, path, caption, width, height, aspectRatio } = props;
  const { container, aspectRatioBox, aspectRatioBoxInside, image } = useStyles(
    props
  );

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
   * Transforms width and height into pixels
   */
  const w = width ? `${width}px` : null;
  const h = height ? `${height}px` : null;

  /**
   * Defines an explicit aspect ratio
   *
   * - We always need an aspect ratio container due to the layout shift introduced by `height: auto`
   * - In other words specifying an aspect ratio is more important than specifying the image dimension
   *
   * - When the image dimension is not set we can still provide the `aspectRatio` to manage the layout shift
   * - When the image dimension is set we can automatically calculate the aspect ratio
   * - When the image dimension is set we can still override the calculated aspect ratio with a provided `aspectRatio` prop
   */
  const derivedAspectRatio = aspectRatio
    ? aspectRatio
    : width && height
    ? height / width
    : null;

  /**
   * Displays the image
   */
  const img = (
    <img
      className={clsx(image, "Image")}
      src={src}
      alt={nonEmptyCaption}
      width={w}
      height={h}
    />
  );

  /**
   * Wraps the image into an aspect ratio container
   */
  const imgWithAspectRatioContainer = (
    <div className={clsx(container, "ImageContainer")}>
      <div className={clsx(aspectRatioBox, "AspectRatioBox")}>
        <div className={clsx(aspectRatioBoxInside, "AspectRatioBoxInside")}>
          {img}
        </div>
      </div>
    </div>
  );

  return derivedAspectRatio ? imgWithAspectRatioContainer : img;
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
export { propTypes as ImagePropTypes, defaultProps as ImageDefaultProps };

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
   * Aspect ratio aspectRatioBoxes
   * @see https://css-tricks.com/aspect-ratio-aspectRatioBoxes/
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

  const w = width ? `${width}px` : `auto`;
  const h = height ? `${height}px` : `auto`;

  const img = (
    <img
      className={clsx(image, "Image")}
      src={src}
      alt={caption}
      width={w}
      height={h}
    />
  );

  return aspectRatio ? (
    <div className={clsx(container, "ImageContainer")}>
      <div className={clsx(aspectRatioBox, "AspectRatioBox")}>
        <div className={clsx(aspectRatioBoxInside, "AspectRatioBoxInside")}>
          {img}
        </div>
      </div>
    </div>
  ) : (
    img
  );
};

Image.propTypes = propTypes;
Image.defaultProps = defaultProps;

export default Image;
export { propTypes as ImagePropTypes, defaultProps as ImageDefaultProps };

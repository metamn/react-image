import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

/**
 * Defines the prop types
 */
const propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  url: PropTypes.string,
  alt: PropTypes.string,
  /**
   * The image's aspect ratio
   * - formula: height / width
   * @see https://css-tricks.com/aspect-ratio-boxes/#the-math-of-any-possible-aspect-ratio
   */
  ratio: PropTypes.number
};

/**
 * Defines the default props
 */
const defaultProps = {
  width: 320,
  height: 180,
  url: "https://via.placeholder.com/320x180",
  alt: "Placeholder image (320x180)",
  ratio: 180 / 320
};

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
    paddingTop: `calc(${props.ratio} * 100%)`
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
  const { url, alt, width, height, ratio } = props;
  const { container, aspectRatioBox, aspectRatioBoxInside, image } = useStyles(
    props
  );

  const w = width ? `${width}px` : `auto`;
  const h = height ? `${height}px` : `auto`;

  const img = (
    <img
      className={clsx(image, "Image")}
      src={url}
      alt={alt}
      width={w}
      height={h}
    />
  );

  return ratio ? (
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

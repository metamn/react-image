/**
 * Creates a fixed aspect ratio box / container via the padding-bottom hack
 *
 * @see https://css-tricks.com/aspect-ratio-boxes/
 * @see https://www.smashingmagazine.com/2020/03/setting-height-width-images-important-again/
 */
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
  /**
   * The image's aspect ratio
   * - formula: height / width
   * @see https://css-tricks.com/aspect-ratio-boxes/#the-math-of-any-possible-aspect-ratio
   */
  aspectRatio: PropTypes.number,
  children: PropTypes.any
};

/**
 * Defines the default props
 */
const defaultProps = {
  width: null,
  height: null,
  aspectRatio: null,
  children: null
};

/**
 * Styles the component
 */
const useStyles = makeStyles(theme => ({
  container: props => ({
    /**
     * The aspect ratio box tends to grow as wide as possible (the screen width, or parent container's width)
     * This resizes the box to fit it's image size
     */
    width: `${props.width}px`,
    height: `${props.height}px`,
    backgroundColor: "red"
  }),

  box: props => ({
    position: "relative",
    height: 0,
    overflow: "hidden",
    paddingBottom: `calc(${props.derivedAspectRatio} * 100%)`
  }),

  boxInside: {
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
const AspectRatioBox = props => {
  const { width, height, aspectRatio, children } = props;

  /**
   * Defines an explicit aspect ratio
   * - When `aspectRatio` is missing it is calculated from `width` and `height`
   */
  const derivedAspectRatio = aspectRatio
    ? aspectRatio
    : width && height
    ? height / width
    : null;

  /**
   * When both `aspectRatio`, `width` and `height` is set `width` has to be modified
   *
   * // NOTE: This can truncate the box content sometimes. A deeper analysis is needed.
   */
  const derivedDimensions =
    aspectRatio && width && height
      ? { width: width / aspectRatio, height: height }
      : { width: width, height: height };

  /**
   * Applies the styles based on the above calculations
   */
  const { container, box, boxInside } = useStyles({
    ...derivedDimensions,
    derivedAspectRatio: derivedAspectRatio
  });

  // NOTE: When there is no dimensions and aspect ratio set the layout will shift. We can come up with a responsive mechanism to calculate an aspect ratio based on screen size. For example on portrait screens a 16:9, or a 4:3 on landscape. The idea is to make the image small, no to take the entire screen estate.

  return (
    <div className={clsx(container, "AspectRatioContainer")}>
      <div className={clsx(box, "AspectRatioBox")}>
        <div className={clsx(boxInside, "AspectRatioBoxInside")}>
          {children}
        </div>
      </div>
    </div>
  );
};

AspectRatioBox.propTypes = propTypes;
AspectRatioBox.defaultProps = defaultProps;

export default AspectRatioBox;
export {
  propTypes as AspectRatioBoxPropTypes,
  defaultProps as AspectRatioBoxDefaultProps
};

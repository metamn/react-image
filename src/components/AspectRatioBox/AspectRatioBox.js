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
  /**
   * The aspect ratio
   * - Formula: height / width
   * @see https://css-tricks.com/aspect-ratio-boxes/#the-math-of-any-possible-aspect-ratio
   */
  aspectRatio: PropTypes.number,
  /**
   * Responsive aspect ratios
   * - The aspect ratio sometimes differs from breakpoint to breakpoint.
   * - An example is the `<picture>` element with art-directed images
   */
  responsiveAspectRatios: PropTypes.arrayOf(PropTypes.object),
  /**
   * Box dimensions
   * - The aspect ratio can be calculated with the height / width formula, in case it is not set
   */
  width: PropTypes.number,
  height: PropTypes.number,
  /**
   * The content of the aspect ratio box
   */
  children: PropTypes.any
};

/**
 * Defines the default props
 */
const defaultProps = {
  aspectRatio: null,
  responsiveAspectRatios: null,
  width: null,
  height: null,
  children: null
};

/**
 * Styles the component
 */
const useStyles = makeStyles(theme => ({
  container: props => ({
    /**
     * The aspect ratio box tends to grow as wide as possible (the screen width, or parent container's width)
     * This resizes the box to fit it's children size
     */
    width: `${props.width}px`,
    height: `${props.height}px`,
    backgroundColor: "red"
  }),

  box: props => ({
    position: "relative",
    height: 0,
    overflow: "hidden",
    paddingBottom: `calc(${props.derivedAspectRatio} * 100%)`,
    ...props.responsiveAspectRatios
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
 * Checks if the aspect ratio is defined
 */
const isAspectRatioDefined = props => {
  const { aspectRatio, responsiveAspectRatios, width, height } = props;
  return aspectRatio || responsiveAspectRatios || (width && height);
};

/**
 * Calculates the aspect ratio
 * - When `aspectRatio` is missing it can be calculated from `width` and `height`
 */
const calculateAspectRatio = props => {
  const { aspectRatio, width, height } = props;
  return aspectRatio ? aspectRatio : width && height ? height / width : null;
};

/**
 * Displays the component
 *
 * // NOTE: When there is no dimensions and aspect ratio set the layout will shift. We can come up with a responsive mechanism to calculate an aspect ratio based on screen size. For example on portrait screens a 16:9, or a 4:3 on landscape. The idea is to make the image small, no to take the entire screen estate.
 */
const AspectRatioBox = props => {
  const {
    aspectRatio,
    responsiveAspectRatios,
    width,
    height,
    children
  } = props;

  /**
   * When both `aspectRatio`, `width` and `height` is set `width` and/or `height` has to be modified to fit the box
   *
   * // NOTE: This can truncate the box content sometimes. A deeper analysis is needed.
   */
  const derivedDimensions =
    aspectRatio && width && height
      ? { width: width / aspectRatio, height: height }
      : { width: width, height: height };

  /**
   * Creates the styles based on the above calculations
   */
  const { container, box, boxInside } = useStyles({
    ...derivedDimensions,
    derivedAspectRatio: calculateAspectRatio(props),
    responsiveAspectRatios: responsiveAspectRatios
  });

  /**
   * Returns early on incomplete props
   */
  if (!children) return null;
  if (!isAspectRatioDefined(props)) return null;

  return (
    <div className={clsx(container, "AspectRatioContainer")} role="img">
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
  defaultProps as AspectRatioBoxDefaultProps,
  isAspectRatioDefined,
  calculateAspectRatio
};

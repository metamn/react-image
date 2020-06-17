/**
 * Displays a responsive image with art direction
 * - Supports the `<source>` mechanism
 * - For resolution switching (`<srcset>`, `<sizes>`) use <ResponsiveImage/>
 *
 * @see https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images
 */
import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Image, { ImagePropTypes, ImageDefaultProps } from "../Image";
import AspectRatioBox, {
  AspectRatioBoxPropTypes,
  calculateAspectRatio
} from "../AspectRatioBox";

/**
 * Defines the prop types
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture
 */
const propTypes = {
  /**
   * The basic image props
   */
  ...ImagePropTypes,
  /**
   * The art-directed image props
   */
  sources: PropTypes.arrayOf(
    PropTypes.shape({
      /**
       * Standard props
       */
      srcSet: PropTypes.string,
      media: PropTypes.string,
      type: PropTypes.string,
      /**
       * Additional props to solve the layout shift problem
       * - Either `width` and `height`, or `aspectRatio` should be defined.
       * - Preferably `aspectRatio`
       */
      ...AspectRatioBoxPropTypes
    })
  ),
  /**
   * Additional styling for the Aspect Ratio Box
   */
  aspectRatioBox: PropTypes.shape(AspectRatioBoxPropTypes)
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...ImageDefaultProps,
  sources: null,
  aspectRatioBox: null
};

/**
 * Displays the component
 */
const Picture = props => {
  /**
   * Perpares safe props for `<Image />`
   * - When an image is art-directed setting the `width`, `height` on `src` makes no sense. On different viewports different dimenions will apply.
   * - Also `sources`, `aspectRatioBox` etc should be removed
   */
  const { width, height, sources, aspectRatioBox, ...safeProps } = props;

  /**
   * Creates `<source>` entries.
   * - Tranforms the `sourceList` array into a series of `<source>` props
   */
  const sourceList =
    sources &&
    sources.map(item => {
      const { srcSet, media, type } = item;

      return (
        <source
          srcset={srcSet ? srcSet : null}
          media={media ? media : null}
          type={type ? type : null}
        />
      );
    });

  /**
   * Collects responsive aspect ratios for every `<source>`
   * - On different viewports differently sized images are displayed (aka art direction)
   * - Each image will be (preferably) displayed with the help of a custom aspect ratio box
   * - An aspect ratio box sets the aspect ration with the padding-bottom hack
   * - Here we create all padding-bottom hacks for all viewports and image sizes
   *
   * // NOTE: Do we need responsive widths and heights?
   */
  const responsiveAspectRatios =
    sources &&
    sources.reduce((acc, item) => {
      const { media } = item;
      const derivedAspectRatio = calculateAspectRatio(item);

      return (
        media &&
        derivedAspectRatio && {
          ...acc,
          [`@media ${media}`]: {
            paddingBottom: `calc(${derivedAspectRatio} * 100%)`
          }
        }
      );
    }, null);

  /**
   * Displays the picture
   */
  const picture = (
    <picture className={clsx("Picture")}>
      {sourceList}
      <Image {...safeProps} />
    </picture>
  );

  /**
   * Wraps the picture inside a responsive aspect ratio container
   */
  const pictureWithAspectRatioContainer = (
    <AspectRatioBox
      {...aspectRatioBox}
      responsiveAspectRatios={responsiveAspectRatios}
    >
      {picture}
    </AspectRatioBox>
  );

  /**
   * Returns either a simple picture or one wrapped into an aspect ratio container
   */
  return responsiveAspectRatios ? pictureWithAspectRatioContainer : picture;
};

Picture.propTypes = propTypes;
Picture.defaultProps = defaultProps;

export default Picture;
export { propTypes as PicturePropTypes, defaultProps as PictureDefaultProps };

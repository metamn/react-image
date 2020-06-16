import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import Image, { ImagePropTypes, ImageDefaultProps } from "../Image";

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
   * The art-directed images
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
      width: PropTypes.number,
      height: PropTypes.number,
      aspectRatio: PropTypes.number
    })
  )
};

/**
 * Defines the default props
 */
const defaultProps = {
  ...ImageDefaultProps,
  sources: null
};

/**
 * Displays the component
 */
const Picture = props => {
  /**
   * Perpares safe props for `<Image />`
   * - When an image is responsive setting the `width`, `height` on `src` makes no sense
   * - Also `sources` should be removed
   */
  const { width, height, sources, ...safeProps } = props;

  /**
   * Creates `<source>` entries
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

  return (
    <picture className={clsx("ResponsiveImage")}>
      {sourceList}
      <Image {...safeProps} />
    </picture>
  );
};

Picture.propTypes = propTypes;
Picture.defaultProps = defaultProps;

export default Picture;
export { propTypes as PicturePropTypes, defaultProps as PictureDefaultProps };
